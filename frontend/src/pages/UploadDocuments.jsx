import { useState } from "react";

import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

import UploadCard from "../components/UploadCard";

import OCRResultCard from "../components/OCRResultCard";

import VerificationStatus from "../components/VerificationStatus";

import NotificationToast from "../components/NotificationToast";

import Loader from "../components/Loader";

import {
    ShieldCheck,
    BrainCircuit,
    ScanSearch,
    FileText,
    Activity
} from "lucide-react";

import { motion } from "framer-motion";

import {
    uploadDocument
} from "../services/uploadService";


export default function UploadDocuments() {

    const [selectedFile, setSelectedFile] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [ocrCompleted, setOcrCompleted] =
        useState(false);

    const [verificationCompleted,
        setVerificationCompleted] =
        useState(false);

    const [toast, setToast] =
        useState({

            show: false,

            type: "success",

            title: "",

            message: ""
        });


    // ==========================================
    // HANDLE FILE SELECT
    // ==========================================

    const handleFileSelect = async (file) => {

        setSelectedFile(file);

        setLoading(true);

        setOcrCompleted(false);

        setVerificationCompleted(false);

        try {

            // ==================================
            // MOCK UPLOAD FLOW
            // ==================================

            await uploadDocument(file);

            setTimeout(() => {

                setOcrCompleted(true);

            }, 2500);

            setTimeout(() => {

                setVerificationCompleted(true);

            }, 4000);

            setToast({

                show: true,

                type: "success",

                title: "Upload Successful",

                message:
                    "AI processing has started."
            });

        } catch (error) {

            setToast({

                show: true,

                type: "error",

                title: "Upload Failed",

                message:
                    "Unable to process document."
            });

        } finally {

            setTimeout(() => {

                setLoading(false);

            }, 2500);
        }
    };


    return (

        <div
            className="
                flex
                min-h-screen
                bg-black
                text-white
            "
        >

            {/* SIDEBAR */}

            <div className="hidden xl:block">

                <Sidebar />

            </div>

            {/* MAIN CONTENT */}

            <div className="flex-1">

                {/* NAVBAR */}

                <Navbar />

                {/* PAGE */}

                <main
                    className="
                        space-y-8
                        p-6
                    "
                >

                    {/* HERO */}

                    <section
                        className="
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-950
                            p-8
                            shadow-2xl
                        "
                    >

                        {/* Glow */}

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-br
                                from-cyan-500/10
                                via-transparent
                                to-emerald-500/10
                            "
                        />

                        <div className="relative z-10">

                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-8
                                    xl:flex-row
                                    xl:items-center
                                    xl:justify-between
                                "
                            >

                                {/* LEFT */}

                                <div>

                                    <div
                                        className="
                                            inline-flex
                                            items-center
                                            gap-3
                                            rounded-full
                                            border
                                            border-cyan-500/20
                                            bg-cyan-500/10
                                            px-5
                                            py-2
                                        "
                                    >

                                        <Activity
                                            size={16}
                                            className="text-emerald-400"
                                        />

                                        <span
                                            className="
                                                text-sm
                                                font-semibold
                                                text-cyan-300
                                            "
                                        >
                                            OCR Processing Active
                                        </span>

                                    </div>

                                    <h1
                                        className="
                                            mt-6
                                            text-5xl
                                            font-black
                                            leading-tight
                                            xl:text-6xl
                                        "
                                    >
                                        Upload &
                                        Verify Documents
                                    </h1>

                                    <p
                                        className="
                                            mt-6
                                            max-w-3xl
                                            text-lg
                                            leading-relaxed
                                            text-zinc-400
                                        "
                                    >
                                        Upload vehicle documents,
                                        insurance papers, RC,
                                        licenses, and AI will
                                        automatically process OCR,
                                        detect fraud, and verify
                                        authenticity.
                                    </p>

                                </div>

                                {/* RIGHT STATS */}

                                <div
                                    className="
                                        grid
                                        gap-5
                                        sm:grid-cols-2
                                    "
                                >

                                    <StatCard
                                        title="OCR Accuracy"
                                        value="98.7%"
                                        color="emerald"
                                    />

                                    <StatCard
                                        title="Avg Scan Time"
                                        value="1.2s"
                                        color="cyan"
                                    />

                                    <StatCard
                                        title="AI Detection"
                                        value="96%"
                                        color="yellow"
                                    />

                                    <StatCard
                                        title="Fraud Scan"
                                        value="ACTIVE"
                                        color="red"
                                    />

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* WORKFLOW STEPS */}

                    <section
                        className="
                            grid
                            gap-6
                            lg:grid-cols-4
                        "
                    >

                        <WorkflowCard

                            icon={
                                <FileText
                                    size={28}
                                    className="text-cyan-400"
                                />
                            }

                            title="Upload"

                            description="Upload document securely"

                            active={true}
                        />

                        <WorkflowCard

                            icon={
                                <ScanSearch
                                    size={28}
                                    className="text-yellow-400"
                                />
                            }

                            title="OCR Scan"

                            description="AI extracts text"

                            active={ocrCompleted}
                        />

                        <WorkflowCard

                            icon={
                                <BrainCircuit
                                    size={28}
                                    className="text-cyan-400"
                                />
                            }

                            title="Fraud Detection"

                            description="AI anomaly analysis"

                            active={verificationCompleted}
                        />

                        <WorkflowCard

                            icon={
                                <ShieldCheck
                                    size={28}
                                    className="text-emerald-400"
                                />
                            }

                            title="Verification"

                            description="Final authenticity check"

                            active={verificationCompleted}
                        />

                    </section>

                    {/* LOADER */}

                    {loading && (

                        <div
                            className="
                                rounded-3xl
                                border
                                border-zinc-800
                                bg-zinc-950
                                p-10
                            "
                        >

                            <Loader />

                            <div className="mt-8 text-center">

                                <h2
                                    className="
                                        text-2xl
                                        font-bold
                                        text-white
                                    "
                                >
                                    AI Processing Document
                                </h2>

                                <p
                                    className="
                                        mt-3
                                        text-zinc-400
                                    "
                                >
                                    OCR extraction, fraud
                                    analysis, and verification
                                    are currently running.
                                </p>

                            </div>

                        </div>
                    )}

                    {/* MAIN CONTENT */}

                    <div
                        className="
                            grid
                            gap-8
                            xl:grid-cols-2
                        "
                    >

                        {/* UPLOAD */}

                        <UploadCard

                            title="Upload Verification Document"

                            subtitle="
                                Upload RC, Insurance,
                                License or Government
                                Vehicle Documents
                            "

                            onFileSelect={
                                handleFileSelect
                            }
                        />

                        {/* OCR RESULT */}

                        {ocrCompleted && (

                            <OCRResultCard

                                extractedText="MH12AB1234"

                                ownerName="Rahul Sharma"

                                vehicleType="SUV"

                                confidence={98.4}

                                fraudProbability={12}

                                verificationStatus="Verified"
                            />
                        )}

                    </div>

                    {/* FINAL VERIFICATION */}

                    {verificationCompleted && (

                        <VerificationStatus

                            status="Verified"

                            confidence={97.8}

                            fraudRisk={8}

                            aiDecision="
                                Document verified successfully
                                with low fraud probability.
                            "

                            scanId="DL-VERIFY-2026-9182"

                            processingTime="1.2s"
                        />

                    )}

                </main>

            </div>

            {/* TOAST */}

            <NotificationToast

                show={toast.show}

                type={toast.type}

                title={toast.title}

                message={toast.message}

                onClose={() =>
                    setToast({

                        ...toast,

                        show: false
                    })
                }
            />

        </div>
    );
}


