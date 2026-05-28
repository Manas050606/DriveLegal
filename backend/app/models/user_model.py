# ==========================================
# IMPORTS
# ==========================================

from pydantic import BaseModel, EmailStr, Field

from typing import Optional

from datetime import datetime

from uuid import uuid4


# ==========================================
# BASE USER MODEL
# ==========================================

class UserBase(BaseModel):

    name: str = Field(

        ...,

        min_length=3,

        max_length=100,

        description="Full name of user"
    )

    email: EmailStr


# ==========================================
# USER REGISTER MODEL
# ==========================================

class UserRegister(UserBase):

    password: str = Field(

        ...,

        min_length=6,

        description="User password"
    )


# ==========================================
# USER LOGIN MODEL
# ==========================================

class UserLogin(BaseModel):

    email: EmailStr

    password: str


# ==========================================
# MAIN USER MODEL
# ==========================================

class UserModel(UserBase):

    user_id: str = Field(

        default_factory=lambda: str(uuid4())
    )

    hashed_password: str

    role: str = "user"

    is_active: bool = True

    is_verified: bool = False

    created_at: datetime = Field(

        default_factory=datetime.utcnow
    )

    updated_at: datetime = Field(

        default_factory=datetime.utcnow
    )

    last_login: Optional[datetime] = None

    profile_image: Optional[str] = None

    total_verifications: int = 0

    fraud_reports: int = 0

    ai_trust_score: float = 100.0

    class Config:

        populate_by_name = True

        json_schema_extra = {

            "example": {

                "user_id":
                    "a1b2c3d4",

                "name":
                    "Partha Khare",

                "email":
                    "partha@example.com",

                "hashed_password":
                    "hashed_password_here",

                "role":
                    "admin",

                "is_active":
                    True,

                "is_verified":
                    True,

                "created_at":
                    "2026-05-28T10:00:00",

                "updated_at":
                    "2026-05-28T10:00:00",

                "last_login":
                    "2026-05-28T10:10:00",

                "profile_image":
                    None,

                "total_verifications":
                    24,

                "fraud_reports":
                    1,

                "ai_trust_score":
                    98.4
            }
        }


# ==========================================
# USER RESPONSE MODEL
# ==========================================

class UserResponse(UserBase):

    user_id: str

    role: str

    is_active: bool

    is_verified: bool

    created_at: datetime

    total_verifications: int

    fraud_reports: int

    ai_trust_score: float


# ==========================================
# TOKEN MODEL
# ==========================================

class TokenModel(BaseModel):

    access_token: str

    token_type: str = "bearer"


# ==========================================
# TOKEN DATA
# ==========================================

class TokenData(BaseModel):

    email: Optional[str] = None


# ==========================================
# PASSWORD UPDATE MODEL
# ==========================================

class PasswordUpdate(BaseModel):

    current_password: str

    new_password: str = Field(

        ...,

        min_length=6
    )


# ==========================================
# USER UPDATE MODEL
# ==========================================

class UserUpdate(BaseModel):

    name: Optional[str] = None

    profile_image: Optional[str] = None

    is_verified: Optional[bool] = None

    updated_at: datetime = Field(

        default_factory=datetime.utcnow
    )