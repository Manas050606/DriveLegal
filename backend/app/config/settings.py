import os
from dotenv import load_dotenv


# Load environment variables
load_dotenv()


class Settings:
    """
    Global Backend Configuration
    """

    # =========================================
    # PROJECT SETTINGS
    # =========================================

    PROJECT_NAME = "DriveLegal"

    VERSION = "1.0.0"

    DEBUG = True

    # =========================================
    # SERVER SETTINGS
    # =========================================

    HOST = "0.0.0.0"

    PORT = 5000

    # =========================================
    # SECRET / SECURITY
    # =========================================

    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "drivelegal_secret_key"
    )

    JWT_SECRET = os.getenv(
        "JWT_SECRET",
        "jwt_drivelegal_secret"
    )

    # =========================================
    # MONGODB CONFIGURATION
    # =========================================

    MONGO_URI = os.getenv(
        "MONGO_URI",
        "mongodb://localhost:27017/"
    )

    DATABASE_NAME = "drivelegal_db"

    # =========================================
    # UPLOAD SETTINGS
    # =========================================

    BASE_DIR = os.path.abspath(
        os.path.dirname(__file__)
    )

    UPLOAD_FOLDER = os.path.join(
        BASE_DIR,
        "../../uploads"
    )

    DOCUMENT_UPLOAD_FOLDER = os.path.join(
        UPLOAD_FOLDER,
        "documents"
    )

    PLATE_UPLOAD_FOLDER = os.path.join(
        UPLOAD_FOLDER,
        "plates"
    )

    TEMP_FOLDER = os.path.join(
        UPLOAD_FOLDER,
        "temp"
    )

    # =========================================
    # ALLOWED FILE TYPES
    # =========================================

    ALLOWED_EXTENSIONS = {
        "png",
        "jpg",
        "jpeg",
        "pdf"
    }

    MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB

    # =========================================
    # AI ENGINE PATHS
    # =========================================

    AI_ENGINE_PATH = os.path.abspath(
        os.path.join(
            BASE_DIR,
            "../../../ai_engine"
        )
    )

    DATASET_PATH = os.path.join(
        AI_ENGINE_PATH,
        "datasets"
    )

    TRAINED_MODELS_PATH = os.path.join(
        AI_ENGINE_PATH,
        "trained_models"
    )

    # =========================================
    # YOLO MODEL
    # =========================================

    YOLO_MODEL_PATH = os.path.join(
        TRAINED_MODELS_PATH,
        "plate_model.pt"
    )

    # =========================================
    # OCR SETTINGS
    # =========================================

    OCR_LANGUAGES = ['en']

    OCR_CONFIDENCE_THRESHOLD = 0.40

    # =========================================
    # FORGERY DETECTION
    # =========================================

    BLUR_THRESHOLD = 120

    TAMPERING_THRESHOLD = 0.65

    # =========================================
    # QR SETTINGS
    # =========================================

    QR_CODE_FOLDER = os.path.join(
        UPLOAD_FOLDER,
        "qr_codes"
    )

    # =========================================
    # CREATE REQUIRED DIRECTORIES
    # =========================================

    @staticmethod
    def create_directories():

        folders = [
            Settings.UPLOAD_FOLDER,
            Settings.DOCUMENT_UPLOAD_FOLDER,
            Settings.PLATE_UPLOAD_FOLDER,
            Settings.TEMP_FOLDER,
            Settings.QR_CODE_FOLDER
        ]

        for folder in folders:

            os.makedirs(
                folder,
                exist_ok=True
            )


# Initialize required folders
Settings.create_directories()