import API from "./api";


// ==============================================
// PROCESS OCR DOCUMENT
// ==============================================

export const processOCRDocument = async (

    file,

    onUploadProgress = null

) => {

    try {

        const formData = new FormData();

        formData.append("file", file);

        const response = await API.post(

            "/ocr/process",

            formData,

            {

                headers: {

                    "Content-Type":
                        "multipart/form-data"
                },

                onUploadProgress: (progressEvent) => {

                    if (onUploadProgress) {

                        const progress =
                            Math.round(

                                (
                                    progressEvent.loaded * 100
                                ) /

                                progressEvent.total
                            );

                        onUploadProgress(progress);
                    }
                }
            }
        );

        return {

            success: true,

            data: response.data
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "OCR processing failed"
        };
    }
};


// ==============================================
// EXTRACT NUMBER PLATE TEXT
// ==============================================

export const extractNumberPlate = async (

    file,

    onUploadProgress = null

) => {

    try {

        const formData = new FormData();

        formData.append("file", file);

        const response = await API.post(

            "/ocr/extract-plate",

            formData,

            {

                headers: {

                    "Content-Type":
                        "multipart/form-data"
                },

                onUploadProgress: (progressEvent) => {

                    if (onUploadProgress) {

                        const progress =
                            Math.round(

                                (
                                    progressEvent.loaded * 100
                                ) /

                                progressEvent.total
                            );

                        onUploadProgress(progress);
                    }
                }
            }
        );

        return {

            success: true,

            data: response.data
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "Number plate extraction failed"
        };
    }
};


// ==============================================
// OCR FRAUD ANALYSIS
// ==============================================

export const analyzeOCRFraud = async (

    file,

    onUploadProgress = null

) => {

    try {

        const formData = new FormData();

        formData.append("file", file);

        const response = await API.post(

            "/ocr/fraud-analysis",

            formData,

            {

                headers: {

                    "Content-Type":
                        "multipart/form-data"
                },

                onUploadProgress: (progressEvent) => {

                    if (onUploadProgress) {

                        const progress =
                            Math.round(

                                (
                                    progressEvent.loaded * 100
                                ) /

                                progressEvent.total
                            );

                        onUploadProgress(progress);
                    }
                }
            }
        );

        return {

            success: true,

            data: response.data
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "Fraud OCR analysis failed"
        };
    }
};


// ==============================================
// GET OCR HISTORY
// ==============================================

export const getOCRHistory = async () => {

    try {

        const response = await API.get(

            "/ocr/history"
        );

        return {

            success: true,

            data: response.data
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "Failed to fetch OCR history"
        };
    }
};


// ==============================================
// GET OCR REPORT BY ID
// ==============================================

export const getOCRReport = async (

    reportId

) => {

    try {

        const response = await API.get(

            `/ocr/report/${reportId}`
        );

        return {

            success: true,

            data: response.data
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "Failed to fetch OCR report"
        };
    }
};


// ==============================================
// FORMAT OCR RESULT
// ==============================================

export const formatOCRResult = (

    ocrData

) => {

    if (!ocrData) {

        return null;
    }

    return {

        extractedText:
            ocrData.extracted_text || "N/A",

        confidence:
            ocrData.confidence || 0,

        ownerName:
            ocrData.owner_name || "Unknown",

        vehicleType:
            ocrData.vehicle_type || "Unknown",

        registrationNumber:
            ocrData.registration_number || "N/A",

        fraudProbability:
            ocrData.fraud_probability || 0,

        verificationStatus:
            ocrData.verification_status || "Pending",

        processedAt:
            ocrData.processed_at || new Date()
    };
};


// ==============================================
// PARSE NUMBER PLATE
// ==============================================

export const parseNumberPlate = (

    plateText

) => {

    if (!plateText) {

        return null;
    }

    const cleanedPlate =
        plateText.replace(/\s+/g, "");

    return {

        original: plateText,

        cleaned: cleanedPlate,

        stateCode:
            cleanedPlate.substring(0, 2),

        districtCode:
            cleanedPlate.substring(2, 4),

        series:
            cleanedPlate.substring(4, 6),

        uniqueNumber:
            cleanedPlate.substring(6)
    };
};


// ==============================================
// OCR CONFIDENCE LABEL
// ==============================================

export const getConfidenceLabel = (

    confidence

) => {

    if (confidence >= 90) {

        return "Excellent";
    }

    if (confidence >= 75) {

        return "Good";
    }

    if (confidence >= 50) {

        return "Average";
    }

    return "Low";
};


// ==============================================
// FRAUD RISK LABEL
// ==============================================

export const getFraudRiskLabel = (

    fraudProbability

) => {

    if (fraudProbability >= 70) {

        return "High Risk";
    }

    if (fraudProbability >= 40) {

        return "Medium Risk";
    }

    return "Low Risk";
};