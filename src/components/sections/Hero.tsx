"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Globe, Sparkles, Terminal, Smartphone, Layout, Database, Server, Cpu } from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const techStack = [
    { title: "React JS", icon: <Code2 className="w-8 h-8 text-neutral-200" /> },
    { title: "Next JS", icon: <Globe className="w-8 h-8 text-neutral-200" /> },
    { title: "React Native", icon: <Smartphone className="w-8 h-8 text-neutral-200" /> },
    { title: "Tailwind", icon: <Sparkles className="w-8 h-8 text-neutral-200" /> },
    { title: "Bootstrap", icon: <Layout className="w-8 h-8 text-neutral-200" /> },
    { title: "MongoDB", icon: <Database className="w-8 h-8 text-neutral-200" /> },
    { title: "Node JS", icon: <Server className="w-8 h-8 text-neutral-200" /> },
    { title: "Express JS", icon: <Terminal className="w-8 h-8 text-neutral-200" /> },
    { title: "Java Core", icon: <Cpu className="w-8 h-8 text-neutral-200" /> },
    { title: "Basic DSA", icon: <Code2 className="w-8 h-8 text-neutral-200" /> },
];

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-950 antialiased selection:bg-indigo-500 selection:text-white">
      
      <div className="z-10 w-full flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-36 md:pt-40"
        >
          <div className="flex flex-col items-center text-center">
            {/* Spotlight / Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-neutral-300">Available for new projects</span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
              className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 tracking-tight mb-6 max-w-4xl"
            >
              Building software that <br className="hidden md:block" />
              defies the ordinary.
            </motion.h1>
            
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-10 leading-relaxed">
              I’m a full-stack developer obsessed with performance, design, and user experience. I turn complex problems into elegant solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-50">
                <Button size="lg" className="rounded-full h-12 px-8 font-semibold text-base bg-white text-black hover:bg-neutral-200 border-0" asChild>
                    <Link href="#projects">
                    See My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 font-semibold text-base border-neutral-700 text-neutral-300 hover:bg-neutral-900 hover:text-white" asChild>
                    <Link href="/myResume.pdf" target="_blank">
                    Download CV <Download className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-full mt-20 relative z-10"
        >
           <InfiniteMovingCards items={techStack} direction="right" speed="slow" />
        </motion.div>
      </div>

      <BackgroundBeams className="opacity-50" />
    </section>
  );
}
