import cv2
import numpy as np
import easyocr

from backend.ai_engine.number_plate.segmentation import CharacterSegmenter


class CharacterRecognizer:
    """
    Character Recognition Engine
    for segmented number plate characters.
    """

    def __init__(self):

        self.segmenter = CharacterSegmenter()

        self.reader = easyocr.Reader(['en'])

    def recognize_character(self, char_image):
        """
        Recognize a single segmented character.
        """

        results = self.reader.readtext(
            char_image,
            detail=1
        )

        if len(results) == 0:
            return "", 0.0

        _, text, confidence = results[0]

        return text, confidence

    def recognize_plate(self, image_path):

        segmented_results = self.segmenter.segment_characters(
            image_path
        )

        final_results = []

        for result in segmented_results:

            characters = result["characters"]

            recognized_text = ""

            confidence_scores = []

            for char_img in characters:

                text, confidence = self.recognize_character(
                    char_img
                )

                recognized_text += text

                confidence_scores.append(confidence)

            avg_confidence = (
                sum(confidence_scores) / len(confidence_scores)
                if confidence_scores else 0
            )

            final_results.append({
                "plate_index": result["plate_index"],
                "recognized_text": recognized_text,
                "confidence": round(avg_confidence, 2)
            })

            print("\n========================")
            print(f"Plate {result['plate_index']}")
            print("========================")
            print(f"Recognized Text : {recognized_text}")
            print(f"Confidence      : {avg_confidence:.2f}")

        return final_results


if __name__ == "__main__":

    IMAGE_PATH = "../datasets/real_number_plates/sample.jpg"

    recognizer = CharacterRecognizer()

    results = recognizer.recognize_plate(
        IMAGE_PATH
    )

    print("\nFinal Character Recognition Results:")
    print(results)