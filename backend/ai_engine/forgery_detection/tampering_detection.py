import cv2
import numpy as np


class TamperingDetector:
    """
    Detect possible tampered/edited regions
    in vehicle documents and number plates.
    """

    def __init__(self):

        self.min_contour_area = 500

    def preprocess_image(self, image):

        gray = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )

        blur = cv2.GaussianBlur(
            gray,
            (5, 5),
            0
        )

        return blur

    def detect_edges(self, gray):

        edges = cv2.Canny(
            gray,
            80,
            200
        )

        return edges

    def detect_suspicious_regions(self, image):

        processed = self.preprocess_image(
            image
        )

        edges = self.detect_edges(
            processed
        )

        contours, _ = cv2.findContours(
            edges,
            cv2.RETR_EXTERNAL,
            cv2.CHAIN_APPROX_SIMPLE
        )

        suspicious_regions = []

        for contour in contours:

            area = cv2.contourArea(contour)

            if area > self.min_contour_area:

                x, y, w, h = cv2.boundingRect(
                    contour
                )

                aspect_ratio = w / float(h)

                # Possible edited/tampered patch
                if (
                    0.3 < aspect_ratio < 6.0
                ):

                    suspicious_regions.append({
                        "bbox": (x, y, w, h),
                        "area": round(area, 2)
                    })

        return suspicious_regions

    def analyze_image(self, image_path):

        image = cv2.imread(image_path)

        if image is None:
            raise ValueError(
                f"Unable to load image: {image_path}"
            )

        suspicious_regions = (
            self.detect_suspicious_regions(
                image
            )
        )

        is_tampered = (
            len(suspicious_regions) > 0
        )

        result = {
            "total_suspicious_regions":
                len(suspicious_regions),

            "is_tampered":
                is_tampered,

            "status":
                "Tampered"
                if is_tampered
                else "Normal",

            "regions":
                suspicious_regions
        }

        return result

    def visualize_result(self, image_path):

        image = cv2.imread(image_path)

        result = self.analyze_image(
            image_path
        )

        for region in result["regions"]:

            x, y, w, h = region["bbox"]

            cv2.rectangle(
                image,
                (x, y),
                (x + w, y + h),
                (0, 0, 255),
                2
            )

            cv2.putText(
                image,
                "Suspicious",
                (x, y - 10),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.6,
                (0, 0, 255),
                2
            )

        cv2.putText(
            image,
            f"Status: {result['status']}",
            (20, 40),
            cv2.FONT_HERSHEY_SIMPLEX,
            1,
            (0, 255, 0)
            if not result["is_tampered"]
            else (0, 0, 255),
            2
        )

        cv2.imshow(
            "Tampering Detection",
            image
        )

        cv2.waitKey(0)
        cv2.destroyAllWindows()


if __name__ == "__main__":

    IMAGE_PATH = "../datasets/real_number_plates/sample.jpg"

    detector = TamperingDetector()

    result = detector.analyze_image(
        IMAGE_PATH
    )

    print("\n===== Tampering Detection =====")
    print(result)

    detector.visualize_result(
        IMAGE_PATH
    )