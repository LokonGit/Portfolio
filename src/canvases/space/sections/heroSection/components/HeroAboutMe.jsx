"use client";

import SceneHtml from "@/canvases/components/SceneHtml";
import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { useScrollContext } from "@/contexts/ScrollContext";
import { heroAboutMeScrollProgress } from "@/lib/sections";

function HeroAboutMe() {
  const { scrollProgress } = useScrollContext();

  const { register } = useAnimateObjectVisibility({
    visibleRange: [heroAboutMeScrollProgress, heroAboutMeScrollProgress],
  });

  return (
    <SceneHtml
      className="select-none pointer-events-none"
      position={[1, 3, -16]}
      isActive={scrollProgress === heroAboutMeScrollProgress}
    >
      {/* Title */}
      <h2
        ref={register}
        className="opacity-0 text-gold-gradient text-6xl font-bold pb-4"
      >
        {"About me "}
        <span className="font-emoji text-foreground" aria-hidden>
          👋
        </span>
      </h2>

      {/* Description */}
      <div
        ref={register}
        className="opacity-0 text-gold-gradient text-base font-semibold w-[28rem] max-w-[90vw] flex flex-col gap-3"
      >
        <p>
          {"I'm Lokesh Saraswat, a Geological Technology undergraduate at IIT Roorkee, India. I'm passionate about problem-solving, Competitive Programming, and exploring the world of Open Source. "}
          <span className="font-emoji text-foreground" aria-hidden>
            🚀
          </span>
        </p>
        <p>
          {"I enjoy tackling challenging problems, strengthening my Data Structures & Algorithms skills, and building things through code. I'm also exploring full-stack development with C++, Python, JavaScript, React, Next.js and modern backend technologies. "}
          <span className="font-emoji text-foreground" aria-hidden>
            💻
          </span>
        </p>
        <p>
          {"Beyond coding, I love exploring open-source projects, contributing to developer communities, collaborating with fellow developers, and learning new technologies. Always curious, always learning, and always building! "}
          <span className="font-emoji text-foreground" aria-hidden>
            ✨
          </span>
        </p>
      </div>
    </SceneHtml>
  );
}

export default HeroAboutMe;
