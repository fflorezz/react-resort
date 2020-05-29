import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useStopExitAnimation = (path) => {
  const history = useHistory();

  const [exit, setExit] = useState(true);

  useEffect(() => {
    const stopHistoryListener = history.listen((location) => {
      // turn off exit animation when  the path changes to /rooms
      if (location.pathname === path) {
        setExit(false);
      }
    });
  });

  return [exit, stopHistoryListener];
};
