import { useState, useEffect, useCallback } from "react";

export const useIsScrollToTop = () => {
  const [isScrollToTop, setScrollToTop] = useState(false);

  const handleScroll = useCallback(
    (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 100 && !isScrollToTop) {
        setScrollToTop(true);
      }
      if (scrolled < 100 && isScrollToTop) {
        setScrollToTop(false);
      }
    },
    [isScrollToTop]
  );

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return [isScrollToTop];
};
