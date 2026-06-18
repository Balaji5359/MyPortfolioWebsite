import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Github, Linkedin, Mail, MapPin, CheckCircle } from 'lucide-react';
import myimage from '@/assets/my-image.jpg';

const stats = [
  { value: '2', label: 'AWS Global Certifications Achieved' },
  { value: '100+', label: 'AWS Services known and explored' },
  { value: '300+', label: 'DSA Problems Solved in different platforms' },
  { value: '8+', label: 'National and College Hackathon Finalists' },
  { value: '6+', label: 'Global Level Summits & Conf\'s Attended' },
  { value: '2026', label: 'Graduate (Computer Science)' },
];

const badges = [
  'AI Engineer Roles',
  'Software Engineer Roles',
  'AWS Certified',
  '3+ Internships',
];

const aboutSkills = [
  'Generative AI & Agentic AI',
  'Amazon Bedrock & Prompt Engineering',
  'React.js, Next.js, Java, Python',
  'AWS Serverless Architecture',
  'REST APIs & Full-Stack Development',
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
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
                AI Engineer &nbsp;|&nbsp; Software Engineer &nbsp;|&nbsp; Full Stack Developer
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-3 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Building AI-powered applications with{' '}
                <strong className="text-foreground">Amazon Bedrock, AgenticAI, AWS, React, Python,</strong> and{' '}
                <strong className="text-foreground">Serverless Architecture</strong>.....
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground mb-6">
                <MapPin className="h-4 w-4 text-primary" />
                <span>B.Tech CST 2026 • Bengaluru, India</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                <a href="https://drive.google.com/file/d/17GdmzUvj46hJzek-dq_UIN4mBOzeTwgN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Button className="hero-btn gap-2">
                    View Resume <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://linkedin.com/in/rrbalaji" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Linkedin className="h-4 w-4" /> LinkedIn
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
                <span className="block text-2xl sm:text-3xl font-bold text-primary mb-1">{s.value}</span>
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
                I'm a Software Engineer and AI Engineer graduating in 2026, passionate about building
                production-ready AI applications rather than just experimenting with models. I cleared dual
                AWS Global Certifications — <strong>AWS Cloud Practitioner</strong> and{' '}
                <strong>AWS AI Practitioner</strong> — and am familiar with 100+ AWS services with hands-on
                experience in 30–40. I've built 20+ projects across AI Agents, Generative AI, Data Science,
                Augmented Reality, and Full-Stack — all deployed on AWS.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
                I've worked with startups, led 5 SIH teams, and built AI systems used by 200+ students.
                Currently seeking full-time opportunities as an{' '}
                <strong>AI Engineer or Software Engineer</strong>.
              </p>

              <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3">I have experience across:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {aboutSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>

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
                <h4 className="text-base font-bold mb-1">Education</h4>
                <p className="font-semibold text-sm">B.Tech — Computer Science & Technology</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  MITS, Madanapalle · 2022–2026 · CGPA: 8.7/10
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
                <h4 className="text-base font-bold mb-1">Internships</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Rizzle Technology — Software Engineer Intern</li>
                  <li>• 2 more internships completed</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-bold mb-1">Hackathons & Exams</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• SIH 2025 — Finalist (4 Teams @ MITS)</li>
                  <li>• SIH 2024 — Finalist (1 Team @ MITS)</li>
                  <li>• GATE-DA 2025 — AIR 7217</li>
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
