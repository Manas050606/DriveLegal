/** @type {import('tailwindcss').Config} */

export default {

    content: [

        "./index.html",

        "./src/**/*.{js,jsx}"
    ],

    theme: {

        extend: {

            colors: {

                background: "#000000",

                foreground: "#ffffff",

                card: "#09090b",

                border: "#27272a",

                muted: "#71717a",

                cyan: {

                    50: "#ecfeff",

                    100: "#cffafe",

                    200: "#a5f3fc",

                    300: "#67e8f9",

                    400: "#22d3ee",

                    500: "#06b6d4",

                    600: "#0891b2",

                    700: "#0e7490",

                    800: "#155e75",

                    900: "#164e63"
                },

                emerald: {

                    50: "#ecfdf5",

                    100: "#d1fae5",

                    200: "#a7f3d0",

                    300: "#6ee7b7",

                    400: "#34d399",

                    500: "#10b981",

                    600: "#059669",

                    700: "#047857",

                    800: "#065f46",

                    900: "#064e3b"
                }
            },

            fontFamily: {

                sans: [

                    "Inter",

                    "system-ui",

                    "sans-serif"
                ]
            },

            boxShadow: {

                cyan: `
                    0 0 20px
                    rgba(6, 182, 212, 0.35)
                `,

                emerald: `
                    0 0 20px
                    rgba(16, 185, 129, 0.35)
                `,

                red: `
                    0 0 20px
                    rgba(239, 68, 68, 0.35)
                `,

                glass: `
                    0 8px 32px
                    rgba(0, 0, 0, 0.4)
                `
            },

            backgroundImage: {

                "cyber-grid": `
                    linear-gradient(
                        rgba(255,255,255,0.04) 1px,
                        transparent 1px
                    ),
                    linear-gradient(
                        90deg,
                        rgba(255,255,255,0.04) 1px,
                        transparent 1px
                    )
                `,

                "dashboard-gradient": `
                    linear-gradient(
                        135deg,
                        rgba(6,182,212,0.15),
                        rgba(16,185,129,0.15)
                    )
                `
            },

            backgroundSize: {

                grid: "40px 40px"
            },

            animation: {

                "pulse-glow":
                    "pulseGlow 2s infinite",

                float:
                    "float 4s ease-in-out infinite",

                "rotate-slow":
                    "rotateSlow 20s linear infinite",

                shimmer:
                    "shimmer 2s infinite linear"
            },

            keyframes: {

                pulseGlow: {

                    "0%, 100%": {

                        opacity: "0.5",

                        transform: "scale(1)"
                    },

                    "50%": {

                        opacity: "1",

                        transform: "scale(1.03)"
                    }
                },

                float: {

                    "0%, 100%": {

                        transform:
                            "translateY(0px)"
                    },

                    "50%": {

                        transform:
                            "translateY(-10px)"
                    }
                },

                rotateSlow: {

                    from: {

                        transform:
                            "rotate(0deg)"
                    },

                    to: {

                        transform:
                            "rotate(360deg)"
                    }
                },

                shimmer: {

                    "0%": {

                        backgroundPosition:
                            "-1000px 0"
                    },

                    "100%": {

                        backgroundPosition:
                            "1000px 0"
                    }
                }
            },

            borderRadius: {

                "4xl": "2rem"
            },

            backdropBlur: {

                xs: "2px"
            },

            transitionTimingFunction: {

                smooth:
                    "cubic-bezier(0.4, 0, 0.2, 1)"
            }
        }
    },

    plugins: []
};