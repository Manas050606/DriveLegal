import os
import uuid
from datetime import datetime

from flask import jsonify


# =========================================
# STANDARD API RESPONSE
# =========================================

def success_response(
    message="Success",
    data=None,
    status_code=200
):

    response = {
        "success": True,
        "message": message,
        "data": data if data else {}
    }

    return jsonify(response), status_code


def error_response(
    message="Something went wrong",
    status_code=500
):

    response = {
        "success": False,
        "message": message
    }

    return jsonify(response), status_code


# =========================================
# GENERATE UNIQUE FILENAME
# =========================================

def generate_unique_filename(filename):

    extension = filename.split(".")[-1]

    unique_id = uuid.uuid4().hex

    timestamp = datetime.now().strftime(
        "%Y%m%d%H%M%S"
    )

    new_filename = (
        f"{timestamp}_{unique_id}.{extension}"
    )

    return new_filename


# =========================================
# GET CURRENT TIMESTAMP
# =========================================

def get_current_timestamp():

    return datetime.utcnow()


# =========================================
# FORMAT DATETIME
# =========================================

def format_datetime(date_time):

    if not date_time:

        return None

    return date_time.strftime(
        "%Y-%m-%d %H:%M:%S"
    )


# =========================================
# FILE SIZE CONVERTER
# =========================================

def format_file_size(size_in_bytes):

    if size_in_bytes < 1024:

        return f"{size_in_bytes} B"

    elif size_in_bytes < 1024 * 1024:

        return (
            f"{round(size_in_bytes / 1024, 2)} KB"
        )

    else:

        return (
            f"{round(size_in_bytes / (1024 * 1024), 2)} MB"
        )


# =========================================
# SAFE FILE DELETE
# =========================================

def safe_delete_file(file_path):

    try:

        if os.path.exists(file_path):

            os.remove(file_path)

            return True

        return False

    except Exception:

        return False


# =========================================
# EXTRACT FILE EXTENSION
# =========================================

def get_file_extension(filename):

    return filename.rsplit(
        ".",
        1
    )[-1].lower()


# =========================================
# CHECK IMAGE FILE
# =========================================

def is_image_file(filename):

    allowed_image_extensions = [
        "png",
        "jpg",
        "jpeg"
    ]

    extension = get_file_extension(
        filename
    )

    return extension in allowed_image_extensions


# =========================================
# MASK SENSITIVE DATA
# =========================================

def mask_plate_number(plate_number):

    if len(plate_number) < 4:

        return plate_number

    return (
        plate_number[:2]
        + "****"
        + plate_number[-2:]
    )


# =========================================
# CALCULATE PERCENTAGE
# =========================================

def calculate_percentage(
    value,
    total
):

    if total == 0:

        return 0

    return round(
        (value / total) * 100,
        2
    )


# =========================================
# PAGINATION HELPER
# =========================================

def paginate_results(
    items,
    page=1,
    limit=10
):

    start = (page - 1) * limit

    end = start + limit

    return items[start:end]


# =========================================
# DEBUG LOGGER
# =========================================

def debug_log(message):

    timestamp = datetime.now().strftime(
        "%Y-%m-%d %H:%M:%S"
    )

    print(
        f"[DEBUG] [{timestamp}] {message}"
    )