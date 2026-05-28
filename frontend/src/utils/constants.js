// ==============================================
// API CONFIGURATION
// ==============================================

export const API_BASE_URL =

    import.meta.env.VITE_API_URL ||

    "http://localhost:5000/api";


// ==============================================
// APPLICATION INFO
// ==============================================

export const APP_CONFIG = {

    APP_NAME: "DriveLegal AI",

    APP_DESCRIPTION:
        "AI-powered vehicle verification platform",

    VERSION: "1.0.0",

    COMPANY: "DriveLegal Technologies"
};


// ==============================================
// ROUTES
// ==============================================

export const ROUTES = {

    HOME: "/",

    LOGIN: "/login",

    REGISTER: "/register",

    DASHBOARD: "/dashboard",

    UPLOAD_DOCUMENTS:
        "/upload-documents",

    NUMBER_PLATE_DETECTION:
        "/number-plate-detection",

    VERIFICATION:
        "/verification",

    FRAUD_DETECTION:
        "/fraud-detection",

    ADMIN_PANEL:
        "/admin-panel"
};


// ==============================================
// LOCAL STORAGE KEYS
// ==============================================

export const STORAGE_KEYS = {

    TOKEN: "drivelegal_token",

    USER: "drivelegal_user",

    THEME: "drivelegal_theme",

    SETTINGS: "drivelegal_settings"
};


// ==============================================
// FILE CONFIGURATION
// ==============================================

export const FILE_CONFIG = {

    MAX_FILE_SIZE_MB: 10,

    MAX_FILE_SIZE_BYTES:
        10 * 1024 * 1024,

    ALLOWED_IMAGE_TYPES: [

        "image/png",

        "image/jpeg",

        "image/jpg"
    ],

    ALLOWED_DOCUMENT_TYPES: [

        "application/pdf",

        "image/png",

        "image/jpeg",

        "image/jpg"
    ]
};


// ==============================================
// VERIFICATION STATUS
// ==============================================

export const VERIFICATION_STATUS = {

    VERIFIED: "Verified",

    PENDING: "Pending",

    SUSPICIOUS: "Suspicious",

    FRAUD: "Fraud"
};


// ==============================================
// FRAUD LEVELS
// ==============================================

export const FRAUD_LEVELS = {

    LOW: "LOW",

    MEDIUM: "MEDIUM",

    HIGH: "HIGH"
};


// ==============================================
// AI CONFIDENCE LEVELS
// ==============================================

export const CONFIDENCE_LEVELS = {

    EXCELLENT: 90,

    GOOD: 75,

    AVERAGE: 50,

    LOW: 0
};


// ==============================================
// DASHBOARD METRICS
// ==============================================

export const DASHBOARD_STATS = {

    AI_ACCURACY: "98.7%",

    DAILY_SCANS: "12K+",

    FRAUD_DETECTION: "96%",

    AVG_PROCESSING_TIME: "1.2s"
};


// ==============================================
// COLORS
// ==============================================

export const STATUS_COLORS = {

    VERIFIED: "emerald",

    PENDING: "yellow",

    SUSPICIOUS: "orange",

    FRAUD: "red"
};


// ==============================================
// TOAST TYPES
// ==============================================

export const TOAST_TYPES = {

    SUCCESS: "success",

    ERROR: "error",

    WARNING: "warning",

    INFO: "info"
};


// ==============================================
// OCR CONFIGURATION
// ==============================================

export const OCR_CONFIG = {

    MIN_CONFIDENCE: 70,

    AUTO_VERIFY_THRESHOLD: 90,

    MAX_PROCESSING_TIME: 5000
};


// ==============================================
// NUMBER PLATE REGEX
// ==============================================

export const NUMBER_PLATE_REGEX =

    /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;


// ==============================================
// ANIMATION DURATIONS
// ==============================================

export const ANIMATION_DURATION = {

    FAST: 0.2,

    NORMAL: 0.4,

    SLOW: 0.8
};


// ==============================================
// TABLE PAGINATION
// ==============================================

export const PAGINATION = {

    DEFAULT_PAGE: 1,

    DEFAULT_LIMIT: 10,

    MAX_LIMIT: 100
};


// ==============================================
// SECURITY CONFIG
// ==============================================

export const SECURITY_CONFIG = {

    SESSION_TIMEOUT: 3600000,

    MAX_LOGIN_ATTEMPTS: 5,

    TOKEN_REFRESH_TIME: 900000
};


// ==============================================
// MOCK AI DATA
// ==============================================

export const MOCK_AI_RESULTS = {

    PLATE_NUMBER: "MH12AB1234",

    OWNER_NAME: "Rahul Sharma",

    VEHICLE_TYPE: "SUV",

    CONFIDENCE: 98.4,

    FRAUD_PROBABILITY: 6,

    STATUS: "Verified"
};


// ==============================================
// CHART COLORS
// ==============================================

export const CHART_COLORS = [

    "#06b6d4",

    "#10b981",

    "#eab308",

    "#ef4444",

    "#8b5cf6"
];


// ==============================================
// SIDEBAR NAVIGATION
// ==============================================

export const SIDEBAR_LINKS = [

    {

        name: "Dashboard",

        path: ROUTES.DASHBOARD
    },

    {

        name: "Upload Documents",

        path: ROUTES.UPLOAD_DOCUMENTS
    },

    {

        name: "Number Plate Detection",

        path: ROUTES.NUMBER_PLATE_DETECTION
    },

    {

        name: "Verification",

        path: ROUTES.VERIFICATION
    },

    {

        name: "Fraud Detection",

        path: ROUTES.FRAUD_DETECTION
    },

    {

        name: "Admin Panel",

        path: ROUTES.ADMIN_PANEL
    }
];