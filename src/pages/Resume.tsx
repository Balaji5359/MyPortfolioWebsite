import { useEffect } from 'react';
import { ArrowLeft, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RESUME_URL =
  'https://drive.google.com/file/d/17GdmzUvj46hJzek-dq_UIN4mBOzeTwgN/view?usp=drive_link';

const Resume = () => {
  useEffect(() => {
    document.title =
      'R Balaji Resume | AI Engineer | Software Engineer | AWS Certified | MITS 2026';
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        'content',
        'Download R Balaji\'s resume. AI Engineer and Software Engineer specializing in Amazon Bedrock, Agentic AI, React.js, Python, Java, and AWS Serverless. Dual AWS Certified. B.Tech CSE 2026 MITS Bengaluru.'
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
          <p className="text-base sm:text-lg font-semibold text-primary mb-4">
            AI Engineer &nbsp;|&nbsp; Software Engineer &nbsp;|&nbsp; Full Stack Developer
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-5">
            <a href="mailto:rrbalaji2020@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> rrbalaji2020@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" /> +91 9398350217
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Bengaluru, Karnataka, India
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
          {/* ── Summary ── */}
          <section aria-labelledby="summary-heading" className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
            <h2 id="summary-heading" className="text-lg font-bold text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              AI Engineer and Software Engineer graduating B.Tech CSE in 2026 from MITS, Bengaluru. Dual AWS Certified —
              <strong> AWS Cloud Practitioner</strong> and <strong>AWS AI Practitioner</strong>. Specialized in building
              production-ready AI applications with <strong>Amazon Bedrock, Agentic AI, RAG, and Generative AI</strong>.
              Experienced in React.js, Next.js, Python, Java, Spring Boot, and AWS Serverless Architecture.
              Built 20+ projects across AI Agents, GenAI, Data Science, and Full-Stack. Founder of SkillRoute-AI.
              Currently seeking full-time AI Engineer or Software Engineer roles.
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Madanapalle Institute of Technology &amp; Science (MITS), Bengaluru</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-sm font-semibold text-primary">2022 – 2026</span>
                <p className="text-xs text-gray-500">CGPA: 8.7 / 10</p>
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
                  role: 'Software Engineer Intern',
                  company: 'Rizzle Technology',
                  period: 'Apr 2026 – Present',
                  points: [
                    'Building ERP product features using React.js and Next.js',
                    'Developing backend APIs with Java + Spring Boot',
                    'Integrating MongoDB and DynamoDB for data persistence',
                  ],
                  tech: ['React.js', 'Next.js', 'Java', 'Spring Boot', 'DynamoDB'],
                },
                {
                  role: 'Founder & AI Engineer',
                  company: 'SkillRoute-AI (Startup)',
                  period: 'Jan 2026 – Present',
                  points: [
                    'Founded AI-powered skill development platform for CS students',
                    'Built agentic AI system using Amazon Bedrock and AWS Serverless',
                    'Received AWS Activate Startup Credits ($1000)',
                  ],
                  tech: ['Amazon Bedrock', 'Agentic AI', 'React.js', 'Lambda', 'S3'],
                },
                {
                  role: 'AWS Cloud Educator & Session Lead',
                  company: 'MITS University',
                  period: 'Dec 2025 – Mar 2026',
                  points: [
                    'Conducted 4 AWS sessions for 300+ students across departments',
                    'Led hands-on demos on EC2, S3, Bedrock, and AI certification paths',
                    'Invited by 3 department HODs for cloud career guidance',
                  ],
                  tech: ['AWS EC2', 'Amazon S3', 'Amazon Bedrock', 'Amazon Q'],
                },
              ].map((exp, i) => (
                <div key={i} className="border-l-4 border-primary/40 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 mb-2">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-xs font-semibold text-primary">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{exp.period}</span>
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
                { label: 'AI & GenAI', items: 'Amazon Bedrock, Agentic AI, RAG, Prompt Engineering, LLMs, Fine-Tuning' },
                { label: 'Languages', items: 'Python, Java, JavaScript, TypeScript, SQL' },
                { label: 'Frontend', items: 'React.js, Next.js, HTML, CSS, Tailwind CSS' },
                { label: 'Backend', items: 'Node.js, Express, Spring Boot, REST APIs' },
                { label: 'Cloud & AWS', items: 'Lambda, S3, EC2, DynamoDB, API Gateway, Bedrock, Cognito, SageMaker' },
                { label: 'Tools', items: 'Git, GitHub, VS Code, Postman, Jupyter, Kaggle' },
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
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Open to Full-Time Opportunities</h2>
          <p className="text-sm sm:text-base text-white/80 mb-5">
            Looking for AI Engineer, Software Engineer, or Full Stack Developer roles — available from Aug 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="gap-2 font-semibold">
                <Download className="h-4 w-4" /> Download Resume PDF
              </Button>
            </a>
            <Link to="/#contact">
              <Button variant="outline" size="sm" className="gap-2 text-white border-white/50 hover:bg-white/10 font-semibold">
                <Mail className="h-4 w-4" /> Contact Me
              </Button>
            </Link>
            <a href="https://linkedin.com/in/rrbalaji" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2 text-white border-white/50 hover:bg-white/10 font-semibold">
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
