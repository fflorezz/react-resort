import React from "react";
import { motion } from "framer-motion";

import styles from "./modalAnimation.module.scss";

const ModalAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={styles.container}
    >
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        transition={{ duration: 1, ease: [0.84, -0.015, 0.42, 1.01] }}
        className={styles.scroll}
      >
        <motion.div
          initial={{ y: "-100vh", opacity: 0.8 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100vh", opacity: 1 }}
          transition={{ duration: 1, ease: [0.84, -0.015, 0.42, 1.01] }}
          className={styles.scroll}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ModalAnimation;
