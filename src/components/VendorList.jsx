import React from "react";
import NavBar from "./NavBar";
import styles from "../styles/VendorList.module.css";
import { Link } from "react-router-dom";
import EmptyCard from "../assets/empty card.jpg";

const VendorList = () => {
  return (
    <div className={styles.vendorList}>
      <NavBar />
      <div>
        <div className={styles.emptyListCard}>
          <div className={styles.imageContainer}>
            <img src={EmptyCard} alt="empty bank image" />
          </div>
          <p>NO ACTIVE VENDORS AT THE MOMENT</p>
          <div className={styles.linksContainer}>
            <Link to="/newvendor">CREATE NEW VENDOR</Link>
            <Link to="/">BACK TO HOME PAGE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorList;
