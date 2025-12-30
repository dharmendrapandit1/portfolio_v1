"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card-3d";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Edutech Platform",
    description: "Complete education management system with video courses, notes, counseling, and role-based access for admins and students.",
    tags: ["Next.js", "React", "Node.js", "Video Streaming"],
    links: { demo: "https://univsvh.in/", github: "https://github.com/dharmendrapandit1/univ_svh_api_v1.git" },
    images: ["/p11.png", "/p12.png"], // Added support for multiple images
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Campus Post",
    description: "A community blog platform for students. Features secure authentication, post management, and interactive discussions.",
    tags: ["Next.js", "Auth", "PostgreSQL", "Prisma"],
    links: { demo: "https://campuspost.onrender.com/", github: "https://github.com/dharmendrapandit1/campusPost.git" },
    images: ["/p22.jpeg", "/p21.jpeg"],
    color: "from-violet-600 to-purple-600",
  },
  {
    title: "Syncora AI",
    description: "Advanced AI suite leveraging OpenAI. Features text generation, image analysis, and voice-to-text capabilities.",
    tags: ["AI", "OpenAI", "Speech-to-Text", "Next.js"],
    links: { demo: "https://syncoraai2.netlify.app/", github: "#" },
    images: ["/p31.png", "/p32.png"],
    color: "from-emerald-600 to-teal-600",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }, 2000); // Change image every 2 seconds on hover
    } else {
        setCurrentImage(0); // Reset to first image when not hovering
    }
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <div className="w-full max-w-lg" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <CardContainer className="inter-var">
        <CardBody className="bg-neutral-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            {project.title}
            </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
                <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br ${project.color} p-1 flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-neutral-950/20 z-10" />
                    
                    {/* Image Carousel */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 z-0"
                        >
                             {/* Blurred Background for ambiance */}
                             <div className="absolute inset-0 z-0">
                                <Image 
                                    src={project.images[currentImage]} 
                                    alt="background"
                                    fill
                                    className="object-cover blur-2xl opacity-40 scale-110" 
                                />
                             </div>
                             
                             {/* Main Image */}
                             <Image 
                                src={project.images[currentImage]} 
                                alt={`${project.title} preview ${currentImage + 1}`}
                                fill
                                className="object-contain z-10"
                             />
                        </motion.div>
                    </AnimatePresence>

                    <span className="font-bold text-2xl text-neutral-100 uppercase tracking-widest z-20 drop-shadow-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                        View
                    </span>
                </div>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
            <CardItem
                translateZ={20}
                as={Link}
                href={project.links.demo}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
                Live Demo →
            </CardItem>
            <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
                <Link href={project.links.github} target="_blank">
                        GitHub
                </Link>
            </CardItem>
            </div>
        </CardBody>
        </CardContainer>
    </div>
  );
};

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Featured Work
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            A selection of projects that showcase my passion for building exceptional digital experiences.
            Hover over the cards to see the 3D effect and image slideshow.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
