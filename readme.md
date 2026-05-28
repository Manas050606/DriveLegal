DriveLegal AI 🚗⚡

AI-powered Vehicle Verification, OCR Analysis, Fraud Detection, and Intelligent Security Monitoring Platform.

📌 Overview

DriveLegal AI is an enterprise-grade AI-powered vehicle document verification platform designed to automate:

Vehicle document verification
OCR extraction
Number plate detection
Fraud intelligence analysis
AI anomaly detection
Verification workflows
Admin security monitoring

The system combines:

FastAPI backend
React + Vite frontend
MongoDB Atlas
OpenCV
OCR pipelines
AI verification workflows

to deliver a production-ready cyber-security styled intelligent transportation verification platform.

🚀 Key Features
✅ AI OCR Document Processing
Upload RC documents
Insurance verification
License verification
OCR text extraction
Confidence scoring
✅ Number Plate Detection
Vehicle image upload
AI-based plate detection
OCR number extraction
Vehicle verification workflow
✅ Fraud Detection Engine
Metadata anomaly detection
Suspicious OCR pattern analysis
Tampering detection
AI fraud probability scoring
✅ Verification Dashboard
Verification confidence analytics
Fraud probability visualization
Verification timelines
AI decision engine
✅ Enterprise Admin Panel
Live monitoring dashboard
Threat intelligence feed
System health analytics
Fraud monitoring center
Verification metrics
🧠 AI Modules
Module	Description
OCR Engine	Extracts text from uploaded documents
Fraud AI	Detects suspicious manipulation
Plate Recognition	Extracts vehicle registration numbers
Verification AI	Performs authenticity validation
Monitoring Engine	Tracks live fraud activity
🛠️ Tech Stack
Frontend
React 19
Vite
Tailwind CSS
Framer Motion
React Router
Axios
Lucide React
Backend
FastAPI
Python
MongoDB Atlas
JWT Authentication
OpenCV
Tesseract OCR
Scikit-learn
Database
MongoDB Atlas
AI / OCR
OpenCV
pytesseract
Pillow
NumPy
📂 Project Structure
DriveLegal-AI/
│
├── backend/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── uploads/
├── tests/
├── requirements.txt
├── .env
└── README.md
⚙️ Installation Guide
1️⃣ Clone Repository
git clone https://github.com/your-username/DriveLegal-AI.git
cd DriveLegal-AI
2️⃣ Backend Setup

Install Python dependencies:

pip install -r requirements.txt
3️⃣ Configure Environment Variables

Create .env

MONGO_URI=your_mongodb_atlas_uri

JWT_SECRET_KEY=your_secret_key

PORT=5000
4️⃣ Install Tesseract OCR
Windows

Download:

https://github.com/UB-Mannheim/tesseract/wiki

Add installation path to system environment variables.

Example:

C:\Program Files\Tesseract-OCR
5️⃣ Run Backend
uvicorn main:app --reload

Backend runs on:

http://localhost:5000
6️⃣ Frontend Setup
cd frontend

Install dependencies:

npm install
7️⃣ Start Frontend
npm run dev

Frontend runs on:

http://localhost:5173
🌐 MongoDB Atlas Setup
Create Cluster
Create MongoDB Atlas account
Create free cluster
Create database user
Add IP access:
0.0.0.0/0
Connection String
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/drivelegal_ai?retryWrites=true&w=majority
🔐 Authentication System

DriveLegal AI includes:

JWT Authentication
Protected Routes
Secure Token Validation
Login/Register System
Session Management
📊 Dashboard Features
Admin Dashboard
Live AI monitoring
Fraud analytics
Verification statistics
Threat monitoring
OCR metrics
Verification Dashboard
AI confidence score
Fraud probability
OCR extraction details
Verification timelines
🧪 API Endpoints
Endpoint	Method	Description
/api/auth/login	POST	User Login
/api/auth/register	POST	User Registration
/api/upload	POST	Upload Documents
/api/ocr/extract	POST	OCR Extraction
/api/fraud/analyze	POST	Fraud Detection
/api/verify	POST	Verification
🎨 UI Highlights
Cyber-security inspired design
Glassmorphism UI
AI dashboard animations
Responsive layout
Enterprise admin interface
Neon glow effects
🔥 Future Improvements
Real-time WebSocket monitoring
AI deep learning fraud models
Cloud deployment
Docker integration
Kubernetes deployment
Vehicle owner database integration
Government API integration
Mobile app support
📸 Screenshots

Add screenshots here:

/screenshots/dashboard.png
/screenshots/fraud-detection.png
/screenshots/admin-panel.png
🚀 Deployment
Frontend

Deploy using:

Vercel
Netlify
Backend

Deploy using:

Render
Railway
AWS
DigitalOcean
🧠 Learning Outcomes

This project demonstrates:

Full Stack Development
AI Integration
OCR Pipelines
Cyber-security UI Design
Authentication Systems
MongoDB Integration
FastAPI Backend Development
Enterprise Dashboard Architecture
👨‍💻 Author
Partha Khare

CSE (Core)
VIT Bhopal University