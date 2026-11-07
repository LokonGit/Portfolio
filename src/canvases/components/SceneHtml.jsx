"use client";

import { Html } from "@react-three/drei";
import { useContext } from "react";

import { ScrollContext } from "@/contexts/ScrollContext";
import { SettingsContext } from "@/contexts/SettingsContext";
import { cn } from "@/lib/utils";

// Stays below the top bar (z-40) and the startup screen, unlike Drei's default range that reaches 16777271
const sceneHtmlZIndexRange = [30, 10];

/**
 * Drei's <Html /> renders its children into a separate React root, which loses every context.
 * This wrapper bridges the app contexts back in and handles the active/inactive state of the content.
 */
function SceneHtml({
  children,
  isActive = true,
  zIndexRange = sceneHtmlZIndexRange,
  style,
  pointerEvents,
  className,
  transform,
  ...props
}) {
  const settingsContext = useContext(SettingsContext);
  const scrollContext = useContext(ScrollContext);

  return (
    <Html
      zIndexRange={zIndexRange}
      // Inactive content must never catch clicks meant for the scene or other content
      pointerEvents={isActive ? pointerEvents : "none"}
      style={isActive ? style : { ...style, pointerEvents: "none" }}
      transform={transform}
      // Screen-space content scales with the 3D scene, so the composition stays the same on every screen
      className={transform ? className : cn("scene-scaled", className)}
      {...props}
    >
      <SettingsContext.Provider value={settingsContext}>
        <ScrollContext.Provider value={scrollContext}>
          <div
            className={
              isActive
                ? "contents"
                : "contents pointer-events-none select-none"
            }
            inert={!isActive}
            aria-hidden={isActive ? undefined : true}
          >
            {children}
          </div>
        </ScrollContext.Provider>
      </SettingsContext.Provider>
    </Html>
  );
}

export default SceneHtml;
