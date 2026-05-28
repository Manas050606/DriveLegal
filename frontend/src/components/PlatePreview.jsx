import {

    Car,

    ShieldCheck,

    ScanSearch,

    AlertTriangle,

    CheckCircle2,

    Activity

} from "lucide-react";

import { motion } from "framer-motion";


// ==============================================
// PLATE PREVIEW COMPONENT
// ==============================================

export default function PlatePreview({

    image = null,

    plateNumber = "MH12AB1234",

    confidence = 98.4,

    status = "Verified"

}) {

    // ==========================================
    // STATUS
    // ==========================================

    const isVerified =
        status === "Verified";


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
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                shadow-2xl
            "
        >

            {/* ======================================
                HEADER
            ======================================= */}

            <div
                className="
                    flex
                    flex-col
                    gap-5
                    border-b
                    border-zinc-800
                    p-6
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
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
                            bg-cyan-500/10
                            text-cyan-400
                            shadow-cyan
                        "
                    >

                        <Car size={32} />

                    </div>

                    <div>

                        <h2
                            className="
                                text-3xl
                                font-black
                                text-white
                            "
                        >
                            Number Plate Detection
                        </h2>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-zinc-400
                            "
                        >
                            AI-powered OCR vehicle verification
                        </p>

                    </div>

                </div>

                {/* STATUS */}

                <div
                    className={`
                        flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        px-5
                        py-3
                        text-sm
                        font-bold
                        ${
                            isVerified
                                ? `
                                    border-emerald-500/30
                                    bg-emerald-500/10
                                    text-emerald-400
                                  `
                                : `
                                    border-red-500/30
                                    bg-red-500/10
                                    text-red-400
                                  `
                        }
                    `}
                >

                    {

                        isVerified

                        ? <ShieldCheck size={18} />

                        : <AlertTriangle size={18} />
                    }

                    {status}

                </div>

            </div>

            {/* ======================================
                IMAGE PREVIEW
            ======================================= */}

            <div className="p-6">

                {

                    image

                    ? (

                        <motion.div

                            whileHover={{

                                scale: 1.01
                            }}

                            className="
                                overflow-hidden
                                rounded-3xl
                                border
                                border-zinc-800
                            "
                        >

                            <img

                                src={image}

                                alt="Vehicle"

                                className="
                                    h-[380px]
                                    w-full
                                    object-cover
                                "
                            />

                        </motion.div>

                    )

                    : (

                        <div
                            className="
                                flex
                                h-[380px]
                                flex-col
                                items-center
                                justify-center
                                rounded-3xl
                                border
                                border-dashed
                                border-zinc-700
                                bg-zinc-900/50
                            "
                        >

                            <ScanSearch

                                size={70}

                                className="
                                    text-zinc-600
                                "
                            />

                            <h3
                                className="
                                    mt-6
                                    text-2xl
                                    font-bold
                                    text-zinc-400
                                "
                            >
                                No Vehicle Uploaded
                            </h3>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    text-zinc-500
                                "
                            >
                                Upload a vehicle image
                                for AI OCR analysis
                            </p>

                        </div>
                    )
                }

            </div>

            {/* ======================================
                ANALYTICS
            ======================================= */}

            <div
                className="
                    grid
                    gap-6
                    border-t
                    border-zinc-800
                    p-6
                    md:grid-cols-3
                "
            >

                {/* PLATE */}

                <div
                    className="
                        rounded-3xl
                        border
                        border-zinc-800
                        bg-zinc-900/60
                        p-6
                    "
                >

                    <p
                        className="
                            text-sm
                            text-zinc-500
                        "
                    >
                        Plate Number
                    </p>

                    <h2
                        className="
                            mt-4
                            text-3xl
                            font-black
                            tracking-wider
                            text-cyan-400
                        "
                    >
                        {plateNumber}
                    </h2>

                </div>

                {/* CONFIDENCE */}

                <div
                    className="
                        rounded-3xl
                        border
                        border-zinc-800
                        bg-zinc-900/60
                        p-6
                    "
                >

                    <p
                        className="
                            text-sm
                            text-zinc-500
                        "
                    >
                        OCR Confidence
                    </p>

                    <h2
                        className="
                            mt-4
                            text-3xl
                            font-black
                            text-emerald-400
                        "
                    >
                        {confidence}%
                    </h2>

                </div>

                {/* STATUS */}

                <div
                    className="
                        rounded-3xl
                        border
                        border-zinc-800
                        bg-zinc-900/60
                        p-6
                    "
                >

                    <p
                        className="
                            text-sm
                            text-zinc-500
                        "
                    >
                        Verification Status
                    </p>

                    <div
                        className="
                            mt-4
                            flex
                            items-center
                            gap-3
                        "
                    >

                        {

                            isVerified

                            ? (

                                <CheckCircle2
                                    size={28}
                                    className="
                                        text-emerald-400
                                    "
                                />
                            )

                            : (

                                <AlertTriangle
                                    size={28}
                                    className="
                                        text-red-400
                                    "
                                />
                            )
                        }

                        <h2
                            className={`
                                text-2xl
                                font-black
                                ${
                                    isVerified

                                    ? "text-emerald-400"

                                    : "text-red-400"
                                }
                            `}
                        >
                            {status}
                        </h2>

                    </div>

                </div>

            </div>

            {/* ======================================
                AI ENGINE STATUS
            ======================================= */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-zinc-800
                    bg-zinc-900/40
                    px-6
                    py-5
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-zinc-400
                    "
                >

                    <Activity
                        size={18}
                        className="
                            text-cyan-400
                        "
                    />

                    AI Verification Engine Active

                </div>

                <div
                    className="
                        rounded-full
                        bg-cyan-500/10
                        px-4
                        py-2
                        text-xs
                        font-bold
                        text-cyan-400
                    "
                >
                    DRIVELEGAL AI
                </div>

            </div>

        </motion.div>
    );
}