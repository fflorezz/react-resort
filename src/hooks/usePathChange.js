import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const usePathChange = (path) => {
  const [isPathChange, setPathChange] = useState(false);
  const [pathName, setPathName] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const removeHistoryListener = history.listen((location) => {
      setPathName(location.pathname);
      setPathChange(true);
    });

    return () => {
      removeHistoryListener();
    };
  });

  return [isPathChange, pathName];
};
