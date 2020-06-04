import { useEffect } from "react";

export const useToggleBackground = ({
  isNavOpen,
  isScrollToTop,
  menuBgIn,
  menuBgOut,
}) => {
  useEffect(() => {
    if (!isNavOpen && isScrollToTop) {
      menuBgIn();
    } else {
      menuBgOut();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollToTop, isNavOpen]);
};
