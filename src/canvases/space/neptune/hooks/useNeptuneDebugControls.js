"use client";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

// Debug tools are not ported: returns the original default values as plain constants
function useNeptuneDebugControls() {
  const {
    uniforms: { uNeptuneAtmosphereDayColor, uNeptuneAtmosphereTwilightColor },
  } = useSpaceContext();

  return {
    "Spherical phi value": 1.56055,
    "Spherical theta value": 1.68,
    "Day color": "#" + uNeptuneAtmosphereDayColor.getHexString(),
    "Twilight color": "#" + uNeptuneAtmosphereTwilightColor.getHexString(),
  };
}

export default useNeptuneDebugControls;
