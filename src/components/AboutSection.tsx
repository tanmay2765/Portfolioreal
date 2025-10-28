import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Brain, TrendingUp, Users } from 'lucide-react';

const educationData = [
  { year: '2023 - Present', institution: 'Lovely Professional University, Punjab', degree: 'B.Tech Computer Science & Engineering' },
  { year: '2021 - 2022', institution: 'JNV Kangra, HP', degree: '12th Grade' },
  { year: '2019 - 2020', institution: 'JNV Kangra, HP', degree: '10th Grade' },
];

const traits = [
  { icon: Brain, label: 'Problem Solving', color: 'neon-cyan' },
  { icon: TrendingUp, label: 'Continuous Learning', color: 'neon-purple' },
  { icon: Users, label: 'Teamwork', color: 'neon-magenta' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            About <span className="text-primary neon-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            I'm a passionate developer and AI enthusiast dedicated to creating innovative solutions 
            that merge cutting-edge technology with intuitive user experiences. My journey in tech 
            is driven by curiosity and a constant desire to learn and grow.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h3>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass p-6 rounded-2xl glow-card"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-primary font-semibold text-lg min-w-[140px]">
                    {edu.year}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Traits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Core Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="glass p-8 rounded-2xl glow-card text-center group"
              >
                <trait.icon 
                  className={`w-16 h-16 mx-auto mb-4 text-${trait.color} group-hover:scale-110 transition-transform`} 
                />
                <h4 className="text-xl font-bold">{trait.label}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-float opacity-50" />
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-neon-magenta rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-neon-purple rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />
    </section>
  );
};
