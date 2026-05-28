import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import path from "path";


// ==============================================
// VITE CONFIGURATION
// ==============================================

export default defineConfig({

    plugins: [

        react()
    ],

    resolve: {

        alias: {

            "@": path.resolve(
                __dirname,
                "./src"
            ),

            "@components": path.resolve(
                __dirname,
                "./src/components"
            ),

            "@pages": path.resolve(
                __dirname,
                "./src/pages"
            ),

            "@services": path.resolve(
                __dirname,
                "./src/services"
            ),

            "@utils": path.resolve(
                __dirname,
                "./src/utils"
            ),

            "@styles": path.resolve(
                __dirname,
                "./src/styles"
            )
        }
    },

    server: {

        host: "0.0.0.0",

        port: 5173,

        open: true
    },

    preview: {

        host: "0.0.0.0",

        port: 4173
    },

    build: {

        outDir: "dist",

        sourcemap: false,

        minify: "esbuild",

        chunkSizeWarningLimit: 1000,

        rollupOptions: {

            output: {

                manualChunks: {

                    vendor: [

                        "react",

                        "react-dom",

                        "react-router-dom"
                    ],

                    animations: [

                        "framer-motion"
                    ],

                    charts: [

                        "recharts"
                    ]
                }
            }
        }
    },

    css: {

        devSourcemap: true
    }
});