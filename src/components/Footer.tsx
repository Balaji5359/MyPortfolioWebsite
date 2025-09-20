import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 glass-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="gradient-text text-2xl font-bold mb-4">R.Balaji</div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building the future with AI and cloud technologies. Passionate about creating 
              innovative solutions that make a difference.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using</span>
              <Code className="h-4 w-4 text-primary" />
              <span>and lots of</span>
              <Coffee className="h-4 w-4 text-yellow-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold mb-4 gradient-text">Technologies</h3>
            <ul className="space-y-2">
              {['AI/ML', 'AWS Cloud', 'Python', 'React', 'Data Science'].map((tech) => (
                <li key={tech}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} R.Balaji. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">Status: Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;