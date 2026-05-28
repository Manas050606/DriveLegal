import cv2
import easyocr

from app.config.settings import Settings

from app.utils.preprocessing import (
    image_preprocessor
)

from app.utils.validators import (
    validate_indian_plate
)

from backend.ai_engine.number_plate.plate_ocr import (
    NumberPlateOCR
)


class OCRService:
    """
    OCR Service Layer
    Handles all OCR operations for backend.
    """

    def __init__(self):

        self.reader = easyocr.Reader(
            Settings.OCR_LANGUAGES
        )

        self.number_plate_ocr = (
            NumberPlateOCR()
        )

    # =========================================
    # BASIC OCR EXTRACTION
    # =========================================

    def extract_text(
        self,
        image_path
    ):

        try:

            # OCR optimized preprocessing
            processed = (
                image_preprocessor.ocr_preprocess(
                    image_path
                )
            )

            image = processed["morphology"]

            results = self.reader.readtext(
                image
            )

            extracted_text = ""

            confidence_scores = []

            for result in results:

                _, text, confidence = result

                extracted_text += text + " "

                confidence_scores.append(
                    confidence
                )

            extracted_text = (
                extracted_text.strip()
            )

            average_confidence = (
                sum(confidence_scores)
                / len(confidence_scores)
                if confidence_scores
                else 0
            )

            return {

                "success": True,

                "text":
                    extracted_text,

                "confidence":
                    round(
                        average_confidence,
                        2
                    )
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # NUMBER PLATE OCR
    # =========================================

    def extract_number_plate(
        self,
        image_path
    ):

        try:

            results = (
                self.number_plate_ocr.extract_text(
                    image_path
                )
            )

            if len(results) == 0:

                return {

                    "success": False,

                    "message":
                        "No number plate found"
                }

            plate_data = results[0]

            plate_number = (
                plate_data[
                    "plate_number"
                ]
            )

            confidence = (
                plate_data[
                    "confidence"
                ]
            )

            is_valid_plate = (
                validate_indian_plate(
                    plate_number
                )
            )

            return {

                "success": True,

                "plate_number":
                    plate_number,

                "confidence":
                    confidence,

                "valid_plate":
                    is_valid_plate
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # MULTIPLE OCR REGIONS
    # =========================================

    def extract_multiple_regions(
        self,
        image_path
    ):

        try:

            image = cv2.imread(
                image_path
            )

            if image is None:

                return {

                    "success": False,

                    "message":
                        "Unable to load image"
                }

            results = self.reader.readtext(
                image
            )

            extracted_regions = []

            for result in results:

                bbox, text, confidence = result

                extracted_regions.append({

                    "text": text,

                    "confidence":
                        round(
                            confidence,
                            2
                        ),

                    "bounding_box":
                        bbox
                })

            return {

                "success": True,

                "regions":
                    extracted_regions
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # OCR CONFIDENCE CHECK
    # =========================================

    def check_ocr_confidence(
        self,
        confidence_score
    ):

        return (
            confidence_score >=
            Settings.OCR_CONFIDENCE_THRESHOLD
        )

    # =========================================
    # ADVANCED OCR ANALYSIS
    # =========================================

    def advanced_ocr_analysis(
        self,
        image_path
    ):

        try:

            basic_ocr = self.extract_text(
                image_path
            )

            plate_ocr = (
                self.extract_number_plate(
                    image_path
                )
            )

            analysis = {

                "basic_ocr":
                    basic_ocr,

                "plate_ocr":
                    plate_ocr,

                "analysis_status":
                    "Completed"
            }

            return {

                "success": True,

                "analysis":
                    analysis
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }


# =========================================
# GLOBAL OCR SERVICE INSTANCE
# =========================================

ocr_service = OCRService()