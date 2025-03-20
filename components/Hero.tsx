import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>Speak English with confidence</h1>
      <p className={styles.description}>The world's biggest platform for improving your spoken English.</p>
    </header>
  );
};

export default Hero;
