"use client";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

// Debug tools are not ported: returns the original default values as plain constants
function useMarsDebugControls() {
  const {
    uniforms: { uMarsAtmosphereDayColor, uMarsAtmosphereTwilightColor },
  } = useSpaceContext();

  return {
    "Spherical phi value": Math.PI * 0.5,
    "Spherical theta value": 3.0325,
    "Day color": "#" + uMarsAtmosphereDayColor.getHexString(),
    "Twilight color": "#" + uMarsAtmosphereTwilightColor.getHexString(),
  };
}

export default useMarsDebugControls;
