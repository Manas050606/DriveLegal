# 🚦 DriveLegal AI

### AI-Powered Vehicle Compliance & Fraud Verification Platform

DriveLegal AI is an intelligent vehicle compliance and fraud verification platform designed to enhance road safety through automated document validation, number plate recognition, QR authentication, fraud risk assessment, and real-time analytics.

Built as part of the **IIT Madras Road Safety Hackathon 2026**, DriveLegal AI aims to assist vehicle owners, traffic enforcement agencies, and transport authorities in identifying fraudulent vehicle records and improving compliance monitoring.

---

## 🌟 Problem Statement

Vehicle verification in many regions still relies heavily on manual inspection, making the process:

* Slow
* Error-prone
* Vulnerable to fraud
* Difficult to scale

Common challenges include:

* Fake Registration Certificates (RC)
* Tampered Insurance Documents
* Forged Number Plates
* Fraudulent QR Credentials
* Delayed Compliance Verification
* Lack of Centralized Monitoring

These issues can compromise road safety and hinder effective law enforcement.

---

## 💡 Solution Overview

DriveLegal AI provides a unified verification ecosystem that combines:

* Optical Character Recognition (OCR)
* Computer Vision
* QR Authentication
* Fraud Risk Assessment
* Analytics & Monitoring

into a single intelligent platform.

The system automatically analyzes uploaded vehicle documents and images, verifies authenticity, generates risk scores, and produces actionable verification reports.

---

# 🏗 System Architecture

```text
User Portal
     │
     ▼
Web Dashboard (React.js)
     │
     ▼
FastAPI Backend
     │
     ▼
AI Verification Engine
 ├── OCR Extraction
 ├── Vehicle Data Verification
 ├── Number Plate Recognition
 ├── QR Authentication
 ├── Fraud Risk Assessment
 └── Authenticity Score Generation
     │
     ▼
MongoDB Atlas
     │
     ▼
Analytics Dashboard
     │
     ▼
Verification Report
     │
     ▼
Authorities & Vehicle Owners
```

---

# 🔄 Verification Workflow

```text
Upload Vehicle Data
          ↓
OCR Data Extraction
          ↓
Vehicle Data Verification
          ↓
Number Plate Recognition
          ↓
QR Authentication
          ↓
Fraud Risk Assessment
          ↓
Authenticity Score Generation
          ↓
Verification Report
          ↓
Analytics & Monitoring
          ↓
Authorities & Vehicle Owners
```

---

# ✨ Key Features

## 📄 OCR-Based Document Intelligence

Extracts critical information from:

* Registration Certificates (RC)
* Insurance Documents
* Vehicle Images
* QR Documents

Extracted Information:

* Vehicle Number
* Owner Details
* Registration Information
* Insurance Information

---

## 🚗 Number Plate Recognition

Uses OpenCV and OCR techniques to:

* Detect Number Plates
* Extract Registration Numbers
* Verify Plate Information
* Improve Vehicle Identification

---

## 🔐 QR Authentication

Performs:

* QR Integrity Verification
* Metadata Validation
* Authenticity Matching
* Credential Verification

---

## 🛡 Fraud Risk Assessment

Analyzes:

* Suspicious OCR Patterns
* Potential Document Tampering
* Duplicate Vehicle Records
* Metadata Inconsistencies
* Fraud Indicators

---

## 📊 Analytics Dashboard

Provides:

* Fraud Trends
* Verification History
* Risk Alerts
* Compliance Monitoring
* Performance Insights

---

# 🎯 Authenticity Scoring System

Each verification request generates an authenticity score between 0 and 100.

| Score Range | Status          |
| ----------- | --------------- |
| 0 – 40      | High Risk       |
| 41 – 70     | Review Required |
| 71 – 100    | Verified        |

The scoring system helps authorities quickly identify suspicious vehicle records and prioritize investigations.

---

# 🛠 Technology Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* React Router DOM

## Backend

* FastAPI
* Python
* JWT Authentication
* REST APIs

## AI & Computer Vision

* OpenCV
* EasyOCR
* Tesseract OCR

## Database

* MongoDB Atlas

## Development Tools

* Git
* GitHub
* VS Code
* Postman

---

# 📂 Project Structure

```text
DriveLegal-AI/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   └── styles/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── auth/
│   ├── ai_engine/
│   └── database/
│
├── docs/
├── screenshots/
├── README.md
└── requirements.txt
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/drivelegal-ai.git
cd drivelegal-ai
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

---

# 🔒 Security Features

* JWT Authentication
* Password Hashing
* Protected Routes
* Secure API Access
* Verification Log Tracking

---

# 📈 Scalability & Future Scope

Planned enhancements include:

* VAHAN Integration
* RTO Database Connectivity
* Insurance API Verification
* Mobile Application
* Blockchain-Based Verification
* CCTV-Based Vehicle Monitoring
* Predictive Fraud Analytics
* Smart City Integration

---

# 🌍 Expected Impact

DriveLegal AI contributes toward:

✅ Reduced Vehicle Fraud

✅ Improved Road Safety

✅ Faster Verification Processes

✅ Enhanced Regulatory Compliance

✅ Better Enforcement Efficiency

✅ Data-Driven Transportation Governance

---

# 👨‍💻 Team Zenith

### IIT Madras Road Safety Hackathon 2026

DriveLegal AI demonstrates how AI, Computer Vision, and Intelligent Verification Systems can be leveraged to create safer and more transparent transportation ecosystems.

---

## 📜 License

This project is developed for educational, research, and hackathon purposes.

© 2026 Team Zenith
