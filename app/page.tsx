'use client'

import Navbar from '../components/Navbar'
import Section from '../components/Section'
import BlobScene from '../components/three/Blob'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ExternalLink,
  Code,
  Server,
  Database,
  Shield,
  GitBranch,
  Cloud,
  Cpu,
  MapPin,
  Calendar,
  Briefcase,
  User,
  Sparkles,
  Heart,
  Zap,
  ArrowRight,
  CheckCircle,
  Phone,
  MessageCircle,
  FileText,
  Award,
  Clock,
  Infinity as InfinityIcon,
} from 'lucide-react'

export default function HomePage() {
  const constraintsRef = useRef(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <main className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="section container px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 md:pt-36 min-h-screen flex items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-sm">Available for opportunities</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
                Dharmendra
              </span>
              <br />
              <motion.span
                animate={{ backgroundPosition: ['0%', '100%'] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="bg-gradient-to-r from-white via-brand-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Software Developer
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed"
            >
              I craft{' '}
              <span className="text-brand-300 font-semibold">
                fast, delightful web experiences
              </span>{' '}
              with React, Next.js, and modern tooling. This portfolio showcases
              my passion for 3D, motion, and elegant design.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
              ref={constraintsRef}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#projects"
                  className="btn-primary group relative overflow-hidden flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="relative z-10">See Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-500 to-purple-600"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/resume/Resume.pdf"
                  download
                  className="btn-secondary group flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-12 flex gap-6">
              {[
                {
                  name: 'GitHub',
                  href: 'https://github.com/dp62042',
                  icon: Github,
                },
                {
                  name: 'LinkedIn',
                  href: 'https://linkedin.com/in/dharmendra-pandit',
                  icon: Linkedin,
                },
                {
                  name: 'Twitter',
                  href: 'https://twitter.com/dp62042',
                  icon: Twitter,
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={floatingAnimation}
                  transition={{ delay: index * 0.2 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT (3D) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]"
          >
            {/* Animated gradient background */}
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle at 30% 50%, rgba(56, 189, 248, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 50%, rgba(56, 189, 248, 0.3) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -inset-8 rounded-3xl blur-3xl"
            />

            <div className="relative glass-card w-full h-full flex items-center justify-center rounded-3xl border border-white/20 backdrop-blur-xl">
              <BlobScene />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" className="px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {/* Avatar */}
          <motion.div whileHover={{ y: -10 }} className="md:col-span-1">
            <div className="glass-card p-8 flex flex-col items-center text-center backdrop-blur-xl border border-white/20">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src="/avatar.png"
                  width={140}
                  height={140}
                  alt="Avatar"
                  className="rounded-full ring-4 ring-brand-400/30 shadow-2xl"
                />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-2xl font-bold bg-gradient-to-r from-white to-brand-300 bg-clip-text text-transparent"
              >
                Dharmendra Pandit
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-3 flex items-center gap-2 text-white/70"
              >
                <MapPin className="w-4 h-4" />
                <span>JECRC University</span>
              </motion.div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="glass-card p-8 backdrop-blur-xl border border-white/20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-3"
              >
                <User className="w-8 h-8 text-brand-400" />
                About <span className="text-brand-400">Me</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, staggerChildren: 0.1 }}
                className="space-y-4 text-white/80 leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  I'm a{' '}
                  <span className="text-brand-300 font-semibold">
                    MERN stack developer
                  </span>{' '}
                  with a passion for creating clean, performant, and
                  user-friendly applications. My expertise spans React, Next.js,
                  Node.js, and modern web technologies.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  I specialize in building applications that not only function
                  seamlessly but also provide engaging experiences through
                  smooth animations and intuitive interfaces.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  When I'm not coding, you'll find me exploring new web series
                  or traveling to discover different cultures - both of which
                  inspire fresh perspectives in my work.
                </motion.p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { number: '10+', label: 'Projects', icon: Award },
                  { number: '3', label: 'Internships', icon: Briefcase },
                  { number: '2', label: 'Years', icon: Clock },
                  { number: '∞', label: 'Passion', icon: Heart },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <stat.icon className="w-6 h-6 text-brand-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-brand-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" className="px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3"
            >
              <Zap className="w-8 h-8 text-brand-400" />
              My <span className="text-brand-400">Skills</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Technologies and tools I use to bring ideas to life
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                category: 'Frontend',
                items: [
                  'React.js',
                  'Next.js',
                  'React Native',
                  'JavaScript',
                  'TypeScript',
                  'Tailwind CSS',
                  'Bootstrap',
                ],
                icon: Code,
                color: 'from-blue-500 to-cyan-500',
              },
              {
                category: 'Backend',
                items: ['Node.js', 'Express.js', 'RESTful APIs'],
                icon: Server,
                color: 'from-green-500 to-emerald-500',
              },
              {
                category: 'Database',
                items: [
                  'MongoDB (Mongoose ODM)',
                  'Supabase',
                  'Prisma',
                  'MySQL',
                ],
                icon: Database,
                color: 'from-purple-500 to-pink-500',
              },
              {
                category: 'Authentication',
                items: ['Bcrypt.js', 'JWT (JSON Web Token)', 'Passport'],
                icon: Shield,
                color: 'from-orange-500 to-red-500',
              },
              {
                category: 'Version Control',
                items: ['Git', 'GitHub'],
                icon: GitBranch,
                color: 'from-gray-500 to-blue-500',
              },
              {
                category: 'Hosting & Deployment',
                items: [
                  'Vercel',
                  'AWS (EC2, S3)',
                  'Render',
                  'Amplify',
                  'Netlify',
                  'Hostinger',
                ],
                icon: Cloud,
                color: 'from-yellow-500 to-orange-500',
              },
              {
                category: 'Programming',
                items: [
                  'Java(core + Adv)',
                  'Python',
                  'DSA (Algorithms & Data Structures)',
                ],
                icon: Cpu,
                color: 'from-indigo-500 to-purple-500',
              },
            ].map((group, i) => (
              <motion.div
                key={i}
                variants={cardHoverVariants}
                initial="initial"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/20 backdrop-blur-xl group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${group.color} flex items-center justify-center text-white`}
                  >
                    <group.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {group.items.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + idx * 0.05 }}
                      whileHover={{ x: 5, color: '#22d3ee' }}
                      className="flex items-center gap-2 text-white/80 transition-colors duration-200"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-400" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" className="px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3"
            >
              <Briefcase className="w-8 h-8 text-brand-400" />
              Work <span className="text-brand-400">Experience</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              My journey through the tech industry
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-400/50 to-purple-400/50 transform -translate-x-1/2"></div>

            {[
              {
                role: 'Frontend Developer Intern',
                company: 'Ease My Campus',
                period: '2023 - 2024',
                desc: 'Contributed to building a student-centric platform by developing responsive frontend components with React and Tailwind, enhancing collaboration and career-readiness features.',
                icon: Code,
                type: 'left',
              },
              {
                role: 'Full-Stack Developer Intern',
                company: 'Acadsy',
                period: 'Mar,2024 - Sept,2024',
                desc: 'Delivered full-stack solutions using React, Next.js, Node.js, and MongoDB; implemented APIs, optimized backend performance, and supported scalable deployment for startup projects.',
                icon: Server,
                type: 'right',
              },
              {
                role: 'Technical Head Intern',
                company: 'Hostro Ventures private limited',
                period: 'July,2025 - Oct, 2025',
                desc: 'Led technical initiatives by managing UI/UX improvements, mentoring junior developers, and integrating optimized web components for real-world applications',
                icon: User,
                type: 'left',
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: exp.type === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  exp.type === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-brand-400 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    exp.type === 'left' ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-6 rounded-2xl border border-white/20 backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-500 to-purple-500 flex items-center justify-center text-white">
                        <exp.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-brand-300 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <p className="text-white/70 leading-relaxed">{exp.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" className="px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3"
            >
              <Code className="w-8 h-8 text-brand-400" />
              Featured <span className="text-brand-400">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Some of my recent work that I'm proud of
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: 'UniSHV',
                desc: 'Educational platform built with Node.js, Express, JWT, bcrypt.js, and express-limiter for secure authentication. Features ImageKit integration and EJS templating.',
                tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
                live: 'https://univsvh.in/',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'E-commerce API',
                desc: 'Complete e-commerce API with secure authentication, image management, and rate limiting. Built with modern backend practices.',
                tech: ['Node.js', 'Express', 'JWT', 'ImageKit'],
                github: 'https://github.com/dp62042/e-commerce_api_latest.git',
                live: 'https://e-commerce-api-latest-aaj2.onrender.com/',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                title: 'SparkAI',
                desc: 'AI-powered text generation platform with beautiful UI, user authentication, and smooth animations for an engaging experience.',
                tech: ['React.js', 'Tailwind', 'Framer Motion'],
                github: 'https://github.com/dp62042/sparkAI.git',
                live: 'https://campustalk.vercel.app',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Campus Post',
                desc: 'Community blog platform for knowledge sharing across domains with modern authentication and cloud integration.',
                tech: ['Node.js', 'Express', 'MongoDB', 'Cloudinary'],
                github: 'https://github.com/dp62042/campusPost.git',
                live: 'https://campuspost.onrender.com/posts',
                gradient: 'from-orange-500 to-red-500',
              },
              {
                title: 'Hostro',
                desc: 'PG & Co-living platform with complete booking system, payments, and modern UI. Full-stack application with real-time features.',
                tech: ['Next.js', 'React', 'MongoDB', 'Tailwind'],
                github: 'https://github.com/dp62042/hostro_v2.git',
                live: 'https://hostro.vercel.app',
                gradient: 'from-indigo-500 to-purple-500',
              },
              {
                title: 'Kids Store',
                desc: 'Full-stack e-commerce platform for kids products with user authentication, persistent cart, and secure shopping experience.',
                tech: ['React', 'Express', 'MongoDB', 'JWT'],
                github: 'https://github.com/dp62042/kids-store',
                live: 'https://toystorev1.netlify.app/login',
                gradient: 'from-yellow-500 to-orange-500',
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={cardHoverVariants}
                initial="initial"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                {/* Glass card */}
                <div className="glass-card p-6 h-full flex flex-col border border-white/20 backdrop-blur-xl">
                  {/* Project header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 mb-4 flex-grow leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                        <ArrowRight className="w-3 h-3" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Let's build something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
                  amazing
                </span>{' '}
                together
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas,
                or just having a friendly chat about tech.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email me at</p>
                  <p className="text-white font-semibold">
                    dharmendra193728@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Let's chat on</p>
                  <p className="text-white font-semibold">LinkedIn / Twitter</p>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dharmendra193728@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="btn-primary group flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Open Gmail
              </motion.a>
              <motion.a
                href="/resume/Resume.pdf"
                download
                className="btn-secondary group flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget as HTMLFormElement
                const data = new FormData(form)
                const name = (data.get('name') as string) || ''
                const email = (data.get('email') as string) || ''
                const message = (data.get('message') as string) || ''
                const to = 'dharmendra193728@gmail.com'
                const su = encodeURIComponent(`Inquiry from ${name}`)
                const body = encodeURIComponent(
                  `From: ${name} <${email}>\n\n${message}`
                )
                const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`
                window.open(url, '_blank')
              }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  name="name"
                  placeholder="Your full name"
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none transition-all duration-300 focus:bg-white/15 focus:border-brand-400/50"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="your.email@example.com"
                  name="email"
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none transition-all duration-300 focus:bg-white/15 focus:border-brand-400/50"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Tell me about your project or just say hi! 👋"
                  rows={5}
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none transition-all duration-300 focus:bg-white/15 focus:border-brand-400/50 resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="btn-primary w-full group relative overflow-hidden flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                <span className="relative z-10">Send Message via Gmail</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-500 to-purple-600"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </Section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container px-4 sm:px-6 md:px-12 py-12 text-center text-white/60"
      >
        <div className="glass-card p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
          <motion.p
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 text-red-400" />©{' '}
            {new Date().getFullYear()} Dharmendra Pandit • Crafted with passion
            using Next.js, Tailwind, Framer Motion, and R3F
          </motion.p>
          <motion.div
            className="mt-4 flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[Zap, Code, Sparkles, Server].map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                className="text-brand-400"
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.footer>
    </main>
  )
}
