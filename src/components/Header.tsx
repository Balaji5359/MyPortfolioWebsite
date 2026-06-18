import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Youtube } from 'lucide-react';
import logo from '../assets/mywesitelogo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-0 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full"
            style={{ borderRadius: '20%', height: '48px', width: '48px' }}
          />
            <div className="gradient-text text-2xl font-bold">R Balaji</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5 text-sm font-medium" aria-label="Main navigation">
            <a href='/#home' className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="/#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="/#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/resume" className="text-muted-foreground hover:text-primary transition-colors font-semibold text-primary">Resume</Link>
            <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/rrbalaji" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>


            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Balaji5359" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a href="https://m.youtube.com/channel/UC98OWLgw0AefdOUI-AMWkkg" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.credly.com/users/rbalaji" target="_blank" rel="noopener noreferrer">
                Credly
              </a>
            </Button>


          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
              <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="/#experience" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="/#projects" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="/#skills" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/resume" className="font-semibold text-primary" onClick={() => setIsMenuOpen(false)}>Resume</Link>
              <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/rrbalaji" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.credly.com/users/rbalaji" target="_blank" rel="noopener noreferrer">
                  <div className="h-5 w-5 rounded-full border-2 border-current flex items-center justify-center font-bold text-xs">
                    C
                  </div>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Balaji5359" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://youtube.com/@rrbalaji" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;