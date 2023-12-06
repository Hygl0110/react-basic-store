import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h3 className={styles.footerTitle}>
        Developer: Daniel Hernney Cardona Jaramillo
      </h3>
      <p className={styles.footerText}>
        Ruta formativa React.JS Básico Grupo 3 2023-2
      </p>
    </div>
  );
}

export default Footer;
