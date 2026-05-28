import { motion } from "framer-motion";

import {
    ShieldCheck,
    ShieldAlert,
    ShieldX,
    BrainCircuit,
    BadgeCheck,
    ScanSearch,
    Activity,
    TriangleAlert
} from "lucide-react";


export default function VerificationStatus({

    status = "Verified",

    confidence = 97.8,

    fraudRisk = 12,

    aiDecision =
        "Vehicle document verified successfully.",

    scanId = "DL-2026-VERIFY-182",

    processingTime = "1.3s"

}) {

    const statusConfig = {

        Verified: {

            icon: ShieldCheck,

            color: "emerald",

            glow: "from-emerald-500/10",

            border: "border-emerald-500/20",

            text: "text-emerald-400",

            bg: "bg-emerald-500/10",

            progress:
                "from-emerald-400 to-cyan-400"
        },

        Suspicious: {

            icon: ShieldAlert,

            color: "yellow",

            glow: "from-yellow-500/10",

            border: "border-yellow-500/20",

            text: "text-yellow-400",

            bg: "bg-yellow-500/10",

            progress:
                "from-yellow-400 to-orange-400"
        },

        Fraud: {

            icon: ShieldX,

            color: "red",

            glow: "from-red-500/10",

            border: "border-red-500/20",

            text: "text-red-400",

            bg: "bg-red-500/10",

            progress:
                "from-red-400 to-orange-400"
        }
    };


    const current = statusConfig[status];

    const StatusIcon = current.icon;


    return (

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
                duration: 0.5
            }}

            className={`
                relative
                overflow-hidden
                rounded-3xl
                border
                bg-zinc-950
                shadow-2xl
                ${current.border}
            `}
        >

            {/* Background Glow */}

            <div
                className={`
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${current.glow}
                    via-transparent
                    to-transparent
                `}
            />

            {/* Header */}

            <div
                className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                    border-b
                    border-zinc-800
                    px-6
                    py-5
                "
            >

                <div className="flex items-center gap-4">

                    <div
                        className={`
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            ${current.border}
                            ${current.bg}
                        `}
                    >

                        <StatusIcon
                            size={34}
                            className={current.text}
                        />

                    </div>

                    <div>

                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-white
                            "
                        >
                            Verification Result
                        </h2>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-zinc-400
                            "
                        >
                            AI-powered document analysis completed
                        </p>

                    </div>

                </div>

                {/* AI Status */}

                <motion.div

                    animate={{
                        opacity: [0.5, 1, 0.5]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 2
                    }}

                    className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        px-4
                        py-3
                    "
                >

                    <BrainCircuit
                        size={18}
                        className="text-cyan-400"
                    />

                    <span
                        className="
                            text-sm
                            font-semibold
                            text-cyan-400
                        "
                    >
                        AI Decision Engine
                    </span>

                </motion.div>

            </div>

            {/* Main Content */}

            <div
                className="
                    relative
                    z-10
                    p-6
                "
            >

                {/* Status Banner */}

                <motion.div

                    initial={{
                        scale: 0.95,
                        opacity: 0
                    }}

                    animate={{
                        scale: 1,
                        opacity: 1
                    }}

                    transition={{
                        delay: 0.2
                    }}

                    className={`
                        rounded-3xl
                        border
                        p-8
                        text-center
                        ${current.border}
                        ${current.bg}
                    `}
                >

                    <motion.div

                        animate={{
                            scale: [1, 1.08, 1]
                        }}

                        transition={{
                            repeat: Infinity,
                            duration: 2
                        }}

                        className="
                            mx-auto
                            flex
                            h-24
                            w-24
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-zinc-950
                        "
                    >

                        <StatusIcon
                            size={50}
                            className={current.text}
                        />

                    </motion.div>

                    <h1
                        className={`
                            mt-6
                            text-5xl
                            font-black
                            tracking-wide
                            ${current.text}
                        `}
                    >
                        {status}
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-2xl
                            text-base
                            leading-relaxed
                            text-zinc-300
                        "
                    >
                        {aiDecision}
                    </p>

                </motion.div>

                {/* Metrics */}

                <div
                    className="
                        mt-6
                        grid
                        gap-5
                        lg:grid-cols-3
                    "
                >

                    <MetricCard

                        icon={
                            <BadgeCheck
                                size={26}
                                className="text-emerald-400"
                            />
                        }

                        title="AI Confidence"

                        value={`${confidence}%`}

                        progress={confidence}

                        progressColor="
                            from-emerald-400
                            to-cyan-400
                        "
                    />

                    <MetricCard

                        icon={
                            <TriangleAlert
                                size={26}
                                className="text-red-400"
                            />
                        }

                        title="Fraud Risk"

                        value={`${fraudRisk}%`}

                        progress={fraudRisk}

                        progressColor="
                            from-red-400
                            to-orange-400
                        "
                    />

                    <MetricCard

                        icon={
                            <ScanSearch
                                size={26}
                                className="text-cyan-400"
                            />
                        }

                        title="Processing Time"

                        value={processingTime}

                        progress={88}

                        progressColor="
                            from-cyan-400
                            to-blue-400
                        "
                    />

                </div>

                {/* Scan Summary */}

                <div
                    className="
                        mt-6
                        grid
                        gap-5
                        lg:grid-cols-2
                    "
                >

                    <SummaryCard
                        label="Verification ID"
                        value={scanId}
                    />

                    <SummaryCard
                        label="System Status"
                        value="AI Verification Completed"
                    />

                </div>

                {/* Live Activity */}

                <motion.div

                    whileHover={{
                        scale: 1.01
                    }}

                    className="
                        mt-6
                        rounded-3xl
                        border
                        border-zinc-800
                        bg-zinc-900/60
                        p-6
                    "
                >

                    <div className="flex items-center gap-4">

                        <motion.div

                            animate={{
                                opacity: [0.3, 1, 0.3]
                            }}

                            transition={{
                                repeat: Infinity,
                                duration: 1.5
                            }}

                            className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-emerald-500/20
                                bg-emerald-500/10
                            "
                        >

                            <Activity
                                size={28}
                                className="text-emerald-400"
                            />

                        </motion.div>

                        <div>

                            <h3
                                className="
                                    text-lg
                                    font-bold
                                    text-white
                                "
                            >
                                Live AI Monitoring
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    text-zinc-400
                                "
                            >
                                Continuous fraud detection and verification
                                monitoring is active.
                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>

        </motion.div>
    );
}


