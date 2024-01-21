import React from "react";
import styles from "../styles/Home.module.css";
import NavBar from "./NavBar";
import Main from "./Main";

const Home = () => {
  return (
    <div className={styles.home}>
      <NavBar />
      <Main />
    </div>
  );
};

export default Home;
