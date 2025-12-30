"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ContactModal } from "./ContactModal";
import { useLenis } from "lenis/react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  
  const lenis = useLenis();

  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    if (Math.abs(diff) > 10) {
        setHidden(diff > 0 && latest > 100);
    }
    setScrolled(latest > 20);
    lastScrollY.current = latest;
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Check if it's an anchor link
    if (href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
            lenis?.scrollTo(target as HTMLElement, {
                offset: -100, // Adjust for navbar height
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
            });
        }
    }
  };

  return (
    <>
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div 
        className={cn(
            "pointer-events-auto flex items-center justify-between gap-4 py-2 px-4 rounded-full transition-all duration-300 border border-transparent",
            scrolled ? "bg-background/70 backdrop-blur-md shadow-lg border-border/20" : "bg-transparent"
        )}
      >
        <Link href="#" className="flex items-center space-x-2 mr-4" onClick={(e) => lenis?.scrollTo(0)}>
            <span className="text-xl font-bold font-jakarta bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              DP
            </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-muted/40 p-1 rounded-full border border-border/10 backdrop-blur-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="relative px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-background/50"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center ml-4">
            <Button 
                variant="default" 
                size="sm" 
                className="rounded-full px-6 font-medium shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => setIsModalOpen(true)}
            >
                Hire Me
            </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground bg-muted/30 rounded-full backdrop-blur-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl bg-background/90 backdrop-blur-xl border border-border/40 shadow-2xl flex flex-col gap-2 pointer-events-auto origin-top"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-foreground py-3 px-4 rounded-xl hover:bg-muted/50 transition-colors"
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-px bg-border/30 my-2" />
            <Button className="w-full rounded-xl py-6 text-lg" onClick={() => { setIsOpen(false); setIsModalOpen(true); }}>
              Hire Me
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
