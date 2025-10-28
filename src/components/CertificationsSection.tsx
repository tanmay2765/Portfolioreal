import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code, Network, Monitor, Trophy } from 'lucide-react';

const certifications = [
  {
    icon: Code,
    title: 'C, C++, DSA',
    issuer: 'Neocolab',
    color: 'neon-cyan',
  },
  {
    icon: Network,
    title: 'The Bits & Bytes of Computer Networking',
    issuer: 'Google',
    date: 'Sep 2024',
    color: 'neon-purple',
  },
  {
    icon: Monitor,
    title: 'Introduction to Hardware and OS',
    issuer: 'IBM',
    date: 'Oct 2024',
    color: 'neon-magenta',
  },
  {
    icon: Trophy,
    title: 'Hackathon Participation',
    date: 'Sep 2023',
    color: 'neon-yellow',
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <Award className="inline-block w-12 h-12 mr-4 text-primary" />
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl glow-card group relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${cert.color}/10 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500`} />
              
              <cert.icon
                className={`w-12 h-12 mb-4 text-${cert.color} group-hover:scale-110 group-hover:rotate-12 transition-all`}
              />
              
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {cert.title}
              </h3>
              
              {cert.issuer && (
                <p className="text-lg text-muted-foreground mb-2">
                  {cert.issuer}
                </p>
              )}
              
              {cert.date && (
                <p className={`text-${cert.color} font-semibold`}>
                  {cert.date}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />
    </section>
  );
};
