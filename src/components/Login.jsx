import React from "react";
import styles from "../styles/Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <h1>
        <Link to="/">
          THE <span>VENDORS</span>
        </Link>
      </h1>
      <div className={styles.loginComponent}>
        <p>LOGIN</p>
        <form className={styles.loginForm}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
          />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            Remember me?
          </label>
          <button type="submit">LOGIN</button>
        </form>
        <p>
          Need an account? <Link to="/signup">SIGN UP</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
