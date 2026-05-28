import cv2
import numpy as np
import imutils


class PlatePreprocessor:
    """
    Preprocessing pipeline for vehicle number plate OCR.
    """

    def __init__(self, resize_width=600):
        self.resize_width = resize_width

    def resize_image(self, image):
        """
        Resize image while maintaining aspect ratio.
        """
        return imutils.resize(image, width=self.resize_width)

    def convert_to_gray(self, image):
        """
        Convert image to grayscale.
        """
        return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    def remove_noise(self, gray):
        """
        Apply bilateral filtering for noise reduction.
        """
        return cv2.bilateralFilter(gray, 11, 17, 17)

    def enhance_contrast(self, gray):
        """
        Enhance image contrast using histogram equalization.
        """
        return cv2.equalizeHist(gray)

    def threshold_image(self, gray):
        """
        Apply adaptive thresholding.
        """
        return cv2.adaptiveThreshold(
            gray,
            255,
            cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
            cv2.THRESH_BINARY,
            11,
            2
        )

    def edge_detection(self, gray):
        """
        Detect edges using Canny Edge Detector.
        """
        return cv2.Canny(gray, 100, 200)

    def morphological_operations(self, thresh):
        """
        Improve plate region visibility.
        """
        kernel = np.ones((3, 3), np.uint8)

        morph = cv2.morphologyEx(
            thresh,
            cv2.MORPH_CLOSE,
            kernel,
            iterations=1
        )

        return morph

    def preprocess(self, image_path):
        """
        Full preprocessing pipeline.
        """

        image = cv2.imread(image_path)

        if image is None:
            raise ValueError(f"Unable to load image: {image_path}")

        resized = self.resize_image(image)

        gray = self.convert_to_gray(resized)

        denoised = self.remove_noise(gray)

        contrast = self.enhance_contrast(denoised)

        thresh = self.threshold_image(contrast)

        edges = self.edge_detection(contrast)

        morph = self.morphological_operations(thresh)

        return {
            "original": image,
            "resized": resized,
            "gray": gray,
            "denoised": denoised,
            "contrast": contrast,
            "threshold": thresh,
            "edges": edges,
            "morphology": morph
        }


if __name__ == "__main__":

    IMAGE_PATH = "../datasets/real_number_plates/sample.jpg"

    processor = PlatePreprocessor()

    results = processor.preprocess(IMAGE_PATH)

    for name, img in results.items():

        cv2.imshow(name, img)

    cv2.waitKey(0)
    cv2.destroyAllWindows()