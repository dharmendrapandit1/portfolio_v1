"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, Calendar, MessageSquare, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = React.useState(false);
  const email = "iampandit193728@gmail.com";
  const phone = "6204298947";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-card border border-border/40 shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 pb-2 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Let's work together
                </h2>
                <p className="text-muted-foreground mt-1">
                  Choose your preferred way to connect.
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full hover:bg-muted/50 -mr-2 -mt-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content Grid */}
            <div className="p-6 pt-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
              
              {/* Schedule Call */}
              <a 
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-4 rounded-xl border border-border/40 bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20 cursor-pointer text-left"
              >
                <div className="p-2 w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">Schedule a Call</h3>
                <p className="text-xs text-muted-foreground mt-1">Book via Calendly</p>
              </a>

              {/* Text/Message */}
               <a 
                href={`https://wa.me/91${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-4 rounded-xl border border-border/40 bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20 cursor-pointer text-left"
              >
                <div className="p-2 w-10 h-10 rounded-lg bg-green-500/10 text-green-500 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">WhatsApp Me</h3>
                <p className="text-xs text-muted-foreground mt-1">Direct chat on WhatsApp</p>
              </a>

              {/* Email Section (Full Width) */}
              <div className="sm:col-span-2 group flex flex-col p-4 rounded-xl border border-border/40 bg-muted/20 hover:bg-muted/40 transition-colors">
                <div className="flex items-center gap-3">
                    <div className="p-2 w-10 h-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                         <a href={`mailto:${email}`} className="font-semibold text-foreground hover:underline decoration-primary">Email Me</a>
                        <p className="text-xs text-muted-foreground">For project inquiries</p>
                    </div>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="gap-2 text-xs"
                        onClick={copyEmail}
                    >
                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        {copied ? "Copied" : "Copy"}
                    </Button>
                </div>
                <div className="mt-3 p-2 bg-background/50 rounded-lg border border-border/20 text-sm font-mono text-muted-foreground break-all select-all text-center">
                    {email}
                </div>
              </div>

               {/* Phone Section (Full Width) */}
               <div className="sm:col-span-2 group flex items-center gap-4 p-4 rounded-xl border border-border/40 bg-muted/20 hover:bg-muted/40 transition-colors">
                    <div className="p-2 w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-foreground">Call Directly</h3>
                        <p className="text-xs text-muted-foreground">Mon-Fri, 9am - 6pm</p>
                    </div>
                     <a href={`tel:${phone}`} className="text-sm font-bold hover:underline decoration-primary">
                        +91 {phone}
                     </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
