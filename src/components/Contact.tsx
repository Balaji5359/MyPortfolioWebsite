import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Youtube, ExternalLink } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/rrbalaji',
      description: '500+ connections',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/rrbalaji',
      description: 'Open source projects',
      gradient: 'from-gray-600 to-gray-400'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      url: 'https://youtube.com/@rrbalaji',
      description: 'Tech tutorials',
      gradient: 'from-red-600 to-red-400'
    },
    {
      icon: ExternalLink,
      label: 'Kaggle',
      url: 'https://kaggle.com/rrbalaji',
      description: 'Data science competitions',
      gradient: 'from-cyan-600 to-cyan-400'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@rbalaji.dev',
      href: 'mailto:contact@rbalaji.dev'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Madanapalle, Andhra Pradesh, India',
      href: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91XXXXXXXXX'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring innovative AI and cloud solutions to your next project? 
            Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 animate-floating">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="glass-card border-white/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="glass-card border-white/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="glass-card border-white/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="Project Collaboration" 
                  className="glass-card border-white/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="glass-card border-white/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button className="w-full hero-btn group">
                <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card p-8 animate-floating" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="flex items-center group">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 animate-floating" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Connect with Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="glass-card p-4 hover:scale-105 transition-all duration-300 hover:bg-white/10">
                        <div className="flex items-center mb-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium group-hover:text-primary transition-colors duration-300">
                              {social.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {social.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-card p-6 text-center animate-floating" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="font-medium text-green-400">Available for Projects</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Currently accepting new opportunities in AI/ML and cloud computing projects.
              </p>
              <Button variant="outline" className="glass-card border-white/20 hover:bg-white/10">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;