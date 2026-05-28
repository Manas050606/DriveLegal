import {

    motion

} from "framer-motion";

import {

    ShieldCheck,

    Activity,

    AlertTriangle,

    ScanSearch,

    Car,

    FileSearch,

    BrainCircuit

} from "lucide-react";


// ==============================================
// COMPONENTS
// ==============================================

import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

import StatsCard from "../components/StatsCard";

import OCRResultCard from "../components/OCRResultCard";

import VerificationStatus from "../components/VerificationStatus";

import FraudAlert from "../components/FraudAlert";

import PlatePreview from "../components/PlatePreview";

import QRScanner from "../components/QRScanner";

import NotificationToast from "../components/NotificationToast";


// ==============================================
// DASHBOARD PAGE
// ==============================================

export default function Dashboard() {

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
                MAIN
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
                                        DriveLegal AI Dashboard
                                    </h1>

                                    <p
                                        className="
                                            mt-2
                                            text-zinc-400
                                        "
                                    >
                                        AI-powered vehicle
                                        verification & fraud
                                        intelligence system
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

                            AI Systems Operational

                        </div>

                    </motion.div>

                    {/* ==========================
                        STATS GRID
                    =========================== */}

                    <div
                        className="
                            grid
                            gap-6
                            md:grid-cols-2
                            xl:grid-cols-4
                        "
                    >

                        <StatsCard

                            title="Total Verifications"

                            value="12,847"

                            icon={FileSearch}

                            color="cyan"
                        />

                        <StatsCard

                            title="Fraud Alerts"

                            value="38"

                            icon={AlertTriangle}

                            color="red"
                        />

                        <StatsCard

                            title="AI Accuracy"

                            value="98.7%"

                            icon={Activity}

                            color="emerald"
                        />

                        <StatsCard

                            title="Vehicle Scans"

                            value="4,291"

                            icon={Car}

                            color="cyan"
                        />

                    </div>

                    {/* ==========================
                        MAIN GRID
                    =========================== */}

                    <div
                        className="
                            mt-10
                            grid
                            gap-8
                            xl:grid-cols-2
                        "
                    >

                        {/* LEFT */}

                        <div className="space-y-8">

                            <PlatePreview

                                plateNumber="
                                    MH12AB1234
                                "

                                confidence={98.4}

                                status="Verified"
                            />

                            <OCRResultCard

                                extractedText="
                                    MH12AB1234
                                "

                                confidence={98.4}

                                status="Verified"
                            />

                            <VerificationStatus

                                verified={true}

                                confidence={98.4}

                                message="
                                    Vehicle verified successfully
                                "
                            />

                        </div>

                        {/* RIGHT */}

                        <div className="space-y-8">

                            <FraudAlert

                                level="Low"

                                message="
                                    No suspicious activity detected
                                "
                            />

                            <QRScanner />

                            <NotificationToast

                                type="success"

                                message="
                                    AI engine operational
                                "
                            />

                        </div>

                    </div>

                    {/* ==========================
                        LIVE MONITOR
                    =========================== */}

                    <motion.div

                        initial={{

                            opacity: 0,

                            y: 30
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

                                <ScanSearch
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
                                    Live AI Monitoring
                                </h2>

                                <p
                                    className="
                                        mt-2
                                        text-zinc-400
                                    "
                                >
                                    Real-time fraud detection
                                    & OCR analysis system
                                </p>

                            </div>

                        </div>

                        {/* ACTIVITY */}

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
                                    Active AI Models
                                </p>

                                <h2
                                    className="
                                        mt-4
                                        text-4xl
                                        font-black
                                        text-cyan-400
                                    "
                                >
                                    12
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
                                    OCR Requests
                                </p>

                                <h2
                                    className="
                                        mt-4
                                        text-4xl
                                        font-black
                                        text-emerald-400
                                    "
                                >
                                    3,291
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
                                    Threat Score
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

                </main>

            </div>

        </div>
    );
}