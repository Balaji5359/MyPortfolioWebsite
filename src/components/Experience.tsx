const experiences = [
  {
    company: 'Rizzle Technology',
    role: 'Software Engineer Intern',
    period: 'Apr 2026 – Present',
    location: 'Bengaluru, India',
    tech: ['React.js', 'Next.js', 'Java', 'Spring Boot', 'MongoDB', 'DynamoDB'],
    points: [
      'Building ERP product features using React.js and Next.js frontend',
      'Developing backend APIs with Java + Spring Boot',
      'Integrating MongoDB and DynamoDB for data persistence',
    ],
    color: 'border-blue-500',
    dot: 'bg-blue-500',
  },
  {
    company: 'SkillRoute-AI (Startup)',
    role: 'Founder & AI Engineer',
    period: 'May 2025 – March 2026',
    location: 'Remote',
    tech: ['Amazon Bedrock', 'Agentic AI', 'React.js', 'Lambda', 'DynamoDB', 'S3'],
    points: [
      'Founded AI-powered skill development platform for CS students',
      'Built agentic AI system using Amazon Bedrock and AWS Serverless',
      'Received AWS Activate Startup Credits ($1000) after 3 rejections',
    ],
    color: 'border-orange-500',
    dot: 'bg-orange-500',
  },
  {
    company: 'MITS University',
    role: 'AWS Cloud Educator & Session Lead',
    period: 'Dec 2025 – Mar 2026',
    location: 'Madanapalle, India',
    tech: ['AWS EC2', 'S3', 'Bedrock', 'Amazon Q', 'Amplify'],
    points: [
      'Conducted 4 AWS sessions for 300+ students across departments',
      'Led hands-on demos on EC2, S3, Bedrock, and AI certification paths',
      'Invited by 3 department HODs for cloud career guidance sessions',
    ],
    color: 'border-green-500',
    dot: 'bg-green-500',
  },
];

const Experience = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-base">Internships, startup work, and technical leadership.</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex gap-6 sm:pl-14">
              {/* Dot */}
              <div className={`hidden sm:flex absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 ${exp.dot} shadow`} />

              {/* Card */}
              <div className={`w-full bg-white dark:bg-gray-900 rounded-2xl shadow-md p-5 sm:p-6 border-l-4 ${exp.color} hover:shadow-lg transition-shadow duration-200`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                    <p className="text-sm font-semibold text-primary">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">{exp.period}</p>
                    <p className="text-xs text-gray-400">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-1 mb-4">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span> {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
