import {

    motion

} from "framer-motion";


// ==============================================
// STATS CARD
// ==============================================

export default function StatsCard({

    title,

    value,

    icon: Icon,

    color = "cyan"

}) {

    // ==========================================
    // COLOR CLASSES
    // ==========================================

    const colorStyles = {

        cyan: {

            bg: "bg-cyan-500/10",

            text: "text-cyan-400",

            border: "border-cyan-500/20"
        },

        emerald: {

            bg: "bg-emerald-500/10",

            text: "text-emerald-400",

            border: "border-emerald-500/20"
        },

        red: {

            bg: "bg-red-500/10",

            text: "text-red-400",

            border: "border-red-500/20"
        }
    };

    const styles =

        colorStyles[color] ||

        colorStyles.cyan;


    return (

        <motion.div

            whileHover={{

                y: -5
            }}

            transition={{

                duration: 0.2
            }}

            className={`
                rounded-3xl
                border
                ${styles.border}
                bg-zinc-950
                p-6
                shadow-xl
            `}
        >

            {/* HEADER */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

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
                        className={`
                            mt-4
                            text-4xl
                            font-black
                            ${styles.text}
                        `}
                    >
                        {value}
                    </h2>

                </div>

                {/* ICON */}

                <div
                    className={`
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        ${styles.bg}
                        ${styles.text}
                    `}
                >

                    {

                        Icon && (

                            <Icon size={30} />
                        )
                    }

                </div>

            </div>

        </motion.div>
    );
}