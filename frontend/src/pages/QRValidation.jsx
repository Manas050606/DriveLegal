import {

    motion

} from "framer-motion";

import {

    QrCode,

    ShieldCheck,

    ShieldAlert,

    ScanLine,

    BrainCircuit,

    Activity,

    CheckCircle2,

    XCircle,

    Clock3,

    BarChart3,

    Lock,

    FileCheck

} from "lucide-react";


// ==============================================
// COMPONENTS
// ==============================================

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import StatsCard from "../components/StatsCard";


// ==============================================
// QR VALIDATION PAGE
// ==============================================

export default function QRValidation() {

    // ==========================================
    // MOCK QR DATA
    // ==========================================

    const qrLogs = [

        {

            id: "QR-1001",

            type: "Vehicle QR",

            status: "Authentic",

            confidence: "99.4%",

            time: "1 min ago"
        },

        {

            id: "QR-1002",

            type: "Insurance QR",

            status: "Suspicious",

            confidence: "88.1%",

            time: "7 mins ago"
        },

        {

            id: "QR-1003",

            type: "RC QR Validation",

            status: "Verified",

            confidence: "97.8%",

            time: "19 mins ago"
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
                                        bg-yellow-500/10
                                        text-yellow-400
                                    "
                                >

                                    <QrCode
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
                                        QR Validation
                                    </h1>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            text-zinc-400
                                        "
                                    >
                                        AI-powered encrypted
                                        QR authenticity
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
                                border-yellow-500/20
                                bg-yellow-500/10
                                px-5
                                py-3
                                text-sm
                                font-bold
                                text-yellow-400
                            "
                        >

                            <Activity
                                size={18}
                            />

                            QR Engine Active

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

                            title="QR Scans"

                            value="12,492"

                            icon={QrCode}

                            color="cyan"
                        />

                        <StatsCard

                            title="Authentic QR"

                            value="11,928"

                            icon={ShieldCheck}

                            color="emerald"
                        />

                        <StatsCard

                            title="Suspicious QR"

                            value="182"

                            icon={ShieldAlert}

                            color="red"
                        />

                        <StatsCard

                            title="AI Accuracy"

                            value="99.5%"

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
                            VALIDATION LOGS
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
                                        bg-yellow-500/10
                                        text-yellow-400
                                    "
                                >

                                    <ScanLine
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
                                        QR Validation Logs
                                    </h2>

                                    <p
                                        className="
                                            mt-2
                                            text-zinc-400
                                        "
                                    >
                                        Real-time QR scan
                                        validation history
                                    </p>

                                </div>

                            </div>

                            {/* LOGS */}

                            <div className="space-y-5">

                                {

                                    qrLogs.map(

                                        (item, index) => (

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
                                                        {item.id}
                                                    </h3>

                                                    <p
                                                        className="
                                                            mt-2
                                                            text-zinc-400
                                                        "
                                                    >
                                                        {item.type}
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
                                                            item.confidence
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
                                                            item.status === "Authentic"

                                                            ? `
                                                                bg-emerald-500/10
                                                                text-emerald-400
                                                              `

                                                            : item.status === "Verified"

                                                            ? `
                                                                bg-cyan-500/10
                                                                text-cyan-400
                                                              `

                                                            : `
                                                                bg-red-500/10
                                                                text-red-400
                                                              `
                                                        }
                                                    `}
                                                >

                                                    {
                                                        item.status
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

                            {/* SECURITY STATUS */}

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

                                    <Lock
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
                                        Encryption Status
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
                                                AES-256 Encryption
                                            </span>

                                        </div>

                                        <span
                                            className="
                                                font-bold
                                                text-emerald-400
                                            "
                                        >
                                            ACTIVE
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
                                                Validation Time
                                            </span>

                                        </div>

                                        <span
                                            className="
                                                font-bold
                                                text-yellow-400
                                            "
                                        >
                                            0.4s
                                        </span>

                                    </div>

                                </div>

                            </div>

                            {/* QR ANALYTICS */}

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
                                        QR Analytics
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
                                                Validation Accuracy
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
                                                96%
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
                                                    w-[96%]
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