"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Github } from "lucide-react";
import DotPattern from "@/components/ui/dot-pattern";
import { BGPattern } from "@/components/ui/bg-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMemo, useRef, useState, useEffect } from "react";

export default function HeroSection02() {
  const containerRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // Generate particle positions once to avoid hydration mismatch
  const particles = useMemo(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
    })), 
  []);

  return (
    <motion.section
      ref={containerRef}
      style={isClient ? { scale, rotate, opacity } : undefined}
      className="relative w-full min-h-[100vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-gradient-to-br from-background to-muted/30"
    >
      {/* Light mode pattern */}
      <DotPattern 
        className={cn(
          "dark:hidden [mask-image:radial-gradient(40vw_circle_at_center,white,transparent)]",
        )} 
        suppressHydrationWarning
      />
      
      {/* Dark mode pattern */}
      <BGPattern 
        variant="grid" 
        mask="fade-edges" 
        className="hidden dark:block" 
        fill="rgba(255, 255, 255, 0.1)"
        size={32}
        suppressHydrationWarning
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/30 blur-[120px] rounded-full z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.3 }}
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-secondary/20 blur-[160px] rounded-full z-0"
      />

      {isClient && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 0.2, y: [0, -20, 0] }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
              className="absolute w-1 h-1 bg-muted-foreground/20 rounded-full"
              style={{
                top: `${particle.top}%`,
                left: `${particle.left}%`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="text-center max-w-7xl space-y-6 flex flex-col items-center px-4">
        <button
          className="group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-3xl border-0 bg-[length:200%] px-8 py-2 font-medium text-black dark:text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent]
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
            before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-[rainbow_3s_linear_infinite] before:bg-[linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5))] before:bg-[length:200%] before:[filter:blur(12px)]
            bg-white dark:bg-black"
          style={{
            ['--color-1' as any]: 'hsl(210, 100%, 60%)',
            ['--color-2' as any]: 'hsl(280, 80%, 65%)',
            ['--color-3' as any]: 'hsl(330, 100%, 65%)',
            ['--color-4' as any]: 'hsl(20, 100%, 60%)',
            ['--color-5' as any]: 'hsl(140, 70%, 50%)',
          }}
        >
          <Link
            href="https://github.com/Taspol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border px-3 py-2 rounded-2xl items-center text-black dark:text-white font-normal"
          >
            <Github className="w-4 h-4 mr-2" />
            View on GitHub
          </Link>
        </button>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl font-bold leading-tight tracking-tight whitespace-nowrap"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-500">Taspol Sawasdee</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-muted-foreground max-w-3xl"
        >
          Computer Engineering Student specializing in Data Science, AI/ML, Robotics and IoT.
          Building innovative solutions from hardware to intelligent software systems.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center gap-6 flex-wrap items-center"
        >
          <InteractiveHoverButton
            text="View Work"
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-48 h-12 bg-blue-600 border-blue-600 text-white [&>div:last-child]:bg-blue-700"
          />
          <InteractiveHoverButton
            text="View CV"
            onClick={() => window.location.href = '/cv'}
            className="w-48 h-12 bg-black border-black text-white [&>div:last-child]:bg-zinc-800"
          />
          <InteractiveHoverButton
            text="Contact Me"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-48 h-12 bg-white border-zinc-300 text-zinc-900 [&>div:last-child]:bg-zinc-100 [&>div:nth-child(2)]:text-zinc-900"
          />
        </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
