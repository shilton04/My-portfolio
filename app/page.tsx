"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBar } from "@/components/skill-bar";
import { ContactForm } from "@/components/contact-form";
import { AnimatedCounter } from "@/components/animated-counter";
import { AnimatedText } from "@/components/animated-text";
import { CursorFollower } from "@/components/cursor-follower";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectFilter } from "@/components/project-filter";
import { ScrollToTop } from "@/components/scroll-to-top";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="relative">
      <CursorFollower />
      <ScrollToTop />

      {/* Hero Section */}
      <section
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
              <Image
                src="/Images/projects/hbg.png"
                alt="Abstract background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                    <AnimatedText text="Iam Shilton Rodrigues" />
                  </h1>
                  <h5 className="text-lg md:text-xl text-white/90 mb-2 max-w-2xl mx-auto">
                    Frontend Developer & Desiginer
                  </h5>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Crafting engaging digital experiences through creative code,
                    thoughtful design, and smooth animations.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button asChild size="lg" className="group">
                    <Link href="#projects">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white  transition-colors hover:bg-white/10"
                  >
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center items-start p-1">
                <div className="w-1 h-2 bg-white rounded-full" />
              </div>
            </motion.div>
          </div>
          {/* <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-background bg-muted">
              <Image
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png?height=400&width=400"
                alt="Developer portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                About <span className="text-primary">Me</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I’m a front-end developer with a keen eye for design, dedicated
                to building visually stunning, functional, and accessible web
                applications. Blending creativity with technical expertise, I
                transform ideas into engaging digital experiences.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src="/Images/projects/coder.png?height=1000&width=800"
                alt="Portrait photo"
                fill
                className="object-cover"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With experience in both freelancing and corporate development,
                  I’ve worked on a diverse range of projects—from small business
                  websites to complex web applications. My approach blends
                  aesthetics with functionality, ensuring seamless user
                  experiences across all devices.
                  <br />
                  <br />I specialize in{" "}
                  <strong>Vue.js, JavaScript, Vuetify, and Bootstrap</strong>,
                  crafting dynamic and interactive web applications.
                  Additionally, I have experience with{" "}
                  <strong>React, TypeScript, Nuxt.js, MongoDB, Git</strong>, and
                  backend fundamentals.
                  <br />
                  <br />
                  Beyond coding, I stay engaged with the latest design trends,
                  contribute to open-source projects, and continuously explore
                  new technologies to enhance my craft.
                  <br />
                  <br />
                  <span className="font-semibold">
                    ✅ 1+ Years of Professional Experience
                  </span>{" "}
                  <br />
                  <span className="font-semibold">
                    ✅ Freelance & Corporate Development Background
                  </span>{" "}
                  <br />
                  <span className="font-semibold">
                    ✅ Specialized in Vue.js & Frontend Technologies
                  </span>
                </p>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm passionate about creating accessible, user-friendly
                  interfaces that provide seamless experiences across all
                  devices. When I'm not coding, you can find me exploring new
                  design trends, contributing to open-source projects, or
                  experimenting with new technologies.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter from={0} to={3} duration={2} />+
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter from={0} to={20} duration={2} />+
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Projects Completed
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter from={0} to={10} duration={2} />+
                  </h4>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter from={0} to={4} duration={2} />+
                  </h4>
                  <p className="text-sm text-muted-foreground">Awards Won</p>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://github.com/shilton04"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://www.linkedin.com/in/shilton-rodrigues/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="mailto:shiltonrodrigues04@gmail.com"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://drive.google.com/uc?export=download&id=1m4zFPa3m6kgP9qjjAsWzGFak7cSb7kZz"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download Resume"
                    >
                      <Download className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Work <span className="text-primary">Experience</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-muted-foreground mb-8 leading-relaxed">
                My professional journey in the tech industry, showcasing my
                roles and responsibilities at various companies.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline />
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Button asChild variant="outline" className="group">
                <Link
                  href="https://drive.google.com/uc?export=download&id=1m4zFPa3m6kgP9qjjAsWzGFak7cSb7kZz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Download Full Resume
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                My <span className="text-primary">Skills</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I've developed expertise in various technologies and design
                principles, allowing me to create comprehensive solutions for
                web projects.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              {skills.slice(0, 4).map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.1 * (index + 1)}
                />
              ))}
            </div>
            <div className="space-y-6">
              {skills.slice(4, 8).map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.1 * (index + 5)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Featured <span className="text-primary">Projects</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-muted-foreground mb-8 leading-relaxed">
                A selection of my recent work showcasing my skills in design,
                development, and animation.
              </p>
            </motion.div>

            {/* <ProjectFilter /> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageSrc={project.imageSrc}
                link={project.link}
                githubLink={project.githubLink}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Button asChild variant="outline" className="group">
                <Link href="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Client <span className="text-primary">Testimonials</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-muted-foreground mb-8 leading-relaxed">
                What clients and colleagues have to say about working with me.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-lg shadow-sm border"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 flex-grow">
                  "An exceptional developer who consistently delivers
                  high-quality work. Their attention to detail and creative
                  problem-solving skills made our project a success."
                </p>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    CEO, TechStart Inc.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-8 rounded-lg shadow-sm border"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 flex-grow">
                  "Working with this developer was a pleasure. They understood
                  our vision immediately and transformed it into a beautiful,
                  functional website that exceeded our expectations."
                </p>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">
                    Marketing Director, Innovate Solutions
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card p-8 rounded-lg shadow-sm border"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 flex-grow">
                  "Not only is their technical skill impressive, but their
                  communication and project management made the entire process
                  smooth and stress-free. I highly recommend their services."
                </p>
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-muted-foreground">
                    Founder, Design Collective
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Get in <span className="text-primary">Touch</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have a project in mind or want to discuss potential
                collaborations? I'd love to hear from you!
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">
                      shiltonrodrigues04@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-muted-foreground">
                      linkedin.com/in/shilton-rodrigues
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Github className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-muted-foreground">
                      github.com/shilton04
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="flex gap-4">
                <Button asChild className="group">
                  <Link href="mailto:shiltonrodrigues04@gmail.com">
                    Send Email
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href="https://drive.google.com/file/d/1m4zFPa3m6kgP9qjjAsWzGFak7cSb7kZz/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-sm border"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
