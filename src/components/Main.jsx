import React from 'react'
import styles from '../styles/Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
        <div className={styles.mainComponent}>
        <h1>WELCOME TO <span>THE VENDORS</span></h1>
        <div>
        <a href='#'>NEW VENDOR</a>
        <a href='#'>VENDORS LIST</a>
        </div>
        </div>
    </main>
  )
}

export default Main