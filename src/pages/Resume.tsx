import { useEffect } from 'react';
import { ArrowLeft, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RESUME_URL =
  'https://1drv.ms/w/c/4dba723c3a32d248/IQDB-JC5iYzkS4YVaP5wPXYYAciotiOitKDzs2CZVf2ewDY?e=P7sF8g';

const Resume = () => {
  useEffect(() => {
    document.title =
      'R Balaji Resume | Junior Research Fellow BITS Pilani | AI/ML Researcher | AWS Certified';
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        'content',
        'R Balaji — Junior Research Fellow at BITS Pilani (Hyderabad), BREATHE Project. GATE DA 2025 AIR 7217. AI/ML Researcher specializing in Geospatial AI, Multimodal Data Fusion, Amazon Bedrock, and Agentic Systems. Dual AWS Certified.'
      );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://balaji.skillrouteai.com/resume');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* ── Top bar ── */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="flex gap-2">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="hero-btn gap-1.5 text-xs">
                <Download className="h-3.5 w-3.5" /> Download PDF
              </Button>
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Header ── */}
        <header className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 sm:p-8 mb-6 border border-gray-100 dark:border-gray-800">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
            R Balaji
          </h1>
          <p className="text-base sm:text-lg font-semibold text-primary mb-1">
            Junior Research Fellow @ BITS Pilani &nbsp;|&nbsp; AI/ML Researcher &nbsp;|&nbsp; AWS Certified Cloud
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">B.Tech CS | GATE DA 2025 (AIR 7217)</p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-5">
            <a href="mailto:rrbalaji2020@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> rrbalaji2020@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" /> +91 9398350217
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Hyderabad / Bengaluru, India
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="https://balaji.skillrouteai.com" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
              <ExternalLink className="h-3 w-3" /> balaji.skillrouteai.com
            </a>
            <a href="https://linkedin.com/in/rrbalaji" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition-colors">
              <Linkedin className="h-3 w-3" /> linkedin.com/in/rrbalaji
            </a>
            <a href="https://github.com/Balaji5359" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 transition-colors">
              <Github className="h-3 w-3" /> github.com/Balaji5359
            </a>
          </div>
        </header>

        <div className="space-y-6">
          {/* ── Research Objective ── */}
          <section aria-labelledby="summary-heading" className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
            <h2 id="summary-heading" className="text-lg font-bold text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              Research Objective
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              AI/ML researcher currently working as a <strong>Junior Research Fellow at BITS Pilani, Hyderabad Campus</strong>, on the{' '}
              <strong>BREATHE project</strong> (British Academy-funded, in collaboration with the University of Warwick, UK, and the One Health Trust).
              Strong foundation in Machine Learning, Generative AI, and applied research, with a valid{' '}
              <strong>GATE Data Science &amp; Artificial Intelligence qualification (AIR 7217)</strong>. Building expertise in{' '}
              <strong>multimodal data fusion, geospatial AI, and climate-health analytics</strong>, with a long-term goal of pursuing a full-time PhD
              and an academic research career. Dual AWS Certified <strong>Cloud Practitioner</strong> and <strong>AI Practitioner</strong>.
            </p>
          </section>

          {/* ── Education ── */}
          <section aria-labelledby="education-heading" className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
            <h2 id="education-heading" className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">B.Tech — Computer Science and Technology</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Madanapalle Institute of Technology &amp; Science (MITS)</p>
                <p className="text-xs text-gray-500 mt-0.5">Relevant Coursework: Machine Learning, Deep Learning, AI Tools, Cloud Computing (AWS), Data Structures &amp; Algorithms</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-sm font-semibold text-primary">2022 – 2026</span>
                <p className="text-xs text-gray-500">CGPA: 8.68 / 10</p>
              </div>
            </div>
          </section>

          {/* ── Experience ── */}
          <section aria-labelledby="experience-heading" className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
            <h2 id="experience-heading" className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Experience
            </h2>
            <div className="space-y-5">
              {[
                {
                  role: 'Junior Research Fellow (JRF) — BREATHE Project',
                  company: 'BITS Pilani, Hyderabad Campus',
                  period: 'Sept 2026 – Present',
                  badge: 'British Academy (UK) Funded · University of Warwick & One Health Trust',
                  borderColor: 'border-emerald-400',
                  points: [
                    'Contributing to the design and development of AI/ML models for climate-health analytics, using multimodal data — environmental sensor data, satellite imagery, wearable physiological signals, and household survey data.',
                    'Building foundational skills in geospatial data processing and remote sensing (Sentinel, Landsat, ERA5 datasets), QGIS, and Google Earth Engine to support climate vulnerability mapping.',
                    'Collaborating with an interdisciplinary, international research team across BITS Pilani, University of Warwick, and One Health Trust; contributing toward research publications and technical reporting.',
                  ],
                  tech: ['QGIS', 'Google Earth Engine', 'Remote Sensing', 'Python', 'PyTorch', 'Multimodal AI'],
                },
                {
                  role: 'Software Engineer Intern',
                  company: 'Rizzle Technology',
                  period: 'Apr 2026 – Jun 2026',
                  badge: null,
                  borderColor: 'border-primary/40',
                  points: [
                    'Investigated slow ERP search performance; redesigned data structure and added caching/indexing — reduced average search response time by 95–98%.',
                    'Developed backend APIs with Java + Spring Boot and integrated MongoDB and DynamoDB for data persistence.',
                  ],
                  tech: ['React.js', 'Next.js', 'Java', 'Spring Boot', 'DynamoDB'],
                },
                {
                  role: 'Founder & AI Developer',
                  company: 'Skillexcellence / SkillRoute AI',
                  period: 'May 2025 – Present',
                  badge: null,
                  borderColor: 'border-primary/40',
                  points: [
                    'Built multi-agent conversational AI and RAG architectures using Amazon Bedrock, Python, and serverless AWS services.',
                    'Optimized model prompting and inference pipelines, reducing query costs by 97%+ and increasing response topic diversity by 80%+.',
                  ],
                  tech: ['Amazon Bedrock', 'Agentic AI', 'RAG', 'React.js', 'Lambda', 'S3'],
                },
              ].map((exp, i) => (
                <div key={i} className={`border-l-4 ${exp.borderColor} pl-4`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 mb-2">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-xs font-semibold text-primary">{exp.company}</p>
                      {exp.badge && (
                        <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-0.5 mb-2">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">•</span>{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Certifications ── */}
          <section aria-labelledby="certifications-heading" className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
            <h2 id="certifications-heading" className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Certifications
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: 'AWS Certified Cloud Practitioner', score: '761/1000', date: 'Nov 2025', verify: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/74f4d7e957af45c7b4032b8977311bb4' },
                { name: 'AWS Certified AI Practitioner', score: '766/1000', date: 'Dec 2025', verify: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/0abd09a0a37a4858a309e168011e4a24' },
              ].map((cert) => (
                <a key={cert.name} href={cert.verify} target="_blank" rel="noopener noreferrer"
                   className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{cert.name}</p>
                    <p className="text-xs text-gray-500">Amazon Web Services · {cert.date} · Score: {cert.score}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </section>

          {/* ── Skills ── */}
          <section aria-labelledby="skills-heading" className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
            <h2 id="skills-heading" className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Skills
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                { label: 'Geospatial & Remote Sensing', items: 'QGIS, Google Earth Engine (GEE), Remote Sensing, heat mapping' },
                { label: 'AI & Machine Learning', items: 'Agentic AI Systems, RAG Pipelines, Multimodal Data Fusion, LLMs, Amazon Bedrock, PyTorch, Scikit-Learn' },
                { label: 'Cloud & Infrastructure', items: 'AWS (Lambda, S3, EC2, CloudWatch, Bedrock), REST APIs, Git & GitHub' },
                { label: 'Languages & Tools', items: 'Python, JavaScript, SQL, React.js, System Architecture' },
              ].map((s) => (
                <div key={s.label}>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{s.label}: </span>
                  <span className="text-gray-600 dark:text-gray-400">{s.items}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Featured Projects ── */}
          <section aria-labelledby="projects-heading" className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
            <h2 id="projects-heading" className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {[
                {
                  name: 'MeetLite — AI Meeting Platform',
                  desc: 'Cloud-native WebRTC video conferencing with Amazon Bedrock AI assistant, RAG-powered knowledge base, AWS Lambda, and DynamoDB.',
                  tech: ['React.js', 'Amazon Bedrock', 'WebRTC', 'Lambda', 'DynamoDB'],
                  link: 'https://meetlite.skillrouteai.com',
                },
                {
                  name: 'SkillRoute-AI Platform',
                  desc: 'AI-powered skill development platform for CS students using Agentic AI, Amazon Bedrock, and AWS Serverless.',
                  tech: ['Amazon Bedrock', 'Agentic AI', 'React.js', 'Lambda', 'S3'],
                  link: 'https://skillrouteai.com',
                },
                {
                  name: 'Agentic AI Pharmacy Ordering System',
                  desc: 'Multi-agent AI system using LLMs with intent extraction, safety validation and order execution workflows on Amazon Bedrock.',
                  tech: ['Python', 'Amazon Bedrock', 'LLMs', 'AWS Lambda', 'DynamoDB'],
                  link: 'https://hackfusion.skillrouteai.com',
                },
              ].map((p) => (
                <div key={p.name} className="flex flex-col sm:flex-row sm:items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/40 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">{p.name}</h3>
                      <a href={p.link} target="_blank" rel="noopener noreferrer"
                         className="text-primary hover:text-primary/80 transition-colors">
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/#projects" className="text-sm text-primary hover:underline font-semibold">
                → View all projects on Portfolio
              </Link>
            </div>
          </section>
        </div>

        {/* ── CTA Footer ── */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Open to PhD Track &amp; Research Roles</h2>
          <p className="text-sm sm:text-base text-white/80 mb-5">
            Aiming for a full-time PhD track and product research roles in AI &amp; Geospatial Intelligence. Also open to AI Engineer and Software Engineer roles.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="gap-2 font-semibold">
                <Download className="h-4 w-4" /> Download Updated CV
              </Button>
            </a>
            <Link to="/#contact">
              <Button variant="secondary" size="sm" className="gap-2 font-semibold">
                <Mail className="h-4 w-4" /> Contact Me
              </Button>
            </Link>
            <a href="https://linkedin.com/in/rrbalaji" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="gap-2 font-semibold">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
