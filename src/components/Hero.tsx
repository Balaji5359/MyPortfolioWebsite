import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Github, Linkedin, Mail, MapPin, CheckCircle, FlaskConical, Download } from 'lucide-react';
import myimage from '@/assets/my-image.jpg';

const stats = [
  { value: '2', label: 'AWS Global Certifications' },
  { value: 'AIR 7217', label: 'GATE DA 2025 Qualified' },
  { value: '300+', label: 'DSA Problems Solved' },
  { value: '8+', label: 'National Hackathon Finalists' },
  { value: '6+', label: 'Global Summits & Conf\'s Attended' },
  { value: '2026', label: 'B.Tech Graduate (CS)' },
];

const badges = [
  'Junior Research Fellow @ BITS Pilani',
  'GATE DA 2025 Qualified',
  'Dual AWS Certified',
  'AI/ML Researcher',
];

const heroSkillChips = [
  { label: 'QGIS', cat: 'geo' },
  { label: 'Google Earth Engine', cat: 'geo' },
  { label: 'ArcGIS', cat: 'geo' },
  { label: 'Landsat & MODIS', cat: 'geo' },
  { label: 'LST Modeling', cat: 'geo' },
  { label: 'Agentic AI Systems', cat: 'ai' },
  { label: 'RAG Pipelines', cat: 'ai' },
  { label: 'Multimodal Data Fusion', cat: 'ai' },
  { label: 'Amazon Bedrock', cat: 'ai' },
  { label: 'PyTorch', cat: 'ai' },
  { label: 'AWS Lambda & S3', cat: 'cloud' },
  { label: 'Python', cat: 'cloud' },
  { label: 'React.js', cat: 'cloud' },
  { label: 'SQL', cat: 'cloud' },
];

const chipColors: Record<string, string> = {
  geo: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700',
  ai: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-700',
  cloud: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-700',
};

const aboutSkills = [
  'AI/ML Modeling & Multimodal Data Fusion',
  'Geospatial AI — QGIS, GEE, Remote Sensing',
  'Agentic AI Systems & RAG Pipelines',
  'Amazon Bedrock & AWS Serverless',
  'React.js, Python, Full-Stack Development',
];

const Hero = () => {
  return (
    <>
      <section className="min-h-screen flex items-center pt-24 pb-12 px-4 md:px-6" id="home">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                R Balaji
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-muted-foreground mb-4 leading-snug">
                Junior Research Fellow @ BITS Pilani &nbsp;|&nbsp; AI/ML Researcher &nbsp;|&nbsp; AWS Certified Cloud 
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground mb-6">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hyderabad, India</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                <Button
                  className="hero-btn gap-2"
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <FlaskConical className="h-4 w-4" /> View Research
                </Button>
                <a href="https://1drv.ms/w/c/4dba723c3a32d248/IQDB-JC5iYzkS4YVaP5wPXYYAciotiOitKDzs2CZVf2ewDY?e=P7sF8g" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Download Updated CV
                  </Button>
                </a>
                <a href="https://linkedin.com/in/rrbalaji" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Linkedin className="h-4 w-4" /> LinkedIn Profile
                  </Button>
                </a>
                <a href="https://github.com/Balaji5359" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" /> GitHub
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="h-4 w-4" /> Contact Me
                </Button>
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    <CheckCircle className="h-3 w-3" /> {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img src={myimage} alt="R. Balaji" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <span className="block text-xl sm:text-2xl font-bold text-primary mb-1">{s.value}</span>
                <span className="block text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">{s.label}</span>
              </div>
            ))}
          </div>

          {/* About + Sidebar */}
          <div id="about" className="flex flex-col lg:flex-row gap-8">
            {/* About Me */}
            <div className="lg:w-2/3 bg-white dark:bg-card rounded-2xl p-6 sm:p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
                Junior Research Fellow at <strong>BITS Pilani (Hyderabad Campus)</strong> working on the{' '}
                <strong>British Academy–funded BREATHE project</strong>. GATE DA 2025 Qualified (AIR 7217) with strong
                expertise in <strong>AI/ML modeling, Agentic Systems, Remote Sensing (GIS/QGIS),</strong> and{' '}
                <strong>Multimodal Data Fusion</strong>. Experienced in building cloud-native AI architectures, leading
                guest workshops, and driving data-driven environmental and spatial modeling. Aiming for a full-time{' '}
                <strong>PhD track</strong> and product research roles in <strong>AI &amp; Geospatial Intelligence</strong>.
              </p>

              <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3">Core expertise across:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {aboutSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Featured Skill Chips */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Featured Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {heroSkillChips.map((chip) => (
                    <span
                      key={chip.label}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors duration-150 ${chipColors[chip.cat]}`}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#aws-training-anchor"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4" /> AWS Training Certifications
                </a>
                <a
                  href="/aws-activities"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Cloud className="h-4 w-4" /> My AWS Cloud Journey
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 bg-gray-50 dark:bg-card rounded-2xl p-6 shadow-md flex flex-col gap-5">
              <div>
                <h4 className="text-base font-bold mb-1">Current Position</h4>
                <p className="font-semibold text-sm text-primary">Junior Research Fellow (JRF)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">BITS Pilani, Hyderabad Campus</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">BREATHE Project · British Academy (UK) Funded</p>
              </div>

              <div>
                <h4 className="text-base font-bold mb-1">Education</h4>
                <p className="font-semibold text-sm">B.Tech — Computer Science & Technology</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  MITS, Madanapalle · 2022–2026 · CGPA: 8.68/10
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold mb-1">Global Certifications</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500" /> AWS Certified Cloud Practitioner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500" /> AWS Certified AI Practitioner</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-bold mb-1">Research & Exams</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• GATE DA 2025 — AIR 7217</li>
                  <li>• SIH 2025 — Finalist (4 Teams @ MITS)</li>
                  <li>• SIH 2024 — Finalist (1 Team @ MITS)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-bold mb-1">AWS Conferences & Summits</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• AWS re:Invent 2025 (5 Days — Las Vegas)</li>
                  <li>• AWS Summit India 2025</li>
                  <li>• AWS Summit New York 2025</li>
                  <li>• AWS Builders 2025</li>
                  <li>• AWSome Day Conference</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-bold mb-1">In-Person AWS Events</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• QuickSuite WS — Amazon DC, Bengaluru</li>
                  <li>• Kiro & AgentCore WS — Amazon Orion, Bengaluru</li>
                  <li>• SU Summit 2025 — Bengaluru</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
