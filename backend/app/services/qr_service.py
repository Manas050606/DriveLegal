import jwt
from datetime import datetime
from datetime import timedelta

from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)

from app.config.settings import Settings

from app.models.user_model import (
    UserModel
)

from app.utils.validators import (
    validate_email,
    validate_password,
    validate_name
)


class AuthService:
    """
    Centralized Authentication Service
    Handles all authentication business logic.
    """

    def __init__(self):

        self.jwt_secret = (
            Settings.JWT_SECRET
        )

    # =========================================
    # GENERATE JWT TOKEN
    # =========================================

    def generate_token(
        self,
        user
    ):

        payload = {

            "user_id":
                user["id"],

            "email":
                user["email"],

            "role":
                user["role"],

            "exp":
                datetime.utcnow()
                + timedelta(days=1)
        }

        token = jwt.encode(
            payload,
            self.jwt_secret,
            algorithm="HS256"
        )

        return token

    # =========================================
    # VERIFY JWT TOKEN
    # =========================================

    def verify_token(
        self,
        token
    ):

        try:

            decoded = jwt.decode(
                token,
                self.jwt_secret,
                algorithms=["HS256"]
            )

            return {

                "success": True,

                "decoded":
                    decoded
            }

        except jwt.ExpiredSignatureError:

            return {

                "success": False,

                "message":
                    "Token expired"
            }

        except jwt.InvalidTokenError:

            return {

                "success": False,

                "message":
                    "Invalid token"
            }

    # =========================================
    # REGISTER USER
    # =========================================

    def register_user(
        self,
        name,
        email,
        password
    ):

        try:

            # ================================
            # VALIDATIONS
            # ================================

            if not validate_name(name):

                return {

                    "success": False,

                    "message":
                        "Invalid name"
                }

            if not validate_email(email):

                return {

                    "success": False,

                    "message":
                        "Invalid email"
                }

            password_validation = (
                validate_password(
                    password
                )
            )

            if not password_validation["valid"]:

                return {

                    "success": False,

                    "message":
                        password_validation[
                            "message"
                        ]
                }

            # ================================
            # CHECK EXISTING USER
            # ================================

            existing_user = (
                UserModel.get_user_by_email(
                    email
                )
            )

            if existing_user:

                return {

                    "success": False,

                    "message":
                        "User already exists"
                }

            # ================================
            # CREATE USER
            # ================================

            response = (
                UserModel.create_user(
                    name=name,
                    email=email,
                    password=password
                )
            )

            return response

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # LOGIN USER
    # =========================================

    def login_user(
        self,
        email,
        password
    ):

        try:

            # ================================
            # FIND USER
            # ================================

            user = (
                UserModel.get_user_by_email(
                    email
                )
            )

            if not user:

                return {

                    "success": False,

                    "message":
                        "User not found"
                }

            # ================================
            # VERIFY PASSWORD
            # ================================

            password_valid = (
                check_password_hash(
                    user["password"],
                    password
                )
            )

            if not password_valid:

                return {

                    "success": False,

                    "message":
                        "Invalid password"
                }

            # ================================
            # GENERATE TOKEN
            # ================================

            token = self.generate_token({

                "id": user["_id"],

                "email":
                    user["email"],

                "role":
                    user["role"]
            })

            return {

                "success": True,

                "message":
                    "Login successful",

                "token":
                    token,

                "user": {

                    "id":
                        user["_id"],

                    "name":
                        user["name"],

                    "email":
                        user["email"],

                    "role":
                        user["role"]
                }
            }

        except Exception as error:

            return {

                "success": False,

                "message": str(error)
            }

    # =========================================
    # HASH PASSWORD
    # =========================================

    def hash_password(
        self,
        password
    ):

        return generate_password_hash(
            password
        )

    # =========================================
    # VERIFY PASSWORD
    # =========================================

    def verify_password(
        self,
        hashed_password,
        password
    ):

        return check_password_hash(
            hashed_password,
            password
        )

    # =========================================
    # GET CURRENT USER
    # =========================================

    def get_current_user(
        self,
        token
    ):

        token_verification = (
            self.verify_token(token)
        )

        if not token_verification["success"]:

            return {

                "success": False,

                "message":
                    token_verification[
                        "message"
                    ]
            }

        decoded = token_verification[
            "decoded"
        ]

        user = UserModel.get_user_by_id(
            decoded["user_id"]
        )

        if not user:

            return {

                "success": False,

                "message":
                    "User not found"
            }

        return {

            "success": True,

            "user": {

                "id":
                    user["_id"],

                "name":
                    user["name"],

                "email":
                    user["email"],

                "role":
                    user["role"]
            }
        }

    # =========================================
    # REFRESH TOKEN
    # =========================================

    def refresh_token(
        self,
        token
    ):

        verification = self.verify_token(
            token
        )

        if not verification["success"]:

            return verification

        decoded = verification[
            "decoded"
        ]

        new_token = self.generate_token({

            "id":
                decoded["user_id"],

            "email":
                decoded["email"],

            "role":
                decoded["role"]
        })

        return {

            "success": True,

            "token":
                new_token
        }


# =========================================
# GLOBAL AUTH SERVICE INSTANCE
# =========================================

auth_service = AuthService()