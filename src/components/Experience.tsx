const experiences = [
  {
    company: 'BITS Pilani, Hyderabad Campus',
    role: 'Junior Research Fellow (JRF) — BREATHE Project',
    period: 'Sept 2026 – Present',
    location: 'Hyderabad, India',
    badge: 'British Academy (UK) Funded',
    tech: ['QGIS', 'Google Earth Engine', 'Remote Sensing','Python', 'PyTorch', 'Multimodal AI'],
    points: [
      'Contributing to the design and development of AI/ML models for climate-health analytics, using multimodal data environmental sensor data, satellite imagery, wearable physiological signals, and household surveys.',
      'Building foundational skills in geospatial data processing and remote sensing (Sentinel, Landsat, ERA5 datasets), QGIS, and Google Earth Engine to support climate vulnerability mapping.',
      'Collaborating with an interdisciplinary, international research team across BITS Pilani, University of Warwick, and One Health Trust; contributing toward research publications and technical reporting.',
    ],
    color: 'border-emerald-500',
    dot: 'bg-emerald-500',
    highlight: true,
  },
  {
    company: 'Rizzle Technology',
    role: 'Software Engineer Intern',
    period: 'Apr 2026 – Jun 2026',
    location: 'Bengaluru, India',
    tech: ['React.js', 'Next.js', 'Java', 'Spring Boot', 'MongoDB', 'DynamoDB'],
    points: [
      'Investigated slow ERP search performance; redesigned data structure and added caching/indexing — reduced average search response time by 95–98%.',
      'Developing backend APIs with Java + Spring Boot and integrating MongoDB and DynamoDB for data persistence.',
    ],
    color: 'border-blue-500',
    dot: 'bg-blue-500',
  },
  {
    company: 'SkillRoute AI',
    role: 'Founder & AI Developer',
    period: 'May 2025 – Present',
    location: 'Remote',
    tech: ['Amazon Bedrock', 'Agentic AI', 'RAG', 'React.js', 'Lambda', 'DynamoDB', 'S3', 'Python'],
    points: [
      'Built multi-agent conversational AI and RAG architectures using Amazon Bedrock, Python, and serverless AWS services.',
      'Optimized model prompting and inference pipelines, reducing query costs by 97%+ and increasing response topic diversity by 80%+.',
      'Deployed and evaluated platform with 200+ students; received AWS Activate Startup Credits ($1000).',
    ],
    color: 'border-orange-500',
    dot: 'bg-orange-500',
  },
];

const Experience = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-base">Research, internships, startup work, and technical leadership.</p>
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
              <div className={`w-full bg-white dark:bg-gray-900 rounded-2xl shadow-md p-5 sm:p-6 border-l-4 ${exp.color} hover:shadow-lg transition-shadow duration-200 ${exp.highlight ? 'ring-1 ring-emerald-400/30' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                    <p className="text-sm font-semibold text-primary">{exp.role}</p>
                    {exp.badge && (
                      <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">{exp.period}</p>
                    <p className="text-xs text-gray-400">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5 shrink-0">•</span> {pt}
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
