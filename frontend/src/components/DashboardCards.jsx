import { motion } from "framer-motion";

import {
    ShieldCheck,
    ShieldAlert,
    Activity,
    ScanSearch,
    Cpu,
    TimerReset,
    TrendingUp,
    Eye
} from "lucide-react";


export default function DashboardCards({

    totalScans = 1248,

    fraudDetected = 86,

    aiAccuracy = 98.7,

    activeScans = 18,

    avgProcessingTime = "1.2s",

    liveMonitoring = "ACTIVE"

}) {

    const cards = [

        {
            title: "Total Verifications",

            value: totalScans,

            icon: ShieldCheck,

            color: "emerald",

            description:
                "AI verified documents"
        },

        {
            title: "Fraud Detected",

            value: fraudDetected,

            icon: ShieldAlert,

            color: "red",

            description:
                "Suspicious documents found"
        },

        {
            title: "AI Accuracy",

            value: `${aiAccuracy}%`,

            icon: Cpu,

            color: "cyan",

            description:
                "Detection engine precision"
        },

        {
            title: "Live Scans",

            value: activeScans,

            icon: Activity,

            color: "yellow",

            description:
                "Current active scans"
        }
    ];


    return (

        <div className="space-y-6">

            {/* Top Grid */}

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >

                {cards.map((card, index) => (

                    <DashboardCard

                        key={index}

                        title={card.title}

                        value={card.value}

                        icon={card.icon}

                        color={card.color}

                        description={card.description}
                    />
                ))}

            </div>

            {/* Bottom Analytics */}

            <div
                className="
                    grid
                    gap-6
                    xl:grid-cols-3
                "
            >

                {/* AI Monitoring */}

                <motion.div

                    whileHover={{
                        scale: 1.01
                    }}

                    className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-cyan-500/20
                        bg-zinc-950
                        p-6
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

                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-cyan-500/20
                                    bg-cyan-500/10
                                "
                            >

                                <Eye
                                    size={32}
                                    className="text-cyan-400"
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
                                    Live Monitoring
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        text-zinc-400
                                    "
                                >
                                    Real-time AI surveillance
                                </p>

                            </div>

                        </div>

                        {/* Status */}

                        <div
                            className="
                                mt-8
                                flex
                                items-center
                                justify-between
                                rounded-2xl
                                border
                                border-zinc-800
                                bg-zinc-900/60
                                px-5
                                py-4
                            "
                        >

                            <div>

                                <p
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-widest
                                        text-zinc-500
                                    "
                                >
                                    System Status
                                </p>

                                <h3
                                    className="
                                        mt-2
                                        text-2xl
                                        font-black
                                        text-emerald-400
                                    "
                                >
                                    {liveMonitoring}
                                </h3>

                            </div>

                            <motion.div

                                animate={{
                                    scale: [1, 1.3, 1]
                                }}

                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5
                                }}

                                className="
                                    h-5
                                    w-5
                                    rounded-full
                                    bg-emerald-400
                                "
                            />

                        </div>

                    </div>

                </motion.div>

                {/* Processing Speed */}

                <motion.div

                    whileHover={{
                        scale: 1.01
                    }}

                    className="
                        rounded-3xl
                        border
                        border-zinc-800
                        bg-zinc-950
                        p-6
                        shadow-2xl
                    "
                >

                    <div className="flex items-center gap-4">

                        <div
                            className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-yellow-500/20
                                bg-yellow-500/10
                            "
                        >

                            <TimerReset
                                size={32}
                                className="text-yellow-400"
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
                                Processing Speed
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    text-zinc-400
                                "
                            >
                                Average AI response time
                            </p>

                        </div>

                    </div>

                    {/* Speed */}

                    <div className="mt-8">

                        <h1
                            className="
                                text-6xl
                                font-black
                                text-yellow-400
                            "
                        >
                            {avgProcessingTime}
                        </h1>

                        <p
                            className="
                                mt-3
                                text-sm
                                text-zinc-500
                            "
                        >
                            Optimized OCR + Fraud Detection Pipeline
                        </p>

                    </div>

                    {/* Progress */}

                    <div className="mt-8">

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
                                    width: "92%"
                                }}

                                transition={{
                                    duration: 1.5
                                }}

                                className="
                                    h-full
                                    rounded-full
                                    bg-gradient-to-r
                                    from-yellow-400
                                    to-orange-400
                                "
                            />

                        </div>

                    </div>

                </motion.div>

                {/* Detection Analytics */}

                <motion.div

                    whileHover={{
                        scale: 1.01
                    }}

                    className="
                        rounded-3xl
                        border
                        border-zinc-800
                        bg-zinc-950
                        p-6
                        shadow-2xl
                    "
                >

                    <div className="flex items-center gap-4">

                        <div
                            className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-emerald-500/20
                                bg-emerald-500/10
                            "
                        >

                            <TrendingUp
                                size={32}
                                className="text-emerald-400"
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
                                Detection Analytics
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    text-zinc-400
                                "
                            >
                                AI fraud detection overview
                            </p>

                        </div>

                    </div>

                    {/* Analytics */}

                    <div className="mt-8 space-y-5">

                        <AnalyticsItem
                            label="Forgery Detection"
                            value="96%"
                            color="emerald"
                        />

                        <AnalyticsItem
                            label="OCR Precision"
                            value="98%"
                            color="cyan"
                        />

                        <AnalyticsItem
                            label="Plate Detection"
                            value="97%"
                            color="yellow"
                        />

                    </div>

                </motion.div>

            </div>

        </div>
    );
}


function DashboardCard({

    title,

    value,

    icon: Icon,

    color,

    description

}) {

    const colorMap = {

        emerald: `
            border-emerald-500/20
            bg-emerald-500/10
            text-emerald-400
        `,

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

        yellow: `
            border-yellow-500/20
            bg-yellow-500/10
            text-yellow-400
        `
    };


    return (

        <motion.div

            whileHover={{
                y: -6
            }}

            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-6
                shadow-2xl
            "
        >

            {/* Glow */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/[0.02]
                    via-transparent
                    to-transparent
                "
            />

            <div className="relative z-10">

                <div className="flex items-center justify-between">

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
                                mt-3
                                text-5xl
                                font-black
                                text-white
                            "
                        >
                            {value}
                        </h2>

                    </div>

                    <div
                        className={`
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            ${colorMap[color]}
                        `}
                    >

                        <Icon size={32} />

                    </div>

                </div>

                <div
                    className="
                        mt-6
                        flex
                        items-center
                        gap-3
                    "
                >

                    <ScanSearch
                        size={18}
                        className="text-zinc-500"
                    />

                    <p
                        className="
                            text-sm
                            text-zinc-400
                        "
                    >
                        {description}
                    </p>

                </div>

            </div>

        </motion.div>
    );
}


function AnalyticsItem({

    label,

    value,

    color

}) {

    const colorClasses = {

        emerald: `
            from-emerald-400
            to-cyan-400
        `,

        cyan: `
            from-cyan-400
            to-blue-400
        `,

        yellow: `
            from-yellow-400
            to-orange-400
        `
    };


    return (

        <div>

            <div
                className="
                    mb-2
                    flex
                    items-center
                    justify-between
                "
            >

                <p
                    className="
                        text-sm
                        text-zinc-400
                    "
                >
                    {label}
                </p>

                <p
                    className="
                        text-sm
                        font-bold
                        text-white
                    "
                >
                    {value}
                </p>

            </div>

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
                        width: value
                    }}

                    transition={{
                        duration: 1.2
                    }}

                    className={`
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        ${colorClasses[color]}
                    `}
                />

            </div>

        </div>
    );
}