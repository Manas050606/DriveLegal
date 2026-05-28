import API from "./api";


// ==============================================
// VERIFY DOCUMENT
// ==============================================

export const verifyDocument = async (

    verificationData

) => {

    try {

        const response = await API.post(

            "/verification/verify",

            verificationData
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

                "Document verification failed"
        };
    }
};


// ==============================================
// VERIFY NUMBER PLATE
// ==============================================

export const verifyNumberPlate = async (

    plateNumber

) => {

    try {

        const response = await API.post(

            "/verification/number-plate",

            {
                plate_number: plateNumber
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

                "Number plate verification failed"
        };
    }
};


// ==============================================
// RUN FRAUD ANALYSIS
// ==============================================

export const runFraudAnalysis = async (

    verificationId

) => {

    try {

        const response = await API.post(

            "/verification/fraud-analysis",

            {
                verification_id: verificationId
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

                "Fraud analysis failed"
        };
    }
};


// ==============================================
// GET VERIFICATION STATUS
// ==============================================

export const getVerificationStatus = async (

    verificationId

) => {

    try {

        const response = await API.get(

            `/verification/status/${verificationId}`
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

                "Failed to fetch verification status"
        };
    }
};


// ==============================================
// GET VERIFICATION REPORT
// ==============================================

export const getVerificationReport = async (

    verificationId

) => {

    try {

        const response = await API.get(

            `/verification/report/${verificationId}`
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

                "Failed to fetch verification report"
        };
    }
};


// ==============================================
// GET VERIFICATION HISTORY
// ==============================================

export const getVerificationHistory = async () => {

    try {

        const response = await API.get(

            "/verification/history"
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

                "Failed to fetch verification history"
        };
    }
};


// ==============================================
// GET ANALYTICS DASHBOARD
// ==============================================

export const getVerificationAnalytics = async () => {

    try {

        const response = await API.get(

            "/verification/analytics"
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

                "Failed to fetch analytics"
        };
    }
};


// ==============================================
// GET LIVE MONITORING STATS
// ==============================================

export const getLiveMonitoringStats = async () => {

    try {

        const response = await API.get(

            "/verification/live-stats"
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

                "Failed to fetch live stats"
        };
    }
};


// ==============================================
// DOWNLOAD VERIFICATION REPORT
// ==============================================

export const downloadVerificationReport = async (

    verificationId

) => {

    try {

        const response = await API.get(

            `/verification/download/${verificationId}`,

            {
                responseType: "blob"
            }
        );

        const blob = new Blob(

            [response.data],

            {
                type: "application/pdf"
            }
        );

        const url =
            window.URL.createObjectURL(blob);

        const link =
            document.createElement("a");

        link.href = url;

        link.download =
            `verification_report_${verificationId}.pdf`;

        document.body.appendChild(link);

        link.click();

        link.remove();

        return {

            success: true
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "Report download failed"
        };
    }
};


// ==============================================
// FORMAT VERIFICATION RESULT
// ==============================================

export const formatVerificationResult = (

    verificationData

) => {

    if (!verificationData) {

        return null;
    }

    return {

        verificationId:
            verificationData.verification_id || "N/A",

        status:
            verificationData.status || "Pending",

        confidence:
            verificationData.confidence || 0,

        fraudRisk:
            verificationData.fraud_risk || 0,

        aiDecision:
            verificationData.ai_decision ||

            "No decision available",

        verifiedAt:
            verificationData.verified_at ||

            new Date(),

        processingTime:
            verificationData.processing_time ||

            "N/A",

        detectedPlate:
            verificationData.detected_plate ||

            "N/A",

        ownerName:
            verificationData.owner_name ||

            "Unknown",

        vehicleType:
            verificationData.vehicle_type ||

            "Unknown"
    };
};


// ==============================================
// GET STATUS COLOR
// ==============================================

export const getVerificationStatusColor = (

    status

) => {

    switch (status) {

        case "Verified":

            return "emerald";

        case "Suspicious":

            return "yellow";

        case "Fraud":

            return "red";

        default:

            return "zinc";
    }
};


// ==============================================
// GET STATUS LABEL
// ==============================================

export const getVerificationLabel = (

    status

) => {

    switch (status) {

        case "Verified":

            return "Document Verified";

        case "Suspicious":

            return "Suspicious Activity";

        case "Fraud":

            return "Fraud Detected";

        default:

            return "Pending Verification";
    }
};


// ==============================================
// GENERATE MOCK ANALYTICS
// ==============================================

export const generateMockAnalytics = () => {

    return {

        totalVerifications: 1248,

        fraudDetected: 86,

        aiAccuracy: 98.7,

        activeScans: 18,

        avgProcessingTime: "1.2s",

        verificationSuccessRate: 96,

        liveMonitoring: "ACTIVE"
    };
};