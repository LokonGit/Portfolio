"use client";

// Debug controls are not ported: returns the original default values as plain constants.
// Same keys as the original (folders flattened).
const earthControls = {
  // Position
  "Spherical phi value": Math.PI * 0.5,
  "Spherical theta value": -2.9,

  // Clouds
  Amount: 0.13,
  "Opacity (day)": 0.65,
  "Opacity (night)": 0.15,

  // Atmosphere
  "Day color": "#00aaff",
  "Twilight color": "#ff6600",

  // Specular reflection
  Intensity: 12,
  Opacity: 0.64,
  Color: "#ffed7d",
};

function useEarthDebugControls() {
  return earthControls;
}

export default useEarthDebugControls;
