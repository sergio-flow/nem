import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <div className={styles.logoContainer}>
                        <Image src="/logo.png" alt="Logo" width={50} height={50} />
                        <span className={styles.logoText}>New English</span>
                    </div>

                    <span className={styles.languageDivider}>→</span>

                    <span className={styles.languageLabel}>English</span>
                </div>
                <div className={styles.centerSection}>
                    <Link href="/phrases-from-movies">
                        <span className={`${styles.navLink} ${styles.active}`}>Phrases from Movies</span>
                    </Link>

                    <Link href="/podcast-segments">
                        <span className={styles.navLink}>Podcast Segments</span>
                    </Link>

                    <Link href="/stories-for-speaking">
                        <span className={styles.navLink}>Stories for Speaking</span>
                    </Link>
                </div>
                <button className={styles.premiumButton}>Starter Kit</button>
            </div>
        </div>
    );
};

export default Header;
