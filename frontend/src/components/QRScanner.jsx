import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    QrCode,
    ScanLine,
    ShieldCheck,
    ShieldAlert,
    Camera,
    BadgeCheck,
    Activity,
    SearchCheck
} from "lucide-react";


export default function QRScanner() {

    const [isScanning, setIsScanning] =
        useState(false);

    const [scanComplete, setScanComplete] =
        useState(false);

    const [verificationStatus, setVerificationStatus] =
        useState("Verified");


    // =========================================
    // HANDLE SCAN
    // =========================================

    const startScan = () => {

        setIsScanning(true);

        setScanComplete(false);

        setTimeout(() => {

            setIsScanning(false);

            setScanComplete(true);

        }, 3500);
    };


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
                    from-cyan-500/5
                    via-transparent
                    to-emerald-500/5
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

                        <QrCode
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
                            QR Verification Scanner
                        </h2>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-zinc-400
                            "
                        >
                            Smart AI-powered QR validation system
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
                        border-emerald-500/20
                        bg-emerald-500/10
                        px-4
                        py-3
                    "
                >

                    <Activity
                        size={18}
                        className="text-emerald-400"
                    />

                    <span
                        className="
                            text-sm
                            font-semibold
                            text-emerald-400
                        "
                    >
                        Scanner Active
                    </span>

                </motion.div>

            </div>

            {/* Main Section */}

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

                {/* Scanner Area */}

                <div>

                    <motion.div

                        whileHover={{
                            scale: 1.01
                        }}

                        className="
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-900/60
                            p-6
                        "
                    >

                        {/* Scanner Box */}

                        <div
                            className="
                                relative
                                mx-auto
                                flex
                                h-[360px]
                                w-full
                                max-w-[360px]
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-3xl
                                border-2
                                border-dashed
                                border-cyan-500/30
                                bg-black
                            "
                        >

                            {/* Fake Camera Background */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-br
                                    from-zinc-900
                                    via-black
                                    to-zinc-900
                                "
                            />

                            {/* QR Frame */}

                            <div
                                className="
                                    relative
                                    z-10
                                    flex
                                    h-44
                                    w-44
                                    items-center
                                    justify-center
                                    rounded-3xl
                                    border-4
                                    border-cyan-400
                                "
                            >

                                <QrCode
                                    size={80}
                                    className="text-cyan-400"
                                />

                            </div>

                            {/* Scan Line */}

                            {isScanning && (

                                <motion.div

                                    animate={{
                                        y: ["-100%", "100%"]
                                    }}

                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.8,
                                        ease: "linear"
                                    }}

                                    className="
                                        absolute
                                        left-0
                                        right-0
                                        h-16
                                        bg-gradient-to-b
                                        from-transparent
                                        via-cyan-400/40
                                        to-transparent
                                    "
                                />

                            )}

                        </div>

                        {/* Action Button */}

                        <motion.button

                            whileHover={{
                                scale: 1.03
                            }}

                            whileTap={{
                                scale: 0.97
                            }}

                            onClick={startScan}

                            disabled={isScanning}

                            className="
                                mt-6
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-3
                                rounded-2xl
                                bg-gradient-to-r
                                from-cyan-500
                                to-emerald-500
                                px-6
                                py-4
                                text-lg
                                font-bold
                                text-black
                                transition
                            "
                        >

                            {isScanning
                                ? (
                                    <>
                                        <ScanLine size={22} />
                                        Scanning QR...
                                    </>
                                )
                                : (
                                    <>
                                        <Camera size={22} />
                                        Start QR Scan
                                    </>
                                )
                            }

                        </motion.button>

                    </motion.div>

                </div>

                {/* Verification Results */}

                <div className="space-y-5">

                    {/* Status */}

                    <AnimatePresence>

                        {scanComplete && (

                            <motion.div

                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}

                                exit={{
                                    opacity: 0
                                }}

                                className="
                                    rounded-3xl
                                    border
                                    border-emerald-500/20
                                    bg-emerald-500/10
                                    p-6
                                "
                            >

                                <div className="flex items-center gap-5">

                                    <div
                                        className="
                                            flex
                                            h-16
                                            w-16
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-emerald-500/30
                                            bg-emerald-500/10
                                        "
                                    >

                                        <ShieldCheck
                                            size={34}
                                            className="text-emerald-400"
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
                                            Verification Result
                                        </p>

                                        <h2
                                            className="
                                                mt-1
                                                text-3xl
                                                font-black
                                                text-emerald-400
                                            "
                                        >
                                            {verificationStatus}
                                        </h2>

                                    </div>

                                </div>

                            </motion.div>
                        )}

                    </AnimatePresence>

                    {/* Analytics */}

                    <AnalyticsCard
                        icon={
                            <SearchCheck
                                size={28}
                                className="text-cyan-400"
                            />
                        }
                        title="Verification ID"
                        value="QR-VERIFY-8921"
                    />

                    <AnalyticsCard
                        icon={
                            <ShieldAlert
                                size={28}
                                className="text-yellow-400"
                            />
                        }
                        title="Fraud Risk"
                        value="Low Risk"
                    />

                    <AnalyticsCard
                        icon={
                            <BadgeCheck
                                size={28}
                                className="text-emerald-400"
                            />
                        }
                        title="Document Status"
                        value="Government Validated"
                    />

                    {/* Activity Log */}

                    <motion.div

                        whileHover={{
                            scale: 1.01
                        }}

                        className="
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-900/60
                            p-6
                        "
                    >

                        <h3
                            className="
                                text-xl
                                font-bold
                                text-white
                            "
                        >
                            Scanner Activity
                        </h3>

                        <div className="mt-5 space-y-4">

                            <LogItem
                                text="QR code detected"
                                time="0.4s"
                            />

                            <LogItem
                                text="Verification database matched"
                                time="0.8s"
                            />

                            <LogItem
                                text="AI validation completed"
                                time="1.2s"
                            />

                        </div>

                    </motion.div>

                </div>

            </div>

        </motion.div>
    );
}


function AnalyticsCard({

    icon,

    title,

    value

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
                p-5
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
                            text-2xl
                            font-bold
                            text-white
                        "
                    >
                        {value}
                    </h2>

                </div>

            </div>

        </motion.div>
    );
}


function LogItem({

    text,

    time

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

                    className="
                        h-3
                        w-3
                        rounded-full
                        bg-emerald-400
                    "
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