"use client";

import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useSound from "use-sound";

import AudioSettingButton from "@/components/AudioSettingButton";
import GraphicsSettingButton from "@/components/GraphicsSettingButton";
import { Button } from "@/components/ui/button";
import { useSettingsContext } from "@/contexts/SettingsContext";
import { cn } from "@/lib/utils";

// Audio is served from /public (plain URLs, no imports)
const musicSound = "/assets/audio/music.ogg";
const airPressureReleaseSfx = "/assets/audio/air_pressure_release.ogg";
const sciFiDoorOpenSfx = "/assets/audio/sci_fi_door_close.ogg";

// One language only (English)
const language = "en";

// Never keep people waiting forever if some asset can't be loaded
const maxSceneLoadingWaitMs = 15000;

function StartupScreen() {
  const {
    dispatch,
    hasStartedExperience,
    isAudioEnabled,
    audioVolume,
    hasIgnoredMobileWarning,
  } = useSettingsContext();
  const volume = isAudioEnabled ? audioVolume : 0;
  const [playSciFiDoorOpenSfx] = useSound(sciFiDoorOpenSfx, { volume });
  const [playAirPressureReleaseSfx] = useSound(airPressureReleaseSfx, {
    volume,
  });
  const [playMusicSound, { sound: musicHowl }] = useSound(musicSound, {
    volume,
    loop: true,
  });
  const startupScreenContainerRef = useRef(null);
  const settingsButtonsContainerRef = useRef(null);
  const backgroundImageRef = useRef(null);
  const startButtonRef = useRef(null);
  const leftOverlayPanelRef = useRef(null);
  const rightOverlayPanelRef = useRef(null);
  const [hasLoadedBackgroundImage, setHasLoadedBackgroundImage] =
    useState(false);
  const [hasWaitedTooLong, setHasWaitedTooLong] = useState(false);
  // The side panels are portaled into document.body, which doesn't exist while rendering on the server
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Loading progress of the 3D scene (textures, models, fonts)
  const { progress, active, total } = useProgress();
  const [hasLoadedScene, setHasLoadedScene] = useState(false);
  const isReady =
    (hasLoadedBackgroundImage || hasWaitedTooLong) && hasLoadedScene;

  // Latched: assets loaded later on (e.g. when a section mounts) must not disable START again
  useEffect(() => {
    if (hasLoadedScene) return;
    if ((total > 0 && !active && progress >= 100) || hasWaitedTooLong)
      setHasLoadedScene(true);
  }, [hasLoadedScene, total, active, progress, hasWaitedTooLong]);

  function handlePlayStartExperienceSounds() {
    gsap.delayedCall(0, playSciFiDoorOpenSfx);
    gsap.delayedCall(3.75, playAirPressureReleaseSfx);

    gsap.delayedCall(5, playMusicSound);
  }

  function handleStartExperience() {
    if (hasStartedExperience) return;
    dispatch({ type: "experience/start" });
    handlePlayStartExperienceSounds();
  }

  // Pause the music in background tabs
  useEffect(() => {
    if (!musicHowl) return;
    let wasPlaying = false;

    function handleVisibilityChange() {
      if (document.hidden) {
        wasPlaying = musicHowl.playing();
        if (wasPlaying) musicHowl.pause();
      } else if (wasPlaying) {
        musicHowl.play();
        wasPlaying = false;
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [musicHowl]);

  // Set hasLoadedBackgroundImage on image load (the image can already be complete when coming from the cache)
  useEffect(() => {
    const backgroundImageEl = backgroundImageRef.current;
    if (backgroundImageEl?.complete && backgroundImageEl.naturalWidth > 0)
      setHasLoadedBackgroundImage(true);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setHasWaitedTooLong(true),
      maxSceneLoadingWaitMs
    );
    return () => clearTimeout(timeoutId);
  }, []);

  // Focus the start button once it's ready, so Enter / Space starts the experience
  useEffect(() => {
    const isBlockingOverlayShown = !!document.querySelector(
      "[data-blocking-overlay]"
    );
    if (isReady && !hasStartedExperience && !isBlockingOverlayShown)
      startButtonRef.current?.focus({ preventScroll: true });
  }, [isReady, hasStartedExperience, hasIgnoredMobileWarning]);

  // GSAP animations
  useEffect(() => {
    /**
     * On entry animations
     */
    // Fade in background image
    if (hasLoadedBackgroundImage)
      gsap.to(backgroundImageRef.current, {
        filter: "brightness(100%)",
        duration: 4,
        ease: "sine.inOut",
      });

    if (hasLoadedBackgroundImage)
      gsap.to(settingsButtonsContainerRef.current, {
        opacity: 1,
        duration: 4,
        delay: 1.5,
      });

    /**
     * On start experience animations
     */
    if (!hasStartedExperience) return;

    // Startup screen disappear when side panels are closed in
    gsap.to(startupScreenContainerRef.current, {
      display: "none",
      duration: 0.01,
      delay: 2.8,
    });

    // Left panel slide in
    gsap
      .timeline()
      .to(leftOverlayPanelRef.current, {
        x: 0,
        delay: 0.25,
        duration: 2.5,
        ease: "bounce.out",
      })
      .to(leftOverlayPanelRef.current, {
        x: "-100%",
        ease: "sine.inOut",
        boxShadow: "0 0 0 transparent",
        delay: 1,
        duration: 2,
      })
      .to(leftOverlayPanelRef.current, { display: "none" });

    // Right panel slide in
    gsap
      .timeline()
      .to(rightOverlayPanelRef.current, {
        x: 0,
        delay: 0.25,
        duration: 2.5,
        ease: "bounce.out",
      })
      .to(rightOverlayPanelRef.current, {
        x: "100%",
        ease: "sine.inOut",
        boxShadow: "0 0 0 transparent",
        delay: 1,
        duration: 2,
      })
      .to(rightOverlayPanelRef.current, { display: "none" });
  }, [hasStartedExperience, hasLoadedBackgroundImage]);

  const loadingPercentage = Math.round(
    hasLoadedScene ? 100 : Math.min(progress, 99)
  );

  return (
    <div
      ref={startupScreenContainerRef}
      inert={hasStartedExperience}
      className="fixed inset-0 z-[60] flex justify-center bg-black items-center overflow-hidden"
    >
      {/* Who and what this is */}
      <header className="absolute top-[max(1rem,env(safe-area-inset-top))] left-1/2 -translate-x-1/2 z-10 text-center select-none w-max max-w-[calc(100vw-2rem)]">
        <h1 className="text-lg font-bold tracking-wide text-foreground/90">
          Lokesh Saraswat
        </h1>
        <p className="text-sm text-foreground/60">
          Full-Stack Developer · 3D space portfolio
        </p>
      </header>

      {/* Loading text */}
      <p
        role="status"
        className={cn(
          "text-2xl transition-opacity duration-500 ease-in-out select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 tabular-nums",
          hasLoadedBackgroundImage ? "opacity-0" : "opacity-100"
        )}
      >
        Deploying... {loadingPercentage}%
      </p>

      {/* Scales the control panel with the screen, so the buttons always stay on their spots of the image */}
      <div className="startup-panel relative shrink-0 w-[93.75rem] aspect-video">
        {/* Background image */}
        <img
          ref={backgroundImageRef}
          onLoad={() => setHasLoadedBackgroundImage(true)}
          // A missing image must never block the experience
          onError={() => setHasLoadedBackgroundImage(true)}
          className="absolute inset-0 w-full h-full -z-10 brightness-0 select-none"
          src="/assets/pictures/startup_screen_background.webp"
          alt="The control panel of your spaceship, which will take you on a tour of Lokesh Saraswat's portfolio"
          fetchPriority="high"
        />

        <div className="opacity-0" ref={settingsButtonsContainerRef}>
          {/* Settings buttons (the hit area reaches past the label, so they stay tappable when the panel is scaled down) */}
          <GraphicsSettingButton
            sideOffset={32}
            buttonText="Graphics"
            buttonVariant="ghost"
            buttonClassName="before:absolute before:-inset-x-6 before:-inset-y-5 bg-transparent! w-[11.5rem] px-3 h-10 top-[calc(50%_+_14.8rem)] left-1/2 -translate-x-1/2 absolute [transform:perspective(30rem)_rotateX(20deg)] text-[#400000] hover:text-[#7D0000] focus-visible:text-[#7D0000] focus-visible:border-2 focus-visible:border-[#7D0000] text-2xl focus-visible:[box-shadow:0_0_3rem_var(--foreground)] hover:[box-shadow:0_0_3rem_var(--foreground)]"
          />
          <AudioSettingButton
            sideOffset={32}
            buttonText="Sounds"
            buttonVariant="ghost"
            buttonClassName="before:absolute before:-inset-x-6 before:-inset-y-5 bg-transparent! w-[11.5rem] px-3 h-10 top-[calc(50%_+_14.8rem)] right-[calc(50%_-_14.75rem)] translate-x-1/2 absolute [transform:perspective(30rem)_rotateY(10deg)_rotateX(20deg)_skewX(5deg)] text-[#400000] hover:text-[#7D0000] focus-visible:text-[#7D0000] focus-visible:border-2 focus-visible:border-[#7D0000] text-2xl focus-visible:[box-shadow:0_0_3rem_var(--foreground)] hover:[box-shadow:0_0_3rem_var(--foreground)]"
          />

          {/* Start button */}
          <Button
            ref={startButtonRef}
            onClick={handleStartExperience}
            disabled={hasStartedExperience || !isReady}
            variant="ghost"
            className="text-7xl h-32 w-[30rem] left-1/2 -translate-x-1/2 top-[calc(50%_+_1.6rem)] absolute bg-transparent! focus-visible:[box-shadow:0_0_10rem_var(--foreground)] hover:[box-shadow:0_0_10rem_var(--foreground)] text-[#084000] focus-visible:text-[#117D00] focus-visible:border-2 focus-visible:border-[#084000] hover:text-[#117D00] font-black tracking-[0.15em] rounded-full [transform:perspective(30rem)_rotateX(20deg)] disabled:opacity-100"
          >
            {isReady ? "START" : `${loadingPercentage}%`}
          </Button>
        </div>
      </div>

      {/* Start animation side panels */}
      {isMounted &&
        createPortal(
          <>
            <img
              src="/assets/pictures/startup_screen_door.webp"
              alt=""
              ref={leftOverlayPanelRef}
              className="h-dvh w-[50vw] -scale-x-100 fixed [box-shadow:0_0_1rem_rgba(0,0,0,0.75)] object-cover left-0 -translate-x-full top-0 z-[70] pointer-events-none"
            />
            <img
              src="/assets/pictures/startup_screen_door.webp"
              alt=""
              ref={rightOverlayPanelRef}
              className="h-dvh w-[50vw] fixed object-cover [box-shadow:0_0_1rem_rgba(0,0,0,0.75)] right-0 translate-x-full top-0 z-[70] pointer-events-none"
            />
          </>,
          document.body
        )}
    </div>
  );
}

export default StartupScreen;
