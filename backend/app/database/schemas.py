from datetime import datetime


# =========================================
# USER SCHEMA
# =========================================

def user_schema(
    name,
    email,
    password,
    role="user"
):

    return {
        "name": name,
        "email": email,
        "password": password,
        "role": role,

        "created_at": datetime.utcnow(),

        "is_verified": False,

        "documents_uploaded": 0
    }


# =========================================
# DOCUMENT SCHEMA
# =========================================

def document_schema(
    user_id,
    filename,
    document_type,
    file_path
):

    return {
        "user_id": user_id,

        "filename": filename,

        "document_type": document_type,

        "file_path": file_path,

        "uploaded_at": datetime.utcnow(),

        "verification_status": "Pending",

        "fraud_status": "Unchecked",

        "ocr_extracted_text": "",

        "plate_number": "",

        "confidence_score": 0.0
    }


# =========================================
# VERIFICATION SCHEMA
# =========================================

def verification_schema(
    user_id,
    plate_number,
    verification_result,
    confidence_score
):

    return {
        "user_id": user_id,

        "plate_number": plate_number,

        "verification_result": verification_result,

        "confidence_score": confidence_score,

        "verified_at": datetime.utcnow()
    }


# =========================================
# FRAUD REPORT SCHEMA
# =========================================

def fraud_report_schema(
    user_id,
    filename,
    fraud_type,
    fraud_score,
    status
):

    return {
        "user_id": user_id,

        "filename": filename,

        "fraud_type": fraud_type,

        "fraud_score": fraud_score,

        "status": status,

        "reported_at": datetime.utcnow()
    }


# =========================================
# DASHBOARD ANALYTICS SCHEMA
# =========================================

def analytics_schema():

    return {
        "total_users": 0,

        "total_documents": 0,

        "verified_documents": 0,

        "fraud_detected": 0,

        "last_updated": datetime.utcnow()
    }