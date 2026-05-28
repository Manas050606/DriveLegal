import {

    motion

} from "framer-motion";

import {

    FileSearch,

    BrainCircuit,

    Activity,

    FileText,

    Download,

    ShieldAlert,

    ScanSearch,

    Clock3,

    CheckCircle2,

    AlertTriangle,

    FileSpreadsheet,

    BarChart3

} from "lucide-react";


// ==============================================
// COMPONENTS
// ==============================================

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import StatsCard from "../components/StatsCard";


// ==============================================
// OCR REPORTS PAGE
// ==============================================

export default function OCRReports() {

    // ==========================================
    // MOCK OCR DATA
    // ==========================================

    const reports = [

        {

            id: "OCR-1001",

            file: "vehicle_rc_01.pdf",

            extracted: "MH12AB1234",

            confidence: "99.1%",

            status: "Verified",

            time: "2 mins ago"
        },

        {

            id: "OCR-1002",

            file: "insurance_scan.png",

            extracted: "Insurance ID 90182",

            confidence: "93.4%",

            status: "Under Review",

            time: "14 mins ago"
        },

        {

            id: "OCR-1003",

            file: "tampered_rc.jpg",

            extracted: "Suspicious OCR Pattern",

            confidence: "81.2%",

            status: "Fraud Detected",

            time: "32 mins ago"
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
                                        bg-emerald-500/10
                                        text-emerald-400
                                    "
                                >

                                    <FileSearch
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
                                        OCR Reports
                                    </h1>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            text-zinc-400
                                        "
                                    >
                                        AI-generated OCR
                                        extraction reports
                                        & analytics
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

                            <Activity
                                size={18}
                            />

                            OCR Engine Active

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

                            title="OCR Scans"

                            value="24,918"

                            icon={ScanSearch}

                            color="emerald"
                        />

                        <StatsCard

                            title="Reports Generated"

                            value="18,204"

                            icon={FileText}

                            color="cyan"
                        />

                        <StatsCard

                            title="Fraud Alerts"

                            value="182"

                            icon={ShieldAlert}

                            color="red"
                        />

                        <StatsCard

                            title="AI Accuracy"

                            value="99.1%"

                            icon={BrainCircuit}

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
                            OCR TABLE
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
                                    justify-between
                                "
                            >

                                <div
                                    className="
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
                                            bg-emerald-500/10
                                            text-emerald-400
                                        "
                                    >

                                        <FileSpreadsheet
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
                                            OCR Extraction Logs
                                        </h2>

                                        <p
                                            className="
                                                mt-2
                                                text-zinc-400
                                            "
                                        >
                                            AI-generated OCR
                                            processing history
                                        </p>

                                    </div>

                                </div>

                                <button
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        bg-cyan-500
                                        px-5
                                        py-3
                                        font-bold
                                        text-black
                                    "
                                >

                                    <Download
                                        size={18}
                                    />

                                    Export

                                </button>

                            </div>

                            {/* REPORTS */}

                            <div className="space-y-5">

                                {

                                    reports.map(

                                        (report, index) => (

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
                                                        "
                                                    >
                                                        {report.id}
                                                    </h3>

                                                    <p
                                                        className="
                                                            mt-2
                                                            text-zinc-400
                                                        "
                                                    >
                                                        {report.file}
                                                    </p>

                                                    <p
                                                        className="
                                                            mt-3
                                                            text-cyan-400
                                                            font-semibold
                                                        "
                                                    >
                                                        {
                                                            report.extracted
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
                                                            text-emerald-400
                                                        "
                                                    >
                                                        {
                                                            report.confidence
                                                        }
                                                    </h3>

                                                </div>

                                                {/* STATUS */}

                                                <div
                                                    className={`
                                                        rounded-full
                                                        px-5
                                                        py-3
                                                        text-sm
                                                        font-bold

                                                        ${
                                                            report.status === "Verified"

                                                            ? `
                                                                bg-emerald-500/10
                                                                text-emerald-400
                                                              `

                                                            : report.status === "Under Review"

                                                            ? `
                                                                bg-yellow-500/10
                                                                text-yellow-400
                                                              `

                                                            : `
                                                                bg-red-500/10
                                                                text-red-400
                                                              `
                                                        }
                                                    `}
                                                >

                                                    {
                                                        report.status
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

                            {/* AI STATUS */}

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

                                    <Activity
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
                                        OCR Status
                                    </h2>

                                </div>

                                <div className="space-y-5">

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
                                                OCR Engine
                                            </span>

                                        </div>

                                        <span
                                            className="
                                                font-bold
                                                text-emerald-400
                                            "
                                        >
                                            ONLINE
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

                                            <Clock3
                                                className="
                                                    text-yellow-400
                                                "
                                            />

                                            <span>
                                                Avg Scan Time
                                            </span>

                                        </div>

                                        <span
                                            className="
                                                font-bold
                                                text-yellow-400
                                            "
                                        >
                                            1.2s
                                        </span>

                                    </div>

                                </div>

                            </div>

                            {/* OCR ANALYTICS */}

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
                                        OCR Analytics
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
                                                OCR Accuracy
                                            </span>

                                            <span>
                                                99%
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
                                                    w-[99%]
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
                                                Fraud Detection
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