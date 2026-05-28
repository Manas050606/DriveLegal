from flask import Blueprint
from flask import jsonify
from flask import request

from app.models.verification_model import (
    VerificationModel
)

from app.models.document_model import (
    DocumentModel
)

from backend.ai_engine.forgery_detection.blur_detection import (
    BlurDetector
)

from backend.ai_engine.forgery_detection.anomaly_detector import (
    AnomalyDetector
)

from backend.ai_engine.forgery_detection.tampering_detection import (
    TamperingDetector
)

from backend.ai_engine.forgery_detection.fake_stamp_detection import (
    FakeStampDetector
)


# =========================================
# BLUEPRINT
# =========================================

verification_bp = Blueprint(
    "verification_bp",
    __name__
)


# =========================================
# AI MODULES
# =========================================

blur_detector = BlurDetector()

anomaly_detector = AnomalyDetector()

tampering_detector = TamperingDetector()

stamp_detector = FakeStampDetector()


# =========================================
# VERIFY DOCUMENT ROUTE
# =========================================

@verification_bp.route(
    "/verify-document",
    methods=["POST"]
)
def verify_document():

    try:

        data = request.get_json()

        document_id = data.get(
            "document_id"
        )

        if not document_id:

            return jsonify({
                "success": False,
                "message": "Document ID required"
            }), 400

        # =====================================
        # GET DOCUMENT
        # =====================================

        document = (
            DocumentModel.get_document_by_id(
                document_id
            )
        )

        if not document:

            return jsonify({
                "success": False,
                "message": "Document not found"
            }), 404

        file_path = document["file_path"]

        # =====================================
        # RUN FRAUD ANALYSIS
        # =====================================

        blur_result = (
            blur_detector.detect_blur(
                file_path
            )
        )

        anomaly_result = (
            anomaly_detector.detect_tampering(
                file_path
            )
        )

        tampering_result = (
            tampering_detector.analyze_image(
                file_path
            )
        )

        stamp_result = (
            stamp_detector.analyze_document(
                file_path
            )
        )

        # =====================================
        # DETERMINE FINAL STATUS
        # =====================================

        fraud_detected = False

        fraud_score = 0

        fraud_reasons = []

        # Blur analysis
        if blur_result["is_blurry"]:

            fraud_detected = True

            fraud_score += 0.25

            fraud_reasons.append(
                "Blurry document detected"
            )

        # Anomaly analysis
        if anomaly_result["is_suspicious"]:

            fraud_detected = True

            fraud_score += 0.35

            fraud_reasons.append(
                "Image anomaly detected"
            )

        # Tampering analysis
        if tampering_result["is_tampered"]:

            fraud_detected = True

            fraud_score += 0.30

            fraud_reasons.append(
                "Possible tampering detected"
            )

        # Stamp analysis
        if stamp_result["total_stamps"] == 0:

            fraud_detected = True

            fraud_score += 0.10

            fraud_reasons.append(
                "No valid stamp found"
            )

        fraud_score = min(
            fraud_score,
            1.0
        )

        verification_status = (
            "Failed"
            if fraud_detected
            else "Verified"
        )

        # =====================================
        # UPDATE DOCUMENT STATUS
        # =====================================

        DocumentModel.update_verification_status(
            document_id,
            verification_status
        )

        DocumentModel.update_fraud_status(
            document_id,
            "Fraud"
            if fraud_detected
            else "Clear"
        )

        # =====================================
        # CREATE VERIFICATION RECORD
        # =====================================

        verification_response = (
            VerificationModel.create_verification(
                user_id=document["user_id"],

                plate_number=document[
                    "plate_number"
                ],

                verification_result=
                    verification_status,

                confidence_score=
                    round(1 - fraud_score, 2)
            )
        )

        # =====================================
        # CREATE FRAUD REPORT
        # =====================================

        if fraud_detected:

            VerificationModel.create_fraud_report(
                user_id=document["user_id"],

                filename=document["filename"],

                fraud_type=", ".join(
                    fraud_reasons
                ),

                fraud_score=round(
                    fraud_score,
                    2
                ),

                status="Suspicious"
            )

        # =====================================
        # RESPONSE
        # =====================================

        return jsonify({

            "success": True,

            "document_id":
                document_id,

            "verification_status":
                verification_status,

            "fraud_detected":
                fraud_detected,

            "fraud_score":
                round(fraud_score, 2),

            "fraud_reasons":
                fraud_reasons,

            "blur_analysis":
                blur_result,

            "anomaly_analysis":
                anomaly_result,

            "tampering_analysis":
                tampering_result,

            "stamp_analysis":
                stamp_result,

            "verification_record":
                verification_response

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500


# =========================================
# GET VERIFICATION HISTORY
# =========================================

@verification_bp.route(
    "/verification-history",
    methods=["GET"]
)
def get_verification_history():

    try:

        verifications = (
            VerificationModel.get_all_verifications()
        )

        return jsonify({

            "success": True,

            "total_records":
                len(verifications),

            "verifications":
                verifications

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500


# =========================================
# GET FRAUD REPORTS
# =========================================

@verification_bp.route(
    "/fraud-reports",
    methods=["GET"]
)
def get_fraud_reports():

    try:

        reports = (
            VerificationModel.get_all_fraud_reports()
        )

        return jsonify({

            "success": True,

            "total_reports":
                len(reports),

            "reports":
                reports

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500


# =========================================
# GET VERIFIED DOCUMENTS
# =========================================

@verification_bp.route(
    "/verified-documents",
    methods=["GET"]
)
def get_verified_documents():

    try:

        verified_documents = (
            DocumentModel.get_verified_documents()
        )

        return jsonify({

            "success": True,

            "total_verified":
                len(verified_documents),

            "documents":
                verified_documents

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500