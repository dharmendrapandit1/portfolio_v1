'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Copy,
  Check,
  ArrowUpRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = React.useState(false)
  const email = 'iampandit193728@gmail.com'
  const phone = '6204298947'

  const copyEmail = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(email)
    setCopied(true)
    toast.success('Email copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Wrapper for vertical centering + scrolling */}
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-2xl bg-neutral-900/90 border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden backdrop-blur-xl my-4 sm:my-8"
            >
              {/* Decorative gradients */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
              <div className="absolute -top-[200px] -right-[200px] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] opacity-20 pointer-events-none" />
              <div className="absolute -bottom-[200px] -left-[200px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] opacity-20 pointer-events-none" />

              {/* Header */}
              <div className="p-6 sm:p-8 pb-2 sm:pb-4 flex justify-between items-start relative z-10">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
                  >
                    Let's work together
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-neutral-400 mt-2 text-base sm:text-lg"
                  >
                    I'm available for freelance work and open to new
                    opportunities.
                  </motion.p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-full hover:bg-white/5 text-neutral-400 hover:text-white -mr-2 -mt-2 transition-colors duration-300 flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>

              {/* Content Grid */}
              <div className="p-5 sm:p-8 pt-2 sm:pt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 relative z-10">
                {/* Schedule Call */}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-white/10 cursor-pointer overflow-hidden"
                >
                  <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white/50" />
                  </div>
                  <div className="p-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ring-1 ring-blue-500/30">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Schedule a Call
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    Book a 15-min discovery call via Calendly
                  </p>
                </motion.a>

                {/* Text/Message */}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  href={`https://wa.me/91${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-white/10 cursor-pointer overflow-hidden"
                >
                  <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white/50" />
                  </div>
                  <div className="p-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 text-green-400 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ring-1 ring-green-500/30">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                    WhatsApp Me
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    Chat directly on WhatsApp for quick queries
                  </p>
                </motion.a>

                {/* Email Section (Full Width) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="sm:col-span-2 group flex flex-col p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 hover:border-white/10 relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 text-purple-400 flex items-center justify-center ring-1 ring-purple-500/30 flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <a
                        href={`mailto:${email}`}
                        className="text-base sm:text-lg font-semibold text-white hover:text-purple-400 transition-colors block truncate"
                      >
                        Email Me
                      </a>
                      <p className="text-xs sm:text-sm text-neutral-400 truncate">
                        For project details and formal inquiries
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 relative z-10">
                    <code className="flex-1 p-3 bg-black/40 rounded-lg border border-white/5 text-xs sm:text-sm font-mono text-neutral-300 truncate select-all text-center xs:text-left">
                      {email}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/5 hover:bg-white/10 text-white min-w-[90px] h-[42px] border border-white/5"
                      onClick={copyEmail}
                    >
                      {copied ? (
                        <Check className="w-4 h-4 mr-2 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 mr-2" />
                      )}
                      {copied ? 'Copied' : 'Copy'}
                    </Button>
                  </div>
                </motion.div>

                {/* Phone Section (Full Width) */}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  href={`tel:${phone}`}
                  className="sm:col-span-2 group flex flex-col xs:flex-row items-start xs:items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 hover:border-white/10 cursor-pointer"
                >
                  <div className="p-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 text-orange-400 flex items-center justify-center ring-1 ring-orange-500/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                      Call Directly
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400">
                      Mon-Fri, 9am - 6pm
                    </p>
                  </div>
                  <div className="flex items-center w-full xs:w-auto justify-between xs:justify-start">
                    <div className="text-base sm:text-lg font-bold text-white/80 group-hover:text-white transition-colors tracking-wide pr-2">
                      +91 {phone}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
