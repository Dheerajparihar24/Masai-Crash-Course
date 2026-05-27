import { Link } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>

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

        <button type="submit" className="btn">
          Login
        </button>

        <div className="form-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/signup">Don’t have an account? Sign up</Link>
        </div>
      </form>
    </div>
  );
}
