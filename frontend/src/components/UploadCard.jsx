import { useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    UploadCloud,
    FileImage,
    FileText,
    CheckCircle2,
    AlertTriangle,
    X
} from "lucide-react";


export default function UploadCard({

    title = "Upload Vehicle Document",

    subtitle =
        "Upload RC, Insurance, License or Vehicle Image for AI Verification",

    acceptedTypes = ".png,.jpg,.jpeg,.pdf",

    onFileSelect

}) {

    const inputRef = useRef(null);

    const [dragActive, setDragActive] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);

    const [preview, setPreview] = useState(null);

    const [error, setError] = useState("");

    const [uploadProgress, setUploadProgress] = useState(0);


    // =====================================
    // HANDLE FILE
    // =====================================

    const processFile = (file) => {

        if (!file) return;

        const allowedTypes = [

            "image/png",

            "image/jpeg",

            "image/jpg",

            "application/pdf"
        ];

        if (!allowedTypes.includes(file.type)) {

            setError(
                "Only PNG, JPG, JPEG and PDF files are allowed."
            );

            return;
        }

        setError("");

        setSelectedFile(file);

        if (file.type.startsWith("image")) {

            const imageUrl = URL.createObjectURL(file);

            setPreview(imageUrl);

        } else {

            setPreview(null);
        }

        // Fake Upload Animation

        let progress = 0;

        const interval = setInterval(() => {

            progress += 10;

            setUploadProgress(progress);

            if (progress >= 100) {

                clearInterval(interval);
            }

        }, 100);

        if (onFileSelect) {

            onFileSelect(file);
        }
    };


    // =====================================
    // DROP EVENTS
    // =====================================

    const handleDrop = (event) => {

        event.preventDefault();

        setDragActive(false);

        const file = event.dataTransfer.files[0];

        processFile(file);
    };

    const handleDragOver = (event) => {

        event.preventDefault();

        setDragActive(true);
    };

    const handleDragLeave = () => {

        setDragActive(false);
    };


    // =====================================
    // INPUT CHANGE
    // =====================================

    const handleInputChange = (event) => {

        const file = event.target.files[0];

        processFile(file);
    };


    // =====================================
    // REMOVE FILE
    // =====================================

    const removeFile = () => {

        setSelectedFile(null);

        setPreview(null);

        setUploadProgress(0);

        setError("");
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
                p-6
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

                        <UploadCloud
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
                            {title}
                        </h2>

                        <p
                            className="
                                mt-1
                                text-sm
                                leading-relaxed
                                text-zinc-400
                            "
                        >
                            {subtitle}
                        </p>

                    </div>

                </div>

                {/* Upload Box */}

                <motion.div

                    whileHover={{
                        scale: 1.01
                    }}

                    onDrop={handleDrop}

                    onDragOver={handleDragOver}

                    onDragLeave={handleDragLeave}

                    onClick={() =>
                        inputRef.current.click()
                    }

                    className={`
                        relative
                        mt-8
                        cursor-pointer
                        rounded-3xl
                        border-2
                        border-dashed
                        p-10
                        transition-all
                        duration-300

                        ${
                            dragActive
                                ? `
                                    border-cyan-400
                                    bg-cyan-500/10
                                `
                                : `
                                    border-zinc-700
                                    bg-zinc-900/40
                                    hover:border-cyan-500/40
                                    hover:bg-zinc-900/70
                                `
                        }
                    `}
                >

                    <input

                        ref={inputRef}

                        type="file"

                        accept={acceptedTypes}

                        className="hidden"

                        onChange={handleInputChange}
                    />

                    <div className="flex flex-col items-center justify-center">

                        <motion.div

                            animate={{
                                y: [0, -8, 0]
                            }}

                            transition={{
                                repeat: Infinity,
                                duration: 2
                            }}

                            className="
                                flex
                                h-24
                                w-24
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-cyan-500/20
                                bg-cyan-500/10
                            "
                        >

                            <UploadCloud
                                size={42}
                                className="text-cyan-400"
                            />

                        </motion.div>

                        <h3
                            className="
                                mt-6
                                text-xl
                                font-bold
                                text-white
                            "
                        >
                            Drag & Drop Files
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-zinc-400
                            "
                        >
                            or click to browse local files
                        </p>

                        <div
                            className="
                                mt-6
                                flex
                                flex-wrap
                                items-center
                                justify-center
                                gap-3
                            "
                        >

                            <FileTypeBadge
                                text="PNG"
                            />

                            <FileTypeBadge
                                text="JPG"
                            />

                            <FileTypeBadge
                                text="JPEG"
                            />

                            <FileTypeBadge
                                text="PDF"
                            />

                        </div>

                    </div>

                </motion.div>

                {/* Error */}

                <AnimatePresence>

                    {error && (

                        <motion.div

                            initial={{
                                opacity: 0,
                                y: -10
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            exit={{
                                opacity: 0
                            }}

                            className="
                                mt-5
                                flex
                                items-center
                                gap-3
                                rounded-2xl
                                border
                                border-red-500/20
                                bg-red-500/10
                                px-4
                                py-4
                            "
                        >

                            <AlertTriangle
                                size={20}
                                className="text-red-400"
                            />

                            <p
                                className="
                                    text-sm
                                    text-red-300
                                "
                            >
                                {error}
                            </p>

                        </motion.div>
                    )}

                </AnimatePresence>

                {/* File Preview */}

                <AnimatePresence>

                    {selectedFile && (

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
                                mt-6
                                overflow-hidden
                                rounded-3xl
                                border
                                border-zinc-800
                                bg-zinc-900/70
                            "
                        >

                            {/* Preview Header */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-zinc-800
                                    px-5
                                    py-4
                                "
                            >

                                <div className="flex items-center gap-3">

                                    {selectedFile.type.startsWith("image")
                                        ? (
                                            <FileImage
                                                className="text-cyan-400"
                                            />
                                        )
                                        : (
                                            <FileText
                                                className="text-emerald-400"
                                            />
                                        )
                                    }

                                    <div>

                                        <p
                                            className="
                                                text-sm
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            {selectedFile.name}
                                        </p>

                                        <p
                                            className="
                                                text-xs
                                                text-zinc-500
                                            "
                                        >
                                            {(
                                                selectedFile.size / 1024
                                            ).toFixed(2)} KB
                                        </p>

                                    </div>

                                </div>

                                <button

                                    onClick={removeFile}

                                    className="
                                        rounded-xl
                                        p-2
                                        text-zinc-400
                                        transition
                                        hover:bg-zinc-800
                                        hover:text-white
                                    "
                                >

                                    <X size={18} />

                                </button>

                            </div>

                            {/* Preview */}

                            {preview && (

                                <div className="p-5">

                                    <img

                                        src={preview}

                                        alt="Preview"

                                        className="
                                            h-[260px]
                                            w-full
                                            rounded-2xl
                                            object-cover
                                        "
                                    />

                                </div>
                            )}

                            {/* Upload Progress */}

                            <div className="px-5 pb-5">

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
                                            text-xs
                                            text-zinc-500
                                        "
                                    >
                                        Upload Progress
                                    </p>

                                    <p
                                        className="
                                            text-xs
                                            font-bold
                                            text-emerald-400
                                        "
                                    >
                                        {uploadProgress}%
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
                                            width:
                                                `${uploadProgress}%`
                                        }}

                                        className="
                                            h-full
                                            rounded-full
                                            bg-gradient-to-r
                                            from-cyan-400
                                            to-emerald-400
                                        "
                                    />

                                </div>

                                {/* Success */}

                                {uploadProgress === 100 && (

                                    <motion.div

                                        initial={{
                                            opacity: 0
                                        }}

                                        animate={{
                                            opacity: 1
                                        }}

                                        className="
                                            mt-4
                                            flex
                                            items-center
                                            gap-2
                                            text-emerald-400
                                        "
                                    >

                                        <CheckCircle2
                                            size={18}
                                        />

                                        <span
                                            className="
                                                text-sm
                                                font-medium
                                            "
                                        >
                                            File uploaded successfully
                                        </span>

                                    </motion.div>
                                )}

                            </div>

                        </motion.div>
                    )}

                </AnimatePresence>

            </div>

        </motion.div>
    );
}


function FileTypeBadge({ text }) {

    return (

        <div
            className="
                rounded-full
                border
                border-zinc-700
                bg-zinc-800/70
                px-4
                py-2
                text-xs
                font-semibold
                tracking-wide
                text-zinc-300
            "
        >
            {text}
        </div>
    );
}