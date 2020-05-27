import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";

export const useOnScreen = (threshold = 0.5) => {
  const [visible, setVisible] = useState(false);
  const [isIn, setIsIn] = useState(false);
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  });

  useEffect(() => {
    if (intersection) {
      if (
        intersection.intersectionRatio < threshold &&
        intersection.boundingClientRect.top > 0 &&
        !isIn
      ) {
        setVisible(false);
      } else if (intersection.intersectionRatio > threshold) {
        setVisible(true);
        setIsIn(true);
      }
    }
  }, [intersection, threshold, isIn]);

  return [ref, visible];
};
