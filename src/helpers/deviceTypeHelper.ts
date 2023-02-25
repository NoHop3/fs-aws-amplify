import { useState, useEffect } from "react";
import { DeviceTypes } from "../typescript/enums";

export const screenSizes = {
  isMobile: 480,
  isTablet: 768,
  isDesktop: 1024,
};

export default function useGetDeviceType(): string {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    windowSize <= screenSizes.isMobile
      ? setDeviceType(DeviceTypes.MOBILE)
      : windowSize >= screenSizes.isDesktop
      ? setDeviceType(DeviceTypes.DESKTOP)
      : setDeviceType(DeviceTypes.TABLET);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize, deviceType]);

  return deviceType;
}
