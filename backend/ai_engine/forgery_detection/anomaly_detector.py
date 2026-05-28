import cv2
import numpy as np


class AnomalyDetector:
    """
    Detect suspicious/tampered vehicle documents
    using histogram analysis and pixel inconsistencies.
    """

    def __init__(self):

        self.suspicion_threshold = 0.65

    def calculate_histogram(self, image):

        gray = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )

        histogram = cv2.calcHist(
            [gray],
            [0],
            None,
            [256],
            [0, 256]
        )

        histogram = cv2.normalize(
            histogram,
            histogram
        ).flatten()

        return histogram

    def detect_noise_regions(self, image):

        gray = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )

        edges = cv2.Canny(
            gray,
            100,
            200
        )

        noise_score = np.sum(edges) / (
            image.shape[0] * image.shape[1]
        )

        return noise_score

    def detect_brightness_anomaly(self, image):

        hsv = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2HSV
        )

        brightness = hsv[:, :, 2]

        mean_brightness = np.mean(brightness)

        std_brightness = np.std(brightness)

        return mean_brightness, std_brightness

    def detect_tampering(self, image_path):

        image = cv2.imread(image_path)

        if image is None:
            raise ValueError(
                f"Unable to load image: {image_path}"
            )

        histogram = self.calculate_histogram(
            image
        )

        noise_score = self.detect_noise_regions(
            image
        )

        mean_brightness, std_brightness = (
            self.detect_brightness_anomaly(
                image
            )
        )

        # Suspicion score calculation
        suspicion_score = (
            (noise_score * 0.4) +
            (std_brightness / 255 * 0.3) +
            (np.mean(histogram) * 0.3)
        )

        suspicion_score = min(
            suspicion_score,
            1.0
        )

        is_suspicious = (
            suspicion_score >
            self.suspicion_threshold
        )

        result = {
            "noise_score": round(noise_score, 4),
            "brightness_mean": round(mean_brightness, 2),
            "brightness_std": round(std_brightness, 2),
            "suspicion_score": round(suspicion_score, 2),
            "is_suspicious": is_suspicious,
            "status": (
                "Suspicious"
                if is_suspicious
                else "Normal"
            )
        }

        return result

    def visualize_result(self, image_path):

        image = cv2.imread(image_path)

        result = self.detect_tampering(
            image_path
        )

        status = result["status"]

        score = result["suspicion_score"]

        color = (
            (0, 0, 255)
            if result["is_suspicious"]
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
            "Anomaly Detection",
            image
        )

        cv2.waitKey(0)
        cv2.destroyAllWindows()


if __name__ == "__main__":

    IMAGE_PATH = "../datasets/real_number_plates/sample.jpg"

    detector = AnomalyDetector()

    result = detector.detect_tampering(
        IMAGE_PATH
    )

    print("\n===== Anomaly Detection =====")
    print(result)

    detector.visualize_result(
        IMAGE_PATH
    )