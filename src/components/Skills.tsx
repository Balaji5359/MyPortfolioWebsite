import React from 'react';

const skillGroups = [
  {
    title: 'Geospatial & Remote Sensing',
    color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-800',
    header: 'text-emerald-700 dark:text-emerald-400',
    skills: ['QGIS', 'Google Earth Engine (GEE)', 'Remote Sensing data', 'Landsat Processing', ],
  },
  {
    title: 'AI & Machine Learning',
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800',
    header: 'text-purple-700 dark:text-purple-400',
    skills: ['Agentic AI Systems', 'RAG Pipelines', 'Multimodal Data Fusion', 'Amazon Bedrock', 'LLMs', 'Prompt Engineering', 'PyTorch', 'Scikit-Learn', 'Time-Series Analysis'],
  },
  {
    title: 'Languages',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800',
    header: 'text-blue-700 dark:text-blue-400',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C'],
  },
  {
    title: 'Frontend',
    color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-200 hover:bg-cyan-200 dark:hover:bg-cyan-800',
    header: 'text-cyan-700 dark:text-cyan-400',
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800',
    header: 'text-green-700 dark:text-green-400',
    skills: ['Node.js', 'Express', 'Spring Boot', 'REST APIs', 'FastAPI', 'Streamlit'],
  },
  {
    title: 'Cloud & AWS',
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-800',
    header: 'text-orange-700 dark:text-orange-400',
    skills: ['AWS Lambda', 'Amazon S3', 'Amazon EC2', 'API Gateway', 'DynamoDB', 'Amazon Bedrock', 'CloudWatch', 'Cognito', 'AWS Amplify', 'SageMaker', 'IAM', 'VPC', 'Route 53'],
  },
  {
    title: 'Data Science',
    color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-200 hover:bg-pink-200 dark:hover:bg-pink-800',
    header: 'text-pink-700 dark:text-pink-400',
    skills: ['Machine Learning', 'Deep Learning', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'TensorFlow', 'Power BI'],
  },
  {
    title: 'Tools & Platforms',
    color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700',
    header: 'text-gray-700 dark:text-gray-300',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter', 'Google Colab', 'Kaggle', 'Jira'],
  },
  {
    title: 'Soft Skills',
    color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-200 hover:bg-teal-200 dark:hover:bg-teal-800',
    header: 'text-teal-700 dark:text-teal-400',
    skills: ['Technical Documentation', 'Public Speaking', 'Interdisciplinary Collaboration', 'Teaching & Mentoring', 'Problem Solving', 'Team Lead'],
  },
];

const Skills = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto">
          From geospatial AI and remote sensing to cloud-native architectures and full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className={`text-base font-bold mb-4 ${group.header}`}>{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-xs font-semibold cursor-default transition-colors duration-150 ${group.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Resume download */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
        <a
          href="https://drive.google.com/file/d/17GdmzUvj46hJzek-dq_UIN4mBOzeTwgN/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          ⬇️ Download Updated CV
        </a>
        <a
          href="https://linkedin.com/in/rrbalaji"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          🔗 LinkedIn Profile
        </a>
      </div>
    </div>
  </section>
);

export default Skills;
