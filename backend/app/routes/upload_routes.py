# ==========================================
# IMPORTS
# ==========================================

from fastapi import (

    APIRouter,

    UploadFile,

    File,

    HTTPException
)

from fastapi.responses import JSONResponse

from pathlib import Path

import shutil

import uuid

import os


# ==========================================
# AI ENGINE IMPORTS
# ==========================================

from ai_engine.number_plate.plate_ocr import (

    detect_number_plate
)


# ==========================================
# ROUTER
# ==========================================

router = APIRouter(

    prefix="/api/upload",

    tags=["Upload"]
)


# ==========================================
# UPLOAD DIRECTORY
# ==========================================

UPLOAD_DIR = "uploads"

os.makedirs(

    UPLOAD_DIR,

    exist_ok=True
)


# ==========================================
# ALLOWED FILE TYPES
# ==========================================

ALLOWED_EXTENSIONS = [

    ".png",

    ".jpg",

    ".jpeg",

    ".pdf"
]


# ==========================================
# VALIDATE FILE EXTENSION
# ==========================================

def validate_file_extension(

    filename: str

):

    extension = Path(

        filename

    ).suffix.lower()

    return extension in ALLOWED_EXTENSIONS


# ==========================================
# SAVE FILE
# ==========================================

def save_uploaded_file(

    uploaded_file: UploadFile

):

    extension = Path(

        uploaded_file.filename

    ).suffix

    unique_filename = (

        f"{uuid.uuid4()}{extension}"
    )

    file_path = os.path.join(

        UPLOAD_DIR,

        unique_filename
    )

    with open(

        file_path,

        "wb"
    ) as buffer:

        shutil.copyfileobj(

            uploaded_file.file,

            buffer
        )

    return file_path


# ==========================================
# ROOT TEST ROUTE
# ==========================================

@router.get("/")

async def upload_root():

    return {

        "message":
            "Upload Routes Working Successfully"
    }


# ==========================================
# DOCUMENT UPLOAD
# ==========================================

@router.post("/document")

async def upload_document(

    file: UploadFile = File(...)
):

    try:

        # ==================================
        # VALIDATE FILE
        # ==================================

        if not validate_file_extension(

            file.filename
        ):

            raise HTTPException(

                status_code=400,

                detail=
                    "Unsupported file format"
            )

        # ==================================
        # SAVE FILE
        # ==================================

        saved_file_path = save_uploaded_file(

            file
        )

        # ==================================
        # RESPONSE
        # ==================================

        return JSONResponse(

            status_code=200,

            content={

                "success": True,

                "message":
                    "Document uploaded successfully",

                "filename":
                    file.filename,

                "saved_path":
                    saved_file_path
            }
        )

    except Exception as error:

        raise HTTPException(

            status_code=500,

            detail=str(error)
        )


# ==========================================
# NUMBER PLATE OCR
# ==========================================

@router.post("/number-plate")

async def upload_number_plate(

    file: UploadFile = File(...)
):

    try:

        # ==================================
        # VALIDATE FILE
        # ==================================

        if not validate_file_extension(

            file.filename
        ):

            raise HTTPException(

                status_code=400,

                detail=
                    "Unsupported image format"
            )

        # ==================================
        # SAVE FILE
        # ==================================

        saved_file_path = save_uploaded_file(

            file
        )

        # ==================================
        # AI NUMBER PLATE DETECTION
        # ==================================

        result = detect_number_plate(

            saved_file_path
        )

        # ==================================
        # RESPONSE
        # ==================================

        return JSONResponse(

            status_code=200,

            content={

                "success": True,

                "message":
                    "Number plate processed successfully",

                "data":
                    result
            }
        )

    except Exception as error:

        raise HTTPException(

            status_code=500,

            detail=str(error)
        )


# ==========================================
# FILE DELETE
# ==========================================

@router.delete("/delete/{filename}")

async def delete_uploaded_file(

    filename: str
):

    try:

        file_path = os.path.join(

            UPLOAD_DIR,

            filename
        )

        if not os.path.exists(

            file_path
        ):

            raise HTTPException(

                status_code=404,

                detail=
                    "File not found"
            )

        os.remove(file_path)

        return {

            "success": True,

            "message":
                "File deleted successfully"
        }

    except Exception as error:

        raise HTTPException(

            status_code=500,

            detail=str(error)
        )


# ==========================================
# HEALTH CHECK
# ==========================================

@router.get("/health")

async def upload_health_check():

    return {

        "success": True,

        "service":
            "Upload Service Active"
    }