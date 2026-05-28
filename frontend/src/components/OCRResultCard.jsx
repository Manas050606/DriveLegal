import { motion } from "framer-motion";

import {
    ScanText,
    ShieldCheck,
    AlertTriangle,
    Clock3,
    FileSearch,
    BadgeCheck,
    BrainCircuit
} from "lucide-react";


export default function OCRResultCard({

    extractedText = "MH12AB1234",

    ownerName = "Rahul Sharma",

    vehicleType = "SUV",

    confidence = 97.6,

    fraudProbability = 12,

    verificationStatus = "Verified",

    scanTime = "1.4s",

    timestamp = "28 May 2026, 10:42 AM"

}) {

    const isFraud = fraudProbability > 40;


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

            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                shadow-2xl
            "
        >

            {/* Background Glow */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-emerald-500/5
                    via-transparent
                    to-cyan-500/5
                "
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

                        <ScanText
                            size={30}
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
                            OCR Analysis Report
                        </h2>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-zinc-400
                            "
                        >
                            AI extracted vehicle document information
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
                        AI OCR Active
                    </span>

                </motion.div>

            </div>

            {/* Main Content */}

            <div
                className="
                    relative
                    z-10
                    grid
                    gap-6
                    p-6
                    lg:grid-cols-2
                "
            >

                {/* Left Side */}

                <div className="space-y-5">

                    {/* Extracted Plate */}

                    <motion.div

                        whileHover={{
                            scale: 1.02
                        }}

                        className="
                            rounded-3xl
                            border
                            border-cyan-500/20
                            bg-cyan-500/10
                            p-6
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
                                    border-cyan-500/30
                                    bg-cyan-500/10
                                "
                            >

                                <FileSearch
                                    size={30}
                                    className="text-cyan-400"
                                />

                            </div>

                            <div>

                                <p
                                    className="
                                        text-sm
                                        uppercase
                                        tracking-widest
                                        text-zinc-400
                                    "
                                >
                                    Extracted Number Plate
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-4xl
                                        font-black
                                        tracking-[0.25em]
                                        text-white
                                    "
                                >
                                    {extractedText}
                                </h2>

                            </div>

                        </div>

                    </motion.div>

                    {/* Details */}

                    <div className="grid gap-4 sm:grid-cols-2">

                        <DetailCard
                            title="Owner Name"
                            value={ownerName}
                        />

                        <DetailCard
                            title="Vehicle Type"
                            value={vehicleType}
                        />

                        <DetailCard
                            title="Scan Time"
                            value={scanTime}
                        />

                        <DetailCard
                            title="Timestamp"
                            value={timestamp}
                        />

                    </div>

                </div>

                {/* Right Side */}

                <div className="space-y-5">

                    {/* Confidence */}

                    <MetricCard

                        icon={
                            <ShieldCheck
                                size={28}
                                className="text-emerald-400"
                            />
                        }

                        title="OCR Confidence"

                        value={`${confidence}%`}

                        progress={confidence}

                        color="emerald"
                    />

                    {/* Fraud Probability */}

                    <MetricCard

                        icon={
                            isFraud
                                ? (
                                    <AlertTriangle
                                        size={28}
                                        className="text-red-400"
                                    />
                                )
                                : (
                                    <ShieldCheck
                                        size={28}
                                        className="text-yellow-400"
                                    />
                                )
                        }

                        title="Fraud Probability"

                        value={`${fraudProbability}%`}

                        progress={fraudProbability}

                        color={
                            isFraud
                                ? "red"
                                : "yellow"
                        }
                    />

                    {/* Status */}

                    <motion.div

                        whileHover={{
                            scale: 1.02
                        }}

                        className={`
                            rounded-3xl
                            border
                            p-6

                            ${
                                verificationStatus === "Verified"
                                    ? `
                                        border-emerald-500/20
                                        bg-emerald-500/10
                                    `
                                    : `
                                        border-red-500/20
                                        bg-red-500/10
                                    `
                            }
                        `}
                    >

                        <div className="flex items-center gap-5">

                            <div
                                className={`
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border

                                    ${
                                        verificationStatus === "Verified"
                                            ? `
                                                border-emerald-500/30
                                                bg-emerald-500/10
                                            `
                                            : `
                                                border-red-500/30
                                                bg-red-500/10
                                            `
                                    }
                                `}
                            >

                                <BadgeCheck
                                    size={34}
                                    className={
                                        verificationStatus === "Verified"
                                            ? "text-emerald-400"
                                            : "text-red-400"
                                    }
                                />

                            </div>

                            <div>

                                <p
                                    className="
                                        text-sm
                                        uppercase
                                        tracking-widest
                                        text-zinc-400
                                    "
                                >
                                    Verification Status
                                </p>

                                <h2
                                    className={`
                                        mt-1
                                        text-3xl
                                        font-black

                                        ${
                                            verificationStatus === "Verified"
                                                ? "text-emerald-400"
                                                : "text-red-400"
                                        }
                                    `}
                                >
                                    {verificationStatus}
                                </h2>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </motion.div>
    );
}


function DetailCard({

    title,

    value

}) {

    return (

        <motion.div

            whileHover={{
                y: -4
            }}

            className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/60
                p-5
            "
        >

            <p
                className="
                    text-sm
                    text-zinc-500
                "
            >
                {title}
            </p>

            <h3
                className="
                    mt-2
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


function MetricCard({

    icon,

    title,

    value,

    progress,

    color

}) {

    const colorClasses = {

        emerald: `
            from-emerald-400
            to-cyan-400
        `,

        red: `
            from-red-400
            to-orange-400
        `,

        yellow: `
            from-yellow-400
            to-orange-300
        `
    };


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
                p-6
            "
        >

            <div className="flex items-center justify-between">

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

                <Clock3
                    size={22}
                    className="text-zinc-600"
                />

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
                            ${colorClasses[color]}
                        `}
                    />

                </div>

            </div>

        </motion.div>
    );
}