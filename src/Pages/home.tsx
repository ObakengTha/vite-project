import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>AI-Powered Log Analysis Platform</h1>

      <p>
        Welcome to the Log Analysis and Threat Detection Platform. This system
        uses Machine Learning to automatically scan, classify, and detect
        abnormal patterns inside system logs.
      </p>

      <h2>How It Works</h2>
      <ol>
        <li>Users upload or stream logs from servers, firewalls, or applications.</li>
        <li>The backend FastAPI service processes and cleans the raw logs.</li>
        <li>
          A Machine Learning model detects anomalies, suspicious activity,
          or unusual behaviour.
        </li>
        <li>
          The results are displayed in dashboards—highlighting risks, warnings,
          and critical security alerts.
        </li>
      </ol>

      <h2>System Features</h2>
      <ul>
        <li>✔ Real-time Log Ingestion</li>
        <li>✔ Machine Learning-based Anomaly Detection</li>
        <li>✔ User Authentication and Access Control</li>
        <li>✔ FastAPI Backend with REST API</li>
        <li>✔ React Frontend with TypeScript</li>
        <li>✔ Visualization Dashboard (coming soon)</li>
      </ul>

      <h2>Get Started</h2>
      <p>
        Use the navigation menu to:
      </p>
      <ul>
        <li>🔐 Login to your account</li>
        <li>📂 Upload log files</li>
        <li>📊 View ML analysis results</li>
        <li>🛡 Monitor anomalies and security threats</li>
      </ul>

      <button
        onClick={() => alert("Your platform will soon support uploading logs!")}
      >
        Explore Logs
      </button>
      <button
        onClick={() => alert("The page to allow you to login!")}
      >
        Login
      </button>
      <button
        onClick={() => alert("Sign Up!")}
      >
        Sign Up
      </button>
    </div>
  );
};

export default HomePage;
