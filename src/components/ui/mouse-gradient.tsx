"use client";

import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const MouseGradient = ({
  className,
}: {
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent | MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 transition-opacity duration-300",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 z-0 bg-transparent opacity-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(29, 78, 216, 0.15),
              rgba(147, 51, 234, 0.15),
              rgba(236, 72, 153, 0.15),
              transparent 80%
            )
          `,
        }}
      />
       <motion.div
        className="absolute inset-0 z-0 bg-transparent opacity-20 mixed-blend-overlay"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.3),
              rgba(232, 121, 249, 0.3),
              transparent 60%
            )
          `,
        }}
      />
    </div>
  );
};
