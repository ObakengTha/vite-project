import React from "react";

interface DashboardProps {
  role: "admin" | "user"; // user role determines what features they see
}

const DashboardPage: React.FC<DashboardProps> = ({ role }) => {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to the AI Log Analysis Platform Dashboard.</p>

      <h2>Your Tools</h2>
      <ul>
        <li>📂 Upload Log Files</li>
        <li>🔍 View ML Analysis Results</li>
        <li>🛡 Detect Anomalies in System Logs</li>
        <li>📊 Basic Activity Overview</li>
      </ul>

      {/* Admin-Only Section */}
      {role === "admin" && (
        <>
          <h2>Admin Panel</h2>
          <p>These features are only visible to administrators.</p>
          <ul>
            <li>👤 Manage Users</li>
            <li>⚙ System Configuration</li>
            <li>📁 View All Logs (Global Access)</li>
            <li>🧠 Manage Machine Learning Models</li>
            <li>📈 Monitoring & System Health</li>
          </ul>
        </>
      )}

      {/* Normal users see this */}
      {role === "user" && (
        <>
          <h2>User Features</h2>
          <p>These features are tailored for standard users.</p>
          <ul>
            <li>📥 Upload personal system logs</li>
            <li>📄 See analysis for your logs only</li>
            <li>🔔 Receive security alerts</li>
          </ul>
        </>
      )}

      <button onClick={() => alert("Log out clicked")}>
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
