import { useState, useEffect } from "react";

const useViewport = () => {
  const [viewport, setView] = useState({
    width: undefined,
    height: undefined,
  });

  const onResize = () => {
    setView({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window != undefined) {
      window.addEventListener("resize", onResize);
      onResize();
      return () => {
        window.removeEventListener("resize", onResize);
      };
    }
  }, []);

  return [viewport.width, viewport.height];
};

export default useViewport;
