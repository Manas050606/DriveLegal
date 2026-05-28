# ==========================================
# IMPORTS
# ==========================================

from fastapi import (

    APIRouter,

    HTTPException,

    status
)

from fastapi.responses import JSONResponse

from passlib.context import CryptContext

from jose import jwt

from datetime import (

    datetime,

    timedelta
)

from dotenv import load_dotenv

import os


# ==========================================
# LOAD ENV VARIABLES
# ==========================================

load_dotenv()


# ==========================================
# USER MODELS
# ==========================================

from app.models.user_model import (

    UserRegister,

    UserLogin,

    UserModel
)


# ==========================================
# ROUTER
# ==========================================

router = APIRouter(

    prefix="/api/auth",

    tags=["Authentication"]
)


# ==========================================
# PASSWORD HASHING
# ==========================================

pwd_context = CryptContext(

    schemes=["bcrypt"],

    deprecated="auto"
)


# ==========================================
# JWT CONFIG
# ==========================================

SECRET_KEY = os.getenv(

    "JWT_SECRET_KEY",

    "DriveLegalSecretKey"
)

ALGORITHM = os.getenv(

    "JWT_ALGORITHM",

    "HS256"
)

ACCESS_TOKEN_EXPIRE_MINUTES = int(

    os.getenv(

        "JWT_ACCESS_TOKEN_EXPIRE_MINUTES",

        60
    )
)


# ==========================================
# TEMP DATABASE
# ==========================================

fake_users_db = {}


# ==========================================
# HASH PASSWORD
# ==========================================

def hash_password(

    password: str

):

    return pwd_context.hash(password)


# ==========================================
# VERIFY PASSWORD
# ==========================================

def verify_password(

    plain_password: str,

    hashed_password: str
):

    return pwd_context.verify(

        plain_password,

        hashed_password
    )


# ==========================================
# CREATE ACCESS TOKEN
# ==========================================

def create_access_token(

    data: dict,

    expires_delta: timedelta = None
):

    to_encode = data.copy()

    expire = datetime.now() + (

        expires_delta

        or

        timedelta(

            minutes=
            ACCESS_TOKEN_EXPIRE_MINUTES
        )
    )

    to_encode.update({

        "exp": expire
    })

    encoded_jwt = jwt.encode(

        to_encode,

        SECRET_KEY,

        algorithm=ALGORITHM
    )

    return encoded_jwt


# ==========================================
# ROOT ROUTE
# ==========================================

@router.get("/")

async def auth_root():

    return {

        "success": True,

        "message":
            "Authentication Service Running"
    }


# ==========================================
# REGISTER
# ==========================================

@router.post("/register")

async def register_user(

    user: UserRegister
):

    try:

        # ==================================
        # USER EXISTS
        # ==================================

        if user.email in fake_users_db:

            raise HTTPException(

                status_code=400,

                detail=
                    "User already exists"
            )

        # ==================================
        # HASH PASSWORD
        # ==================================

        hashed_password = hash_password(

            user.password
        )

        # ==================================
        # CREATE USER
        # ==================================

        new_user = UserModel(

            name=user.name,

            email=user.email,

            hashed_password=
                hashed_password
        )

        # ==================================
        # STORE USER
        # ==================================

        fake_users_db[user.email] = (

            new_user.model_dump(
                mode="json"
            )
        )

        # ==================================
        # GENERATE TOKEN
        # ==================================

        access_token = create_access_token(

            data={

                "sub":
                    user.email
            }
        )

        # ==================================
        # RESPONSE
        # ==================================

        return {

            "success": True,

            "message":
                "User registered successfully",

            "access_token":
                access_token,

            "token_type":
                "bearer",

            "user": {

                "name":
                    user.name,

                "email":
                    user.email
            }
        }

    except HTTPException:

        raise

    except Exception as error:

        print(

            "REGISTER ERROR:",

            str(error)
        )

        raise HTTPException(

            status_code=500,

            detail=str(error)
        )


# ==========================================
# LOGIN
# ==========================================

@router.post("/login")

async def login_user(

    user: UserLogin
):

    try:

        # ==================================
        # FIND USER
        # ==================================

        existing_user = fake_users_db.get(

            user.email
        )

        if not existing_user:

            raise HTTPException(

                status_code=401,

                detail=
                    "Invalid email or password"
            )

        # ==================================
        # VERIFY PASSWORD
        # ==================================

        password_valid = verify_password(

            user.password,

            existing_user[
                "hashed_password"
            ]
        )

        if not password_valid:

            raise HTTPException(

                status_code=401,

                detail=
                    "Invalid email or password"
            )

        # ==================================
        # GENERATE TOKEN
        # ==================================

        access_token = create_access_token(

            data={

                "sub":
                    existing_user["email"]
            }
        )

        # ==================================
        # RESPONSE
        # ==================================

        return {

            "success": True,

            "message":
                "Login successful",

            "access_token":
                access_token,

            "token_type":
                "bearer",

            "user": {

                "name":
                    existing_user["name"],

                "email":
                    existing_user["email"],

                "role":
                    existing_user["role"]
            }
        }

    except HTTPException:

        raise

    except Exception as error:

        print(

            "LOGIN ERROR:",

            str(error)
        )

        raise HTTPException(

            status_code=500,

            detail=str(error)
        )


# ==========================================
# PROFILE
# ==========================================

@router.get("/profile")

async def get_profile():

    return {

        "success": True,

        "message":
            "Profile fetched successfully"
    }


# ==========================================
# LOGOUT
# ==========================================

@router.post("/logout")

async def logout_user():

    return {

        "success": True,

        "message":
            "Logout successful"
    }


# ==========================================
# HEALTH CHECK
# ==========================================

@router.get("/health")

async def auth_health():

    return {

        "success": True,

        "service":
            "Authentication Service Active"
    }