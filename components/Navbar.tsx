'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import {
  Menu,
  X,
  Download,
  Sparkles,
  Briefcase,
  Mail,
  Calendar,
} from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showHireModal, setShowHireModal] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'projects',
        'contact',
      ]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openHireModal = () => {
    setShowHireModal(true)
    setIsOpen(false)
  }

  const scheduleMeeting = () => {
    window.open('https://calendly.com/dharmendra193728/30min', '_blank')
    setShowHireModal(false)
  }

  const sendEmail = () => {
    window.open(
      'mailto:dharmendra193728@gmail.com?subject=Project%20Inquiry&body=Hi%20Dharmendra,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.',
      '_blank'
    )
    setShowHireModal(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          duration: 0.6,
        }}
        className={clsx(
          'fixed inset-x-0 top-0 z-50 mx-auto w-full transition-all duration-300',
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <Link
                href="#home"
                className="text-xl font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2"
                onClick={() => handleNavClick('#home')}
              >
                <Sparkles className="w-5 h-5" />
                Dharmendra
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={clsx(
                      'relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-brand-300',
                      activeSection === item.href.replace('#', '')
                        ? 'text-brand-400'
                        : 'text-white/80'
                    )}
                  >
                    {item.label}
                    {activeSection === item.href.replace('#', '') && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-400 to-purple-400 rounded-full"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/resume/Dharmendra_Pandit_Resume.pdf"
                    download
                    className="group relative flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium text-sm transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Resume</span>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={openHireModal}
                    className="group relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Hire Me</span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsOpen((prev) => !prev)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-black/90 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={clsx(
                          'block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 border border-transparent',
                          activeSection === item.href.replace('#', '')
                            ? 'bg-gradient-to-r from-brand-500/20 to-purple-500/20 text-brand-400 border-brand-400/30'
                            : 'text-white/80 hover:text-white hover:bg-white/5 hover:border-white/10'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Action Buttons */}
                  <div className="flex flex-col gap-3 pt-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.length * 0.1 }}
                    >
                      <a
                        href="/resume/Dharmendra_Pandit_Resume.pdf"
                        download
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white font-medium text-lg transition-all duration-300 hover:bg-white/20"
                      >
                        <Download className="w-5 h-5" />
                        <span>Download Resume</span>
                      </a>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navItems.length + 1) * 0.1 }}
                    >
                      <button
                        onClick={openHireModal}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 border border-green-400/30"
                      >
                        <Briefcase className="w-5 h-5" />
                        <span>Hire Me</span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hire Me Modal */}
      <AnimatePresence>
        {showHireModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowHireModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="glass-card rounded-2xl border border-white/20 backdrop-blur-xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Let's Work Together!
                </h3>
                <p className="text-white/70">
                  Ready to bring your ideas to life? Choose how you'd like to
                  start our conversation.
                </p>
              </div>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scheduleMeeting}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule a Call</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={sendEmail}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:bg-white/20"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowHireModal(false)}
                  className="w-full px-6 py-3 text-white/70 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-white/5"
                >
                  Maybe Later
                </motion.button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-white/50">
                  Typically respond within 2 hours
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
