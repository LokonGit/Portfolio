"use client";

import SceneHtml from "@/canvases/components/SceneHtml";
import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { Linkedin } from "@/components/icons";
import { useScrollContext } from "@/contexts/ScrollContext";
import { LINKEDIN_LINK } from "@/lib/constants";
import { heroMyOriginScrollProgress } from "@/lib/sections";

function HeroMyOrigin() {
  const { scrollProgress } = useScrollContext();
  const isActive = scrollProgress === heroMyOriginScrollProgress;

  // Hide text when the current section viewed is not appriopriate for it to appear
  const { register } = useAnimateObjectVisibility({
    visibleRange: [heroMyOriginScrollProgress, heroMyOriginScrollProgress],
  });

  return (
    <SceneHtml
      className="select-none flex flex-col items-center"
      center
      position={[0.2, -0.05, -16.26]}
      isActive={isActive}
    >
      {/* Title */}
      <h2
        ref={register}
        className="text-center text-gold-gradient opacity-0 text-4xl flex items-center gap-2 font-bold"
      >
        <span>{"I originate from India"}</span>
        <span className="font-emoji text-foreground text-2xl" aria-hidden>
          🇮🇳
        </span>
      </h2>

      {/* Availability subtitle */}
      <p
        ref={register}
        className="opacity-0 text-center text-foreground/90 text-lg font-medium pt-2 [text-shadow:0_2px_10px_rgb(0_0_0/0.8)]"
      >
        {"Currently pursuing Bachelors from Indian Institute of Technology Roorkee"}
      </p>

      {/* Non-core subtitle */}
      <p
        ref={register}
        className="font-semibold text-gold-gradient text-2xl opacity-0 leading-7 tracking-[-0.0125em] py-4 text-center max-w-[34rem]"
      >
        {"Geological Technology student but currently exploring Non-Core (Tech/Dev) opportunities."}
      </p>

      {/* LinkedIn subtitle */}
      <p
        ref={register}
        className="font-semibold text-gold-gradient opacity-0 text-2xl leading-7 tracking-[-0.0125em] w-[28rem] text-center"
      >
        <span>{"Check out my "}</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={LINKEDIN_LINK}
          className="font-bold inline-flex gap-1 hover:text-[#ffde8c] focus-visible:text-[#ffde8c] transition-colors translate-y-[0.185rem] items-center text-[#DEC27C] underline rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-[#ffde8c]/50"
        >
          <Linkedin aria-hidden />
          {"LinkedIn"}
        </a>
        <span>{" to know more about me"}</span>
      </p>
    </SceneHtml>
  );
}

export default HeroMyOrigin;
