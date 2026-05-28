import {

    useState

} from "react";

import {

    useNavigate,

    Link

} from "react-router-dom";

import {

    motion

} from "framer-motion";

import {

    ShieldCheck,

    Lock,

    Mail,

    Eye,

    EyeOff,

    BrainCircuit

} from "lucide-react";


// ==============================================
// SERVICES
// ==============================================

import {

    loginUser

} from "../services/api";


// ==============================================
// LOGIN PAGE
// ==============================================

export default function Login() {

    // ==========================================
    // NAVIGATION
    // ==========================================

    const navigate = useNavigate();


    // ==========================================
    // STATES
    // ==========================================

    const [

        email,

        setEmail

    ] = useState("");

    const [

        password,

        setPassword

    ] = useState("");

    const [

        loading,

        setLoading

    ] = useState(false);

    const [

        error,

        setError

    ] = useState("");

    const [

        showPassword,

        setShowPassword

    ] = useState(false);


    // ==========================================
    // HANDLE LOGIN
    // ==========================================

    const handleLogin = async (

        e

    ) => {

        e.preventDefault();

        try {

            setLoading(true);

            setError("");

            // ==================================
            // API REQUEST
            // ==================================

            const response = await loginUser({

                email,

                password
            });

            // ==================================
            // SAVE TOKEN
            // ==================================

            localStorage.setItem(

                "token",

                response.access_token
            );

            // ==================================
            // SAVE USER
            // ==================================

            localStorage.setItem(

                "user",

                JSON.stringify(
                    response.user
                )
            );

            // ==================================
            // NAVIGATE
            // ==================================

            navigate("/dashboard");

        } catch (err) {

            console.error(err);

            setError(

                err?.detail ||

                err?.message ||

                "Login failed"
            );

        } finally {

            setLoading(false);
        }
    };


    return (

        <div
            className="
                flex
                min-h-screen
                items-center
                justify-center
                bg-black
                px-6
                py-10
                text-white
            "
        >

            {/* ==================================
                CARD
            =================================== */}

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
                    max-w-lg
                    overflow-hidden
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-950
                    shadow-2xl
                "
            >

                {/* ==============================
                    HEADER
                =============================== */}

                <div
                    className="
                        border-b
                        border-zinc-800
                        p-8
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-4
                        "
                    >

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
                            "
                        >

                            <BrainCircuit
                                size={32}
                            />

                        </div>

                        <div>

                            <h1
                                className="
                                    text-4xl
                                    font-black
                                "
                            >
                                DriveLegal AI
                            </h1>

                            <p
                                className="
                                    mt-2
                                    text-zinc-400
                                "
                            >
                                Secure AI-powered
                                verification platform
                            </p>

                        </div>

                    </div>

                </div>

                {/* ==============================
                    FORM
                =============================== */}

                <form

                    onSubmit={handleLogin}

                    className="p-8"
                >

                    {/* ERROR */}

                    {

                        error && (

                            <div
                                className="
                                    mb-6
                                    rounded-2xl
                                    border
                                    border-red-500/20
                                    bg-red-500/10
                                    p-4
                                    text-sm
                                    text-red-400
                                "
                            >
                                {error}
                            </div>
                        )
                    }

                    {/* EMAIL */}

                    <div className="mb-6">

                        <label
                            className="
                                mb-3
                                block
                                text-sm
                                font-semibold
                                text-zinc-300
                            "
                        >
                            Email Address
                        </label>

                        <div className="relative">

                            <Mail
                                size={20}
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-zinc-500
                                "
                            />

                            <input

                                type="email"

                                placeholder="
                                    Enter your email
                                "

                                value={email}

                                onChange={(e) =>

                                    setEmail(
                                        e.target.value
                                    )
                                }

                                required

                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-zinc-800
                                    bg-zinc-900
                                    py-4
                                    pl-12
                                    pr-4
                                    text-white
                                    outline-none
                                    transition-all
                                    focus:border-cyan-500
                                "
                            />

                        </div>

                    </div>

                    {/* PASSWORD */}

                    <div className="mb-8">

                        <label
                            className="
                                mb-3
                                block
                                text-sm
                                font-semibold
                                text-zinc-300
                            "
                        >
                            Password
                        </label>

                        <div className="relative">

                            <Lock
                                size={20}
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-zinc-500
                                "
                            />

                            <input

                                type={

                                    showPassword

                                        ? "text"

                                        : "password"
                                }

                                placeholder="
                                    Enter your password
                                "

                                value={password}

                                onChange={(e) =>

                                    setPassword(
                                        e.target.value
                                    )
                                }

                                required

                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-zinc-800
                                    bg-zinc-900
                                    py-4
                                    pl-12
                                    pr-14
                                    text-white
                                    outline-none
                                    transition-all
                                    focus:border-cyan-500
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
                                    absolute
                                    right-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-zinc-500
                                "
                            >

                                {

                                    showPassword

                                    ? <EyeOff size={20} />

                                    : <Eye size={20} />
                                }

                            </button>

                        </div>

                    </div>

                    {/* BUTTON */}

                    <button

                        type="submit"

                        disabled={loading}

                        className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-2xl
                            bg-cyan-500
                            px-6
                            py-4
                            font-bold
                            text-black
                            transition-all
                            hover:bg-cyan-400
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    >

                        {

                            loading

                            ? "Logging In..."

                            : (

                                <>

                                    <ShieldCheck
                                        size={20}
                                    />

                                    Login to Dashboard

                                </>
                            )
                        }

                    </button>

                    {/* FOOTER */}

                    <div
                        className="
                            mt-8
                            text-center
                            text-sm
                            text-zinc-500
                        "
                    >

                        Don't have an account?{" "}

                        <Link

                            to="/register"

                            className="
                                font-semibold
                                text-cyan-400
                            "
                        >
                            Register
                        </Link>

                    </div>

                </form>

            </motion.div>

        </div>
    );
}