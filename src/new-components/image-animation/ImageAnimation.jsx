import React, { useRef, useEffect } from "react";

import { useGlobalStateContext } from "../../context/global-context/GlobaContext";

import { useOnScreen } from "./../../hooks/useOnScreen";

import styles from "./imageAnimation.module.scss";
import { imgIn, imgOut } from "./imageAnimation.motion";

const ImageAnimation = ({ src, width, alt }) => {
  const { homeAnimations } = useGlobalStateContext();
  const [containerRef, visible] = useOnScreen(0.1);
  const imgRef = useRef(null);

  useEffect(() => {
    if (homeAnimations) {
      visible ? imgIn(imgRef) : imgOut(imgRef);
    }
  }, [visible, imgRef, homeAnimations]);
  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ width: width }}
    >
      <img ref={imgRef} src={src} alt={alt ? alt : ""} />
    </div>
  );
};

export default ImageAnimation;
