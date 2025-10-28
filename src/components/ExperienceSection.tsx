import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Brain, Lightbulb } from 'lucide-react';

const experiences = [
  {
    icon: Brain,
    title: 'Machine Learning Projects',
    description: 'Developed ML models for various applications including railway congestion prediction and data analysis.',
    achievements: [
      'Achieved R² score of 0.93 in congestion prediction',
      'Implemented advanced data preprocessing pipelines',
      'Created interactive visualizations for insights',
    ],
    color: 'neon-cyan',
  },
  {
    icon: Lightbulb,
    title: 'Prompt Engineering',
    description: 'Specialized in crafting effective prompts for AI models and optimizing LLM interactions.',
    achievements: [
      'Developed AI chatbot with NLP capabilities',
      'Optimized prompt structures for better responses',
      'Integrated TTS for enhanced user experience',
    ],
    color: 'neon-purple',
  },
  {
    icon: Briefcase,
    title: 'Full-Stack Development',
    description: 'Building modern web applications with focus on user experience and scalability.',
    achievements: [
      'Created Mediconnect medicine management platform',
      'Implemented responsive designs with Tailwind CSS',
      'Integrated Supabase backend for data persistence',
    ],
    color: 'neon-magenta',
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <Briefcase className="inline-block w-12 h-12 mr-4 text-primary" />
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical experience in AI, ML, and modern web development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl glow-card group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-${exp.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <exp.icon className={`w-8 h-8 text-${exp.color}`} />
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 + achIndex * 0.1 }}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <span className={`w-2 h-2 mt-2 rounded-full bg-${exp.color} flex-shrink-0`} />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
    </section>
  );
};
