"use client";

import * as THREE from "three";

// Debug controls are not ported: returns the original default values as plain constants
const lensFlareControls = {
  enabled: true,
  opacity: 1.0,
  position: { x: 0, y: 0, z: 0 },
  glareSize: 0.15,
  starPoints: 6.0,
  animated: true,
  followMouse: false,
  anamorphic: false,
  colorGain: new THREE.Color(56, 22, 11),

  // Flare
  flareSpeed: 0.4,
  flareShape: 0.1,
  flareSize: 0.005,

  // SecondaryGhosts
  secondaryGhosts: true,
  ghostScale: 0.1,
  aditionalStreaks: true,

  // StartBurst
  starBurst: true,
  haloScale: 0.5,
};

function useLensFlareDebugControls() {
  return lensFlareControls;
}

export default useLensFlareDebugControls;
