import { motion } from "framer-motion";

import {
    ShieldCheck,
    ScanSearch,
    Cpu
} from "lucide-react";


export default function Loader({

    title = "Processing AI Verification",

    subtitle = "Analyzing vehicle document and detecting fraud..."

}) {

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">

            <motion.div

                initial={{
                    opacity: 0,
                    scale: 0.9
                }}

                animate={{
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: 0.4
                }}

                className="
                    relative
                    w-[420px]
                    overflow-hidden
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-950
                    p-8
                    shadow-2xl
                "
            >

                {/* Glow Effect */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-emerald-500/10
                        via-cyan-500/10
                        to-transparent
                    "
                />

                {/* Top Animated Line */}

                <motion.div

                    animate={{
                        x: ["-100%", "100%"]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear"
                    }}

                    className="
                        absolute
                        top-0
                        left-0
                        h-[2px]
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-emerald-400
                        to-transparent
                    "
                />

                {/* Main Content */}

                <div className="relative z-10">

                    {/* Icons */}

                    <div className="flex items-center justify-center gap-5">

                        <motion.div

                            animate={{
                                rotate: 360
                            }}

                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "linear"
                            }}

                            className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                bg-emerald-500/10
                                border
                                border-emerald-500/30
                            "
                        >
                            <ShieldCheck
                                className="text-emerald-400"
                                size={30}
                            />
                        </motion.div>

                        <motion.div

                            animate={{
                                scale: [1, 1.2, 1]
                            }}

                            transition={{
                                repeat: Infinity,
                                duration: 1.8
                            }}

                            className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                bg-cyan-500/10
                                border
                                border-cyan-500/30
                            "
                        >
                            <ScanSearch
                                className="text-cyan-400"
                                size={30}
                            />
                        </motion.div>

                        <motion.div

                            animate={{
                                rotate: -360
                            }}

                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "linear"
                            }}

                            className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                bg-red-500/10
                                border
                                border-red-500/30
                            "
                        >
                            <Cpu
                                className="text-red-400"
                                size={30}
                            />
                        </motion.div>

                    </div>

                    {/* Title */}

                    <motion.h2

                        initial={{
                            opacity: 0,
                            y: 10
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: 0.2
                        }}

                        className="
                            mt-8
                            text-center
                            text-2xl
                            font-bold
                            text-white
                        "
                    >
                        {title}
                    </motion.h2>

                    {/* Subtitle */}

                    <motion.p

                        initial={{
                            opacity: 0,
                            y: 10
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: 0.3
                        }}

                        className="
                            mt-3
                            text-center
                            text-sm
                            leading-relaxed
                            text-zinc-400
                        "
                    >
                        {subtitle}
                    </motion.p>

                    {/* Progress Animation */}

                    <div
                        className="
                            mt-8
                            h-3
                            overflow-hidden
                            rounded-full
                            bg-zinc-800
                        "
                    >

                        <motion.div

                            animate={{
                                x: ["-100%", "100%"]
                            }}

                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut"
                            }}

                            className="
                                h-full
                                w-1/2
                                rounded-full
                                bg-gradient-to-r
                                from-emerald-400
                                via-cyan-400
                                to-emerald-400
                            "
                        />

                    </div>

                    {/* Processing Status */}

                    <div className="mt-6 space-y-3">

                        <StatusItem
                            text="Running OCR Engine"
                            delay={0}
                        />

                        <StatusItem
                            text="Detecting Number Plate"
                            delay={0.5}
                        />

                        <StatusItem
                            text="Analyzing Fraud Signals"
                            delay={1}
                        />

                        <StatusItem
                            text="Generating Verification Report"
                            delay={1.5}
                        />

                    </div>

                </div>

            </motion.div>

        </div>
    );
}


function StatusItem({

    text,

    delay

}) {

    return (

        <motion.div

            initial={{
                opacity: 0.3
            }}

            animate={{
                opacity: [0.3, 1, 0.3]
            }}

            transition={{
                repeat: Infinity,
                duration: 2,
                delay
            }}

            className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-zinc-800
                bg-zinc-900/50
                px-4
                py-3
            "
        >

            <motion.div

                animate={{
                    scale: [1, 1.4, 1]
                }}

                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay
                }}

                className="
                    h-3
                    w-3
                    rounded-full
                    bg-emerald-400
                "
            />

            <p className="text-sm text-zinc-300">

                {text}

            </p>

        </motion.div>
    );
}