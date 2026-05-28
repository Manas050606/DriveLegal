import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

import FraudAlert from "../components/FraudAlert";

import DashboardCards from "../components/DashboardCards";

import OCRResultCard from "../components/OCRResultCard";

import VerificationStatus from "../components/VerificationStatus";

import NotificationToast from "../components/NotificationToast";

import {
    ShieldAlert,
    BrainCircuit,
    Activity,
    TriangleAlert,
    ScanSearch,
    Cpu,
    Eye,
    Siren,
    ShieldCheck
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";


export default function FraudDetection() {

    const [toast, setToast] =
        useState({

            show: false,

            type: "warning",

            title: "",

            message: ""
        });


    // ==========================================
    // HANDLE THREAT RESPONSE
    // ==========================================

    const handleThreatAction = () => {

        setToast({

            show: true,

            type: "warning",

            title: "Threat Monitoring Enabled",

            message:
                "AI security monitoring response activated."
        });
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

            {/* MAIN */}

            <div className="flex-1">

                {/* NAVBAR */}

                <Navbar />

                {/* CONTENT */}

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
                            border-red-500/20
                            bg-zinc-950
                            p-8
                            shadow-2xl
                        "
                    >

                        {/* RED GLOW */}

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-br
                                from-red-500/10
                                via-transparent
                                to-orange-500/10
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
                                            border-red-500/20
                                            bg-red-500/10
                                            px-5
                                            py-2
                                        "
                                    >

                                        <motion.div

                                            animate={{
                                                opacity: [0.4, 1, 0.4]
                                            }}

                                            transition={{
                                                repeat: Infinity,
                                                duration: 1.2
                                            }}

                                            className="
                                                h-3
                                                w-3
                                                rounded-full
                                                bg-red-400
                                            "
                                        />

                                        <span
                                            className="
                                                text-sm
                                                font-semibold
                                                text-red-300
                                            "
                                        >
                                            AI Threat Detection Active
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
                                        Fraud Intelligence
                                        Detection Center
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
                                        AI-powered anomaly detection,
                                        tampering analysis, fraud
                                        intelligence monitoring,
                                        and cyber-security threat
                                        verification systems.
                                    </p>

                                </div>

                                {/* ACTION BUTTON */}

                                <motion.button

                                    whileHover={{
                                        scale: 1.03
                                    }}

                                    whileTap={{
                                        scale: 0.97
                                    }}

                                    onClick={
                                        handleThreatAction
                                    }

                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        bg-gradient-to-r
                                        from-red-500
                                        to-orange-500
                                        px-6
                                        py-4
                                        text-sm
                                        font-bold
                                        text-white
                                    "
                                >

                                    <Siren size={20} />

                                    Activate Security Response

                                </motion.button>

                            </div>

                        </div>

                    </section>

                    {/* DASHBOARD */}

                    <DashboardCards />

                    {/* FRAUD + VERIFICATION */}

                    <div
                        className="
                            grid
                            gap-8
                            xl:grid-cols-2
                        "
                    >

                        <FraudAlert

                            fraudDetected={true}

                            threatLevel="HIGH"

                            fraudScore={82}

                            suspiciousActivity="
                                Possible document manipulation,
                                OCR inconsistency, and tampering
                                signatures detected.
                            "

                            anomalyType="
                                Metadata Manipulation
                            "

                            aiConfidence={97.1}

                            scanId="FRAUD-2026-9912"
                        />

                        <VerificationStatus

                            status="Suspicious"

                            confidence={72.4}

                            fraudRisk={82}

                            aiDecision="
                                AI detected suspicious patterns
                                requiring manual verification.
                            "

                            scanId="VERIFY-2026-9912"

                            processingTime="1.4s"
                        />

                    </div>

                    {/* OCR ANALYSIS */}

                    <OCRResultCard

                        extractedText="
                            MH12AB1234
                        "

                        ownerName="Unknown"

                        vehicleType="SUV"

                        confidence={72.4}

                        fraudProbability={82}

                        verificationStatus="Suspicious"
                    />

                    {/* THREAT MONITORING */}

                    <section
                        className="
                            grid
                            gap-6
                            lg:grid-cols-4
                        "
                    >

                        <ThreatCard

                            icon={
                                <TriangleAlert
                                    size={30}
                                    className="text-red-400"
                                />
                            }

                            title="Threat Level"

                            value="HIGH"

                            description="
                                AI threat engine detected
                                suspicious anomalies
                            "
                        />

                        <ThreatCard

                            icon={
                                <BrainCircuit
                                    size={30}
                                    className="text-cyan-400"
                                />
                            }

                            title="AI Confidence"

                            value="97.1%"

                            description="
                                Fraud detection model
                                confidence score
                            "
                        />

                        <ThreatCard

                            icon={
                                <ScanSearch
                                    size={30}
                                    className="text-yellow-400"
                                />
                            }

                            title="Tampering Risk"

                            value="82%"

                            description="
                                Probability of document
                                manipulation detected
                            "
                        />

                        <ThreatCard

                            icon={
                                <ShieldCheck
                                    size={30}
                                    className="text-emerald-400"
                                />
                            }

                            title="System Status"

                            value="ACTIVE"

                            description="
                                Fraud monitoring engine
                                currently operational
                            "
                        />

                    </section>

                    {/* SECURITY ACTIVITY */}

                    <section
                        className="
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-950
                            p-8
                        "
                    >

                        <div className="flex items-center gap-5">

                            <div
                                className="
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-red-500/20
                                    bg-red-500/10
                                "
                            >

                                <Activity
                                    size={30}
                                    className="text-red-400"
                                />

                            </div>

                            <div>

                                <h2
                                    className="
                                        text-3xl
                                        font-black
                                        text-white
                                    "
                                >
                                    Live Threat Activity
                                </h2>

                                <p
                                    className="
                                        mt-2
                                        text-zinc-400
                                    "
                                >
                                    Real-time fraud intelligence
                                    monitoring logs
                                </p>

                            </div>

                        </div>

                        {/* LOGS */}

                        <div className="mt-10 space-y-5">

                            <SecurityLog

                                icon={
                                    <Eye
                                        size={20}
                                        className="text-yellow-400"
                                    />
                                }

                                title="
                                    OCR inconsistency detected
                                "

                                severity="MEDIUM"

                                time="0.4s ago"
                            />

                            <SecurityLog

                                icon={
                                    <ShieldAlert
                                        size={20}
                                        className="text-red-400"
                                    />
                                }

                                title="
                                    Metadata tampering suspected
                                "

                                severity="HIGH"

                                time="0.9s ago"
                            />

                            <SecurityLog

                                icon={
                                    <Cpu
                                        size={20}
                                        className="text-cyan-400"
                                    />
                                }

                                title="
                                    AI anomaly scoring completed
                                "

                                severity="LOW"

                                time="1.2s ago"
                            />

                        </div>

                    </section>

                    {/* ANALYTICS */}

                    <section
                        className="
                            grid
                            gap-6
                            lg:grid-cols-3
                        "
                    >

                        <AnalyticsCard

                            title="Fraud Cases"

                            value="312"

                            color="red"

                            description="
                                Total suspicious cases
                                detected this month
                            "
                        />

                        <AnalyticsCard

                            title="AI Detection"

                            value="97.1%"

                            color="cyan"

                            description="
                                Fraud intelligence
                                model accuracy
                            "
                        />

                        <AnalyticsCard

                            title="Threat Response"

                            value="ACTIVE"

                            color="emerald"

                            description="
                                Security monitoring
                                currently active
                            "
                        />

                    </section>

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
// THREAT CARD
// ==============================================

function ThreatCard({

    icon,

    title,

    value,

    description

}) {

    return (

        <motion.div

            whileHover={{
                y: -4
            }}

            className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-6
            "
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
                    mt-6
                    text-2xl
                    font-bold
                    text-white
                "
            >
                {title}
            </h2>

            <h1
                className="
                    mt-4
                    text-5xl
                    font-black
                    text-white
                "
            >
                {value}
            </h1>

            <p
                className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-zinc-400
                "
            >
                {description}
            </p>

        </motion.div>
    );
}


// ==============================================
// SECURITY LOG
// ==============================================

function SecurityLog({

    icon,

    title,

    severity,

    time

}) {

    const severityColor = {

        HIGH: `
            border-red-500/20
            bg-red-500/10
            text-red-400
        `,

        MEDIUM: `
            border-yellow-500/20
            bg-yellow-500/10
            text-yellow-400
        `,

        LOW: `
            border-cyan-500/20
            bg-cyan-500/10
            text-cyan-400
        `
    };


    return (

        <motion.div

            whileHover={{
                x: 6
            }}

            className="
                flex
                items-center
                justify-between
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/60
                p-6
            "
        >

            <div className="flex items-center gap-5">

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-zinc-700
                        bg-zinc-950
                    "
                >
                    {icon}
                </div>

                <div>

                    <h2
                        className="
                            text-lg
                            font-bold
                            text-white
                        "
                    >
                        {title}
                    </h2>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-zinc-500
                        "
                    >
                        {time}
                    </p>

                </div>

            </div>

            <div
                className={`
                    rounded-full
                    border
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    ${severityColor[severity]}
                `}
            >
                {severity}
            </div>

        </motion.div>
    );
}


// ==============================================
// ANALYTICS CARD
// ==============================================

function AnalyticsCard({

    title,

    value,

    color,

    description

}) {

    const colors = {

        red: `
            border-red-500/20
            bg-red-500/10
            text-red-400
        `,

        cyan: `
            border-cyan-500/20
            bg-cyan-500/10
            text-cyan-400
        `,

        emerald: `
            border-emerald-500/20
            bg-emerald-500/10
            text-emerald-400
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
                p-6
                ${colors[color]}
            `}
        >

            <h2
                className="
                    text-2xl
                    font-bold
                "
            >
                {title}
            </h2>

            <h1
                className="
                    mt-5
                    text-5xl
                    font-black
                "
            >
                {value}
            </h1>

            <p
                className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-zinc-300
                "
            >
                {description}
            </p>

        </motion.div>
    );
}