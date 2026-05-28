import cv2
import numpy as np


class BlurDetector:
    """
    Detect blurry or low-quality documents/images
    using Laplacian Variance.
    """

    def __init__(self, threshold=100):

        # Lower threshold = more tolerant
        self.threshold = threshold

    def calculate_blur_score(self, image):

        gray = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )

        blur_score = cv2.Laplacian(
            gray,
            cv2.CV_64F
        ).var()

        return blur_score

    def detect_blur(self, image_path):

        image = cv2.imread(image_path)

        if image is None:
            raise ValueError(
                f"Unable to load image: {image_path}"
            )

        blur_score = self.calculate_blur_score(
            image
        )

        is_blurry = blur_score < self.threshold

        result = {
            "blur_score": round(blur_score, 2),
            "is_blurry": is_blurry,
            "quality_status": (
                "Blurry"
                if is_blurry
                else "Clear"
            )
        }

        return result

    def visualize_result(self, image_path):

        image = cv2.imread(image_path)

        result = self.detect_blur(image_path)

        status = result["quality_status"]

        score = result["blur_score"]

        color = (
            (0, 0, 255)
            if result["is_blurry"]
            else (0, 255, 0)
        )

        cv2.putText(
            image,
            f"{status} | Score: {score}",
            (20, 40),
            cv2.FONT_HERSHEY_SIMPLEX,
            1,
            color,
            2
        )

        cv2.imshow(
            "Blur Detection Result",
            image
        )

        cv2.waitKey(0)
        cv2.destroyAllWindows()


if __name__ == "__main__":

    IMAGE_PATH = "../datasets/real_number_plates/sample.jpg"

    detector = BlurDetector(
        threshold=120
    )

    result = detector.detect_blur(
        IMAGE_PATH
    )

    print("\n===== Blur Detection =====")
    print(result)

    detector.visualize_result(
        IMAGE_PATH
    )