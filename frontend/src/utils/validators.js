// ==============================================
// VALIDATE EMAIL
// ==============================================

export const validateEmail = (

    email

) => {

    if (!email) {

        return {

            valid: false,

            message: "Email is required"
        };
    }

    const emailRegex =

        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValid =
        emailRegex.test(email);

    return {

        valid: isValid,

        message: isValid
            ? "Valid email"
            : "Invalid email address"
    };
};


// ==============================================
// VALIDATE PASSWORD
// ==============================================

export const validatePassword = (

    password

) => {

    if (!password) {

        return {

            valid: false,

            message: "Password is required"
        };
    }

    if (password.length < 6) {

        return {

            valid: false,

            message:
                "Password must contain at least 6 characters"
        };
    }

    const strongPasswordRegex =

        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    const isStrong =
        strongPasswordRegex.test(password);

    return {

        valid: isStrong,

        message: isStrong
            ? "Strong password"
            : "Password must include uppercase, lowercase, and number"
    };
};


// ==============================================
// VALIDATE CONFIRM PASSWORD
// ==============================================

export const validateConfirmPassword = (

    password,

    confirmPassword

) => {

    const isValid =
        password === confirmPassword;

    return {

        valid: isValid,

        message: isValid
            ? "Passwords match"
            : "Passwords do not match"
    };
};


// ==============================================
// VALIDATE NAME
// ==============================================

export const validateName = (

    name

) => {

    if (!name) {

        return {

            valid: false,

            message: "Name is required"
        };
    }

    if (name.trim().length < 3) {

        return {

            valid: false,

            message:
                "Name must contain at least 3 characters"
        };
    }

    return {

        valid: true,

        message: "Valid name"
    };
};


// ==============================================
// VALIDATE NUMBER PLATE
// ==============================================

export const validateNumberPlate = (

    plateNumber

) => {

    if (!plateNumber) {

        return {

            valid: false,

            message:
                "Number plate is required"
        };
    }

    const cleanedPlate =
        plateNumber.replace(/\s+/g, "");

    const plateRegex =

        /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;

    const isValid =
        plateRegex.test(cleanedPlate);

    return {

        valid: isValid,

        message: isValid
            ? "Valid number plate"
            : "Invalid number plate format"
    };
};


// ==============================================
// VALIDATE FILE TYPE
// ==============================================

export const validateFileType = (

    file,

    allowedTypes = []

) => {

    if (!file) {

        return {

            valid: false,

            message: "No file selected"
        };
    }

    const isValid =
        allowedTypes.includes(file.type);

    return {

        valid: isValid,

        message: isValid
            ? "Valid file type"
            : "Unsupported file type"
    };
};


// ==============================================
// VALIDATE FILE SIZE
// ==============================================

export const validateFileSize = (

    file,

    maxSizeMB = 10

) => {

    if (!file) {

        return {

            valid: false,

            message: "No file selected"
        };
    }

    const maxSizeBytes =
        maxSizeMB * 1024 * 1024;

    const isValid =
        file.size <= maxSizeBytes;

    return {

        valid: isValid,

        message: isValid
            ? "Valid file size"
            : `File size exceeds ${maxSizeMB} MB`
    };
};


// ==============================================
// VALIDATE DOCUMENT FILE
// ==============================================

export const validateDocumentFile = (

    file

) => {

    const allowedTypes = [

        "application/pdf",

        "image/png",

        "image/jpeg",

        "image/jpg"
    ];

    const typeValidation =
        validateFileType(

            file,

            allowedTypes
        );

    if (!typeValidation.valid) {

        return typeValidation;
    }

    return validateFileSize(file, 10);
};


// ==============================================
// VALIDATE IMAGE FILE
// ==============================================

export const validateImageFile = (

    file

) => {

    const allowedTypes = [

        "image/png",

        "image/jpeg",

        "image/jpg"
    ];

    const typeValidation =
        validateFileType(

            file,

            allowedTypes
        );

    if (!typeValidation.valid) {

        return typeValidation;
    }

    return validateFileSize(file, 5);
};


// ==============================================
// VALIDATE REQUIRED FIELD
// ==============================================

export const validateRequired = (

    value,

    fieldName = "Field"

) => {

    const isValid =
        value !== undefined
        && value !== null
        && value.toString().trim() !== "";

    return {

        valid: isValid,

        message: isValid
            ? `${fieldName} is valid`
            : `${fieldName} is required`
    };
};


// ==============================================
// VALIDATE OTP
// ==============================================

export const validateOTP = (

    otp

) => {

    const otpRegex = /^\d{6}$/;

    const isValid =
        otpRegex.test(otp);

    return {

        valid: isValid,

        message: isValid
            ? "Valid OTP"
            : "OTP must contain 6 digits"
    };
};


// ==============================================
// VALIDATE URL
// ==============================================

export const validateURL = (

    url

) => {

    try {

        new URL(url);

        return {

            valid: true,

            message: "Valid URL"
        };

    } catch {

        return {

            valid: false,

            message: "Invalid URL"
        };
    }
};


// ==============================================
// VALIDATE FRAUD SCORE
// ==============================================

export const validateFraudScore = (

    score

) => {

    const numericScore =
        Number(score);

    const isValid =

        !Number.isNaN(numericScore)

        &&

        numericScore >= 0

        &&

        numericScore <= 100;

    return {

        valid: isValid,

        message: isValid
            ? "Valid fraud score"
            : "Fraud score must be between 0 and 100"
    };
};


// ==============================================
// VALIDATE AI CONFIDENCE
// ==============================================

export const validateAIConfidence = (

    confidence

) => {

    const numericConfidence =
        Number(confidence);

    const isValid =

        !Number.isNaN(numericConfidence)

        &&

        numericConfidence >= 0

        &&

        numericConfidence <= 100;

    return {

        valid: isValid,

        message: isValid
            ? "Valid AI confidence"
            : "AI confidence must be between 0 and 100"
    };
};


// ==============================================
// VALIDATE LOGIN FORM
// ==============================================

export const validateLoginForm = (

    formData

) => {

    const emailValidation =
        validateEmail(formData.email);

    if (!emailValidation.valid) {

        return emailValidation;
    }

    const passwordValidation =
        validateRequired(

            formData.password,

            "Password"
        );

    if (!passwordValidation.valid) {

        return passwordValidation;
    }

    return {

        valid: true,

        message: "Login form valid"
    };
};


// ==============================================
// VALIDATE REGISTER FORM
// ==============================================

export const validateRegisterForm = (

    formData

) => {

    const nameValidation =
        validateName(formData.name);

    if (!nameValidation.valid) {

        return nameValidation;
    }

    const emailValidation =
        validateEmail(formData.email);

    if (!emailValidation.valid) {

        return emailValidation;
    }

    const passwordValidation =
        validatePassword(
            formData.password
        );

    if (!passwordValidation.valid) {

        return passwordValidation;
    }

    const confirmValidation =
        validateConfirmPassword(

            formData.password,

            formData.confirmPassword
        );

    if (!confirmValidation.valid) {

        return confirmValidation;
    }

    return {

        valid: true,

        message:
            "Registration form valid"
    };
};