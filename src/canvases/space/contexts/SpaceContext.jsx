"use client";

import { createContext, useContext, useState } from "react";
import * as THREE from "three";

/**
 * Initialization
 */
const initialSpaceContext = {
  uniforms: {
    /**
     * Earth
     */
    uEarthDirection: new THREE.Vector3(),
    setUEarthDirection: () => {},

    uEarthCloudsAmount: 0.13,
    setUEarthCloudsAmount: () => {},
    uEarthCloudsDayAlpha: 0.65,
    setUEarthCloudsDayAlpha: () => {},
    uEarthCloudsNightAlpha: 0.15,
    setUEarthCloudsNightAlpha: () => {},

    uEarthAtmosphereDayColor: new THREE.Color("#00aaff"),
    setUEarthAtmosphereDayColor: () => {},
    uEarthAtmosphereTwilightColor: new THREE.Color("#ff6600"),
    setUEarthAtmosphereTwilightColor: () => {},

    uEarthSpecularIntensity: 12,
    setUEarthSpecularIntensity: () => {},
    uEarthSpecularOpacity: 0.64,
    setUEarthSpecularOpacity: () => {},
    uEarthSpecularColor: new THREE.Color("#ffed7d"),
    setUEarthSpecularColor: () => {},

    /**
     * Mars
     */
    uMarsDirection: new THREE.Vector3(),
    setUMarsDirection: () => {},

    uMarsAtmosphereDayColor: new THREE.Color("#eb8459"),
    setUMarsAtmosphereDayColor: () => {},
    uMarsAtmosphereTwilightColor: new THREE.Color("#800a0a"),
    setUMarsAtmosphereTwilightColor: () => {},

    /**
     * Jupiter
     */
    uJupiterDirection: new THREE.Vector3(),
    setUJupiterDirection: () => {},

    uJupiterAtmosphereDayColor: new THREE.Color("#ffe7dc"),
    setUJupiterAtmosphereDayColor: () => {},
    uJupiterAtmosphereTwilightColor: new THREE.Color("#ffb3b3"),
    setUJupiterAtmosphereTwilightColor: () => {},

    /**
     * Saturn
     */
    uSaturnDirection: new THREE.Vector3(),
    setUSaturnDirection: () => {},

    uSaturnAtmosphereDayColor: new THREE.Color("#e2d529"),
    setUSaturnAtmosphereDayColor: () => {},
    uSaturnAtmosphereTwilightColor: new THREE.Color("#9d9791"),
    setUSaturnAtmosphereTwilightColor: () => {},

    /**
     * Neptune
     */
    uNeptuneDirection: new THREE.Vector3(),
    setUNeptuneDirection: () => {},

    uNeptuneAtmosphereDayColor: new THREE.Color("#6c79de"),
    setUNeptuneAtmosphereDayColor: () => {},
    uNeptuneAtmosphereTwilightColor: new THREE.Color("#8b22c7"),
    setUNeptuneAtmosphereTwilightColor: () => {},
  },
};

const SpaceContext = createContext(initialSpaceContext);

/**
 * Context provider
 */
