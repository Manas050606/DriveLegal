import os
from datetime import datetime

from flask import Blueprint
from flask import request
from flask import jsonify

from werkzeug.utils import secure_filename

from app.config.settings import Settings

from backend.ai_engine.number_plate.plate_detector import (
    NumberPlateDetector
)

from backend.ai_engine.number_plate.plate_ocr import (
    NumberPlateOCR
)

from backend.ai_engine.number_plate.segmentation import (
    CharacterSegmenter
)

from backend.ai_engine.number_plate.character_detection import (
    CharacterRecognizer
)


# =========================================
# BLUEPRINT
# =========================================

numberplate_bp = Blueprint(
    "numberplate_bp",
    __name__
)


# =========================================
# AI MODULES
# =========================================

plate_detector = NumberPlateDetector()

ocr_engine = NumberPlateOCR()

segmenter = CharacterSegmenter()

character_recognizer = CharacterRecognizer()


# =========================================
# FILE VALIDATION
# =========================================

def allowed_file(filename):

    return (
        "." in filename and
        filename.rsplit(".", 1)[1].lower()
        in Settings.ALLOWED_EXTENSIONS
    )


# =========================================
# NUMBER PLATE DETECTION ROUTE
# =========================================

@numberplate_bp.route(
    "/detect-plate",
    methods=["POST"]
)
def detect_plate():

    try:

        # =====================================
        # VALIDATE FILE
        # =====================================

        if "file" not in request.files:

            return jsonify({
                "success": False,
                "message": "No file uploaded"
            }), 400

        file = request.files["file"]

        if file.filename == "":

            return jsonify({
                "success": False,
                "message": "Empty filename"
            }), 400

        if not allowed_file(file.filename):

            return jsonify({
                "success": False,
                "message": "Invalid file type"
            }), 400

        # =====================================
        # SAVE FILE
        # =====================================

        filename = secure_filename(
            file.filename
        )

        timestamp = datetime.now().strftime(
            "%Y%m%d%H%M%S"
        )

        unique_filename = (
            f"{timestamp}_{filename}"
        )

        save_path = os.path.join(
            Settings.PLATE_UPLOAD_FOLDER,
            unique_filename
        )

        file.save(save_path)

        # =====================================
        # DETECT NUMBER PLATE
        # =====================================

        detected_image, detections = (
            plate_detector.detect_plate(
                save_path
            )
        )

        if len(detections) == 0:

            return jsonify({
                "success": False,
                "message": "No number plate detected"
            }), 404

        # =====================================
        # OCR EXTRACTION
        # =====================================

        ocr_results = (
            ocr_engine.extract_text(
                save_path
            )
        )

        # =====================================
        # CHARACTER SEGMENTATION
        # =====================================

        segmentation_results = (
            segmenter.segment_characters(
                save_path
            )
        )

        segmented_characters = []

        for result in segmentation_results:

            segmented_characters.append({
                "plate_index":
                    result["plate_index"],

                "total_characters":
                    len(result["characters"])
            })

        # =====================================
        # CHARACTER RECOGNITION
        # =====================================

        character_results = (
            character_recognizer.recognize_plate(
                save_path
            )
        )

        # =====================================
        # RESPONSE
        # =====================================

        return jsonify({

            "success": True,

            "message":
                "Number plate detected successfully",

            "total_plates_detected":
                len(detections),

            "detections":
                detections,

            "ocr_results":
                ocr_results,

            "segmentation_results":
                segmented_characters,

            "character_recognition":
                character_results

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500


# =========================================
# SIMPLE OCR ROUTE
# =========================================

@numberplate_bp.route(
    "/extract-plate-text",
    methods=["POST"]
)
def extract_plate_text():

    try:

        if "file" not in request.files:

            return jsonify({
                "success": False,
                "message": "No file uploaded"
            }), 400

        file = request.files["file"]

        if file.filename == "":

            return jsonify({
                "success": False,
                "message": "Empty filename"
            }), 400

        filename = secure_filename(
            file.filename
        )

        save_path = os.path.join(
            Settings.TEMP_FOLDER,
            filename
        )

        file.save(save_path)

        ocr_results = (
            ocr_engine.extract_text(
                save_path
            )
        )

        return jsonify({

            "success": True,

            "ocr_results":
                ocr_results

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500


# =========================================
# CHARACTER RECOGNITION ROUTE
# =========================================

@numberplate_bp.route(
    "/recognize-characters",
    methods=["POST"]
)
def recognize_characters():

    try:

        if "file" not in request.files:

            return jsonify({
                "success": False,
                "message": "No file uploaded"
            }), 400

        file = request.files["file"]

        filename = secure_filename(
            file.filename
        )

        save_path = os.path.join(
            Settings.TEMP_FOLDER,
            filename
        )

        file.save(save_path)

        results = (
            character_recognizer.recognize_plate(
                save_path
            )
        )

        return jsonify({

            "success": True,

            "character_results":
                results

        }), 200

    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500