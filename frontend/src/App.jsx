import {

    Routes,

    Route,

    Navigate

} from "react-router-dom";


// ==============================================
// AUTH PAGES
// ==============================================

import Login from "./pages/Login";

import Register from "./pages/Register";


// ==============================================
// MAIN PAGES
// ==============================================

import Dashboard from "./pages/Dashboard";

import UploadDocuments from "./pages/UploadDocuments";

import NumberPlateDetection from "./pages/NumberPlateDetection";

import FraudAnalysis from "./pages/FraudAnalysis";

import Verification from "./pages/Verification";

import OCRReports from "./pages/OCRReports";

import QRValidation from "./pages/QRValidation";

import Analytics from "./pages/Analytics";

import Settings from "./pages/Settings";


// ==============================================
// PROTECTED ROUTE
// ==============================================

function ProtectedRoute({

    children

}) {

    const token = localStorage.getItem(

        "token"
    );

    return token

        ? children

        : <Navigate to="/login" />;
}


// ==============================================
// APP
// ==============================================

export default function App() {

    return (

        <Routes>

            {/* ==================================
                DEFAULT REDIRECT
            =================================== */}

            <Route

                path="/"

                element={

                    <Navigate
                        to="/login"
                    />
                }
            />

            {/* ==================================
                AUTH ROUTES
            =================================== */}

            <Route

                path="/login"

                element={<Login />}
            />

            <Route

                path="/register"

                element={<Register />}
            />

            {/* ==================================
                DASHBOARD
            =================================== */}

            <Route

                path="/dashboard"

                element={

                    <ProtectedRoute>

                        <Dashboard />

                    </ProtectedRoute>
                }
            />

            {/* ==================================
                DOCUMENT UPLOAD
            =================================== */}

            <Route

                path="/upload"

                element={

                    <ProtectedRoute>

                        <UploadDocuments />

                    </ProtectedRoute>
                }
            />

            {/* ==================================
                NUMBER PLATE DETECTION
            =================================== */}

            <Route

                path="/number-plate"

                element={

                    <ProtectedRoute>

                        <NumberPlateDetection />

                    </ProtectedRoute>
                }
            />

            {/* ==================================
                FRAUD ANALYSIS
            =================================== */}

            <Route

                path="/fraud-analysis"

                element={

                    <ProtectedRoute>

                        <FraudAnalysis />

                    </ProtectedRoute>
                }
            />

            {/* ==================================
                VERIFICATION CENTER
            =================================== */}

            <Route

                path="/verification"

                element={

                    <ProtectedRoute>

                        <Verification />

                    </ProtectedRoute>
                }
            />

            {/* ==================================
                OCR REPORTS
            =================================== */}

            <Route

                path="/ocr-reports"

                element={

                    <ProtectedRoute>

                        <OCRReports />

                    </ProtectedRoute>
                }
            />

            {/* ==================================
                QR VALIDATION
            =================================== */}

            <Route

                path="/qr-validation"

                element={

                    <ProtectedRoute>

                        <QRValidation />

                    </ProtectedRoute>
                }
            />

            {/* ==================================
                ANALYTICS
            =================================== */}

            <Route

                path="/analytics"

                element={

                    <ProtectedRoute>

                        <Analytics />

                    </ProtectedRoute>
                }
            />

            {/* ==================================
                SETTINGS
            =================================== */}

            <Route

                path="/settings"

                element={

                    <ProtectedRoute>

                        <Settings />

                    </ProtectedRoute>
                }
            />

            {/* ==================================
                404 PAGE
            =================================== */}

            <Route

                path="*"

                element={

                    <div
                        className="
                            flex
                            min-h-screen
                            items-center
                            justify-center
                            bg-black
                            text-white
                        "
                    >

                        <div className="text-center">

                            <h1
                                className="
                                    text-8xl
                                    font-black
                                    text-cyan-400
                                "
                            >
                                404
                            </h1>

                            <p
                                className="
                                    mt-4
                                    text-xl
                                    text-zinc-400
                                "
                            >
                                Page Not Found
                            </p>

                        </div>

                    </div>
                }
            />

        </Routes>
    );
}