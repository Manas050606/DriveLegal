import cv2
import numpy as np


class FakeStampDetector:
    """
    Detect fake/missing government stamps
    in uploaded vehicle documents.
    """

    def __init__(self):

        # Minimum circular area threshold
        self.min_radius = 20

    def preprocess_image(self, image):

        gray = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )

        blur = cv2.GaussianBlur(
            gray,
            (9, 9),
            2
        )

        return gray, blur

    def detect_circular_stamps(self, image):

        gray, blur = self.preprocess_image(
            image
        )

        circles = cv2.HoughCircles(
            blur,
            cv2.HOUGH_GRADIENT,
            dp=1.2,
            minDist=50,
            param1=100,
            param2=30,
            minRadius=self.min_radius,
            maxRadius=120
        )

        detected_stamps = []

        if circles is not None:

            circles = np.round(
                circles[0, :]
            ).astype("int")

            for (x, y, r) in circles:

                detected_stamps.append({
                    "center": (x, y),
                    "radius": r
                })

        return detected_stamps

    def analyze_document(self, image_path):

        image = cv2.imread(image_path)

        if image is None:
            raise ValueError(
                f"Unable to load image: {image_path}"
            )

        detected_stamps = (
            self.detect_circular_stamps(
                image
            )
        )

        total_stamps = len(detected_stamps)

        status = (
            "Stamp Detected"
            if total_stamps > 0
            else "No Stamp Found"
        )

        suspicion = (
            "Low"
            if total_stamps > 0
            else "High"
        )

        result = {
            "total_stamps": total_stamps,
            "status": status,
            "fraud_risk": suspicion,
            "stamps": detected_stamps
        }

        return result

    def visualize_result(self, image_path):

        image = cv2.imread(image_path)

        result = self.analyze_document(
            image_path
        )

        for stamp in result["stamps"]:

            x, y = stamp["center"]

            radius = stamp["radius"]

            # Outer circle
            cv2.circle(
                image,
                (x, y),
                radius,
                (0, 255, 0),
                3
            )

            # Center point
            cv2.circle(
                image,
                (x, y),
                3,
                (0, 0, 255),
                -1
            )

            cv2.putText(
                image,
                "Stamp",
                (x - 20, y - radius - 10),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.6,
                (0, 255, 0),
                2
            )

        cv2.putText(
            image,
            f"Status: {result['status']}",
            (20, 40),
            cv2.FONT_HERSHEY_SIMPLEX,
            1,
            (0, 255, 0)
            if result["total_stamps"] > 0
            else (0, 0, 255),
            2
        )

        cv2.imshow(
            "Fake Stamp Detection",
            image
        )

        cv2.waitKey(0)
        cv2.destroyAllWindows()


if __name__ == "__main__":

    IMAGE_PATH = "../datasets/real_number_plates/sample.jpg"

    detector = FakeStampDetector()

    result = detector.analyze_document(
        IMAGE_PATH
    )

    print("\n===== Stamp Detection =====")
    print(result)

    detector.visualize_result(
        IMAGE_PATH
    )