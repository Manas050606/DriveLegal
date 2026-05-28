from app.config.settings import Settings

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


class FraudDetectionService:
    """
    Centralized Fraud Detection Service
    Handles all fraud analysis business logic.
    """

    def __init__(self):

        self.blur_detector = BlurDetector(
            threshold=Settings.BLUR_THRESHOLD
        )

        self.anomaly_detector = (
            AnomalyDetector()
        )

        self.tampering_detector = (
            TamperingDetector()
        )

        self.stamp_detector = (
            FakeStampDetector()
        )

    # =========================================
    # BLUR ANALYSIS
    # =========================================

    def analyze_blur(
        self,
        image_path
    ):

        try:

            result = (
                self.blur_detector.detect_blur(
                    image_path
                )
            )

            return {

                "success": True,

                "analysis": result
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # ANOMALY ANALYSIS
    # =========================================

    def analyze_anomalies(
        self,
        image_path
    ):

        try:

            result = (
                self.anomaly_detector.detect_tampering(
                    image_path
                )
            )

            return {

                "success": True,

                "analysis": result
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # TAMPERING ANALYSIS
    # =========================================

    def analyze_tampering(
        self,
        image_path
    ):

        try:

            result = (
                self.tampering_detector.analyze_image(
                    image_path
                )
            )

            return {

                "success": True,

                "analysis": result
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # STAMP VALIDATION
    # =========================================

    def analyze_stamp(
        self,
        image_path
    ):

        try:

            result = (
                self.stamp_detector.analyze_document(
                    image_path
                )
            )

            return {

                "success": True,

                "analysis": result
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # FRAUD SCORE CALCULATION
    # =========================================

    def calculate_fraud_score(
        self,
        blur_result,
        anomaly_result,
        tampering_result,
        stamp_result
    ):

        fraud_score = 0

        fraud_reasons = []

        # Blur analysis
        if blur_result["is_blurry"]:

            fraud_score += 0.25

            fraud_reasons.append(
                "Blurry image detected"
            )

        # Anomaly analysis
        if anomaly_result["is_suspicious"]:

            fraud_score += 0.35

            fraud_reasons.append(
                "Image anomaly detected"
            )

        # Tampering analysis
        if tampering_result["is_tampered"]:

            fraud_score += 0.30

            fraud_reasons.append(
                "Possible tampering found"
            )

        # Stamp validation
        if stamp_result["total_stamps"] == 0:

            fraud_score += 0.10

            fraud_reasons.append(
                "Official stamp missing"
            )

        fraud_score = min(
            fraud_score,
            1.0
        )

        fraud_status = (
            "Fraud"
            if fraud_score >=
            Settings.TAMPERING_THRESHOLD
            else "Clear"
        )

        return {

            "fraud_score":
                round(fraud_score, 2),

            "fraud_status":
                fraud_status,

            "fraud_reasons":
                fraud_reasons
        }

    # =========================================
    # COMPLETE FRAUD ANALYSIS
    # =========================================

    def complete_fraud_analysis(
        self,
        image_path
    ):

        try:

            # =================================
            # BLUR DETECTION
            # =================================

            blur_analysis = (
                self.blur_detector.detect_blur(
                    image_path
                )
            )

            # =================================
            # ANOMALY DETECTION
            # =================================

            anomaly_analysis = (
                self.anomaly_detector.detect_tampering(
                    image_path
                )
            )

            # =================================
            # TAMPERING DETECTION
            # =================================

            tampering_analysis = (
                self.tampering_detector.analyze_image(
                    image_path
                )
            )

            # =================================
            # STAMP DETECTION
            # =================================

            stamp_analysis = (
                self.stamp_detector.analyze_document(
                    image_path
                )
            )

            # =================================
            # FINAL FRAUD SCORE
            # =================================

            fraud_analysis = (
                self.calculate_fraud_score(
                    blur_analysis,
                    anomaly_analysis,
                    tampering_analysis,
                    stamp_analysis
                )
            )

            return {

                "success": True,

                "fraud_analysis":
                    fraud_analysis,

                "blur_analysis":
                    blur_analysis,

                "anomaly_analysis":
                    anomaly_analysis,

                "tampering_analysis":
                    tampering_analysis,

                "stamp_analysis":
                    stamp_analysis
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # FRAUD VALIDATION
    # =========================================

    def is_document_fraudulent(
        self,
        fraud_score
    ):

        return (
            fraud_score >=
            Settings.TAMPERING_THRESHOLD
        )


# =========================================
# GLOBAL SERVICE INSTANCE
# =========================================

fraud_detection_service = (
    FraudDetectionService()
)