// ==============================================
// STAT CARD
// ==============================================

function StatCard({

    title,

    value,

    color

}) {

    const colors = {

        emerald: `
            border-emerald-500/20
            bg-emerald-500/10
            text-emerald-400
        `,

        cyan: `
            border-cyan-500/20
            bg-cyan-500/10
            text-cyan-400
        `,

        yellow: `
            border-yellow-500/20
            bg-yellow-500/10
            text-yellow-400
        `,

        red: `
            border-red-500/20
            bg-red-500/10
            text-red-400
        `
    };


    return (

        <motion.div

            whileHover={{
                y: -4
            }}

            className={`
                rounded-3xl
                border
                p-5
                ${colors[color]}
            `}
        >

            <p
                className="
                    text-sm
                    uppercase
                    tracking-widest
                    text-zinc-400
                "
            >
                {title}
            </p>

            <h2
                className="
                    mt-3
                    text-4xl
                    font-black
                "
            >
                {value}
            </h2>

        </motion.div>
    );
}


// ==============================================
// WORKFLOW CARD
// ==============================================

function WorkflowCard({

    icon,

    title,

    description,

    active

}) {

    return (

        <motion.div

            whileHover={{
                scale: 1.02
            }}

            className={`
                rounded-3xl
                border
                p-6
                transition-all

                ${
                    active
                        ? `
                            border-cyan-500/20
                            bg-cyan-500/10
                        `
                        : `
                            border-zinc-800
                            bg-zinc-950
                        `
                }
            `}
        >

            <div
                className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-zinc-700
                    bg-zinc-900
                "
            >
                {icon}
            </div>

            <h2
                className="
                    mt-5
                    text-2xl
                    font-bold
                    text-white
                "
            >
                {title}
            </h2>

            <p
                className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-zinc-400
                "
            >
                {description}
            </p>

            {/* STATUS */}

            <div
                className="
                    mt-5
                    flex
                    items-center
                    gap-3
                "
            >

                <motion.div

                    animate={{
                        opacity: [0.4, 1, 0.4]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 1.5
                    }}

                    className={`
                        h-3
                        w-3
                        rounded-full

                        ${
                            active
                                ? "bg-emerald-400"
                                : "bg-zinc-600"
                        }
                    `}
                />

                <span
                    className={`
                        text-sm
                        font-semibold

                        ${
                            active
                                ? "text-emerald-400"
                                : "text-zinc-500"
                        }
                    `}
                >
                    {active
                        ? "Completed"
                        : "Waiting"}
                </span>

            </div>

        </motion.div>
    );
}