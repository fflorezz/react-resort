import React, { useEffect } from "react";

export const useToggleBackground = ({
  isNavOpen,
  background,
  menuBgIn,
  menuBgOut,
}) => {
  useEffect(() => {
    if (!isNavOpen && background) {
      menuBgIn();
    } else {
      menuBgOut();
    }
  }, [background, isNavOpen]);
};
