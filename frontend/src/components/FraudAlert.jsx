import { motion } from "framer-motion";

import {
    ShieldAlert,
    TriangleAlert,
    Siren,
    ScanSearch,
    ShieldCheck,
    Activity,
    Eye,
    Cpu
} from "lucide-react";


export default function FraudAlert({

    fraudDetected = true,

    threatLevel = "HIGH",

    fraudScore = 78,

    suspiciousActivity = "Possible document tampering detected.",

    anomalyType = "Image Manipulation",

    aiConfidence = 96.2,

    scanId = "FRAUD-2026-7821"

}) {

    const dangerMode = fraudDetected;


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
                shadow-2xl

                ${
                    dangerMode
                        ? `
                            border-red-500/20
                            bg-zinc-950
                        `
                        : `
                            border-emerald-500/20
                            bg-zinc-950
                        `
                }
            `}
        >

            {/* Animated Glow */}

            <motion.div

                animate={{
                    opacity: [0.3, 0.6, 0.3]
                }}

                transition={{
                    repeat: Infinity,
                    duration: 2
                }}

                className={`
                    absolute
                    inset-0
                    bg-gradient-to-br

                    ${
                        dangerMode
                            ? `
                                from-red-500/10
                                via-transparent
                                to-orange-500/10
                            `
                            : `
                                from-emerald-500/10
                                via-transparent
                                to-cyan-500/10
                            `
                    }
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

                    <motion.div

                        animate={
                            dangerMode
                                ? {
                                    scale: [1, 1.1, 1]
                                }
                                : {}
                        }

                        transition={{
                            repeat: Infinity,
                            duration: 1.5
                        }}

                        className={`
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            border

                            ${
                                dangerMode
                                    ? `
                                        border-red-500/30
                                        bg-red-500/10
                                    `
                                    : `
                                        border-emerald-500/30
                                        bg-emerald-500/10
                                    `
                            }
                        `}
                    >

                        {dangerMode
                            ? (
                                <ShieldAlert
                                    size={34}
                                    className="text-red-400"
                                />
                            )
                            : (
                                <ShieldCheck
                                    size={34}
                                    className="text-emerald-400"
                                />
                            )
                        }

                    </motion.div>

                    <div>

                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-white
                            "
                        >
                            Fraud Detection Engine
                        </h2>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-zinc-400
                            "
                        >
                            Real-time AI security monitoring
                        </p>

                    </div>

                </div>

                {/* Threat Level */}

                <motion.div

                    animate={{
                        opacity: [0.5, 1, 0.5]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 2
                    }}

                    className={`
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        px-4
                        py-3

                        ${
                            dangerMode
                                ? `
                                    border-red-500/20
                                    bg-red-500/10
                                `
                                : `
                                    border-emerald-500/20
                                    bg-emerald-500/10
                                `
                        }
                    `}
                >

                    <Siren
                        size={18}
                        className={
                            dangerMode
                                ? "text-red-400"
                                : "text-emerald-400"
                        }
                    />

                    <span
                        className={`
                            text-sm
                            font-semibold

                            ${
                                dangerMode
                                    ? "text-red-400"
                                    : "text-emerald-400"
                            }
                        `}
                    >
                        Threat Level: {threatLevel}
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

                {/* Main Alert */}

                <motion.div

                    whileHover={{
                        scale: 1.01
                    }}

                    className={`
                        rounded-3xl
                        border
                        p-8

                        ${
                            dangerMode
                                ? `
                                    border-red-500/20
                                    bg-red-500/10
                                `
                                : `
                                    border-emerald-500/20
                                    bg-emerald-500/10
                                `
                        }
                    `}
                >

                    <div className="flex items-start gap-5">

                        <motion.div

                            animate={
                                dangerMode
                                    ? {
                                        rotate: [-4, 4, -4]
                                    }
                                    : {}
                            }

                            transition={{
                                repeat: Infinity,
                                duration: 1.5
                            }}

                            className={`
                                flex
                                h-20
                                w-20
                                items-center
                                justify-center
                                rounded-3xl
                                border

                                ${
                                    dangerMode
                                        ? `
                                            border-red-500/30
                                            bg-red-500/10
                                        `
                                        : `
                                            border-emerald-500/30
                                            bg-emerald-500/10
                                        `
                                }
                            `}
                        >

                            <TriangleAlert
                                size={40}
                                className={
                                    dangerMode
                                        ? "text-red-400"
                                        : "text-emerald-400"
                                }
                            />

                        </motion.div>

                        <div className="flex-1">

                            <h1
                                className={`
                                    text-4xl
                                    font-black
                                    tracking-wide

                                    ${
                                        dangerMode
                                            ? "text-red-400"
                                            : "text-emerald-400"
                                    }
                                `}
                            >
                                {dangerMode
                                    ? "FRAUD DETECTED"
                                    : "DOCUMENT SAFE"}
                            </h1>

                            <p
                                className="
                                    mt-4
                                    text-base
                                    leading-relaxed
                                    text-zinc-300
                                "
                            >
                                {suspiciousActivity}
                            </p>

                            <div
                                className="
                                    mt-5
                                    flex
                                    flex-wrap
                                    gap-3
                                "
                            >

                                <Tag
                                    text={anomalyType}
                                    danger={dangerMode}
                                />

                                <Tag
                                    text={`Scan ID: ${scanId}`}
                                    danger={dangerMode}
                                />

                            </div>

                        </div>

                    </div>

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
                            <ShieldAlert
                                size={26}
                                className="text-red-400"
                            />
                        }

                        title="Fraud Score"

                        value={`${fraudScore}%`}

                        progress={fraudScore}

                        progressColor="
                            from-red-400
                            to-orange-400
                        "
                    />

                    <MetricCard

                        icon={
                            <Cpu
                                size={26}
                                className="text-cyan-400"
                            />
                        }

                        title="AI Confidence"

                        value={`${aiConfidence}%`}

                        progress={aiConfidence}

                        progressColor="
                            from-cyan-400
                            to-blue-400
                        "
                    />

                    <MetricCard

                        icon={
                            <Eye
                                size={26}
                                className="text-yellow-400"
                            />
                        }

                        title="Threat Analysis"

                        value={threatLevel}

                        progress={90}

                        progressColor="
                            from-yellow-400
                            to-orange-400
                        "
                    />

                </div>

                {/* Live Monitoring */}

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

                    <div className="flex items-center gap-5">

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

                            <Activity
                                size={30}
                                className="text-cyan-400"
                            />

                        </motion.div>

                        <div>

                            <h3
                                className="
                                    text-xl
                                    font-bold
                                    text-white
                                "
                            >
                                Live Security Monitoring
                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    leading-relaxed
                                    text-zinc-400
                                "
                            >
                                AI fraud detection engine continuously scans
                                uploaded documents for anomalies, tampering,
                                and suspicious verification patterns.
                            </p>

                        </div>

                    </div>

                </motion.div>

                {/* Activity Log */}

                <div
                    className="
                        mt-6
                        rounded-3xl
                        border
                        border-zinc-800
                        bg-zinc-900/60
                        p-6
                    "
                >

                    <div className="flex items-center gap-3">

                        <ScanSearch
                            size={24}
                            className="text-cyan-400"
                        />

                        <h3
                            className="
                                text-xl
                                font-bold
                                text-white
                            "
                        >
                            AI Activity Logs
                        </h3>

                    </div>

                    <div className="mt-5 space-y-4">

                        <LogItem
                            text="OCR analysis completed"
                            time="0.4s"
                        />

                        <LogItem
                            text="Forgery pattern detected"
                            time="0.8s"
                            danger={dangerMode}
                        />

                        <LogItem
                            text="Fraud scoring generated"
                            time="1.1s"
                        />

                    </div>

                </div>

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


function Tag({

    text,

    danger

}) {

    return (

        <div
            className={`
                rounded-full
                border
                px-4
                py-2
                text-xs
                font-semibold
                tracking-wide

                ${
                    danger
                        ? `
                            border-red-500/20
                            bg-red-500/10
                            text-red-300
                        `
                        : `
                            border-emerald-500/20
                            bg-emerald-500/10
                            text-emerald-300
                        `
                }
            `}
        >
            {text}
        </div>
    );
}


function LogItem({

    text,

    time,

    danger = false

}) {

    return (

        <motion.div

            whileHover={{
                x: 4
            }}

            className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950
                px-5
                py-4
            "
        >

            <div className="flex items-center gap-3">

                <motion.div

                    animate={{
                        opacity: [0.4, 1, 0.4]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 1.5
                    }}

                    className={`
                        h-3
                        w-3
                        rounded-full

                        ${
                            danger
                                ? "bg-red-400"
                                : "bg-emerald-400"
                        }
                    `}
                />

                <p
                    className="
                        text-sm
                        text-zinc-300
                    "
                >
                    {text}
                </p>

            </div>

            <span
                className="
                    text-xs
                    font-semibold
                    text-zinc-500
                "
            >
                {time}
            </span>

        </motion.div>
    );
}