"use client";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

// Debug tools are not ported: returns the original default values as plain constants
function useSaturnDebugControls() {
  const {
    uniforms: { uSaturnAtmosphereDayColor, uSaturnAtmosphereTwilightColor },
  } = useSpaceContext();

  return {
    "Spherical phi value": Math.PI * 0.5,
    "Spherical theta value": -0.44,
    "Day color": "#" + uSaturnAtmosphereDayColor.getHexString(),
    "Twilight color": "#" + uSaturnAtmosphereTwilightColor.getHexString(),
  };
}

export default useSaturnDebugControls;
