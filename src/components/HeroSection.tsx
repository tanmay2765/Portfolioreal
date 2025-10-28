import { motion } from 'framer-motion';
import { Hero3D } from './Hero3D';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Hero3D />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
              src={profileImage}
              alt="Tanmay Dhiman"
              className="w-40 h-40 rounded-full border-4 border-primary shadow-[0_0_50px_rgba(0,212,255,0.5)] animate-float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan via-neon-purple to-neon-magenta opacity-20 animate-pulse-glow" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4 neon-text"
        >
          Hi, I'm <span className="text-primary">Tanmay Dhiman</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl mb-6 text-secondary"
        >
          AI Enthusiast | Problem Solver
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto"
        >
          I build scalable web solutions blending AI and modern UX
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="interactive text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-background font-semibold rounded-full shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:shadow-[0_0_50px_rgba(0,212,255,0.8)] transition-all"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="interactive text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold rounded-full transition-all"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
};
