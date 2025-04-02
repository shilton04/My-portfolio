"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "OnTrack Technologies Pvt Ltd",
      period: "2023 - Present",
      description:
        "Developing and optimizing interactive web applications using Vue.js, Vuetify, and Bootstrap. Enhancing UI/UX to create visually appealing and user-friendly interfaces. Collaborating with backend teams to integrate APIs efficiently and implementing performance optimizations for a seamless experience.",
      technologies: [
        "Vue.js",
        "Vuetify",
        "BootstrapVue",
        "JavaScript",
        "Git",
        "REST APIs",
      ],
    },
    {
      id: 2,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2021 - 2023",
      description:
        "Designed and built custom websites for businesses and startups. Developed interactive and accessible UI components, ensuring responsive designs. Integrated frontend with backend solutions using MongoDB and REST APIs.",
      technologies: [
        "Vue.js",
        "Nuxt.js",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "Git",
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>

          {/* Content */}
          <div
            className={`md:w-1/2 ${
              index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16"
            } pl-16 md:pl-0`}
          >
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2 justify-start">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Empty div for layout */}
          <div className="md:w-1/2" />
        </motion.div>
      ))}
    </div>
  );
}
