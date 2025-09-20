import awsIcon from '@/assets/aws-icon.png';
import pythonIcon from '@/assets/python-icon.png';
import reactIcon from '@/assets/react-icon.png';
import mlIcon from '@/assets/ml-icon.png';

const FloatingTechStack = () => {
  const techStack = [
    { 
      icon: awsIcon, 
      name: 'AWS Cloud', 
      position: 'top-20 left-[10%]',
      animation: 'animate-floating',
      delay: '0s'
    },
    { 
      icon: pythonIcon, 
      name: 'Python', 
      position: 'top-32 right-[15%]',
      animation: 'animate-rotate-3d',
      delay: '0.5s'
    },
    { 
      icon: reactIcon, 
      name: 'React', 
      position: 'top-[60%] left-[8%]',
      animation: 'animate-floating',
      delay: '1s'
    },
    { 
      icon: mlIcon, 
      name: 'Machine Learning', 
      position: 'top-[70%] right-[12%]',
      animation: 'animate-pulse-glow',
      delay: '1.5s'
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {techStack.map((tech, index) => (
        <div 
          key={tech.name}
          className={`absolute ${tech.position} ${tech.animation} opacity-70 hover:opacity-100 transition-opacity duration-300`}
          style={{ animationDelay: tech.delay }}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 group-hover:scale-200 transition-transform duration-500"></div>
            
            {/* Icon */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 glass-card p-3 rounded-2xl">
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </div>
            
            {/* Tooltip */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 glass-card text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {tech.name}
            </div>
          </div>
        </div>
      ))}

      {/* Additional decorative elements */}
      <div className="absolute top-[25%] left-[50%] w-2 h-2 bg-primary rounded-full animate-ping"></div>
      <div className="absolute top-[45%] right-[30%] w-1 h-1 bg-primary-glow rounded-full animate-pulse"></div>
      <div className="absolute bottom-[30%] left-[25%] w-3 h-3 bg-primary/50 rounded-full animate-bounce"></div>
    </div>
  );
};

export default FloatingTechStack;