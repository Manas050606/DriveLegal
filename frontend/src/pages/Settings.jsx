import {

    motion

} from "framer-motion";

import {

    Settings as SettingsIcon,

    User,

    Bell,

    ShieldCheck,

    BrainCircuit,

    Lock,

    Globe,

    Database,

    CheckCircle2,

    Activity,

    Save,

    Cpu,

    Cloud,

    Moon

} from "lucide-react";


// ==============================================
// COMPONENTS
// ==============================================

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";


// ==============================================
// SETTINGS PAGE
// ==============================================

export default function Settings() {

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
                                        bg-orange-500/10
                                        text-orange-400
                                    "
                                >

                                    <SettingsIcon
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
                                        System Settings
                                    </h1>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            text-zinc-400
                                        "
                                    >
                                        Configure your
                                        DriveLegal AI platform
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
                                border-orange-500/20
                                bg-orange-500/10
                                px-5
                                py-3
                                text-sm
                                font-bold
                                text-orange-400
                            "
                        >

                            <Activity
                                size={18}
                            />

                            System Stable

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
                            PROFILE SETTINGS
                        ======================= */}

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

                                    <User
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
                                        Profile Settings
                                    </h2>

                                    <p
                                        className="
                                            mt-2
                                            text-zinc-400
                                        "
                                    >
                                        Manage your account
                                        and profile
                                    </p>

                                </div>

                            </div>

                            {/* FORM */}

                            <div className="space-y-6">

                                <div>

                                    <label
                                        className="
                                            mb-3
                                            block
                                            text-sm
                                            font-semibold
                                            text-zinc-400
                                        "
                                    >
                                        Full Name
                                    </label>

                                    <input

                                        type="text"

                                        defaultValue="Partha Khare"

                                        className="
                                            w-full
                                            rounded-2xl
                                            border
                                            border-zinc-800
                                            bg-zinc-900
                                            px-5
                                            py-4
                                            outline-none
                                            focus:border-cyan-500
                                        "
                                    />

                                </div>

                                <div>

                                    <label
                                        className="
                                            mb-3
                                            block
                                            text-sm
                                            font-semibold
                                            text-zinc-400
                                        "
                                    >
                                        Email Address
                                    </label>

                                    <input

                                        type="email"

                                        defaultValue="partha@drivelegal.ai"

                                        className="
                                            w-full
                                            rounded-2xl
                                            border
                                            border-zinc-800
                                            bg-zinc-900
                                            px-5
                                            py-4
                                            outline-none
                                            focus:border-cyan-500
                                        "
                                    />

                                </div>

                                <button
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        bg-cyan-500
                                        px-6
                                        py-4
                                        font-bold
                                        text-black
                                    "
                                >

                                    <Save
                                        size={18}
                                    />

                                    Save Changes

                                </button>

                            </div>

                        </div>

                        {/* ======================
                            SECURITY SETTINGS
                        ======================= */}

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

                                    <ShieldCheck
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
                                        Security Settings
                                    </h2>

                                    <p
                                        className="
                                            mt-2
                                            text-zinc-400
                                        "
                                    >
                                        Configure platform
                                        security controls
                                    </p>

                                </div>

                            </div>

                            <div className="space-y-5">

                                {

                                    [

                                        "Two-Factor Authentication",

                                        "AI Threat Monitoring",

                                        "Encrypted API Access",

                                        "Secure QR Validation"
                                    ]

                                    .map((item, index) => (

                                        <div

                                            key={index}

                                            className="
                                                flex
                                                items-center
                                                justify-between
                                                rounded-2xl
                                                border
                                                border-zinc-800
                                                bg-zinc-900/50
                                                p-5
                                            "
                                        >

                                            <div
                                                className="
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

                                                <span
                                                    className="
                                                        font-semibold
                                                    "
                                                >
                                                    {item}
                                                </span>

                                            </div>

                                            <div
                                                className="
                                                    rounded-full
                                                    bg-emerald-500/10
                                                    px-4
                                                    py-2
                                                    text-sm
                                                    font-bold
                                                    text-emerald-400
                                                "
                                            >
                                                Enabled
                                            </div>

                                        </div>
                                    ))
                                }

                            </div>

                        </div>

                    </div>

                    {/* ==========================
                        LOWER GRID
                    =========================== */}

                    <div
                        className="
                            mt-8
                            grid
                            gap-8
                            xl:grid-cols-3
                        "
                    >

                        {/* AI ENGINE */}

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
                                        text-purple-400
                                    "
                                />

                                <h2
                                    className="
                                        text-2xl
                                        font-black
                                    "
                                >
                                    AI Engine
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

                                    <span>
                                        AI Detection Mode
                                    </span>

                                    <span
                                        className="
                                            text-cyan-400
                                            font-bold
                                        "
                                    >
                                        Advanced
                                    </span>

                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <span>
                                        Neural Accuracy
                                    </span>

                                    <span
                                        className="
                                            text-emerald-400
                                            font-bold
                                        "
                                    >
                                        99.4%
                                    </span>

                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <span>
                                        AI Status
                                    </span>

                                    <span
                                        className="
                                            text-emerald-400
                                            font-bold
                                        "
                                    >
                                        ACTIVE
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* CLOUD */}

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

                                <Cloud
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
                                    Cloud Services
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

                                    <span>
                                        MongoDB Atlas
                                    </span>

                                    <CheckCircle2
                                        className="
                                            text-emerald-400
                                        "
                                    />

                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <span>
                                        OCR API
                                    </span>

                                    <CheckCircle2
                                        className="
                                            text-emerald-400
                                        "
                                    />

                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <span>
                                        AI Inference Server
                                    </span>

                                    <CheckCircle2
                                        className="
                                            text-emerald-400
                                        "
                                    />

                                </div>

                            </div>

                        </div>

                        {/* SYSTEM */}

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

                                <Cpu
                                    className="
                                        text-orange-400
                                    "
                                />

                                <h2
                                    className="
                                        text-2xl
                                        font-black
                                    "
                                >
                                    System
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

                                    <span>
                                        Theme
                                    </span>

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-cyan-400
                                        "
                                    >

                                        <Moon size={16} />

                                        Dark Mode

                                    </div>

                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <span>
                                        Database
                                    </span>

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-emerald-400
                                        "
                                    >

                                        <Database size={16} />

                                        Connected

                                    </div>

                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <span>
                                        Region
                                    </span>

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-cyan-400
                                        "
                                    >

                                        <Globe size={16} />

                                        India

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ==========================
                        NOTIFICATIONS
                    =========================== */}

                    <div
                        className="
                            mt-8
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

                            <Bell
                                className="
                                    text-yellow-400
                                "
                            />

                            <h2
                                className="
                                    text-3xl
                                    font-black
                                "
                            >
                                Notifications
                            </h2>

                        </div>

                        <div
                            className="
                                grid
                                gap-5
                                md:grid-cols-2
                            "
                        >

                            {

                                [

                                    "Fraud Detection Alerts",

                                    "Verification Notifications",

                                    "AI Engine Updates",

                                    "Security Threat Warnings"
                                ]

                                .map((item, index) => (

                                    <div

                                        key={index}

                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            rounded-2xl
                                            border
                                            border-zinc-800
                                            bg-zinc-900/50
                                            p-5
                                        "
                                    >

                                        <span
                                            className="
                                                font-semibold
                                            "
                                        >
                                            {item}
                                        </span>

                                        <div
                                            className="
                                                rounded-full
                                                bg-emerald-500/10
                                                px-4
                                                py-2
                                                text-sm
                                                font-bold
                                                text-emerald-400
                                            "
                                        >
                                            Enabled
                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}