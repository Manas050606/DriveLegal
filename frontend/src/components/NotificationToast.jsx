import { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    CheckCircle,
    AlertTriangle,
    XCircle,
    Info,
    X
} from "lucide-react";


export default function NotificationToast({

    show,

    type = "success",

    title = "Notification",

    message = "",

    onClose,

    duration = 4000

}) {

    useEffect(() => {

        if (!show) return;

        const timer = setTimeout(() => {

            onClose();

        }, duration);

        return () => clearTimeout(timer);

    }, [show, duration, onClose]);


    const toastStyles = {

        success: {

            icon: (
                <CheckCircle
                    size={24}
                    className="text-emerald-400"
                />
            ),

            border:
                "border-emerald-500/30",

            glow:
                "from-emerald-500/20",

            progress:
                "bg-emerald-400"
        },

        error: {

            icon: (
                <XCircle
                    size={24}
                    className="text-red-400"
                />
            ),

            border:
                "border-red-500/30",

            glow:
                "from-red-500/20",

            progress:
                "bg-red-400"
        },

        warning: {

            icon: (
                <AlertTriangle
                    size={24}
                    className="text-yellow-400"
                />
            ),

            border:
                "border-yellow-500/30",

            glow:
                "from-yellow-500/20",

            progress:
                "bg-yellow-400"
        },

        info: {

            icon: (
                <Info
                    size={24}
                    className="text-cyan-400"
                />
            ),

            border:
                "border-cyan-500/30",

            glow:
                "from-cyan-500/20",

            progress:
                "bg-cyan-400"
        }
    };


    const currentStyle = toastStyles[type];


    return (

        <AnimatePresence>

            {show && (

                <motion.div

                    initial={{
                        opacity: 0,
                        y: -40,
                        scale: 0.9
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                    }}

                    exit={{
                        opacity: 0,
                        y: -40,
                        scale: 0.9
                    }}

                    transition={{
                        duration: 0.3
                    }}

                    className="
                        fixed
                        right-6
                        top-6
                        z-50
                        w-[380px]
                    "
                >

                    <div
                        className={`
                            relative
                            overflow-hidden
                            rounded-2xl
                            border
                            bg-zinc-950
                            shadow-2xl
                            backdrop-blur-xl
                            ${currentStyle.border}
                        `}
                    >

                        {/* Glow Effect */}

                        <div
                            className={`
                                absolute
                                inset-0
                                bg-gradient-to-br
                                ${currentStyle.glow}
                                via-transparent
                                to-transparent
                            `}
                        />

                        {/* Content */}

                        <div className="relative z-10 p-5">

                            <div className="flex items-start gap-4">

                                {/* Icon */}

                                <motion.div

                                    initial={{
                                        scale: 0
                                    }}

                                    animate={{
                                        scale: 1
                                    }}

                                    transition={{
                                        type: "spring",
                                        stiffness: 200
                                    }}

                                    className="
                                        mt-1
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-zinc-900
                                        border
                                        border-zinc-800
                                    "
                                >
                                    {currentStyle.icon}
                                </motion.div>

                                {/* Text */}

                                <div className="flex-1">

                                    <h3
                                        className="
                                            text-base
                                            font-semibold
                                            text-white
                                        "
                                    >
                                        {title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            leading-relaxed
                                            text-zinc-400
                                        "
                                    >
                                        {message}
                                    </p>

                                </div>

                                {/* Close Button */}

                                <button

                                    onClick={onClose}

                                    className="
                                        rounded-lg
                                        p-1.5
                                        text-zinc-500
                                        transition
                                        hover:bg-zinc-800
                                        hover:text-white
                                    "
                                >
                                    <X size={18} />
                                </button>

                            </div>

                        </div>

                        {/* Progress Bar */}

                        <motion.div

                            initial={{
                                width: "100%"
                            }}

                            animate={{
                                width: "0%"
                            }}

                            transition={{
                                duration: duration / 1000,
                                ease: "linear"
                            }}

                            className={`
                                h-1
                                ${currentStyle.progress}
                            `}
                        />

                    </div>

                </motion.div>
            )}

        </AnimatePresence>
    );
}