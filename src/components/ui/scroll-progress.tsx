"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.05) {
        setVisible(true);
    } else {
        setVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neutral-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
        className={cn(
          "fixed bottom-8 right-8 z-40 p-3 rounded-full bg-neutral-800/80 backdrop-blur-md border border-neutral-700 text-white shadow-xl hover:bg-neutral-700 transition-colors",
          className
        )}
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="h-5 w-5" />
      </motion.button>
    </>
  );
}