function MetricCard({

    icon,

    title,

    value,

    progress,

    progressColor

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
                bg-zinc-900/60
                p-6
            "
        >

            <div className="flex items-center gap-4">

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

                    <p
                        className="
                            text-sm
                            text-zinc-500
                        "
                    >
                        {title}
                    </p>

                    <h2
                        className="
                            mt-1
                            text-3xl
                            font-black
                            text-white
                        "
                    >
                        {value}
                    </h2>

                </div>

            </div>

            {/* Progress */}

            <div className="mt-5">

                <div
                    className="
                        h-3
                        overflow-hidden
                        rounded-full
                        bg-zinc-800
                    "
                >

                    <motion.div

                        initial={{
                            width: 0
                        }}

                        animate={{
                            width: `${progress}%`
                        }}

                        transition={{
                            duration: 1
                        }}

                        className={`
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            ${progressColor}
                        `}
                    />

                </div>

            </div>

        </motion.div>
    );
}


function SummaryCard({

    label,

    value

}) {

    return (

        <motion.div

            whileHover={{
                scale: 1.02
            }}

            className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/60
                p-5
            "
        >

            <p
                className="
                    text-sm
                    uppercase
                    tracking-widest
                    text-zinc-500
                "
            >
                {label}
            </p>

            <h3
                className="
                    mt-3
                    text-lg
                    font-bold
                    text-white
                "
            >
                {value}
            </h3>

        </motion.div>
    );
}