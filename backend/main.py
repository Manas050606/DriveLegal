# ==========================================
# IMPORTS
# ==========================================

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv

import os

import uvicorn


# ==========================================
# LOAD ENVIRONMENT VARIABLES
# ==========================================

load_dotenv()


# ==========================================
# ROUTE IMPORTS
# ==========================================

from app.routes.auth_routes import (

    router as auth_router
)

from app.routes.upload_routes import (

    router as upload_router
)


# ==========================================
# FASTAPI APPLICATION
# ==========================================

app = FastAPI(

    title="DriveLegal AI",

    description="""
    AI-powered vehicle verification,
    OCR analysis, fraud detection,
    and intelligent security platform.
    """,

    version="1.0.0"
)


# ==========================================
# CORS CONFIGURATION
# ==========================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:5173",

        "http://127.0.0.1:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]
)


# ==========================================
# INCLUDE ROUTES
# ==========================================

app.include_router(auth_router)

app.include_router(upload_router)


# ==========================================
# ROOT ROUTE
# ==========================================

@app.get("/")

async def root():

    return {

        "success": True,

        "message":
            "DriveLegal AI Backend Running",

        "version": "1.0.0"
    }


# ==========================================
# HEALTH CHECK
# ==========================================

@app.get("/health")

async def health_check():

    return {

        "status": "healthy",

        "service": "DriveLegal AI Backend"
    }


# ==========================================
# STARTUP EVENT
# ==========================================

@app.on_event("startup")

async def startup_event():

    print("\n===================================")

    print(" DriveLegal AI Backend Started ")

    print("===================================\n")

    print("Server Running Successfully")


# ==========================================
# SHUTDOWN EVENT
# ==========================================

@app.on_event("shutdown")

async def shutdown_event():

    print("\n===================================")

    print(" DriveLegal AI Backend Stopped ")

    print("===================================\n")


# ==========================================
# MAIN ENTRY
# ==========================================

if __name__ == "__main__":

    uvicorn.run(

        "main:app",

        host="0.0.0.0",

        port=8000,

        reload=True
    )