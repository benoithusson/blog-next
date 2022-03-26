import React from "react";
import styles from "../../../styles/components/Navbar.module.css";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
        <Link href="/">
            <a className={styles.linkNavbar}>Accueil</a>
        </Link>
        <Link href="/blog">
            <a className={styles.linkNavbar}>Blog</a>
        </Link>
        <Link href="/liste">
            <a className={styles.linkNavbar}>Liste</a>
        </Link>
    </nav>
  );
}
