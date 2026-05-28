from datetime import datetime

from app.database.mongodb_connection import (
    mongodb_helper
)

from app.database.schemas import (
    verification_schema,
    fraud_report_schema
)


class VerificationModel:
    """
    Verification Database Operations
    """

    VERIFICATION_COLLECTION = "verifications"

    FRAUD_COLLECTION = "fraud_reports"

    # =========================================
    # CREATE VERIFICATION RECORD
    # =========================================

    @staticmethod
    def create_verification(
        user_id,
        plate_number,
        verification_result,
        confidence_score
    ):

        verification_data = (
            verification_schema(
                user_id=user_id,
                plate_number=plate_number,
                verification_result=verification_result,
                confidence_score=confidence_score
            )
        )

        inserted_id = (
            mongodb_helper.insert_one(
                VerificationModel.VERIFICATION_COLLECTION,
                verification_data
            )
        )

        return {
            "success": True,
            "message": "Verification completed",
            "verification_id": inserted_id
        }

    # =========================================
    # GET VERIFICATION BY ID
    # =========================================

    @staticmethod
    def get_verification_by_id(
        verification_id
    ):

        verification = (
            mongodb_helper.find_by_id(
                VerificationModel.VERIFICATION_COLLECTION,
                verification_id
            )
        )

        return verification

    # =========================================
    # GET USER VERIFICATIONS
    # =========================================

    @staticmethod
    def get_user_verifications(
        user_id
    ):

        verifications = (
            mongodb_helper.find_many(
                VerificationModel.VERIFICATION_COLLECTION,
                {"user_id": user_id}
            )
        )

        return verifications

    # =========================================
    # GET ALL VERIFICATIONS
    # =========================================

    @staticmethod
    def get_all_verifications():

        verifications = (
            mongodb_helper.find_many(
                VerificationModel.VERIFICATION_COLLECTION
            )
        )

        return verifications

    # =========================================
    # CREATE FRAUD REPORT
    # =========================================

    @staticmethod
    def create_fraud_report(
        user_id,
        filename,
        fraud_type,
        fraud_score,
        status="Suspicious"
    ):

        fraud_data = fraud_report_schema(
            user_id=user_id,
            filename=filename,
            fraud_type=fraud_type,
            fraud_score=fraud_score,
            status=status
        )

        inserted_id = (
            mongodb_helper.insert_one(
                VerificationModel.FRAUD_COLLECTION,
                fraud_data
            )
        )

        return {
            "success": True,
            "message": "Fraud report created",
            "fraud_report_id": inserted_id
        }

    # =========================================
    # GET ALL FRAUD REPORTS
    # =========================================

    @staticmethod
    def get_all_fraud_reports():

        reports = mongodb_helper.find_many(
            VerificationModel.FRAUD_COLLECTION
        )

        return reports

    # =========================================
    # GET USER FRAUD REPORTS
    # =========================================

    @staticmethod
    def get_user_fraud_reports(
        user_id
    ):

        reports = mongodb_helper.find_many(
            VerificationModel.FRAUD_COLLECTION,
            {"user_id": user_id}
        )

        return reports

    # =========================================
    # UPDATE VERIFICATION RESULT
    # =========================================

    @staticmethod
    def update_verification_result(
        verification_id,
        verification_result
    ):

        update_data = {
            "verification_result":
                verification_result,

            "updated_at":
                datetime.utcnow()
        }

        updated_count = (
            mongodb_helper.update_one(
                VerificationModel.VERIFICATION_COLLECTION,
                {"_id": verification_id},
                update_data
            )
        )

        return updated_count > 0

    # =========================================
    # DELETE VERIFICATION
    # =========================================

    @staticmethod
    def delete_verification(
        verification_id
    ):

        deleted_count = (
            mongodb_helper.delete_one(
                VerificationModel.VERIFICATION_COLLECTION,
                {"_id": verification_id}
            )
        )

        return deleted_count > 0

    # =========================================
    # COUNT VERIFICATIONS
    # =========================================

    @staticmethod
    def count_verifications():

        total = (
            mongodb_helper.count_documents(
                VerificationModel.VERIFICATION_COLLECTION
            )
        )

        return total

    # =========================================
    # COUNT FRAUD REPORTS
    # =========================================

    @staticmethod
    def count_fraud_reports():

        total = (
            mongodb_helper.count_documents(
                VerificationModel.FRAUD_COLLECTION
            )
        )

        return total

    # =========================================
    # GET VERIFIED RECORDS
    # =========================================

    @staticmethod
    def get_verified_records():

        verified = (
            mongodb_helper.find_many(
                VerificationModel.VERIFICATION_COLLECTION,
                {"verification_result": "Verified"}
            )
        )

        return verified

    # =========================================
    # GET FAILED RECORDS
    # =========================================

    @staticmethod
    def get_failed_records():

        failed = (
            mongodb_helper.find_many(
                VerificationModel.VERIFICATION_COLLECTION,
                {"verification_result": "Failed"}
            )
        )

        return failed