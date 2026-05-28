import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

import DashboardCards from "../components/DashboardCards";

import FraudAlert from "../components/FraudAlert";

import VerificationStatus from "../components/VerificationStatus";

import QRScanner from "../components/QRScanner";

import NotificationToast from "../components/NotificationToast";

import {
    ShieldCheck,
    ShieldAlert,
    BrainCircuit,
    Activity,
    Users,
    ScanSearch,
    Cpu,
    Database,
    Server,
    Bell,
    TrendingUp,
    Eye
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";


export default function AdminPanel() {

    const [toast, setToast] =
        useState({

            show: false,

            type: "success",

            title: "",

            message: ""
        });


    // ==========================================
    // HANDLE SYSTEM ACTION
    // ==========================================

    const handleSystemRefresh = () => {

        setToast({

            show: true,

            type: "success",

            title: "System Synced",

            message:
                "AI monitoring systems refreshed successfully."
        });
    };


    return (

        <div
            className="
                flex
                min-h-screen
                bg-black
                text-white
            "
        >

            {/* SIDEBAR */}

            <div className="hidden xl:block">

                <Sidebar />

            </div>

            {/* MAIN */}

            <div className="flex-1">

                {/* NAVBAR */}

                <Navbar />

                {/* CONTENT */}

                <main
                    className="
                        space-y-8
                        p-6
                    "
                >

                    {/* HERO */}

                    <section
                        className="
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-cyan-500/20
                            bg-zinc-950
                            p-8
                            shadow-2xl
                        "
                    >

                        {/* GLOW */}

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-br
                                from-cyan-500/10
                                via-transparent
                                to-emerald-500/10
                            "
                        />

                        <div className="relative z-10">

                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-8
                                    xl:flex-row
                                    xl:items-center
                                    xl:justify-between
                                "
                            >

                                {/* LEFT */}

                                <div>

                                    <div
                                        className="
                                            inline-flex
                                            items-center
                                            gap-3
                                            rounded-full
                                            border
                                            border-cyan-500/20
                                            bg-cyan-500/10
                                            px-5
                                            py-2
                                        "
                                    >

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

                                        <span
                                            className="
                                                text-sm
                                                font-semibold
                                                text-cyan-300
                                            "
                                        >
                                            Enterprise AI Monitoring Active
                                        </span>

                                    </div>

                                    <h1
                                        className="
                                            mt-6
                                            text-5xl
                                            font-black
                                            leading-tight
                                            xl:text-6xl
                                        "
                                    >
                                        AI Admin
                                        Command Center
                                    </h1>

                                    <p
                                        className="
                                            mt-6
                                            max-w-3xl
                                            text-lg
                                            leading-relaxed
                                            text-zinc-400
                                        "
                                    >
                                        Enterprise-grade AI verification,
                                        fraud intelligence, OCR analytics,
                                        cyber-security monitoring, and
                                        system management dashboard.
                                    </p>

                                </div>

                                {/* ACTIONS */}

                                <div
                                    className="
                                        flex
                                        flex-wrap
                                        gap-4
                                    "
                                >

                                    <motion.button

                                        whileHover={{
                                            scale: 1.03
                                        }}

                                        whileTap={{
                                            scale: 0.97
                                        }}

                                        onClick={
                                            handleSystemRefresh
                                        }

                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            rounded-2xl
                                            bg-gradient-to-r
                                            from-cyan-500
                                            to-emerald-500
                                            px-6
                                            py-4
                                            text-sm
                                            font-bold
                                            text-black
                                        "
                                    >

                                        <Server size={20} />

                                        Sync Systems

                                    </motion.button>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* MAIN DASHBOARD */}

                    <DashboardCards />

                    {/* SYSTEM HEALTH */}

                    <section
                        className="
                            grid
                            gap-6
                            lg:grid-cols-4
                        "
                    >

                        <SystemCard

                            icon={
                                <Users
                                    size={30}
                                    className="text-cyan-400"
                                />
                            }

                            title="Active Users"

                            value="12,842"

                            description="
                                Users currently connected
                                to verification systems
                            "
                        />

                        <SystemCard

                            icon={
                                <Cpu
                                    size={30}
                                    className="text-emerald-400"
                                />
                            }

                            title="AI Engines"

                            value="24"

                            description="
                                Active AI processing engines
                                currently operational
                            "
                        />

                        <SystemCard

                            icon={
                                <Database
                                    size={30}
                                    className="text-yellow-400"
                                />
                            }

                            title="Database Health"

                            value="99.9%"

                            description="
                                Database performance
                                and storage health
                            "
                        />

                        <SystemCard

                            icon={
                                <Bell
                                    size={30}
                                    className="text-red-400"
                                />
                            }

                            title="Threat Alerts"

                            value="18"

                            description="
                                Security alerts requiring
                                administrator review
                            "
                        />

                    </section>

                    {/* VERIFICATION + FRAUD */}

                    <div
                        className="
                            grid
                            gap-8
                            xl:grid-cols-2
                        "
                    >

                        <VerificationStatus

                            status="Verified"

                            confidence={98.7}

                            fraudRisk={5}

                            aiDecision="
                                System-wide verification
                                engines are functioning
                                within normal parameters.
                            "

                            scanId="ADMIN-VERIFY-7821"

                            processingTime="1.0s"
                        />

                        <FraudAlert

                            fraudDetected={true}

                            threatLevel="MEDIUM"

                            fraudScore={42}

                            suspiciousActivity="
                                Multiple suspicious OCR
                                patterns detected in
                                regional verification nodes.
                            "

                            anomalyType="
                                OCR Pattern Anomaly
                            "

                            aiConfidence={95.4}

                            scanId="ADMIN-FRAUD-7821"
                        />

                    </div>

                    {/* LIVE MONITORING */}

                    <section
                        className="
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-950
                            p-8
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
                                    border-cyan-500/20
                                    bg-cyan-500/10
                                "
                            >

                                <Activity
                                    size={30}
                                    className="text-cyan-400"
                                />

                            </div>

                            <div>

                                <h2
                                    className="
                                        text-3xl
                                        font-black
                                        text-white
                                    "
                                >
                                    Live AI Monitoring
                                </h2>

                                <p
                                    className="
                                        mt-2
                                        text-zinc-400
                                    "
                                >
                                    Real-time enterprise
                                    verification activity
                                </p>

                            </div>

                        </div>

                        {/* MONITOR GRID */}

                        <div
                            className="
                                mt-10
                                grid
                                gap-6
                                lg:grid-cols-3
                            "
                        >

                            <MonitorCard

                                icon={
                                    <ScanSearch
                                        size={26}
                                        className="text-cyan-400"
                                    />
                                }

                                title="OCR Requests"

                                value="18,291"

                                status="ACTIVE"
                            />

                            <MonitorCard

                                icon={
                                    <ShieldCheck
                                        size={26}
                                        className="text-emerald-400"
                                    />
                                }

                                title="Verified Documents"

                                value="15,920"

                                status="STABLE"
                            />

                            <MonitorCard

                                icon={
                                    <ShieldAlert
                                        size={26}
                                        className="text-red-400"
                                    />
                                }

                                title="Fraud Detection"

                                value="312"

                                status="MONITORING"
                            />

                        </div>

                    </section>

                    {/* SECURITY FEED */}

                    <section
                        className="
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-950
                            p-8
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
                                    border-red-500/20
                                    bg-red-500/10
                                "
                            >

                                <Eye
                                    size={30}
                                    className="text-red-400"
                                />

                            </div>

                            <div>

                                <h2
                                    className="
                                        text-3xl
                                        font-black
                                        text-white
                                    "
                                >
                                    Security Intelligence Feed
                                </h2>

                                <p
                                    className="
                                        mt-2
                                        text-zinc-400
                                    "
                                >
                                    Enterprise AI security events
                                    and monitoring activity
                                </p>

                            </div>

                        </div>

                        {/* FEED */}

                        <div className="mt-10 space-y-5">

                            <FeedItem

                                icon={
                                    <ShieldAlert
                                        size={20}
                                        className="text-red-400"
                                    />
                                }

                                title="
                                    Metadata tampering attempt detected
                                "

                                severity="HIGH"

                                time="2 seconds ago"
                            />

                            <FeedItem

                                icon={
                                    <BrainCircuit
                                        size={20}
                                        className="text-cyan-400"
                                    />
                                }

                                title="
                                    AI anomaly engine recalibrated
                                "

                                severity="LOW"

                                time="14 seconds ago"
                            />

                            <FeedItem

                                icon={
                                    <TrendingUp
                                        size={20}
                                        className="text-yellow-400"
                                    />
                                }

                                title="
                                    Verification traffic spike detected
                                "

                                severity="MEDIUM"

                                time="22 seconds ago"
                            />

                        </div>

                    </section>

                    {/* QR MONITORING */}

                    <QRScanner />

                </main>

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
// SYSTEM CARD
// ==============================================

function SystemCard({

    icon,

    title,

    value,

    description

}) {

    return (

        <motion.div

            whileHover={{
                y: -5
            }}

            className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-6
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
                    border
                    border-zinc-700
                    bg-zinc-900
                "
            >
                {icon}
            </div>

            <h2
                className="
                    mt-6
                    text-2xl
                    font-bold
                    text-white
                "
            >
                {title}
            </h2>

            <h1
                className="
                    mt-4
                    text-5xl
                    font-black
                    text-white
                "
            >
                {value}
            </h1>

            <p
                className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-zinc-400
                "
            >
                {description}
            </p>

        </motion.div>
    );
}


// ==============================================
// MONITOR CARD
// ==============================================

function MonitorCard({

    icon,

    title,

    value,

    status

}) {

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

                <div
                    className="
                        rounded-full
                        border
                        border-emerald-500/20
                        bg-emerald-500/10
                        px-4
                        py-2
                        text-xs
                        font-bold
                        text-emerald-400
                    "
                >
                    {status}
                </div>

            </div>

            <h2
                className="
                    mt-6
                    text-xl
                    font-bold
                    text-white
                "
            >
                {title}
            </h2>

            <h1
                className="
                    mt-4
                    text-5xl
                    font-black
                    text-white
                "
            >
                {value}
            </h1>

        </motion.div>
    );
}


// ==============================================
// FEED ITEM
// ==============================================

function FeedItem({

    icon,

    title,

    severity,

    time

}) {

    const severityColor = {

        HIGH: `
            border-red-500/20
            bg-red-500/10
            text-red-400
        `,

        MEDIUM: `
            border-yellow-500/20
            bg-yellow-500/10
            text-yellow-400
        `,

        LOW: `
            border-cyan-500/20
            bg-cyan-500/10
            text-cyan-400
        `
    };


    return (

        <motion.div

            whileHover={{
                x: 5
            }}

            className="
                flex
                items-center
                justify-between
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/60
                p-6
            "
        >

            <div className="flex items-center gap-5">

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

                    <h2
                        className="
                            text-lg
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
                            text-zinc-500
                        "
                    >
                        {time}
                    </p>

                </div>

            </div>

            <div
                className={`
                    rounded-full
                    border
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    ${severityColor[severity]}
                `}
            >
                {severity}
            </div>

        </motion.div>
    );
}