from flask import Blueprint
from flask import jsonify
from flask import request

from app.models.document_model import (
    DocumentModel
)

from app.models.verification_model import (
    VerificationModel
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

fraud_bp = Blueprint(
    "fraud_bp",
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
# CALCULATE FRAUD SCORE
# =========================================

def calculate_fraud_score(
    blur_result,
    anomaly_result,
    tampering_result,
    stamp_result
):

    fraud_score = 0

    fraud_reasons = []

    # Blur detection
    if blur_result["is_blurry"]:

        fraud_score += 0.25

        fraud_reasons.append(
            "Blurry image detected"
        )

    # Anomaly detection
    if anomaly_result["is_suspicious"]:

        fraud_score += 0.35

        fraud_reasons.append(
            "Image anomaly detected"
        )

    # Tampering detection
    if tampering_result["is_tampered"]:

        fraud_score += 0.30

        fraud_reasons.append(
            "Possible tampering found"
        )

    # Stamp validation
    if stamp_result["total_stamps"] == 0:

        fraud_score += 0.10

        fraud_reasons.append(
            "Missing official stamp"
        )

    fraud_score = min(
        fraud_score,
        1.0
    )

    fraud_status = (
        "Fraud"
        if fraud_score >= 0.50
        else "Clear"
    )

    return {
        "fraud_score": round(fraud_score, 2),
        "fraud_status": fraud_status,
        "fraud_reasons": fraud_reasons
    }


# =========================================
# ANALYZE FRAUD ROUTE
# =========================================

@fraud_bp.route(
    "/analyze-fraud",
    methods=["POST"]
)
def analyze_fraud():

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
        # RUN AI ANALYSIS
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
        # FINAL FRAUD ANALYSIS
        # =====================================

        fraud_analysis = (
            calculate_fraud_score(
                blur_result,
                anomaly_result,
                tampering_result,
                stamp_result
            )
        )

        # =====================================
        # UPDATE DOCUMENT STATUS
        # =====================================

        DocumentModel.update_fraud_status(
            document_id,
            fraud_analysis["fraud_status"]
        )

        # =====================================
        # CREATE FRAUD REPORT
        # =====================================

        if fraud_analysis["fraud_status"] == "Fraud":

            VerificationModel.create_fraud_report(

                user_id=document["user_id"],

                filename=document["filename"],

                fraud_type=", ".join(
                    fraud_analysis[
                        "fraud_reasons"
                    ]
                ),

                fraud_score=fraud_analysis[
                    "fraud_score"
                ],

                status="Suspicious"
            )

        # =====================================
        # RESPONSE
        # =====================================

        return jsonify({

            "success": True,

            "document_id":
                document_id,

            "fraud_status":
                fraud_analysis[
                    "fraud_status"
                ],

            "fraud_score":
                fraud_analysis[
                    "fraud_score"
                ],

            "fraud_reasons":
                fraud_analysis[
                    "fraud_reasons"
                ],

            "blur_analysis":
                blur_result,

            "anomaly_analysis":
                anomaly_result,

            "tampering_analysis":
                tampering_result,

            "stamp_analysis":
                stamp_result

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500


# =========================================
# GET FRAUD ANALYTICS
# =========================================

@fraud_bp.route(
    "/fraud-analytics",
    methods=["GET"]
)
def fraud_analytics():

    try:

        total_documents = (
            DocumentModel.count_documents()
        )

        fraud_documents = (
            DocumentModel.get_fraud_documents()
        )

        total_fraud = len(
            fraud_documents
        )

        fraud_percentage = 0

        if total_documents > 0:

            fraud_percentage = round(
                (
                    total_fraud /
                    total_documents
                ) * 100,
                2
            )

        analytics = {

            "total_documents":
                total_documents,

            "fraud_detected":
                total_fraud,

            "clear_documents":
                total_documents - total_fraud,

            "fraud_percentage":
                fraud_percentage
        }

        return jsonify({

            "success": True,

            "analytics": analytics

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500


# =========================================
# GET FRAUD DOCUMENTS
# =========================================

@fraud_bp.route(
    "/fraud-documents",
    methods=["GET"]
)
def get_fraud_documents():

    try:

        fraud_documents = (
            DocumentModel.get_fraud_documents()
        )

        return jsonify({

            "success": True,

            "total_fraud_documents":
                len(fraud_documents),

            "documents":
                fraud_documents

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500


# =========================================
# GET FRAUD REPORTS
# =========================================

@fraud_bp.route(
    "/fraud-history",
    methods=["GET"]
)
def get_fraud_history():

    try:

        fraud_reports = (
            VerificationModel.get_all_fraud_reports()
        )

        return jsonify({

            "success": True,

            "total_reports":
                len(fraud_reports),

            "reports":
                fraud_reports

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500