export function SpaceContextProvider({ children }) {
  /**
   * Earth
   */
  const [uEarthDirection, setUEarthDirection] = useState(
    initialSpaceContext.uniforms.uEarthDirection
  );

  const [uEarthCloudsAmount, setUEarthCloudsAmount] = useState(
    initialSpaceContext.uniforms.uEarthCloudsAmount
  );
  const [uEarthCloudsDayAlpha, setUEarthCloudsDayAlpha] = useState(
    initialSpaceContext.uniforms.uEarthCloudsDayAlpha
  );
  const [uEarthCloudsNightAlpha, setUEarthCloudsNightAlpha] = useState(
    initialSpaceContext.uniforms.uEarthCloudsNightAlpha
  );

  const [uEarthAtmosphereDayColor, setUEarthAtmosphereDayColor] = useState(
    initialSpaceContext.uniforms.uEarthAtmosphereDayColor
  );
  const [uEarthAtmosphereTwilightColor, setUEarthAtmosphereTwilightColor] =
    useState(initialSpaceContext.uniforms.uEarthAtmosphereTwilightColor);

  const [uEarthSpecularIntensity, setUEarthSpecularIntensity] = useState(
    initialSpaceContext.uniforms.uEarthSpecularIntensity
  );
  const [uEarthSpecularOpacity, setUEarthSpecularOpacity] = useState(
    initialSpaceContext.uniforms.uEarthSpecularOpacity
  );
  const [uEarthSpecularColor, setUEarthSpecularColor] = useState(
    initialSpaceContext.uniforms.uEarthSpecularColor
  );

  /**
   * Mars
   */
  const [uMarsDirection, setUMarsDirection] = useState(
    initialSpaceContext.uniforms.uMarsDirection
  );

  const [uMarsAtmosphereDayColor, setUMarsAtmosphereDayColor] = useState(
    initialSpaceContext.uniforms.uMarsAtmosphereDayColor
  );
  const [uMarsAtmosphereTwilightColor, setUMarsAtmosphereTwilightColor] =
    useState(initialSpaceContext.uniforms.uMarsAtmosphereTwilightColor);

  /**
   * Jupiter
   */
  const [uJupiterDirection, setUJupiterDirection] = useState(
    initialSpaceContext.uniforms.uJupiterDirection
  );

  const [uJupiterAtmosphereDayColor, setUJupiterAtmosphereDayColor] = useState(
    initialSpaceContext.uniforms.uJupiterAtmosphereDayColor
  );
  const [uJupiterAtmosphereTwilightColor, setUJupiterAtmosphereTwilightColor] =
    useState(initialSpaceContext.uniforms.uJupiterAtmosphereTwilightColor);

  /**
   * Saturn
   */
  const [uSaturnDirection, setUSaturnDirection] = useState(
    initialSpaceContext.uniforms.uSaturnDirection
  );

  const [uSaturnAtmosphereDayColor, setUSaturnAtmosphereDayColor] = useState(
    initialSpaceContext.uniforms.uSaturnAtmosphereDayColor
  );
  const [uSaturnAtmosphereTwilightColor, setUSaturnAtmosphereTwilightColor] =
    useState(initialSpaceContext.uniforms.uSaturnAtmosphereTwilightColor);

  /**
   * Neptune
   */
  const [uNeptuneDirection, setUNeptuneDirection] = useState(
    initialSpaceContext.uniforms.uNeptuneDirection
  );

  const [uNeptuneAtmosphereDayColor, setUNeptuneAtmosphereDayColor] = useState(
    initialSpaceContext.uniforms.uNeptuneAtmosphereDayColor
  );
  const [uNeptuneAtmosphereTwilightColor, setUNeptuneAtmosphereTwilightColor] =
    useState(initialSpaceContext.uniforms.uNeptuneAtmosphereTwilightColor);

  return (
    <SpaceContext.Provider
      value={{
        uniforms: {
          /**
           * Earth
           */
          uEarthDirection,
          setUEarthDirection,

          uEarthCloudsAmount,
          setUEarthCloudsAmount,
          uEarthCloudsDayAlpha,
          setUEarthCloudsDayAlpha,
          uEarthCloudsNightAlpha,
          setUEarthCloudsNightAlpha,

          uEarthAtmosphereDayColor,
          setUEarthAtmosphereDayColor,
          uEarthAtmosphereTwilightColor,
          setUEarthAtmosphereTwilightColor,

          uEarthSpecularIntensity,
          setUEarthSpecularIntensity,
          uEarthSpecularOpacity,
          setUEarthSpecularOpacity,
          uEarthSpecularColor,
          setUEarthSpecularColor,

          /**
           * Mars
           */
          uMarsDirection,
          setUMarsDirection,

          uMarsAtmosphereDayColor,
          setUMarsAtmosphereDayColor,
          uMarsAtmosphereTwilightColor,
          setUMarsAtmosphereTwilightColor,

          /**
           * Jupiter
           */
          uJupiterDirection,
          setUJupiterDirection,

          uJupiterAtmosphereDayColor,
          setUJupiterAtmosphereDayColor,
          uJupiterAtmosphereTwilightColor,
          setUJupiterAtmosphereTwilightColor,

          /**
           * Saturn
           */
          uSaturnDirection,
          setUSaturnDirection,

          uSaturnAtmosphereDayColor,
          setUSaturnAtmosphereDayColor,
          uSaturnAtmosphereTwilightColor,
          setUSaturnAtmosphereTwilightColor,

          /**
           * Neptune
           */
          uNeptuneDirection,
          setUNeptuneDirection,

          uNeptuneAtmosphereDayColor,
          setUNeptuneAtmosphereDayColor,
          uNeptuneAtmosphereTwilightColor,
          setUNeptuneAtmosphereTwilightColor,
        },
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
}

/**
 * Hook
 */
export function useSpaceContext() {
  const context = useContext(SpaceContext);
  if (context === undefined)
    throw new Error(
      "useSpaceContext was used outside of SpaceContextProvider!"
    );
  return context;
}
