import { Link } from "react-router-dom";
import "../styles/Signup.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Signup</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="conform-password">Conform password</label>
          <input
            type="password"
            id="conform-password"
            placeholder="Conform password"
          />
        </div>

        <button type="submit" className="btn">
          Create Account
        </button>

        <div className="form-links">
          <Link to="/login">Already have account? Login</Link>
        </div>
      </form>
    </div>
  );
}
