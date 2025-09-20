import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const skills = [
    {
      category: "AI & Machine Learning",
      items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"]
    },
    {
      category: "Cloud & DevOps", 
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Serverless", "Lambda"]
    },
    {
      category: "Web Development",
      items: ["React", "Node.js", "TypeScript", "Next.js", "REST APIs", "GraphQL"]
    },
    {
      category: "Data & Analytics",
      items: ["Data Science", "Analytics", "Big Data", "SQL", "NoSQL", "ETL"]
    }
  ];

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="container mx-auto">
        {/* Header with name and photo */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              R. Balaji
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              AI/ML Engineer & Full-Stack Developer
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                See My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img 
                src={profilePhoto} 
                alt="R. Balaji"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li 
                      key={skill}
                      className="text-muted-foreground text-sm opacity-0 animate-fade-in"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`, animationFillMode: 'forwards' }}
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;