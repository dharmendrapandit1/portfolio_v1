"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ContactModal } from "@/components/layout/ContactModal";
import { toast } from "sonner";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
    <section id="contact" className="py-32 bg-neutral-950 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <h2 className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 mb-8">
                 Let's build something <br /> amazing together.
             </h2>
             <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
                 Ready to take your project to the next level? I'm available for freelance work and full-time opportunities.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Button 
                    size="lg" 
                    className="rounded-full text-lg h-16 px-10 bg-white text-neutral-950 hover:bg-neutral-200"
                    onClick={() => setIsModalOpen(true)}
                 >
                     Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                 </Button>
                  <a href="mailto:iampandit193728@gmail.com" className="text-neutral-400 hover:text-white transition-colors text-lg font-medium">
                      iampandit193728@gmail.com
                  </a>
             </div>
          </motion.div>
      </div>
    </section>

    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export function Footer() {
    return (
        <footer className="py-8 bg-neutral-950 border-t border-neutral-800 text-neutral-500">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-sm">© 2024 Portfolio. All rights reserved.</span>
                <div className="flex gap-6 z-50">
                     <Link href="https://x.com/Dharmendra62042" target="_blank" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                     <Link href="https://github.com/dharmendrapandit1" target="_blank" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
                     <Link href="https://www.linkedin.com/in/dp-bth/" target="_blank" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                </div>
            </div>
        </footer>
    )
}
