import React from "react";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginComponent}>
        <p>LOGIN</p>
        <form className={styles.loginForm}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            Remember me?
          </label>
          <button type="submit">LOGIN</button>
        </form>
        <p>
          Need an account? <a href="#">SIGN UP</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
