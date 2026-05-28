import {

    motion

} from "framer-motion";

import {

    ShieldAlert,

    AlertTriangle,

    FileWarning,

    BrainCircuit,

    ScanSearch,

    Activity,

    CheckCircle2,

    XCircle,

    Eye,

    BarChart3

} from "lucide-react";


// ==============================================
// COMPONENTS
// ==============================================

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import StatsCard from "../components/StatsCard";


// ==============================================
// FRAUD ANALYSIS PAGE
// ==============================================

export default function FraudAnalysis() {

    // ==========================================
    // MOCK FRAUD DATA
    // ==========================================

    const fraudCases = [

        {

            id: "FRD-1001",

            type: "Tampered RC",

            confidence: "98.2%",

            severity: "High",

            status: "Fraud Detected"
        },

        {

            id: "FRD-1002",

            type: "Blurred Number Plate",

            confidence: "91.4%",

            severity: "Medium",

            status: "Under Review"
        },

        {

            id: "FRD-1003",

            type: "Fake QR Stamp",

            confidence: "99.1%",

            severity: "Critical",

            status: "Blocked"
        }
    ];


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

                <Navbar />

                {/* ==================================
                    CONTENT
                =================================== */}

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
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-red-500/10
                                        text-red-400
                                    "
                                >

                                    <ShieldAlert
                                        size={34}
                                    />

                                </div>

                                <div>

                                    <h1
                                        className="
                                            text-5xl
                                            font-black
                                        "
                                    >
                                        Fraud Analysis
                                    </h1>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            text-zinc-400
                                        "
                                    >
                                        AI-powered forgery,
                                        tampering & anomaly
                                        detection engine
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* LIVE STATUS */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-red-500/20
                                bg-red-500/10
                                px-5
                                py-3
                                text-sm
                                font-bold
                                text-red-400
                            "
                        >

                            <Activity
                                size={18}
                            />

                            Threat Monitoring Active

                        </div>

                    </motion.div>

                    {/* ==========================
                        STATS
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

                            title="Fraud Cases"

                            value="182"

                            icon={AlertTriangle}

                            color="red"
                        />

                        <StatsCard

                            title="Tampering Alerts"

                            value="67"

                            icon={FileWarning}

                            color="red"
                        />

                        <StatsCard

                            title="AI Accuracy"

                            value="99.2%"

                            icon={BrainCircuit}

                            color="cyan"
                        />

                        <StatsCard

                            title="Live Monitoring"

                            value="24/7"

                            icon={Eye}

                            color="emerald"
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
                            xl:grid-cols-3
                        "
                    >

                        {/* ======================
                            CASES TABLE
                        ======================= */}

                        <div
                            className="
                                xl:col-span-2
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
                                        bg-red-500/10
                                        text-red-400
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
                                        Live Fraud Cases
                                    </h2>

                                    <p
                                        className="
                                            mt-2
                                            text-zinc-400
                                        "
                                    >
                                        Real-time suspicious
                                        activity detection
                                    </p>

                                </div>

                            </div>

                            {/* TABLE */}

                            <div className="space-y-5">

                                {

                                    fraudCases.map(

                                        (caseItem, index) => (

                                            <motion.div

                                                key={index}

                                                whileHover={{

                                                    scale: 1.01
                                                }}

                                                className="
                                                    flex
                                                    flex-col
                                                    gap-6
                                                    rounded-3xl
                                                    border
                                                    border-zinc-800
                                                    bg-zinc-900/50
                                                    p-6
                                                    lg:flex-row
                                                    lg:items-center
                                                    lg:justify-between
                                                "
                                            >

                                                {/* LEFT */}

                                                <div>

                                                    <h3
                                                        className="
                                                            text-2xl
                                                            font-black
                                                            text-white
                                                        "
                                                    >
                                                        {caseItem.id}
                                                    </h3>

                                                    <p
                                                        className="
                                                            mt-2
                                                            text-zinc-400
                                                        "
                                                    >
                                                        {
                                                            caseItem.type
                                                        }
                                                    </p>

                                                </div>

                                                {/* CENTER */}

                                                <div>

                                                    <p
                                                        className="
                                                            text-sm
                                                            text-zinc-500
                                                        "
                                                    >
                                                        AI Confidence
                                                    </p>

                                                    <h3
                                                        className="
                                                            mt-2
                                                            text-2xl
                                                            font-black
                                                            text-cyan-400
                                                        "
                                                    >
                                                        {
                                                            caseItem.confidence
                                                        }
                                                    </h3>

                                                </div>

                                                {/* RIGHT */}

                                                <div
                                                    className={`
                                                        rounded-full
                                                        px-5
                                                        py-3
                                                        text-sm
                                                        font-bold

                                                        ${
                                                            caseItem.severity === "Critical"

                                                            ? `
                                                                bg-red-500/10
                                                                text-red-400
                                                              `

                                                            : caseItem.severity === "High"

                                                            ? `
                                                                bg-orange-500/10
                                                                text-orange-400
                                                              `

                                                            : `
                                                                bg-yellow-500/10
                                                                text-yellow-400
                                                              `
                                                        }
                                                    `}
                                                >

                                                    {
                                                        caseItem.status
                                                    }

                                                </div>

                                            </motion.div>
                                        )
                                    )
                                }

                            </div>

                        </div>

                        {/* ======================
                            SIDE PANEL
                        ======================= */}

                        <div className="space-y-8">

                            {/* THREAT STATUS */}

                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-zinc-800
                                    bg-zinc-950
                                    p-8
                                "
                            >

                                <h2
                                    className="
                                        text-3xl
                                        font-black
                                    "
                                >
                                    Threat Status
                                </h2>

                                <div className="mt-8 space-y-5">

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >

                                            <CheckCircle2
                                                className="
                                                    text-emerald-400
                                                "
                                            />

                                            <span>
                                                Safe Documents
                                            </span>

                                        </div>

                                        <span
                                            className="
                                                font-bold
                                                text-emerald-400
                                            "
                                        >
                                            1,482
                                        </span>

                                    </div>

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >

                                            <XCircle
                                                className="
                                                    text-red-400
                                                "
                                            />

                                            <span>
                                                Fraud Cases
                                            </span>

                                        </div>

                                        <span
                                            className="
                                                font-bold
                                                text-red-400
                                            "
                                        >
                                            182
                                        </span>

                                    </div>

                                </div>

                            </div>

                            {/* AI PERFORMANCE */}

                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-zinc-800
                                    bg-zinc-950
                                    p-8
                                "
                            >

                                <div
                                    className="
                                        mb-6
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >

                                    <BarChart3
                                        className="
                                            text-cyan-400
                                        "
                                    />

                                    <h2
                                        className="
                                            text-2xl
                                            font-black
                                        "
                                    >
                                        AI Performance
                                    </h2>

                                </div>

                                <div className="space-y-6">

                                    <div>

                                        <div
                                            className="
                                                mb-2
                                                flex
                                                items-center
                                                justify-between
                                            "
                                        >

                                            <span>
                                                Tampering Detection
                                            </span>

                                            <span>
                                                98%
                                            </span>

                                        </div>

                                        <div
                                            className="
                                                h-3
                                                rounded-full
                                                bg-zinc-800
                                            "
                                        >

                                            <div
                                                className="
                                                    h-3
                                                    w-[98%]
                                                    rounded-full
                                                    bg-cyan-400
                                                "
                                            />

                                        </div>

                                    </div>

                                    <div>

                                        <div
                                            className="
                                                mb-2
                                                flex
                                                items-center
                                                justify-between
                                            "
                                        >

                                            <span>
                                                OCR Fraud Detection
                                            </span>

                                            <span>
                                                94%
                                            </span>

                                        </div>

                                        <div
                                            className="
                                                h-3
                                                rounded-full
                                                bg-zinc-800
                                            "
                                        >

                                            <div
                                                className="
                                                    h-3
                                                    w-[94%]
                                                    rounded-full
                                                    bg-red-400
                                                "
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}