import cv2
import numpy as np

from backend.ai_engine.number_plate.preprocessing import PlatePreprocessor
from backend.ai_engine.number_plate.plate_detector import NumberPlateDetector


class CharacterSegmenter:
    """
    Character Segmentation for Vehicle Number Plates.
    """

    def __init__(self):

        self.preprocessor = PlatePreprocessor()

        self.detector = NumberPlateDetector()

    def segment_characters(self, image_path):

        cropped_plates = self.detector.crop_plate(image_path)

        segmented_results = []

        for idx, plate in enumerate(cropped_plates):

            # Resize plate
            plate = cv2.resize(plate, (400, 120))

            # Convert to grayscale
            gray = cv2.cvtColor(
                plate,
                cv2.COLOR_BGR2GRAY
            )

            # Blur removal
            blur = cv2.GaussianBlur(
                gray,
                (5, 5),
                0
            )

            # Thresholding
            thresh = cv2.threshold(
                blur,
                0,
                255,
                cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU
            )[1]

            # Morphological operations
            kernel = cv2.getStructuringElement(
                cv2.MORPH_RECT,
                (3, 3)
            )

            morph = cv2.morphologyEx(
                thresh,
                cv2.MORPH_CLOSE,
                kernel
            )

            # Find contours
            contours, _ = cv2.findContours(
                morph,
                cv2.RETR_EXTERNAL,
                cv2.CHAIN_APPROX_SIMPLE
            )

            character_images = []

            plate_copy = plate.copy()

            for contour in contours:

                x, y, w, h = cv2.boundingRect(contour)

                # Character filtering conditions
                aspect_ratio = h / float(w)

                if (
                    aspect_ratio > 1.0 and
                    15 < w < 80 and
                    30 < h < 120
                ):

                    char_crop = morph[
                        y:y + h,
                        x:x + w
                    ]

                    char_crop = cv2.resize(
                        char_crop,
                        (40, 60)
                    )

                    character_images.append(char_crop)

                    # Draw rectangle
                    cv2.rectangle(
                        plate_copy,
                        (x, y),
                        (x + w, y + h),
                        (0, 255, 0),
                        2
                    )

            segmented_results.append({
                "plate_index": idx + 1,
                "characters": character_images,
                "visualization": plate_copy
            })

            print(
                f"\nPlate {idx + 1}: "
                f"{len(character_images)} characters segmented"
            )

        return segmented_results


if __name__ == "__main__":

    IMAGE_PATH = "../datasets/real_number_plates/sample.jpg"

    segmenter = CharacterSegmenter()

    results = segmenter.segment_characters(
        IMAGE_PATH
    )

    for result in results:

        cv2.imshow(
            f"Plate {result['plate_index']} Segmentation",
            result["visualization"]
        )

        for idx, char_img in enumerate(result["characters"]):

            cv2.imshow(
                f"Character {idx + 1}",
                char_img
            )

    cv2.waitKey(0)
    cv2.destroyAllWindows()