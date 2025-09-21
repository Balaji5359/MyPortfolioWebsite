import React from 'react';
import { Brain, Cloud, Code, Database, Cpu, Zap } from 'lucide-react';

const Skills = () => {
  // Animation for progress bars
  const [progAnim, setProgAnim] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setProgAnim(true), 300);
  }, []);
  // Programming Skills with percentage
  const programmingSkills= [
    { name: 'Python', percent: 85 },
    { name: 'Java', percent: 38 },
    { name: 'C', percent: 30 },
    { name: 'JavaScript', percent: 45 },
    { name: 'HTML/CSS', percent: 60 },
    { name: 'SQL/NoSQL', percent: 70 },
    { name: 'React', percent: 55 },
  ];
  // Data Science Skills
  const dataScienceSkills = [
    {name: 'Machine Learning', percent: 75 },
    { name: 'Data Science', percent: 75 },
    { name: 'Pandas', percent: 70 },
    { name: 'NumPy', percent: 50 },
    { name: 'Scikit-learn', percent: 65 },
    { name: 'TensorFlow', percent: 20 },
    { name: 'Matplotlib', percent: 65 },
    { name: 'Seaborn', percent: 55 },
    { name: 'Stats & Probability', percent: 65 }
  ];
  // Domains Known
  const domains = [
    'Machine Learning', 'Artificial Intelligence', 'Data Science', 'Data Analysis', 'Generative AI', 'AI Agents', 'Web Development','AR/VR','...'
  ];
  // AI Tools
  const aiTools = [
    'AmazonQ', 'ChatGPT', 'GitHubCopilot', 'Gemini', 'Loveable', 'PerplexityAI', 'MySivi(AryaAI)', 'Kiro', 'Gamma', 'Google Colab', 'Grammarly', 'BlackboxAI','BoltAI','...'
  ];
  // Tools Known
  const toolsKnown = [
    'VS Code', 'Git', 'GitHub', 'Colab', 'Jupyter', 'MS Excel', 'Power Point', 'MS PowerBI', 'PowerBI Service', 'AWS Services', 'Kaggle', 'My Sivi','...'
  ];
  // AWS Services
  const awsServices = [
    'AWS Lambda', 'Amazon S3', 'Amazon EC2', 'Amazon DynamoDB', 'Amazon RDS', 'Amazon Lex', 'Amazon Q', 'AWS Bedrock', 'AWS IAM', 'API Gateway', 'Amazon VPC', 'Route 53', 'Amazon SageMaker', 'AWS Amplify', 'Cloud Watch', 'Cloud Trail','...'
  ];
  // Soft Skills
  const softSkills = [
    'Effective Communication', 'Interpersonal Skills', 'Public Speaking', 'Team Lead', 'Time Management', 'Problem Solving','...'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Skills</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Programming Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-blue-700 dark:text-blue-400">Programming Skills</h3>
            <div className="space-y-6">
              {programmingSkills.map(skill => (
                <div key={skill.name} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
                    <span className="font-semibold text-blue-700 dark:text-blue-400">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-3 bg-blue-100 dark:bg-blue-900 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 hover:from-purple-500 hover:to-blue-500"
                      style={{ width: progAnim ? `${skill.percent}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Data Science Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-purple-700 dark:text-purple-400">Data Science Skills</h3>
            <div className="space-y-6">
              {dataScienceSkills.map(skill => (
                <div key={skill.name} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
                    <span className="font-semibold text-purple-700 dark:text-purple-400">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-3 bg-purple-100 dark:bg-purple-900 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 hover:from-blue-500 hover:to-purple-500"
                      style={{ width: progAnim ? `${skill.percent}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Domains, AI Tools, Tools Known, AWS Services, Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">Domains Known</h3>
            <div className="flex flex-wrap gap-2">
              {domains.map(domain => (
                <span key={domain} className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 font-semibold text-sm hover:bg-indigo-300 dark:hover:bg-indigo-600 transition-colors duration-200 cursor-pointer">{domain}</span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-pink-700 dark:text-pink-400">AI Tools</h3>
            <div className="flex flex-wrap gap-2">
              {aiTools.map(tool => (
                <span key={tool} className="px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-200 font-semibold text-sm hover:bg-pink-300 dark:hover:bg-pink-600 transition-colors duration-200 cursor-pointer">{tool}</span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">Softwares and Tools Known</h3>
            <div className="flex flex-wrap gap-2">
              {toolsKnown.map(tool => (
                <span key={tool} className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 font-semibold text-sm hover:bg-green-300 dark:hover:bg-green-600 transition-colors duration-200 cursor-pointer">{tool}</span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10">
            <h3 className="text-xl font-bold mb-4 text-yellow-700 dark:text-yellow-400">AWS Services</h3>
            <div className="flex flex-wrap gap-2">
              {awsServices.map(service => (
                <span key={service} className="px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-200 font-semibold text-sm hover:bg-yellow-300 dark:hover:bg-yellow-600 transition-colors duration-200 cursor-pointer">{service}</span>
              ))}
            </div>
          </div>
          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-200 font-semibold text-sm hover:bg-cyan-300 dark:hover:bg-cyan-600 transition-colors duration-200 cursor-pointer">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Download Resume & CV Buttons */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <a href="#" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center gap-2">
            <span>⬇️</span> Download Resume
          </a>
          <a href="#" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2">
            <span>⬇️</span> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;