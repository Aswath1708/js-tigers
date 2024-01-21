import React from 'react'
import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
        <h1>THE VENDORS</h1>
        <ul>
            <li>
                <a href="#">HOME</a>
            </li>
            <li>
                <a href="#">ABOUT US</a>
            </li>
            <li>
                <Link to="/login">LOGIN</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar