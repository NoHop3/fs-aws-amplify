import { useState, useEffect } from "react";

export const screenSizes = {
  isMobile: 768,
  isTablet: 1024,
  isDesktop: 1280,
};

export default function useGetScreenSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return windowSize;
}
