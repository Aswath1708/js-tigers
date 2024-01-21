import React from "react";
import NavBar from "./NavBar";
import styles from "../styles/NewVendor.module.css";

const NewVendor = () => {
  return (
    <div className={styles.newVendor}>
      <NavBar />
      <div className={styles.formContainer}>
        <form className={styles.newVendorForm}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            type="number"
            name="accountnumber"
            id="accountnumber"
            placeholder="Account Number"
            required
          />
          <input
            type="text"
            name="bank"
            id="bank"
            placeholder="Bank Name"
            required
          />
          <input
            type="text"
            name="addressone"
            id="addressone"
            placeholder="Current Address"
          />
          <input
            type="text"
            name="addresstwo"
            id="addresstwo"
            placeholder="Permanent Address"
            required
          />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            required
          />
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            required
          />
          <input
            type="number"
            name="zipcode"
            id="zipcode"
            placeholder="Zip Code"
            required
          />
          <button type="submit">CREATE NEW VENDOR</button>
        </form>
      </div>
    </div>
  );
};

export default NewVendor;
