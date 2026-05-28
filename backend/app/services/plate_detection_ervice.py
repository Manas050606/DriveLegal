import cv2

from app.config.settings import Settings

from app.utils.preprocessing import (
    image_preprocessor
)

from backend.ai_engine.number_plate.plate_detector import (
    NumberPlateDetector
)

from backend.ai_engine.number_plate.segmentation import (
    CharacterSegmenter
)

from backend.ai_engine.number_plate.character_detection import (
    CharacterRecognizer
)


class PlateDetectionService:
    """
    Centralized Plate Detection Service
    Handles all plate detection business logic.
    """

    def __init__(self):

        self.detector = NumberPlateDetector(
            model_path=Settings.YOLO_MODEL_PATH
        )

        self.segmenter = CharacterSegmenter()

        self.character_recognizer = (
            CharacterRecognizer()
        )

    # =========================================
    # DETECT NUMBER PLATES
    # =========================================

    def detect_plates(
        self,
        image_path
    ):

        try:

            detected_image, detections = (
                self.detector.detect_plate(
                    image_path
                )
            )

            if len(detections) == 0:

                return {

                    "success": False,

                    "message":
                        "No number plate detected"
                }

            formatted_detections = []

            for detection in detections:

                x1, y1, x2, y2 = (
                    detection["bbox"]
                )

                formatted_detections.append({

                    "bounding_box": {

                        "x1": x1,
                        "y1": y1,
                        "x2": x2,
                        "y2": y2
                    },

                    "confidence":
                        round(
                            detection[
                                "confidence"
                            ],
                            2
                        )
                })

            return {

                "success": True,

                "total_detections":
                    len(detections),

                "detections":
                    formatted_detections
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # CROP DETECTED PLATES
    # =========================================

    def crop_detected_plates(
        self,
        image_path
    ):

        try:

            cropped_plates = (
                self.detector.crop_plate(
                    image_path
                )
            )

            return {

                "success": True,

                "total_cropped":
                    len(cropped_plates),

                "cropped_plates":
                    cropped_plates
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # SEGMENT CHARACTERS
    # =========================================

    def segment_plate_characters(
        self,
        image_path
    ):

        try:

            segmentation_results = (
                self.segmenter.segment_characters(
                    image_path
                )
            )

            formatted_results = []

            for result in segmentation_results:

                formatted_results.append({

                    "plate_index":
                        result[
                            "plate_index"
                        ],

                    "total_characters":
                        len(
                            result[
                                "characters"
                            ]
                        )
                })

            return {

                "success": True,

                "segmentation_results":
                    formatted_results
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # CHARACTER RECOGNITION
    # =========================================

    def recognize_characters(
        self,
        image_path
    ):

        try:

            recognition_results = (
                self.character_recognizer.recognize_plate(
                    image_path
                )
            )

            return {

                "success": True,

                "recognition_results":
                    recognition_results
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # COMPLETE PLATE ANALYSIS
    # =========================================

    def complete_plate_analysis(
        self,
        image_path
    ):

        try:

            # =================================
            # PREPROCESSING
            # =================================

            processed = (
                image_preprocessor.advanced_preprocess(
                    image_path
                )
            )

            # =================================
            # DETECTION
            # =================================

            detection_results = (
                self.detect_plates(
                    image_path
                )
            )

            # =================================
            # SEGMENTATION
            # =================================

            segmentation_results = (
                self.segment_plate_characters(
                    image_path
                )
            )

            # =================================
            # CHARACTER RECOGNITION
            # =================================

            recognition_results = (
                self.recognize_characters(
                    image_path
                )
            )

            # =================================
            # FINAL ANALYSIS
            # =================================

            analysis = {

                "detection":
                    detection_results,

                "segmentation":
                    segmentation_results,

                "recognition":
                    recognition_results,

                "processing_status":
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
    # DETECTION CONFIDENCE CHECK
    # =========================================

    def validate_detection_confidence(
        self,
        confidence,
        threshold=0.50
    ):

        return confidence >= threshold


# =========================================
# GLOBAL SERVICE INSTANCE
# =========================================

plate_detection_service = (
    PlateDetectionService()
)