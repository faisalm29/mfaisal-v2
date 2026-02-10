"use client";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  useEffect(() => {
    const update = (data: { timestamp: number }) => {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    };

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  useEffect(() => {
    lenisRef.current?.lenis?.scrollTo(0, { duration: 0.5 });
  }, [pathname]);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
};

export { SmoothScrollProvider };
