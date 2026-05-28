import { motion } from "framer-motion";

import {
    ShieldCheck,
    Bell,
    Search,
    UserCircle2,
    ScanLine,
    Activity
} from "lucide-react";


export default function Navbar() {

    return (

        <motion.nav

            initial={{
                y: -40,
                opacity: 0
            }}

            animate={{
                y: 0,
                opacity: 1
            }}

            transition={{
                duration: 0.5
            }}

            className="
                sticky
                top-0
                z-40
                border-b
                border-zinc-800
                bg-zinc-950/90
                backdrop-blur-xl
            "
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                    px-6
                    py-4
                "
            >

                {/* Left Section */}

                <div className="flex items-center gap-4">

                    {/* Logo */}

                    <motion.div

                        whileHover={{
                            rotate: 8,
                            scale: 1.05
                        }}

                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-emerald-500/30
                            bg-emerald-500/10
                            shadow-lg
                            shadow-emerald-500/10
                        "
                    >
                        <ShieldCheck
                            size={30}
                            className="text-emerald-400"
                        />
                    </motion.div>

                    {/* Brand */}

                    <div>

                        <div className="flex items-center gap-2">

                            <h1
                                className="
                                    text-2xl
                                    font-black
                                    tracking-wide
                                    text-white
                                "
                            >
                                DriveLegal
                            </h1>

                            <div
                                className="
                                    rounded-full
                                    border
                                    border-cyan-500/30
                                    bg-cyan-500/10
                                    px-3
                                    py-1
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-widest
                                    text-cyan-400
                                "
                            >
                                AI Powered
                            </div>

                        </div>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-zinc-400
                            "
                        >
                            Smart Vehicle Verification System
                        </p>

                    </div>

                </div>

                {/* Center Search */}

                <div
                    className="
                        hidden
                        lg:flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-zinc-900/70
                        px-4
                        py-3
                        w-[380px]
                    "
                >

                    <Search
                        size={18}
                        className="text-zinc-500"
                    />

                    <input
                        type="text"
                        placeholder="Search verification reports..."
                        className="
                            w-full
                            bg-transparent
                            text-sm
                            text-white
                            outline-none
                            placeholder:text-zinc-500
                        "
                    />

                </div>

                {/* Right Section */}

                <div className="flex items-center gap-4">

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
                            hidden
                            md:flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-emerald-500/20
                            bg-emerald-500/10
                            px-4
                            py-2
                        "
                    >

                        <Activity
                            size={16}
                            className="text-emerald-400"
                        />

                        <span
                            className="
                                text-xs
                                font-semibold
                                tracking-wide
                                text-emerald-300
                            "
                        >
                            AI ENGINE ACTIVE
                        </span>

                    </motion.div>

                    {/* Scan Button */}

                    <motion.button

                        whileHover={{
                            scale: 1.05
                        }}

                        whileTap={{
                            scale: 0.95
                        }}

                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-cyan-500/30
                            bg-cyan-500/10
                            px-4
                            py-3
                            text-cyan-400
                            transition
                            hover:bg-cyan-500/20
                        "
                    >

                        <ScanLine size={18} />

                        <span
                            className="
                                hidden
                                sm:block
                                text-sm
                                font-medium
                            "
                        >
                            Start Scan
                        </span>

                    </motion.button>

                    {/* Notifications */}

                    <motion.button

                        whileHover={{
                            scale: 1.08
                        }}

                        whileTap={{
                            scale: 0.95
                        }}

                        className="
                            relative
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-zinc-800
                            bg-zinc-900
                            text-zinc-300
                            transition
                            hover:border-zinc-700
                            hover:bg-zinc-800
                        "
                    >

                        <Bell size={20} />

                        <span
                            className="
                                absolute
                                right-2
                                top-2
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-red-500
                            "
                        />

                    </motion.button>

                    {/* Profile */}

                    <motion.div

                        whileHover={{
                            scale: 1.05
                        }}

                        className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-zinc-800
                            bg-zinc-900
                            px-4
                            py-2
                            cursor-pointer
                        "
                    >

                        <UserCircle2
                            size={36}
                            className="text-zinc-300"
                        />

                        <div className="hidden sm:block">

                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    text-white
                                "
                            >
                                Admin User
                            </p>

                            <p
                                className="
                                    text-xs
                                    text-zinc-500
                                "
                            >
                                Verification Admin
                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>

        </motion.nav>
    );
}