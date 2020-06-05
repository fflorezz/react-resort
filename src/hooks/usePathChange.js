import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const usePathChange = (path) => {
  const [isPathMatching, setPathMatching] = useState(false);
  const [isPathChange, setPathChange] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const removeHistoryListener = history.listen((location) => {
      setPathChange(true);

      if (location.pathname === path) {
        setPathMatching(true);
      } else {
        setPathMatching(false);
      }
    });

    return () => {
      removeHistoryListener();
    };
  });

  return [isPathChange, isPathMatching];
};
