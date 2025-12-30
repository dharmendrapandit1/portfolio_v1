"use client";

import { usePathname } from "next/navigation"; // To reset scroll on route change if needed
import { useEffect, useState } from "react";
import ReactLenis from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // We can add logic here to disable lenis on specific routes or mobile if needed
  // For now, simple implementation
  
  return (
    <ReactLenis root options={{ 
        lerp: 0.1, // 0.1 is the sweet spot for "butter smooth"
        duration: 1.5, 
        smoothWheel: true,
        wheelMultiplier: 1, // Standard speed
    }}>
      {children}
    </ReactLenis>
  );
}
