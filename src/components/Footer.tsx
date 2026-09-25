import { Heart, Code, Coffee, FlaskConical, Globe, Microscope, Satellite } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 glass-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="gradient-text text-2xl font-bold mb-1">R. Balaji</div>
            <p className="text-xs font-semibold text-emerald-500 dark:text-emerald-400 mb-3 tracking-wide">
              Future Dr. R. Balaji &nbsp;·&nbsp; PhD Candidate (in progress)
            </p>
            <p className="text-muted-foreground mb-3 max-w-md text-sm leading-relaxed">
              Junior Research Fellow at <span className="text-foreground font-medium">BITS Pilani</span> working on the British Academy–funded <span className="text-foreground font-medium">BREATHE Project</span> — an interdisciplinary, international research initiative at the intersection of AI/ML, Geospatial Intelligence, Remote Sensing, and Climate-Health Analytics.
            </p>
            {/* Research tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { icon: <FlaskConical className="h-3 w-3" />, label: 'AI/ML Research' },
                { icon: <Satellite className="h-3 w-3" />, label: 'Remote Sensing' },
                { icon: <Globe className="h-3 w-3" />, label: 'Geospatial AI' },
                { icon: <Microscope className="h-3 w-3" />, label: 'Multimodal Fusion' },
              ].map(t => (
                <span key={t.label} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-emerald-100/60 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800 font-medium">
                  {t.icon} {t.label}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>curiosity,</span>
              <Code className="h-4 w-4 text-primary" />
              <span>code &amp; lots of</span>
              <Coffee className="h-4 w-4 text-yellow-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/#about' },
                { label: 'Experience', href: '/#experience' },
                { label: 'JRF Journey', href: '/jrf-experience' },
                { label: 'Projects', href: '/#projects' },
                { label: 'Skills', href: '/#skills' },
                { label: 'Contact', href: '/#contact' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Focus */}
          <div>
            <h3 className="font-semibold mb-4 gradient-text">Research Focus</h3>
            <ul className="space-y-2">
              {[
                'Geospatial AI & GEE',
                'Remote Sensing (Landsat/MODIS)',
                'Climate-Health Analytics',
                'Multimodal Data Fusion',
                'Agentic AI & RAG',
                'Amazon Bedrock',
              ].map(tech => (
                <li key={tech}>
                  <span className="text-muted-foreground text-sm cursor-default">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PhD aspiration banner */}
        <div className="rounded-xl border border-emerald-200/40 dark:border-emerald-800/40 bg-emerald-50/30 dark:bg-emerald-900/10 px-5 py-3 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
            🎓 On the path to <strong>Dr. R. Balaji</strong> — pursuing a PhD in AI, Geospatial Intelligence &amp; Climate-Health Research.
          </p>
          <span className="text-xs text-emerald-600 dark:text-emerald-500 font-semibold whitespace-nowrap">BITS Pilani · BREATHE Project · British Academy (UK)</span>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-muted-foreground text-sm">
            © {currentYear} R. Balaji. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">Actively Researching</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;