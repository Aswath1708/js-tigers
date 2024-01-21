import React from "react";
import styles from "../styles/Main.module.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainComponent}>
        <h1>
          WELCOME TO <span>THE VENDORS</span>
        </h1>
        <div>
          <Link to="/newvendor">NEW VENDOR</Link>
          <Link to="/vendorlist">VENDORS LIST</Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
