import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Play } from 'lucide-react';
import aiMlHero from '@/assets/ai-ml-hero.jpg';
import FloatingTechStack from './FloatingTechStack';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={aiMlHero} 
          alt="AI/ML Technology Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      {/* Floating Tech Stack */}
      <FloatingTechStack />

      {/* Main Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6 animate-pulse-glow">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium">Available for Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Balaji</span>
            <br />
            <span className="text-3xl md:text-5xl text-muted-foreground">
              Building the Future with
            </span>
            <br />
            <span className="gradient-text animate-pulse">AI & Cloud</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            GATE Qualified | AWS Cloud Enthusiast | Building AI Agents | 
            Machine Learning | Data Science | Web Development
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['AI/ML', 'AWS Cloud', 'Python', 'React', 'Data Science', 'AI Agents'].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 glass-card text-sm font-medium animate-floating"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="hero-btn group">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" className="glass-card border-white/20 hover:bg-white/10">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button variant="ghost" size="lg" className="group">
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
            {[
              { label: 'Projects', value: '15+' },
              { label: 'Technologies', value: '20+' },
              { label: 'LinkedIn', value: '500+' },
              { label: 'Experience', value: '2+ Years' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-card p-4 text-center animate-floating"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="gradient-text text-2xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;