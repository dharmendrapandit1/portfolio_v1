"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 m-auto h-[40rem] w-full bg-transparent bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-background/90 [mask-image:radial-gradient(ellipse_at_center,transparent,black)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-3xl opacity-30 animate-spotlight" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
};
