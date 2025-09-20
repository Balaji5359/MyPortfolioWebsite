import { Button } from '@/components/ui/button';
import { ExternalLink, Github, PlayCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Agent Builder Platform',
      description: 'Comprehensive platform for building and deploying AI agents with natural language processing capabilities. Features include agent training, deployment, and monitoring.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'AWS'],
      category: 'AI/ML',
      featured: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud-Native ML Pipeline',
      description: 'Scalable machine learning pipeline deployed on AWS with automated model training, validation, and deployment using MLOps best practices.',
      tech: ['AWS SageMaker', 'Lambda', 'S3', 'Python', 'Docker'],
      category: 'Cloud Computing',
      featured: true,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Computer Vision AR App',
      description: 'Augmented reality application using computer vision for real-time object detection and 3D overlay rendering on mobile devices.',
      tech: ['OpenCV', 'ARCore', 'TensorFlow Lite', 'Android', 'Kotlin'],
      category: 'AR/Computer Vision',
      featured: false,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Data Science Dashboard',
      description: 'Interactive dashboard for data visualization and analysis with real-time data processing and machine learning insights.',
      tech: ['React', 'D3.js', 'Python', 'Pandas', 'FastAPI'],
      category: 'Data Science',
      featured: false,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Microservices E-commerce',
      description: 'Full-stack e-commerce platform built with microservices architecture, featuring payment integration and real-time inventory management.',
      tech: ['Node.js', 'React', 'MongoDB', 'Docker', 'Kubernetes'],
      category: 'Web Development',
      featured: false,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'IoT Smart Home System',
      description: 'Smart home automation system with IoT sensors, mobile app control, and AI-powered energy optimization.',
      tech: ['Arduino', 'React Native', 'Firebase', 'Python', 'MQTT'],
      category: 'IoT',
      featured: false,
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const categories = ['All', 'AI/ML', 'Cloud Computing', 'Web Development', 'Data Science', 'AR/Computer Vision', 'IoT'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions across AI, cloud computing, and emerging technologies. 
            Each project demonstrates practical application of cutting-edge technologies.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button 
                key={category}
                variant="outline" 
                className="glass-card border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={project.title}
              className="tech-card group relative overflow-hidden animate-floating"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              {/* Featured badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium text-primary">Featured</span>
              </div>

              <div className="p-8">
                {/* Category */}
                <div className="text-sm text-primary font-medium mb-3">{project.category}</div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex gap-3">
                  <Button size="sm" className="hero-btn">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="glass-card border-white/20">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Video
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div 
              key={project.title}
              className="tech-card group animate-floating"
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              {/* Gradient line */}
              <div className={`w-full h-1 bg-gradient-to-r ${project.gradient} mb-6`}></div>
              
              {/* Category */}
              <div className="text-sm text-primary font-medium mb-3">{project.category}</div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs text-muted-foreground">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
              
              {/* Actions */}
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 text-xs glass-card border-white/20">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Demo
                </Button>
                <Button size="sm" variant="ghost" className="flex-1 text-xs">
                  <Github className="mr-1 h-3 w-3" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="hero-btn">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
