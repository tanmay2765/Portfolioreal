import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import mediconnectImage from '@/assets/mediconnect.jpg';

const projects = [
  {
    title: 'Mediconnect',
    description: 'A full-stack medicine management & reminder web app with tracking, expiry alerts, and interactive dashboard.',
    image: mediconnectImage,
    tags: ['React', 'Next.js', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/mediconnect',
    live: 'https://mediconnect.vercel.app',
    featured: true,
  },
  {
    title: 'Railway Station Congestion Predictor',
    description: 'ML-powered predictor for railway station congestion with R² score of 0.93. Helps optimize travel planning.',
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
    year: '2025',
  },
  {
    title: 'AI Speed Reading Coach',
    description: 'Interactive chatbot with TTS and NLP capabilities to improve reading speed and comprehension.',
    tags: ['Python', 'NLP', 'TTS', 'Flask'],
    year: '2025',
  },
  {
    title: 'Food Ordering Website',
    description: 'Modern responsive food ordering platform with intuitive UI and seamless user experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Fingerprint Authentication',
    description: 'Secure authentication system using fingerprint sensor integration for enhanced security.',
    tags: ['Android', 'Java', 'Biometric API'],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-primary neon-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning web development, AI/ML, and mobile applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass rounded-2xl overflow-hidden glow-card group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {project.image && (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.year && (
                    <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {(project.github || project.live) && (
                  <div className="flex gap-4">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="lg"
                        className="interactive border-primary text-primary hover:bg-primary hover:text-background"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        size="lg"
                        className="interactive bg-primary hover:bg-primary/90 text-background"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-neon-cyan rounded-full animate-float opacity-50" />
      <div className="absolute bottom-1/4 right-20 w-2 h-2 bg-neon-magenta rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }} />
    </section>
  );
};
