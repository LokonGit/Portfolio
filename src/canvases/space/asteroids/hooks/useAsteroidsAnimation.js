"use client";

import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";

function useAsteroidsAnimation(animations, animationSpeed = 0.075) {
  const { ref, actions } = useAnimations(animations);

  useEffect(() => {
    const rotateAnimation = actions?.["Take 001"];
    if (!rotateAnimation) return;

    rotateAnimation.play();
    rotateAnimation.timeScale = animationSpeed;

    return () => {
      rotateAnimation.stop();
    };
  }, [actions, animationSpeed]);

  return ref;
}

export default useAsteroidsAnimation;
