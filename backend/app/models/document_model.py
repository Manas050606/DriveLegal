from datetime import datetime

from app.database.mongodb_connection import (
    mongodb_helper
)

from app.database.schemas import (
    document_schema
)


class DocumentModel:
    """
    Document Database Operations
    """

    COLLECTION_NAME = "documents"

    # =========================================
    # CREATE DOCUMENT
    # =========================================

    @staticmethod
    def create_document(
        user_id,
        filename,
        document_type,
        file_path
    ):

        document_data = document_schema(
            user_id=user_id,
            filename=filename,
            document_type=document_type,
            file_path=file_path
        )

        inserted_id = (
            mongodb_helper.insert_one(
                DocumentModel.COLLECTION_NAME,
                document_data
            )
        )

        return {
            "success": True,
            "message": "Document uploaded successfully",
            "document_id": inserted_id
        }

    # =========================================
    # GET DOCUMENT BY ID
    # =========================================

    @staticmethod
    def get_document_by_id(document_id):

        document = mongodb_helper.find_by_id(
            DocumentModel.COLLECTION_NAME,
            document_id
        )

        return document

    # =========================================
    # GET DOCUMENTS BY USER
    # =========================================

    @staticmethod
    def get_documents_by_user(user_id):

        documents = mongodb_helper.find_many(
            DocumentModel.COLLECTION_NAME,
            {"user_id": user_id}
        )

        return documents

    # =========================================
    # GET ALL DOCUMENTS
    # =========================================

    @staticmethod
    def get_all_documents():

        documents = mongodb_helper.find_many(
            DocumentModel.COLLECTION_NAME
        )

        return documents

    # =========================================
    # UPDATE OCR RESULTS
    # =========================================

    @staticmethod
    def update_ocr_results(
        document_id,
        extracted_text,
        plate_number,
        confidence_score
    ):

        update_data = {
            "ocr_extracted_text":
                extracted_text,

            "plate_number":
                plate_number,

            "confidence_score":
                confidence_score,

            "updated_at":
                datetime.utcnow()
        }

        updated_count = (
            mongodb_helper.update_one(
                DocumentModel.COLLECTION_NAME,
                {"_id": document_id},
                update_data
            )
        )

        return updated_count > 0

    # =========================================
    # UPDATE VERIFICATION STATUS
    # =========================================

    @staticmethod
    def update_verification_status(
        document_id,
        verification_status
    ):

        update_data = {
            "verification_status":
                verification_status,

            "verified_at":
                datetime.utcnow()
        }

        updated_count = (
            mongodb_helper.update_one(
                DocumentModel.COLLECTION_NAME,
                {"_id": document_id},
                update_data
            )
        )

        return updated_count > 0

    # =========================================
    # UPDATE FRAUD STATUS
    # =========================================

    @staticmethod
    def update_fraud_status(
        document_id,
        fraud_status
    ):

        update_data = {
            "fraud_status":
                fraud_status,

            "fraud_checked_at":
                datetime.utcnow()
        }

        updated_count = (
            mongodb_helper.update_one(
                DocumentModel.COLLECTION_NAME,
                {"_id": document_id},
                update_data
            )
        )

        return updated_count > 0

    # =========================================
    # DELETE DOCUMENT
    # =========================================

    @staticmethod
    def delete_document(document_id):

        deleted_count = (
            mongodb_helper.delete_one(
                DocumentModel.COLLECTION_NAME,
                {"_id": document_id}
            )
        )

        return deleted_count > 0

    # =========================================
    # COUNT DOCUMENTS
    # =========================================

    @staticmethod
    def count_documents():

        total_documents = (
            mongodb_helper.count_documents(
                DocumentModel.COLLECTION_NAME
            )
        )

        return total_documents

    # =========================================
    # GET VERIFIED DOCUMENTS
    # =========================================

    @staticmethod
    def get_verified_documents():

        verified_documents = (
            mongodb_helper.find_many(
                DocumentModel.COLLECTION_NAME,
                {"verification_status": "Verified"}
            )
        )

        return verified_documents

    # =========================================
    # GET FRAUD DOCUMENTS
    # =========================================

    @staticmethod
    def get_fraud_documents():

        fraud_documents = (
            mongodb_helper.find_many(
                DocumentModel.COLLECTION_NAME,
                {"fraud_status": "Fraud"}
            )
        )

        return fraud_documents