import { useEffect } from "react";

export const useBodyOverFlowHidden = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "visible";
    };
  });
};
