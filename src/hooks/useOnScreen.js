import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";

export const useOnScreen = (threshold = 0.5) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  });

  useEffect(() => {
    console.log(ref);
    if (intersection) {
      if (
        intersection.intersectionRatio < threshold &&
        intersection.boundingClientRect.top > 0
      ) {
        setVisible(false);
      } else if (intersection.intersectionRatio > threshold) {
        setVisible(true);
      }
    }
  }, [intersection, threshold]);

  return [ref, visible];
};
