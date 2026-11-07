"use client";

import gsap from "gsap";
import { useEffect } from "react";

import { useScrollContext } from "@/contexts/ScrollContext";
import { jobExperienceListScrollProgress } from "@/lib/sections";

// Each entry: { ref, inPosition, outPosition, outEase? }
// - inPosition: position while the job experience list is shown
// - outPosition: position outside of the list (the asteroids fly away)

// Animate position in and out of the asteroids
function useJobExperienceListAsteroidsEntryAnimations(
  asteroids,
  // The asteroids are mounted lazily, the animation has to start once they exist
  isRendered
) {
  const { scrollProgress } = useScrollContext();
  const isListShown = scrollProgress === jobExperienceListScrollProgress;

  useEffect(() => {
    const tweens = asteroids.map(({ ref, inPosition, outPosition, outEase }) => {
      if (!ref.current) return null;
      const [x, y, z] = isListShown ? inPosition : outPosition;

      return gsap.to(ref.current.position, {
        ease: isListShown ? "sine.out" : (outEase ?? "sine.out"),
        x,
        y,
        z,
        duration: 3,
      });
    });

    return () => {
      tweens.forEach((tween) => tween?.kill());
    };
  }, [isListShown, asteroids, isRendered]);
}

export default useJobExperienceListAsteroidsEntryAnimations;
