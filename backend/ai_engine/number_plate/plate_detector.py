import cv2
from ultralytics import YOLO
from backend.ai_engine.number_plate.preprocessing import PlatePreprocessor


class NumberPlateDetector:
    """
    YOLOv8 based Number Plate Detector
    """

    def __init__(self, model_path="yolov8n.pt"):
        """
        Load YOLOv8 model
        """

        self.model = YOLO(model_path)

        self.preprocessor = PlatePreprocessor()

    def detect_plate(self, image_path):

        # Preprocess image
        processed = self.preprocessor.preprocess(image_path)

        image = processed["resized"]

        # Run YOLO prediction
        results = self.model.predict(
            source=image,
            conf=0.35,
            save=False
        )

        detections = []

        for result in results:

            boxes = result.boxes

            for box in boxes:

                x1, y1, x2, y2 = map(int, box.xyxy[0])

                confidence = float(box.conf[0])

                class_id = int(box.cls[0])

                detections.append({
                    "bbox": (x1, y1, x2, y2),
                    "confidence": confidence,
                    "class_id": class_id
                })

                # Draw bounding box
                cv2.rectangle(
                    image,
                    (x1, y1),
                    (x2, y2),
                    (0, 255, 0),
                    2
                )

                # Confidence label
                label = f"Plate {confidence:.2f}"

                cv2.putText(
                    image,
                    label,
                    (x1, y1 - 10),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.6,
                    (0, 255, 0),
                    2
                )

        return image, detections

    def crop_plate(self, image_path):

        image = cv2.imread(image_path)

        detected_image, detections = self.detect_plate(image_path)

        cropped_plates = []

        for idx, detection in enumerate(detections):

            x1, y1, x2, y2 = detection["bbox"]

            plate_crop = image[y1:y2, x1:x2]

            cropped_plates.append(plate_crop)

            cv2.imwrite(
                f"cropped_plate_{idx + 1}.jpg",
                plate_crop
            )

        return cropped_plates


if __name__ == "__main__":

    IMAGE_PATH = "../datasets/real_number_plates/sample.jpg"

    detector = NumberPlateDetector()

    detected_image, detections = detector.detect_plate(
        IMAGE_PATH
    )

    print("\nDetected Plates:")
    print(detections)

    cv2.imshow("Detected Plates", detected_image)

    detector.crop_plate(IMAGE_PATH)

    cv2.waitKey(0)
    cv2.destroyAllWindows()