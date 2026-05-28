import { Link } from "react-router-dom";
import "../styles/Signup.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("");
    setError("");

    if (password !== conformPassword) {
      setError("Password do not match");
      setLoading(false);
      return;
    }

    const result = await signup(email, password);

    if (!result.success) {
      setError(result.message);
    }
    setLoading(false);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="conform-password">Conform Password</label>
          <input
            type="password"
            id="conform-password"
            placeholder="Conform password"
            value={conformPassword}
            onChange={(e) => setConformPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Creating..." : "Signup"}
        </button>

        <div className="form-links">
          <Link to="/login">Already have account? Login</Link>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
