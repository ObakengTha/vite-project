# React + TypeScript + Vite

A full-stack anomaly detection system for log analysis with authentication, machine learning, and admin dashboard capabilities.
Core Features

Core Features to Implement
1. Authentication Module
•	Register user
•	Verify email
•	Login
•	MFA setup QR code (React UI)
•	MFA challenge endpoint
•	JWT access + refresh tokens

2. Log Ingestion
User or system uploads logs via:
•	File upload (CSV, JSON)
•	API (POST /logs)

3. Anomaly Detection
•	API receives logs
•	Preprocesses
•	Runs ML model
•	Returns flagged anomalies

4. Admin Dashboard (React)
Pages:
•	Login / MFA
•	Upload logs
•	View anomaly results
•	Graphs (using Recharts)
•	User management
•	Audit trail page




```
