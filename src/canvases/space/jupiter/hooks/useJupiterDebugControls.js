"use client";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

// Debug tools are not ported: returns the original default values as plain constants
function useJupiterDebugControls() {
  const {
    uniforms: { uJupiterAtmosphereDayColor, uJupiterAtmosphereTwilightColor },
  } = useSpaceContext();

  return {
    "Spherical phi value": Math.PI * 0.5,
    "Spherical theta value": -2.83,
    "Day color": "#" + uJupiterAtmosphereDayColor.getHexString(),
    "Twilight color": "#" + uJupiterAtmosphereTwilightColor.getHexString(),
  };
}

export default useJupiterDebugControls;
