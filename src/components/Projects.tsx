import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, PlayCircle, Database } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState('Projects');

  // Example data for Hackathon and Startup Ideas
  const hackathonIdeas = [
    {
      title: 'AI Health Assistant',
      idea: 'AI-powered health assistant for remote diagnosis.',
      prototype: 'Prototype built with React and TensorFlow.js.',
      demo: 'https://demo.healthai.com',
      github: 'https://github.com/rrbalaji/ai-health-assistant',
      linkedin: 'https://linkedin.com/in/rrbalaji',
      image: '',
      video: '',
    },
    {
      title: 'Smart Campus',
      idea: 'IoT-based smart campus management.',
      prototype: 'Demo with sensors and dashboard.',
      demo: '',
      github: '',
      linkedin: '',
      image: '',
      video: '',
    },
    {
      title: 'GenAI Resume Builder',
      idea: 'Generative AI for resume creation.',
      prototype: 'Web app using OpenAI API.',
      demo: '',
      github: '',
      linkedin: '',
      image: '',
      video: '',
    },
  ];

  const startupIdeas = [
    {
      title: 'EduAI Platform',
      idea: 'AI-driven personalized learning platform.',
      plan: 'Business plan for scalable EdTech.',
      demo: '',
      github: '',
      linkedin: '',
      image: '',
      video: '',
    },
    {
      title: 'Smart Retail Analytics',
      idea: 'Retail analytics using computer vision.',
      plan: 'Startup plan for retail stores.',
      demo: '',
      github: '',
      linkedin: '',
      image: '',
      video: '',
    },
  ];
  const projects = [
    {
      title: "Plant Disease Classification using Environment Data",
      description: "Collected and used a Kaggle dataset with 1000+ images including environmental humidity, temperature, and soil moisture for plant disease prediction.",
      tech: ["AI", "ML", "Deep Learning"],
      category: "AI/ML",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Salary Analysis & Prediction for Data Science and AI Roles (2025 Trends)",
      description: "Developed a salary prediction model using a Kaggle dataset of data science professionals. Cleaned and preprocessed data and performed regression analysis.",
      tech: ["Data Science", "AI", "Regression"],
      category: "Data Science",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      demo: "#",
      github: "#"
    },
    {
      title: "AI Assistant Usage Analysis Modeling",
      description: "Explored how students at different education levels use AI assistants. Performed EDA to understand usage patterns across user categories.",
      tech: ["Data Analytics", "EDA", "AI Usage"],
      category: "Data Science",
      featured: false,
      gradient: "from-green-500 to-teal-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "Built a responsive portfolio website with React, Tailwind CSS, and Framer Motion. Implemented smooth animations and clean UI.",
      tech: ["React", "Tailwind", "Framer Motion"],
      category: "Web Development",
      featured: false,
      gradient: "from-orange-500 to-red-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Museum Bot - Online Tour Guide",
      description: "Developed a dynamic museum website using HTML, CSS, JS, and AWS S3. Integrated an AI-powered chatbot via AWS Bedrock.",
      tech: ["AI", "AWS", "Web"],
      category: "Web Development",
      featured: false,
      gradient: "from-indigo-500 to-purple-500",
      demo: "#",
      github: "#"
    },
    {
      title: "AI-Powered Student Guidance System",
      description: "Designed and developed a web-based application using an Agent for career exploration. Integrated JAM, personality, technical, and interest metrics via AI analysis.",
      tech: ["AI", "Career Guidance", "Agentic AI"],
      category: "AI/ML",
      featured: false,
      gradient: "from-yellow-500 to-orange-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Flight Data Analysis Project",
      description: "Designed a Power BI solution to analyze flight operations, delay patterns, and ticket bookings for improved decision-making.",
      tech: ["Power BI", "Data Analysis", "Visualization"],
      category: "Data Science",
      featured: false,
      gradient: "from-pink-500 to-purple-500",
      demo: "#",
      github: "#"
    }
  ];

  const categories = ['All', 'AI/ML', 'Cloud Computing', 'Web Development', 'Data Science', 'AR/Computer Vision', 'IoT'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Works</span>
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            {/* make buttons text color black and bg deep blue */}
            <Button className={activeTab === 'Projects' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'bg-red dark:bg-black-900'} onClick={() => setActiveTab('Projects')}>Projects</Button>
            <Button className={activeTab === 'Hackathon' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'bg-white dark:bg-gray-900'} onClick={() => setActiveTab('Hackathon')}>Hackathon Ideas</Button>
            <Button className={activeTab === 'Startup' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white' : 'bg-white dark:bg-gray-900'} onClick={() => setActiveTab('Startup')}>Startup Ideas</Button>
          </div>
        </div>

        {/* Projects Tab */}
        {activeTab === 'Projects' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {projects.filter(p => p.featured).map((project, index) => (
                <div 
                  key={project.title}
                  className="tech-card group relative overflow-hidden animate-floating bg-white"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-primary">Featured</span>
                  </div>
                  <div className="p-8">
                    <div className="text-sm text-primary font-medium mb-3">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-4 transition-all duration-300">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" className="hero-btn"><ExternalLink className="mr-2 h-4 w-4" />Live Demo</Button>
                      <Button variant="outline" size="sm" className="glass-card border-white/20"><Github className="mr-2 h-4 w-4" />Code</Button>
                      <Button variant="ghost" size="sm"><PlayCircle className="mr-2 h-4 w-4" />Video</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <div key={project.title} className="tech-card group animate-floating" style={{ animationDelay: `${(index + 2) * 0.2}s` }}>
                  <div className={`w-full h-1 bg-gradient-to-r ${project.gradient} mb-6`}></div>
                  <div className="text-sm text-primary font-medium mb-3">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 transition-all duration-300">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (<span className="px-2 py-1 text-xs text-muted-foreground">+{project.tech.length - 3} more</span>)}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs glass-card border-white/20"><ExternalLink className="mr-1 h-3 w-3" />Demo</Button>
                    <Button size="sm" variant="ghost" className="flex-1 text-xs"><Github className="mr-1 h-3 w-3" />Code</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button size="lg" className="hero-btn"><Github className="mr-2 h-5 w-5" />View All Projects on GitHub</Button><br></br><br></br>
              <Button size="lg" className="hero-btn"><Database className="mr-2 h-5 w-5" />View DS Projects on Kaggle</Button>
            </div>
          </>
        )}

        {/* Hackathon Ideas Tab */}
        {activeTab === 'Hackathon' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hackathonIdeas.map((idea, idx) => (
              <div key={idea.title} className="tech-card group p-8 animate-floating bg-white">
                <h3 className="text-xl font-bold mb-2 text-pink-700">{idea.title}</h3>
                <div className="mb-2"><span className="font-semibold">Idea:</span> {idea.idea}</div>
                <div className="mb-2"><span className="font-semibold">Prototype:</span> {idea.prototype}</div>
                <div className="flex gap-2 mt-4">
                  {idea.demo && <a href={idea.demo} target="_blank" rel="noopener noreferrer"><Button size="sm" className="hero-btn">Demo</Button></a>}
                  {idea.github && <a href={idea.github} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline" className="glass-card border-white/20">GitHub</Button></a>}
                  {idea.linkedin && <a href={idea.linkedin} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="ghost">LinkedIn</Button></a>}
                </div>
                {/* Images/videos can be added here */}
              </div>
            ))}
          </div>
        )}

        {/* Startup Ideas Tab */}
        {activeTab === 'Startup' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {startupIdeas.map((idea, idx) => (
              <div key={idea.title} className="tech-card group p-8 animate-floating bg-white">
                <h3 className="text-xl font-bold mb-2 text-orange-700">{idea.title}</h3>
                <div className="mb-2"><span className="font-semibold">Idea:</span> {idea.idea}</div>
                <div className="mb-2"><span className="font-semibold">Plan:</span> {idea.plan}</div>
                <div className="flex gap-2 mt-4">
                  {idea.demo && <a href={idea.demo} target="_blank" rel="noopener noreferrer"><Button size="sm" className="hero-btn">Demo</Button></a>}
                  {idea.github && <a href={idea.github} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline" className="glass-card border-white/20">GitHub</Button></a>}
                  {idea.linkedin && <a href={idea.linkedin} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="ghost">LinkedIn</Button></a>}
                </div>
                {/* Images/videos can be added here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
