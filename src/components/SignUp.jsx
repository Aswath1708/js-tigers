import React from "react";
import styles from "../styles/Login.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={styles.loginPage}>
      <h1>
        <Link to="/">
          <span>THE</span> VENDORS
        </Link>
      </h1>
      <div className={styles.loginComponent}>
        <p>SIGNUP</p>
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
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="password" id="password" required />
          <button type="submit">LOGIN</button>
        </form>
        <p>
          Already a user? <Link to="/login">LOGIN</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
