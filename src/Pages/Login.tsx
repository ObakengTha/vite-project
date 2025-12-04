import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setFeedback("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setFeedback("Password must be at least 6 characters.");
      return;
    }

    setFeedback("Login submitted (demo).");
  };

  const handleForgot = () => {
    alert("Forgot password clicked. You will add functionality later.");
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "8px" }}>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "8px" }}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label> Remember me</label>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Sign In
        </button>

        <p>{feedback}</p>
      </form>

      <button onClick={handleForgot} style={{ marginTop: "10px" }}>
        Forgot Password?
      </button>

      <p style={{ marginTop: "10px" }}>
        Don’t have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
};

export default LoginPage;
