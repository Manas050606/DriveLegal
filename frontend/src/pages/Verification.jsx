import {

    motion

} from "framer-motion";

import {

    BadgeCheck,

    ShieldCheck,

    ScanSearch,

    BrainCircuit,

    Activity,

    CheckCircle2,

    Clock3,

    Car,

    FileCheck,

    QrCode,

    AlertTriangle

} from "lucide-react";


// ==============================================
// COMPONENTS
// ==============================================

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import StatsCard from "../components/StatsCard";


// ==============================================
// VERIFICATION PAGE
// ==============================================

export default function Verification() {

    // ==========================================
    // MOCK DATA
    // ==========================================

    const verificationLogs = [

        {

            id: "VRF-2041",

            type: "Vehicle RC Verification",

            status: "Verified",

            confidence: "99.1%",

            time: "2 mins ago"
        },

        {

            id: "VRF-2042",

            type: "QR Authenticity Check",

            status: "Pending",

            confidence: "91.7%",

            time: "12 mins ago"
        },

        {

            id: "VRF-2043",

            type: "Insurance Validation",

            status: "Rejected",

            confidence: "84.2%",

            time: "18 mins ago"
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
                                        bg-cyan-500/10
                                        text-cyan-400
                                    "
                                >

                                    <BadgeCheck
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
                                        Verification Center
                                    </h1>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            text-zinc-400
                                        "
                                    >
                                        AI-powered document
                                        and vehicle authenticity
                                        verification system
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

                            Verification Engine Active

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

                            title="Verified Documents"

                            value="12,842"

                            icon={FileCheck}

                            color="emerald"
                        />

                        <StatsCard

                            title="Vehicle Checks"

                            value="4,219"

                            icon={Car}

                            color="cyan"
                        />

                        <StatsCard

                            title="QR Validations"

                            value="8,192"

                            icon={QrCode}

                            color="cyan"
                        />

                        <StatsCard

                            title="AI Accuracy"

                            value="99.4%"

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
                            VERIFICATION LOGS
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
                                        Verification Logs
                                    </h2>

                                    <p
                                        className="
                                            mt-2
                                            text-zinc-400
                                        "
                                    >
                                        Real-time verification
                                        history and monitoring
                                    </p>

                                </div>

                            </div>

                            {/* LOGS */}

                            <div className="space-y-5">

                                {

                                    verificationLogs.map(

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
                                                            item.status === "Verified"

                                                            ? `
                                                                bg-emerald-500/10
                                                                text-emerald-400
                                                              `

                                                            : item.status === "Pending"

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
                                                Verification Active
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
                                            0.9s
                                        </span>

                                    </div>

                                </div>

                            </div>

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

                                    <AlertTriangle
                                        className="
                                            text-red-400
                                        "
                                    />

                                    <h2
                                        className="
                                            text-2xl
                                            font-black
                                        "
                                    >
                                        Security Status
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
                                                Verification Accuracy
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
                                                Threat Prevention
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