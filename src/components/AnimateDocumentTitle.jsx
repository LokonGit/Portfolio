"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";

import { useSettingsContext } from "@/contexts/SettingsContext";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const staticDocumentTitle = "Lokesh Saraswat | Portfolio";

function AnimateDocumentTitle() {
  // "loading" | "ready" | "active"
  const [titleStatus, setTitleStatus] = useState("loading");
  const { hasLoaded, hasStartedExperience } = useSettingsContext();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Update title status
  useEffect(() => {
    if (hasStartedExperience) return setTitleStatus("active");
    if (hasLoaded) return setTitleStatus("ready");
  }, [hasLoaded, hasStartedExperience]);

  // Update document title
  useEffect(() => {
    // An animated title is distracting for people who prefer reduced motion
    if (prefersReducedMotion) {
      document.title = staticDocumentTitle;
      return;
    }

    let loadingTimeline;
    let readyTimeline;
    let activeTimeline;

    switch (titleStatus) {
      case "loading": {
        const titles = ["Deploying...", "Deploying....", "Deploying....."];
        const progress = { value: 0 };

        loadingTimeline = gsap.to(progress, {
          value: titles.length - 1,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "none",

          onUpdate: () => {
            const i = Math.round(progress.value);
            document.title = titles[i];
          },
        });

        break;
      }

      case "ready": {
        const titles = [
          `Ready for launch!`,
          "Lokesh Saraswat | Portfolio",
        ];
        const progress = { value: 0 };

        readyTimeline = gsap.to(progress, {
          value: titles.length - 1,
          duration: 5,
          repeat: -1,
          ease: "none",

          onUpdate: () => {
            const i = Math.round(progress.value);
            document.title = titles[i];
          },
        });
        break;
      }

      case "active": {
        const titles = [
          "🚀_______________",
          "_🚀______________",
          "__🚀_____________",
          "___🚀____________",
          "____🚀___________",
          "_____🚀__________",
          "______🚀_________",
          "_______🚀________",
          "________🚀_______",
          "_________🚀______",
          "__________🚀_____",
          "___________🚀____",
          "____________🚀___",
          "_____________🚀__",
          "______________🚀_",
          "_______________🚀",
          "🚀_______________",
        ];
        const progress = { value: 0 };

        activeTimeline = gsap.to(progress, {
          value: titles.length - 1,
          duration: titles.length,
          repeat: -1,
          ease: "none",
          delay: 2,

          onUpdate: () => {
            const i = Math.round(progress.value);
            document.title = titles[i];
          },
        });
        break;
      }
    }

    return () => {
      loadingTimeline?.kill();
      readyTimeline?.kill();
      activeTimeline?.kill();
    };
  }, [titleStatus, prefersReducedMotion]);

  return null;
}

export default AnimateDocumentTitle;
