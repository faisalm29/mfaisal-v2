"use client";

import dynamic from "next/dynamic";

const DarkVeil = dynamic(() => import("./DarkVeil"), {
  ssr: false,
});

export default function Background() {
  return (
    <DarkVeil
      hueShift={-10}
      noiseIntensity={0.1}
      scanlineIntensity={1}
      speed={0.5}
      scanlineFrequency={30}
      warpAmount={1}
      resolutionScale={1.2}
    />
  );
}
