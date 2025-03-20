import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
          <span className={styles.languageLabel}>EN</span>
        </div>
        <button className={styles.premiumButton}>Daily Premium</button>
      </div>
    </header>
  );
};

export default Header;
