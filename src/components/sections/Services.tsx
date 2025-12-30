"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Rocket, ShieldCheck, Zap } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const services = [
  {
    title: "Web Development",
    description: "Building fast, SEO-friendly, and scalable web applications using Next.js and React.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description: "Creating native-like mobile experiences with React Native and Expo.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces that drive engagement.",
    icon: Code2,
  },
  {
    title: "Performance",
    description: "Optimizing applications for speed, accessibility, and search engine ranking.",
    icon: Rocket,
  },
   {
    title: "Security Audit",
    description: "Ensuring your applications are secure and compliant with best practices.",
    icon: ShieldCheck,
  },
   {
    title: "Cloud Solutions",
    description: "Deploying and managing scalable serverless infrastructure on AWS/Vercel.",
    icon: Zap,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Services
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            I help brands and startups build digital products that scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <CardSpotlight className="h-full bg-neutral-900 border-neutral-800 p-8 hover:bg-neutral-800/50 transition-colors group">
                  <div className="relative z-10 h-full flex flex-col items-start pr-4">
                     <div className="p-3 w-fit rounded-lg bg-neutral-800 text-neutral-200 mb-4 group-hover:text-white group-hover:bg-neutral-700 transition-colors">
                        <service.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-100 mb-2">{service.title}</h3>
                      <p className="text-neutral-400 leading-relaxed text-sm">
                        {service.description}
                      </p>
                  </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
