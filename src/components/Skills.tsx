import { Brain, Cloud, Code, Database, Cpu, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'AI Agents', 'Computer Vision', 'NLP'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      skills: ['AWS Services', 'EC2', 'S3', 'Lambda', 'CloudFormation', 'DevOps'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Django'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Data Science',
      skills: ['Data Analysis', 'Pandas', 'NumPy', 'Visualization', 'Statistics', 'SQL'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Cpu,
      title: 'MLOps & Tools',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Docker', 'Git', 'Jupyter'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Emerging Tech',
      skills: ['AR/VR', 'Blockchain', 'IoT', 'Edge Computing', 'Microservices', 'APIs'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about cutting-edge technologies and building innovative solutions 
            that bridge the gap between artificial intelligence and cloud computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="tech-card group animate-floating"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="flex items-center group/skill"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/skill:scale-150 transition-transform duration-200"></div>
                      <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* Additional certifications or achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">Achievements & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'GATE Qualified', description: 'Computer Science & Engineering' },
              { title: 'AWS Enthusiast', description: 'Cloud Computing Specialist' },
              { title: 'AI Research', description: 'Machine Learning Projects' },
              { title: 'Open Source', description: 'GitHub Contributions' }
            ].map((achievement, index) => (
              <div 
                key={achievement.title}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;