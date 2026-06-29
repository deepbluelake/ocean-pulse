"use client";

import { useEffect, useRef, useState } from "react";
import type { GlobeInstance } from "globe.gl";

const EARTH_TEXTURE_URL = "/globe/earth-blue-marble.jpg";
const EARTH_BUMP_URL = "/globe/earth-topology.png";
const SPACE_TEXTURE_URL = "/globe/night-sky.png";

export function InteractiveEarth() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const globeRef = useRef<GlobeInstance | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let resizeObserver: ResizeObserver | null = null;

    async function mountGlobe() {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      const { default: Globe } = await import("globe.gl");

      if (!isMounted || !containerRef.current) {
        return;
      }

      const globe = new Globe(container, {
        rendererConfig: {
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        },
      });

      globeRef.current = globe;

      const setSize = () => {
        const { width, height } = container.getBoundingClientRect();
        globe.width(Math.max(320, Math.floor(width)));
        globe.height(Math.max(320, Math.floor(height)));
      };

      setSize();

      globe
        .backgroundColor("rgba(0,0,0,0)")
        .backgroundImageUrl(SPACE_TEXTURE_URL)
        .globeImageUrl(EARTH_TEXTURE_URL)
        .bumpImageUrl(EARTH_BUMP_URL)
        .showAtmosphere(true)
        .atmosphereColor("#67e8f9")
        .atmosphereAltitude(0.22)
        .pointOfView({ lat: 18, lng: -42, altitude: 2.35 }, 0)
        .onGlobeClick(({ lat, lng }) => {
          console.log("OceanPulse globe click", {
            lat: Number(lat.toFixed(4)),
            lng: Number(lng.toFixed(4)),
          });
        });

      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.32;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.enablePan = false;
      controls.enableZoom = true;
      controls.minDistance = 180;
      controls.maxDistance = 520;
      controls.rotateSpeed = 0.55;
      controls.zoomSpeed = 0.7;

      resizeObserver = new ResizeObserver(setSize);
      resizeObserver.observe(container);

      requestAnimationFrame(() => {
        if (isMounted) {
          setIsReady(true);
        }
      });
    }

    void mountGlobe();

    return () => {
      isMounted = false;
      resizeObserver?.disconnect();
      globeRef.current?._destructor();
      globeRef.current = null;
      containerRef.current?.replaceChildren();
    };
  }, []);

  return (
    <div className="relative h-full min-h-[52vh] w-full lg:min-h-full">
      <div
        ref={containerRef}
        className="h-full min-h-[52vh] w-full cursor-grab active:cursor-grabbing lg:min-h-full"
        aria-label="Interactive 3D Earth"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(6,182,212,0.08)_54%,rgba(2,6,23,0.38)_82%)]"
        aria-hidden="true"
      />

      {!isReady && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/35 text-sm font-medium text-cyan-50 backdrop-blur-sm">
          3D Earth Loading...
        </div>
      )}
    </div>
  );
}
