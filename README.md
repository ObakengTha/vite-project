# React + TypeScript + Vite

A full-stack anomaly detection system for log analysis with authentication, machine learning, and admin dashboard capabilities.
Core Features
 Authentication Module
•	User registration with email verification
•	Login with JWT access & refresh tokens
•	Multi-Factor Authentication (MFA) setup and verification
 Log Ingestion
•	File upload support (CSV, JSON)
•	API endpoint for log submission
•	Automated log processing
 Anomaly Detection
•	ML-powered detection using Isolation Forest
•	API endpoint for real-time analysis
•	Returns flagged anomalies with confidence scores
 Admin Dashboard (React)
•	Interactive charts and visualizations (Recharts)
•	Log upload interface
•	Anomaly results viewer
•	User management system
•	Audit trail monitoring
 Tech Stack
•	Frontend: React + Vercel/Netlify
•	Backend: FastAPI + Railway/Render/AWS
•	Database: Supabase/Railway PostgreSQL
•	ML Model: Isolation Forest (embedded in backend)

```
