import {

    Link,

    useLocation

} from "react-router-dom";

import {

    LayoutDashboard,

    Upload,

    ScanSearch,

    ShieldAlert,

    BadgeCheck,

    FileSearch,

    QrCode,

    BarChart3,

    Settings

} from "lucide-react";

import { motion } from "framer-motion";


// ==============================================
// SIDEBAR ITEMS
// ==============================================

const menuItems = [

    {

        title: "Dashboard",

        icon: LayoutDashboard,

        path: "/dashboard"
    },

    {

        title: "Upload Documents",

        icon: Upload,

        path: "/upload"
    },

    {

        title: "Plate Detection",

        icon: ScanSearch,

        path: "/number-plate"
    },

    {

        title: "Fraud Analysis",

        icon: ShieldAlert,

        path: "/fraud-analysis"
    },

    {

        title: "Verification",

        icon: BadgeCheck,

        path: "/verification"
    },

    {

        title: "OCR Reports",

        icon: FileSearch,

        path: "/ocr-reports"
    },

    {

        title: "QR Validation",

        icon: QrCode,

        path: "/qr-validation"
    },

    {

        title: "Analytics",

        icon: BarChart3,

        path: "/analytics"
    },

    {

        title: "Settings",

        icon: Settings,

        path: "/settings"
    }
];


// ==============================================
// SIDEBAR
// ==============================================

export default function Sidebar() {

    const location = useLocation();


    return (

        <aside
            className="
                fixed
                left-0
                top-0
                z-50
                hidden
                h-screen
                w-72
                overflow-y-auto
                border-r
                border-zinc-800
                bg-black
                p-6
                lg:block
            "
        >

            {/* ==================================
                LOGO
            =================================== */}

            <div className="mb-10">

                <h1
                    className="
                        text-4xl
                        font-black
                        text-cyan-400
                    "
                >
                    DriveLegal AI
                </h1>

                <p
                    className="
                        mt-2
                        text-sm
                        text-zinc-500
                    "
                >
                    AI-powered vehicle
                    verification platform
                </p>

            </div>

            {/* ==================================
                MENU
            =================================== */}

            <nav className="space-y-4">

                {

                    menuItems.map((item, index) => {

                        const Icon = item.icon;

                        const isActive =

                            location.pathname ===
                            item.path;

                        return (

                            <motion.div

                                key={index}

                                whileHover={{

                                    x: 5
                                }}
                            >

                                <Link

                                    to={item.path}

                                    className={`
                                        flex
                                        items-center
                                        gap-4
                                        rounded-3xl
                                        border
                                        px-5
                                        py-5
                                        transition-all
                                        duration-300

                                        ${
                                            isActive

                                            ? `
                                                border-cyan-500/20
                                                bg-cyan-500/10
                                                text-cyan-400
                                              `

                                            : `
                                                border-zinc-900
                                                bg-zinc-950
                                                text-zinc-400
                                                hover:border-cyan-500/20
                                                hover:bg-cyan-500/5
                                                hover:text-cyan-300
                                              `
                                        }
                                    `}
                                >

                                    {/* ICON */}

                                    <div
                                        className={`
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border

                                            ${
                                                isActive

                                                ? `
                                                    border-cyan-500/20
                                                    bg-cyan-500/10
                                                  `

                                                : `
                                                    border-zinc-800
                                                    bg-black
                                                  `
                                            }
                                        `}
                                    >

                                        <Icon size={22} />

                                    </div>

                                    {/* TITLE */}

                                    <span
                                        className="
                                            text-lg
                                            font-semibold
                                        "
                                    >
                                        {item.title}
                                    </span>

                                </Link>

                            </motion.div>
                        );
                    })
                }

            </nav>

        </aside>
    );
}