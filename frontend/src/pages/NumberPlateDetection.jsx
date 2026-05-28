import {

    useState

} from "react";

import {

    motion

} from "framer-motion";

import {

    ShieldCheck,

    ScanSearch,

    Car,

    AlertTriangle,

    Activity,

    BrainCircuit

} from "lucide-react";


// ==============================================
// COMPONENTS
// ==============================================

import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

import UploadCard from "../components/UploadCard";

import PlatePreview from "../components/PlatePreview";

import OCRResultCard from "../components/OCRResultCard";

import VerificationStatus from "../components/VerificationStatus";

import FraudAlert from "../components/FraudAlert";

import NotificationToast from "../components/NotificationToast";


// ==============================================
// SERVICES
// ==============================================

import {

    uploadNumberPlate

} from "../services/uploadService";


// ==============================================
// PAGE
// ==============================================

export default function NumberPlateDetection() {

    // ==========================================
    // STATES
    // ==========================================

    const [

        uploadedImage,

        setUploadedImage

    ] = useState(null);

    const [

        loading,

        setLoading

    ] = useState(false);

    const [

        result,

        setResult

    ] = useState(null);

    const [

        error,

        setError

    ] = useState(null);


    // ==========================================
    // HANDLE FILE UPLOAD
    // ==========================================

    const handleFileUpload = async (

        file

    ) => {

        try {

            setLoading(true);

            setError(null);

            // ==================================
            // IMAGE PREVIEW
            // ==================================

            const imageURL = URL.createObjectURL(

                file
            );

            setUploadedImage(imageURL);

            // ==================================
            // API REQUEST
            // ==================================

            const response = await uploadNumberPlate(

                file
            );

            const responseData =

                response?.data || response;

            setResult(responseData);

        } catch (err) {

            console.error(

                "OCR Error:",

                err
            );

            setError(

                "Failed to process number plate"
            );

        } finally {

            setLoading(false);
        }
    };


    return (

        <div
            className="
                min-h-screen
                bg-black
                text-white
            "
        >

            {/* ==================================
                SIDEBAR
            =================================== */}

            <Sidebar />

            {/* ==================================
                MAIN CONTENT
            =================================== */}

            <div className="lg:ml-72">

                {/* NAVBAR */}

                <Navbar />

                {/* CONTENT */}

                <main className="p-6 lg:p-10">

                    {/* ==========================
                        HERO
                    =========================== */}

                    <motion.div

                        initial={{

                            opacity: 0,

                            y: -20
                        }}

                        animate={{

                            opacity: 1,

                            y: 0
                        }}

                        className="
                            mb-10
                            flex
                            flex-col
                            gap-6
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >

                        <div>

                            <div
                                className="
                                    mb-4
                                    flex
                                    items-center
                                    gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-cyan-500/10
                                        text-cyan-400
                                    "
                                >

                                    <BrainCircuit
                                        size={30}
                                    />

                                </div>

                                <div>

                                    <h1
                                        className="
                                            text-4xl
                                            font-black
                                        "
                                    >
                                        Number Plate Detection
                                    </h1>

                                    <p
                                        className="
                                            mt-2
                                            text-zinc-400
                                        "
                                    >
                                        AI-powered OCR vehicle
                                        verification engine
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* STATUS */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-emerald-500/20
                                bg-emerald-500/10
                                px-5
                                py-3
                                text-sm
                                font-bold
                                text-emerald-400
                            "
                        >

                            <ShieldCheck
                                size={18}
                            />

                            AI Engine Online

                        </div>

                    </motion.div>

                    {/* ==========================
                        GRID
                    =========================== */}

                    <div
                        className="
                            grid
                            gap-8
                            xl:grid-cols-2
                        "
                    >

                        {/* ======================
                            LEFT PANEL
                        ======================= */}

                        <div className="space-y-8">

                            {/* UPLOAD */}

                            <UploadCard

                                title="
                                    Upload Vehicle Image
                                "

                                description="
                                    Upload vehicle image
                                    for OCR plate detection
                                "

                                onUpload={
                                    handleFileUpload
                                }

                                loading={loading}
                            />

                            {/* ERROR */}

                            {

                                error && (

                                    <FraudAlert

                                        level="High"

                                        message={error}
                                    />
                                )
                            }

                            {/* OCR RESULT */}

                            {

                                result && (

                                    <OCRResultCard

                                        extractedText={

                                            result
                                                ?.plate_number
                                        }

                                        confidence={

                                            result
                                                ?.confidence
                                        }

                                        status={

                                            result?.is_valid

                                                ? "Verified"

                                                : "Suspicious"
                                        }
                                    />
                                )
                            }

                        </div>

                        {/* ======================
                            RIGHT PANEL
                        ======================= */}

                        <div className="space-y-8">

                            {/* PREVIEW */}

                            <PlatePreview

                                image={uploadedImage}

                                plateNumber={

                                    result?.plate_number
                                }

                                confidence={

                                    result?.confidence
                                }

                                status={

                                    result?.is_valid

                                        ? "Verified"

                                        : "Suspicious"
                                }
                            />

                            {/* VERIFICATION */}

                            {

                                result && (

                                    <VerificationStatus

                                        verified={

                                            result?.is_valid
                                        }

                                        confidence={

                                            result?.confidence
                                        }

                                        message={

                                            result?.message
                                        }
                                    />
                                )
                            }

                        </div>

                    </div>

                    {/* ==========================
                        LIVE ANALYTICS
                    =========================== */}

                    <motion.div

                        initial={{

                            opacity: 0,

                            y: 20
                        }}

                        animate={{

                            opacity: 1,

                            y: 0
                        }}

                        transition={{

                            delay: 0.3
                        }}

                        className="
                            mt-10
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-950
                            p-8
                        "
                    >

                        <div
                            className="
                                mb-8
                                flex
                                items-center
                                gap-4
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-cyan-500/10
                                    text-cyan-400
                                "
                            >

                                <Activity
                                    size={28}
                                />

                            </div>

                            <div>

                                <h2
                                    className="
                                        text-3xl
                                        font-black
                                    "
                                >
                                    AI OCR Analytics
                                </h2>

                                <p
                                    className="
                                        mt-2
                                        text-zinc-400
                                    "
                                >
                                    Real-time OCR monitoring
                                    and verification engine
                                </p>

                            </div>

                        </div>

                        {/* ANALYTICS */}

                        <div
                            className="
                                grid
                                gap-6
                                md:grid-cols-3
                            "
                        >

                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-zinc-800
                                    bg-zinc-900/60
                                    p-6
                                "
                            >

                                <p
                                    className="
                                        text-sm
                                        text-zinc-500
                                    "
                                >
                                    OCR Requests
                                </p>

                                <h2
                                    className="
                                        mt-4
                                        text-4xl
                                        font-black
                                        text-cyan-400
                                    "
                                >
                                    12,847
                                </h2>

                            </div>

                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-zinc-800
                                    bg-zinc-900/60
                                    p-6
                                "
                            >

                                <p
                                    className="
                                        text-sm
                                        text-zinc-500
                                    "
                                >
                                    Detection Accuracy
                                </p>

                                <h2
                                    className="
                                        mt-4
                                        text-4xl
                                        font-black
                                        text-emerald-400
                                    "
                                >
                                    98.7%
                                </h2>

                            </div>

                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-zinc-800
                                    bg-zinc-900/60
                                    p-6
                                "
                            >

                                <p
                                    className="
                                        text-sm
                                        text-zinc-500
                                    "
                                >
                                    Threat Level
                                </p>

                                <h2
                                    className="
                                        mt-4
                                        text-4xl
                                        font-black
                                        text-red-400
                                    "
                                >
                                    LOW
                                </h2>

                            </div>

                        </div>

                    </motion.div>

                    {/* ==========================
                        TOAST
                    =========================== */}

                    <NotificationToast

                        type="success"

                        message="
                            AI OCR Engine Operational
                        "
                    />

                </main>

            </div>

        </div>
    );
}