"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Code2, Globe, Laptop, User } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-neutral-950 text-neutral-200">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 tracking-tight mb-12 text-center md:text-left">
          About Me
        </h2>
        
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 animate-pulse border border-neutral-800"></div>
);

const items = [
  {
    title: "The Developer",
    description: "Driven by clean code and pixel-perfect design.",
    header: (
        <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50">
             <div className="absolute inset-0 z-0">
                <Image 
                  src="/mpic3.png" 
                  alt="background" 
                  fill 
                  className="object-cover blur-3xl opacity-30 scale-110" 
                />
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                 <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, borderRadius: "50%", boxShadow: "0px 0px 20px 5px rgba(16, 185, 129, 0.4)" }}
                    className="relative w-32 h-32 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden cursor-pointer"
                 >
                    <Image 
                    src="/mpic3.png" 
                    alt="Profile" 
                    fill 
                    className="object-cover" 
                    />
                 </motion.div>
            </div>
        </div>
    ),
    icon: <User className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Mindset",
    description: "Working with clients worldwide.",
    header: (
        <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50">
            <div className="absolute inset-0 z-0">
                <Image 
                  src="/mypic4.png" 
                  alt="background" 
                  fill 
                  className="object-cover blur-3xl opacity-30 scale-110" 
                />
            </div>
             <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                 <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, borderRadius: "50%", boxShadow: "0px 0px 20px 5px rgba(139, 92, 246, 0.4)" }}
                    className="relative w-32 h-32 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden cursor-pointer"
                 >
                    <Image 
                    src="/mypic4.png" 
                    alt="Global Mindset" 
                    fill 
                    className="object-cover" 
                    />
                 </motion.div>
            </div>
        </div>
    ),
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tech Enthusiast",
    description: "Always exploring the latest frameworks.",
    header: (
        <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50">
            <div className="absolute inset-0 z-0">
                <Image 
                  src="/mpic5.png" 
                  alt="background" 
                  fill 
                  className="object-cover blur-3xl opacity-30 scale-110" 
                />
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                 <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, borderRadius: "50%", boxShadow: "0px 0px 20px 5px rgba(59, 130, 246, 0.4)" }}
                    className="relative w-32 h-32 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden cursor-pointer"
                 >
                    <Image 
                    src="/mpic5.png" 
                    alt="Tech Enthusiast" 
                    fill 
                    className="object-cover" 
                    />
                 </motion.div>
            </div>
        </div>
    ),
    icon: <Code2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Tech Stack",
    description: "Next.js, React, Tailwind, Node.js, and more.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50">
           {/* Tech Stack - Full Fill as requested */}
            <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98, borderRadius: "1rem" }}
               className="relative w-full h-full cursor-pointer"
            >
                <Image 
                  src="/tech.png" 
                  alt="Tech Stack" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
            </motion.div>
      </div>
    ),
    icon: <Laptop className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
];
