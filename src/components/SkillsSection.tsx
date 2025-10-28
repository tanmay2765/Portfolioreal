import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Smartphone, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming',
    skills: ['C', 'C++', 'Python', 'Java'],
    color: 'neon-cyan',
  },
  {
    icon: Database,
    title: 'ML & Data',
    skills: ['Machine Learning', 'Data Analysis', 'Jupyter Notebook'],
    color: 'neon-purple',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    skills: ['Android Studio', 'Jetpack Compose'],
    color: 'neon-magenta',
  },
  {
    icon: Wrench,
    title: 'Tools & Frameworks',
    skills: ['REST APIs', 'Flask', 'Git', 'GitHub', 'VS Code', 'Figma', 'Notion'],
    color: 'neon-yellow',
  },
  {
    icon: Lightbulb,
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Adaptability', 'Teamwork', 'Communication'],
    color: 'neon-cyan',
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Skills & <span className="text-primary neon-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass p-8 rounded-2xl glow-card group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <category.icon
                className={`w-12 h-12 mb-4 text-${category.color} group-hover:scale-110 transition-transform`}
              />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className={`px-4 py-2 bg-${category.color}/10 border border-${category.color}/30 rounded-full text-sm font-medium text-foreground hover:bg-${category.color}/20 transition-all cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
    </section>
  );
};
