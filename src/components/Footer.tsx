import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground">
            © {currentYear} Tanmay Dhiman. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> by Tanmay
          </div>
        </div>

        {/* Floating particles */}
        <div className="mt-4 flex justify-center gap-4">
          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse-glow" />
          <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 bg-neon-magenta rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </footer>
  );
};
