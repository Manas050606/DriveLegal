import { useState } from "react";

import { motion } from "framer-motion";

import {
    ShieldCheck,
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Activity,
    CheckCircle2
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import NotificationToast from "../components/NotificationToast";

import { registerUser } from "../services/authService";


export default function Register() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] =
        useState(false);

    const [showConfirmPassword,
        setShowConfirmPassword] =
        useState(false);

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({

            name: "",

            email: "",

            password: "",

            confirmPassword: ""
        });

    const [toast, setToast] =
        useState({

            show: false,

            type: "success",

            title: "",

            message: ""
        });


    // ==========================================
    // HANDLE INPUT CHANGE
    // ==========================================

    const handleChange = (event) => {

        setFormData({

            ...formData,

            [event.target.name]:
                event.target.value
        });
    };


    // ==========================================
    // VALIDATE PASSWORD
    // ==========================================

    const validatePassword = () => {

        if (formData.password.length < 6) {

            return {

                valid: false,

                message:
                    "Password must contain at least 6 characters."
            };
        }

        if (

            formData.password !==
            formData.confirmPassword

        ) {

            return {

                valid: false,

                message:
                    "Passwords do not match."
            };
        }

        return {

            valid: true
        };
    };


    // ==========================================
    // HANDLE REGISTER
    // ==========================================

    const handleRegister = async (event) => {

        event.preventDefault();

        if (

            !formData.name ||

            !formData.email ||

            !formData.password ||

            !formData.confirmPassword
        ) {

            setToast({

                show: true,

                type: "warning",

                title: "Missing Fields",

                message:
                    "Please fill all required fields."
            });

            return;
        }

        const passwordValidation =
            validatePassword();

        if (!passwordValidation.valid) {

            setToast({

                show: true,

                type: "error",

                title: "Validation Error",

                message:
                    passwordValidation.message
            });

            return;
        }

        try {

            setLoading(true);

            const response =
                await registerUser(

                    formData.name,

                    formData.email,

                    formData.password
                );

            if (response.success) {

                setToast({

                    show: true,

                    type: "success",

                    title: "Registration Successful",

                    message:
                        "Your account has been created."
                });

                setTimeout(() => {

                    navigate("/login");

                }, 1500);

            } else {

                setToast({

                    show: true,

                    type: "error",

                    title: "Registration Failed",

                    message:
                        response.message
                });
            }

        } catch (error) {

            setToast({

                show: true,

                type: "error",

                title: "Server Error",

                message:
                    "Unable to connect to server."
            });

        } finally {

            setLoading(false);
        }
    };


    return (

        <div
            className="
                relative
                flex
                min-h-screen
                overflow-hidden
                bg-black
                text-white
            "
        >

            {/* Background */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-emerald-500/10
                    via-transparent
                    to-cyan-500/10
                "
            />

            {/* LEFT SECTION */}

            <div
                className="
                    relative
                    hidden
                    flex-1
                    overflow-hidden
                    border-r
                    border-zinc-800
                    xl:flex
                "
            >

                {/* Glow Effects */}

                <motion.div

                    animate={{
                        rotate: 360
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 35,
                        ease: "linear"
                    }}

                    className="
                        absolute
                        left-[-220px]
                        top-[-220px]
                        h-[650px]
                        w-[650px]
                        rounded-full
                        bg-emerald-500/10
                        blur-3xl
                    "
                />

                <motion.div

                    animate={{
                        rotate: -360
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}

                    className="
                        absolute
                        bottom-[-250px]
                        right-[-250px]
                        h-[700px]
                        w-[700px]
                        rounded-full
                        bg-cyan-500/10
                        blur-3xl
                    "
                />

                <div
                    className="
                        relative
                        z-10
                        flex
                        flex-col
                        justify-between
                        p-16
                    "
                >

                    {/* Branding */}

                    <div>

                        <div
                            className="
                                flex
                                h-24
                                w-24
                                items-center
                                justify-center
                                rounded-3xl
                                border
                                border-emerald-500/20
                                bg-emerald-500/10
                            "
                        >

                            <ShieldCheck
                                size={48}
                                className="text-emerald-400"
                            />

                        </div>

                        <h1
                            className="
                                mt-10
                                max-w-2xl
                                text-6xl
                                font-black
                                leading-tight
                            "
                        >
                            Secure AI
                            Verification Network
                        </h1>

                        <p
                            className="
                                mt-8
                                max-w-xl
                                text-lg
                                leading-relaxed
                                text-zinc-400
                            "
                        >
                            Join the next-generation AI-powered
                            vehicle verification platform with
                            fraud intelligence, OCR analysis,
                            and smart authentication systems.
                        </p>

                    </div>

                    {/* Features */}

                    <div className="space-y-5">

                        <FeatureItem
                            text="AI-Powered Verification"
                        />

                        <FeatureItem
                            text="Smart Fraud Detection"
                        />

                        <FeatureItem
                            text="Real-time OCR Processing"
                        />

                        <FeatureItem
                            text="Enterprise Security"
                        />

                    </div>

                </div>

            </div>

            {/* RIGHT SECTION */}

            <div
                className="
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    p-6
                    xl:w-[650px]
                "
            >

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
                        w-full
                        max-w-xl
                    "
                >

                    {/* Register Card */}

                    <div
                        className="
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-950/90
                            p-8
                            shadow-2xl
                            backdrop-blur-xl
                        "
                    >

                        {/* Header */}

                        <div className="text-center">

                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-20
                                    w-20
                                    items-center
                                    justify-center
                                    rounded-3xl
                                    border
                                    border-cyan-500/20
                                    bg-cyan-500/10
                                "
                            >

                                <ShieldCheck
                                    size={40}
                                    className="text-cyan-400"
                                />

                            </div>

                            <h2
                                className="
                                    mt-6
                                    text-4xl
                                    font-black
                                "
                            >
                                Create Account
                            </h2>

                            <p
                                className="
                                    mt-3
                                    text-zinc-400
                                "
                            >
                                Register to access DriveLegal AI
                            </p>

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
                                mt-8
                                flex
                                items-center
                                justify-center
                                gap-3
                                rounded-2xl
                                border
                                border-emerald-500/20
                                bg-emerald-500/10
                                px-5
                                py-4
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
                                Secure Registration Enabled
                            </span>

                        </motion.div>

                        {/* Form */}

                        <form
                            onSubmit={handleRegister}
                            className="mt-8 space-y-6"
                        >

                            {/* Full Name */}

                            <InputField

                                icon={
                                    <User
                                        size={20}
                                        className="text-zinc-500"
                                    />
                                }

                                type="text"

                                name="name"

                                value={formData.name}

                                onChange={handleChange}

                                placeholder="Enter full name"

                                label="Full Name"
                            />

                            {/* Email */}

                            <InputField

                                icon={
                                    <Mail
                                        size={20}
                                        className="text-zinc-500"
                                    />
                                }

                                type="email"

                                name="email"

                                value={formData.email}

                                onChange={handleChange}

                                placeholder="Enter email"

                                label="Email Address"
                            />

                            {/* Password */}

                            <PasswordField

                                label="Password"

                                name="password"

                                value={formData.password}

                                onChange={handleChange}

                                showPassword={showPassword}

                                setShowPassword={
                                    setShowPassword
                                }
                            />

                            {/* Confirm Password */}

                            <PasswordField

                                label="Confirm Password"

                                name="confirmPassword"

                                value={
                                    formData.confirmPassword
                                }

                                onChange={handleChange}

                                showPassword={
                                    showConfirmPassword
                                }

                                setShowPassword={
                                    setShowConfirmPassword
                                }
                            />

                            {/* Register Button */}

                            <motion.button

                                whileHover={{
                                    scale: 1.02
                                }}

                                whileTap={{
                                    scale: 0.98
                                }}

                                type="submit"

                                disabled={loading}

                                className="
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
                                    py-5
                                    text-lg
                                    font-bold
                                    text-black
                                    transition
                                "
                            >

                                {loading
                                    ? "Creating Account..."
                                    : (
                                        <>
                                            Create Account
                                            <ArrowRight
                                                size={22}
                                            />
                                        </>
                                    )
                                }

                            </motion.button>

                        </form>

                        {/* Footer */}

                        <div
                            className="
                                mt-8
                                text-center
                            "
                        >

                            <p
                                className="
                                    text-zinc-500
                                "
                            >
                                Already have an account?{" "}

                                <Link

                                    to="/login"

                                    className="
                                        font-semibold
                                        text-cyan-400
                                        transition
                                        hover:text-cyan-300
                                    "
                                >
                                    Login Here
                                </Link>

                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>

            {/* TOAST */}

            <NotificationToast

                show={toast.show}

                type={toast.type}

                title={toast.title}

                message={toast.message}

                onClose={() =>
                    setToast({

                        ...toast,

                        show: false
                    })
                }
            />

        </div>
    );
}


// ==============================================
// INPUT FIELD
// ==============================================

function InputField({

    icon,

    type,

    name,

    value,

    onChange,

    placeholder,

    label

}) {

    return (

        <div>

            <label
                className="
                    mb-3
                    block
                    text-sm
                    font-semibold
                    text-zinc-300
                "
            >
                {label}
            </label>

            <div
                className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900/70
                    px-5
                    py-4
                "
            >

                {icon}

                <input

                    type={type}

                    name={name}

                    value={value}

                    onChange={onChange}

                    placeholder={placeholder}

                    className="
                        w-full
                        bg-transparent
                        text-white
                        outline-none
                        placeholder:text-zinc-500
                    "
                />

            </div>

        </div>
    );
}


// ==============================================
// PASSWORD FIELD
// ==============================================

function PasswordField({

    label,

    name,

    value,

    onChange,

    showPassword,

    setShowPassword

}) {

    return (

        <div>

            <label
                className="
                    mb-3
                    block
                    text-sm
                    font-semibold
                    text-zinc-300
                "
            >
                {label}
            </label>

            <div
                className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900/70
                    px-5
                    py-4
                "
            >

                <Lock
                    size={20}
                    className="text-zinc-500"
                />

                <input

                    type={
                        showPassword
                            ? "text"
                            : "password"
                    }

                    name={name}

                    value={value}

                    onChange={onChange}

                    placeholder={`Enter ${label.toLowerCase()}`}

                    className="
                        w-full
                        bg-transparent
                        text-white
                        outline-none
                        placeholder:text-zinc-500
                    "
                />

                <button

                    type="button"

                    onClick={() =>
                        setShowPassword(
                            !showPassword
                        )
                    }

                    className="
                        text-zinc-500
                        transition
                        hover:text-white
                    "
                >

                    {showPassword
                        ? (
                            <EyeOff size={20} />
                        )
                        : (
                            <Eye size={20} />
                        )
                    }

                </button>

            </div>

        </div>
    );
}


// ==============================================
// FEATURE ITEM
// ==============================================

function FeatureItem({

    text

}) {

    return (

        <div
            className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/50
                px-5
                py-4
            "
        >

            <div
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-500/10
                "
            >

                <CheckCircle2
                    size={20}
                    className="text-emerald-400"
                />

            </div>

            <p
                className="
                    text-sm
                    font-medium
                    text-zinc-300
                "
            >
                {text}
            </p>

        </div>
    );
}