import {

    motion

} from "framer-motion";

import {

    BarChart3,

    Activity,

    BrainCircuit,

    ShieldAlert,

    BadgeCheck,

    QrCode,

    FileSearch,

    TrendingUp,

    TrendingDown,

    ScanSearch,

    Clock3,

    CheckCircle2

} from "lucide-react";


// ==============================================
// COMPONENTS
// ==============================================

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import StatsCard from "../components/StatsCard";


// ==============================================
// ANALYTICS PAGE
// ==============================================

export default function Analytics() {

    // ==========================================
    // MOCK ANALYTICS DATA
    // ==========================================

    const analyticsLogs = [

        {

            title: "Fraud Detection Rate",

            value: "98.4%",

            trend: "+12%",

            positive: true
        },

        {

            title: "Verification Success",

            value: "99.1%",

            trend: "+7%",

            positive: true
        },

        {

            title: "Suspicious QR Activity",

            value: "182",

            trend: "-4%",

            positive: false
        },

        {

            title: "OCR Processing Time",

            value: "1.2s",

            trend: "-18%",

            positive: true
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
                                        bg-purple-500/10
                                        text-purple-400
                                    "
                                >

                                    <BarChart3
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
                                        AI Analytics
                                    </h1>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            text-zinc-400
                                        "
                                    >
                                        Centralized analytics
                                        and AI monitoring
                                        dashboard
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
                                border-purple-500/20
                                bg-purple-500/10
                                px-5
                                py-3
                                text-sm
                                font-bold
                                text-purple-400
                            "
                        >

                            <Activity
                                size={18}
                            />

                            Analytics Engine Live

                        </div>

                    </motion.div>

                    {/* ==========================
                        STATS CARDS
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

                            icon={ShieldAlert}

                            color="red"
                        />

                        <StatsCard

                            title="Verified Docs"

                            value="12,842"

                            icon={BadgeCheck}

                            color="emerald"
                        />

                        <StatsCard

                            title="QR Validations"

                            value="8,291"

                            icon={QrCode}

                            color="cyan"
                        />

                        <StatsCard

                            title="OCR Reports"

                            value="24,918"

                            icon={FileSearch}

                            color="cyan"
                        />

                    </div>

                    {/* ==========================
                        ANALYTICS GRID
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
                            MAIN ANALYTICS
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
                                        bg-purple-500/10
                                        text-purple-400
                                    "
                                >

                                    <TrendingUp
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
                                        AI Performance Metrics
                                    </h2>

                                    <p
                                        className="
                                            mt-2
                                            text-zinc-400
                                        "
                                    >
                                        Real-time AI analytics
                                        and performance trends
                                    </p>

                                </div>

                            </div>

                            {/* METRICS */}

                            <div className="space-y-6">

                                {

                                    analyticsLogs.map(

                                        (item, index) => (

                                            <motion.div

                                                key={index}

                                                whileHover={{

                                                    scale: 1.01
                                                }}

                                                className="
                                                    flex
                                                    flex-col
                                                    gap-5
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
                                                        {item.title}
                                                    </h3>

                                                    <p
                                                        className="
                                                            mt-2
                                                            text-zinc-400
                                                        "
                                                    >
                                                        AI-generated
                                                        analytical insights
                                                    </p>

                                                </div>

                                                {/* VALUE */}

                                                <div>

                                                    <h3
                                                        className="
                                                            text-3xl
                                                            font-black
                                                            text-cyan-400
                                                        "
                                                    >
                                                        {item.value}
                                                    </h3>

                                                </div>

                                                {/* TREND */}

                                                <div
                                                    className={`
                                                        flex
                                                        items-center
                                                        gap-2
                                                        rounded-full
                                                        px-5
                                                        py-3
                                                        text-sm
                                                        font-bold

                                                        ${
                                                            item.positive

                                                            ? `
                                                                bg-emerald-500/10
                                                                text-emerald-400
                                                              `

                                                            : `
                                                                bg-red-500/10
                                                                text-red-400
                                                              `
                                                        }
                                                    `}
                                                >

                                                    {

                                                        item.positive

                                                        ? (

                                                            <TrendingUp
                                                                size={18}
                                                            />
                                                        )

                                                        : (

                                                            <TrendingDown
                                                                size={18}
                                                            />
                                                        )
                                                    }

                                                    {item.trend}

                                                </div>

                                            </motion.div>
                                        )
                                    )
                                }

                            </div>

                        </div>

                        {/* ======================
                            SIDE PANELS
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

                                    <BrainCircuit
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
                                        AI Status
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
                                                AI Core Active
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
                                                Avg Response Time
                                            </span>

                                        </div>

                                        <span
                                            className="
                                                font-bold
                                                text-yellow-400
                                            "
                                        >
                                            0.8s
                                        </span>

                                    </div>

                                </div>

                            </div>

                            {/* SYSTEM HEALTH */}

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

                                    <ScanSearch
                                        className="
                                            text-purple-400
                                        "
                                    />

                                    <h2
                                        className="
                                            text-2xl
                                            font-black
                                        "
                                    >
                                        System Health
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
                                                AI Accuracy
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
                                                97%
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
                                                    w-[97%]
                                                    rounded-full
                                                    bg-red-400
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
                                                Verification Success
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
                                                    bg-emerald-400
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