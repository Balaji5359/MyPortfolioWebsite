import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, PlayCircle, Database } from 'lucide-react';
import { features } from 'node:process';
import SIHTeam01Image from '/src/assets/SIH2025/Team01/SIHTeam01.png'
import SIHTeam02Image from '/src/assets/SIH2025/Team02/SIHTeam02.png'
import SIHTeam03Image from '/src/assets/SIH2025/Team03/SIHTeam03.png'
import SIHTeam04Image from '/src/assets/SIH2025/Team04/SIHTeam04.png'
import SIHTeam05Image from '/src/assets/SIH2025/Team05/SIHTeam05.png'

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState('Projects');

  // Example data for Hackathon and Startup Ideas
  const hackathonIdeas = [
    {
      title: 'Museum Bot - Online Tour Guide (SIH-2024 Idea)',
      idea: 'Built a dynamic museum website using HTML, CSS, JavaScript, and AWS Lambda (Python). Integrated an Amazon Lex chatbot via Kommunicate for ticket booking, event reservations, and visitor query automation. Leveraged ChatGPT and Gemini to enhance development and user experience.',
      prototype: 'Prototype built with HTML, CSS, js and AWS Lex',
      demo: "https://museumwebsite.s3.ap-northeast-1.amazonaws.com/Website/Museum_for_Tresures/index.html",
      github: "https://github.com/Balaji5359/Balaji/blob/main/Museum_for_Tresures.zip",
      linkedin: '',
      image: '',
      video: '',
    },
    {
      title: 'AI Agent - 3 days Hackathon (by Product Space)',
      idea: 'An Internal Docs Q&A Agent for Teams for an IT company',
      prototype: 'Prototype built with React, AWS Bedrock Agent, Llama FM and Python',
      demo: 'https://effortless-cassata-3c7aa7.netlify.app/login',
      github: '',
      linkedin: {
        day1:"https://www.linkedin.com/posts/rrbalaji_day-1-highlights-and-plan-of-ai-agent-hackthon-activity-7365071215679438849-d-zJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE",
        day2:"https://www.linkedin.com/posts/rrbalaji_day-2-prototype-and-sample-demo-of-qa-agent-activity-7365426786635034624-bSk4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE",
        day3:"https://www.linkedin.com/posts/rrbalaji_day-3-ai-agent-hackathon-sample-working-activity-7365793362534203392-yEkX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE"
      },
      image: '',
      video: 'https://youtu.be/f3UU1HiVXCE',
    },
    // SIH 5 Teams Ideas
    {
      title: 'PM Internships Recommendation System (SIH2025-Team1)',
      idea: 'Proposed solution is a lightweight AI tool integrated into the PM Internship portal to help students discover relevant internships. It collects user data—education, skills, interests, and location—and uses rule-based scoring with ML personalization to recommend 3–5 internships',
      prototype: 'The mobile-first interface supports regional languages and voice assistance, making it accessible to digitally underserved youth. The backend uses Python (Boto3), with React.js for the frontend and DynamoDB for storage. The system is designed for low-resource environments and can scale to other government job and training platforms',
      demo: 'https://sih-team01.netlify.app/',
      github: 'https://github.com/Balaji5359/SIH_Team01',
      linkedin: 'https://www.linkedin.com/posts/rrbalaji_sih-smartindiahackathon-teamleadership-activity-7377231820070961152-Nyiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
      image: SIHTeam01Image,
      video: 'https://youtu.be/856gE6TGziM',
    },
    {
      title: 'Smart Attendance System for Institutions (SIH2025-Team2)',
      idea: 'Automated Student Attendance & Analytics System for Colleges This project proposes a smart attendance system using facial recognition or biometric authentication to automate student check-ins. It generates real-time analytics to track attendance trends and provides a cloud-based dashboard for faculty and parents.',
      prototype: 'Built with HTML, CSS, JavaScript, and hosted on AWS EC2, it integrates Amazon Rekognition, biometric SDKs, and geolocation APIs for secure, location-aware verification. The system ensures privacy through encrypted data and liveness detection, offering a seamless and transparent attendance experience for students, educators, and guardians.',
      demo: 'https://sih-team02.netlify.app/',
      github: '',
      linkedin: 'https://www.linkedin.com/posts/rrbalaji_sih-smartindiahackathon-teamleadership-activity-7377231820070961152-Nyiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
      image: SIHTeam02Image,
      video: '',
    },
    {
      title: 'AR-Argumented Reality for Heritage of India (SIH2025-Team3)',
      idea: 'HeritageAR is an immersive AR-based platform designed to digitally preserve and showcase India\'s rich cultural heritage. The idea centers on using augmented reality to recreate historical monuments, artifacts, and traditions in interactive 3D formats accessible via mobile devices.',
      prototype: 'The prototype includes a Unity-powered AR app integrated with cloud-hosted assets and voice-guided storytelling. It aims to engage students, tourists, and researchers by offering virtual tours, educational overlays, and multilingual support—bridging the gap between history and technology',
      demo: 'https://heritageapp1.netlify.app/',
      github: 'https://github.com/Balaji5359/SIH_Team03',
      linkedin: 'https://www.linkedin.com/posts/rrbalaji_sih-smartindiahackathon-teamleadership-activity-7377231820070961152-Nyiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
      image: SIHTeam03Image,
      video: 'https://youtu.be/ReZgqLI3Hq0',
    },
    {
      title: 'One Step Personalization for 10 th and 12 ths students with AI (SIH2025-Team4)',
      idea: 'This project proposes a smart career recommendation system tailored for students in rural and semi-urban areas. It uses AI to analyze academic performance, interests, and skillsets to suggest suitable career paths and relevant government schemes.',
      prototype: 'The prototype includes a mobile-friendly web app built with React.js and Python (Flask), integrated with a chatbot for personalized guidance. It supports multilingual access and is designed to work in low-bandwidth environments, ensuring inclusivity and scalability across educational institutions.',
      demo: 'https://sih-team04.netlify.app/',
      github: 'https://github.com/Balaji5359/SIH_Team04',
      linkedin: 'https://www.linkedin.com/posts/rrbalaji_sih-smartindiahackathon-teamleadership-activity-7377231820070961152-Nyiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
      image: SIHTeam04Image,
      video: 'https://www.youtube.com/watch?v=wsZKIStVBUI',
    },
    {
      title: 'Multi Lingual bot for College and Institutions Query Handling (SIH2025-Team5)',
      idea: 'Read it and give Idea and prototype in small paragraph description',
      prototype: 'The prototype includes a mobile app built with React Native and a backend powered by Python and AWS services. It features AI-driven alerts, personalized health tips, and dashboards for students and counselors—promoting early intervention and holistic wellness in academic environments.',
      demo: 'https://sih-team05.netlify.app/',
      github: 'https://github.com/Balaji5359',
      linkedin: 'https://www.linkedin.com/posts/rrbalaji_sih-smartindiahackathon-teamleadership-activity-7377231820070961152-Nyiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
      image: SIHTeam05Image,
      video: 'https://youtu.be/zuBHOgm_W2o?si=59WVjQuhGG5y-cmJ',
    },
  ];

  const startupIdeas = [
    {
      title: 'EduAI Platform',
      idea: 'AI-driven personalized learning platform.',
      plan: 'Business plan for scalable EdTech.',
      demo: '',
      github: '',
      linkedin: '',
      image: '',
      video: '',
    },
    {
      title: 'Smart Retail Analytics',
      idea: 'Retail analytics using computer vision.',
      plan: 'Startup plan for retail stores.',
      demo: '',
      github: '',
      linkedin: 'https://www.linkedin.com/posts/rrbalaji_sih-smartindiahackathon-teamleadership-activity-7377231820070961152-Nyiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
      image: '',
      video: '',
    },
  ];
  const projects = [
    {
      title: "My Portfolio Website",
      description: "Build a interactive portfolio website using React, Tailwind CSS, and Framer Motion. Implement smooth animations and a clean UI to showcase projects effectively.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion","AWS"],
      category: "Web Development",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      demo: "#",
      github: "https://github.com/Balaji5359/MyPortfolioWebsite"
    },
    {
      title: "Museum Bot an Online Tour Guide",
      description: "Built a dynamic museum website using HTML, CSS, JavaScript, and AWS Lambda (Python). Integrated an Amazon Lex chatbot via Kommunicate for ticket booking, event reservations, and visitor query automation. Leveraged ChatGPT and Gemini to enhance development and user experience.",
      tech: ["Web Development", "Bot Development", "AWS Lex","Amazon S3"],
      category: "Web Development",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      demo: "https://museumwebsite.s3.ap-northeast-1.amazonaws.com/Website/Museum_for_Tresures/index.html",
      github: "https://github.com/Balaji5359/Balaji/blob/main/Museum_for_Tresures.zip"
    },
    {
      title: "Plant Disease Classification using Environment Data",
      description: "Plant Disease Classification using Environment Data Developed a crop health classifier using a Kaggle dataset of 10,000 farm samples with temperature, humidity, rainfall, and soil pH. Compared Logistic Regression and Decision Tree models—Decision Tree performed best. Final model was shared on GitHub and Kaggle for reproducibility",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      category: "AI/ML",
      featured: false,
      gradient: "from-red-500 to-yellow-500",
      demo: "https://github.com/Balaji5359/Kaggle-DS-Projects/blob/main/Plant_Disease_Classification.ipynb",
      github: "https://github.com/Balaji5359/Kaggle-DS-Projects/blob/main/Plant_Disease_Classification.ipynb"
    },
    {
      title: "AI Assistant Usage Analysis Modeling",
      description: "Explored how students at different education levels use AI assistants. Performed EDA to understand usage patterns across user categories.",
      tech: ["Data Analytics", "EDA", "AI Usage"],
      category: "Data Science",
      featured: false,
      gradient: "from-green-500 to-teal-500",
      demo: "https://github.com/Balaji5359/Kaggle-DS-Projects/blob/main/AI_Assistant_Usage_Analysis_Modeling.ipynb",
      github: "https://github.com/Balaji5359/Kaggle-DS-Projects/blob/main/AI_Assistant_Usage_Analysis_Modeling.ipynb"
    },
    {
      title: "Salary Analysis & Prediction for Data Science and AI Roles (2025 Trends)",
      description:"Salary Prediction for Data Science Roles (2020–2025) Built a Decision Tree Regressor using a Kaggle dataset to predict salaries of data science professionals. Achieved an R² score of 0.9956 after thorough data cleaning and EDA. Found that remote/on-site roles and large companies offer higher compensation",
      tech: ["Python","Machine Learning","EDA"],
      category: "Data Science",
      featured: false,
      gradient: "from-green-500 to-teal-500",
      demo: "https://github.com/Balaji5359/Kaggle-DS-Projects/blob/main/Salaries_Analysis_Prediction.ipynb",
      github: "https://github.com/Balaji5359/Kaggle-DS-Projects/blob/main/Salaries_Analysis_Prediction.ipynb"
    },
    {
      title: "Flight Data Analysis Project",
      description: "Designed a Power BI solution to analyze flight operations, delay patterns, and ticket bookings for improved decision-making.",
      tech: ["Power BI", "Data Analysis", "Visualization"],
      category: "Data Science",
      featured: false,
      gradient: "from-pink-500 to-purple-500",
      demo: "https://github.com/Balaji5359",
      github: "https://github.com/Balaji5359"
    },
    {
      title: "Student Placement Prediction using Classification Models",
      description: "Developed a Decision Tree-based model to predict campus placements using a Kaggle dataset of 10,000 students. After preprocessing and feature selection, achieved perfect classification accuracy—outperforming Logistic Regression. Tested with sample data to assess placement likelihood.",
      tech: ["Python", "Data Analysis", "Machine Leaning  "],
      category: "Data Science",
      featured: false,
      gradient: "from-pink-500 to-purple-500",
      demo: "https://github.com/Balaji5359",
      github: "https://github.com/Balaji5359"
    }
  ];

  const categories = ['All', 'AI/ML', 'Cloud Computing', 'Web Development', 'Data Science', 'AR/Computer Vision', 'IoT'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Works</span>
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            {/* make buttons text color black and bg deep blue */}
            <Button className={activeTab === 'Projects' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'bg-red dark:bg-black-900'} onClick={() => setActiveTab('Projects')}>Projects</Button>
            <Button className={activeTab === 'Hackathon' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'bg-white dark:bg-gray-900'} onClick={() => setActiveTab('Hackathon')}>Hackathon Ideas</Button>
            <Button className={activeTab === 'Startup' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white' : 'bg-white dark:bg-gray-900'} onClick={() => setActiveTab('Startup')}>Startup Ideas</Button>
          </div>
        </div>

        {/* Projects Tab */}
        {activeTab === 'Projects' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {projects.filter(p => p.featured).map((project, index) => (
                <div 
                  key={project.title}
                  className="tech-card group relative overflow-hidden animate-floating bg-white"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-primary">Featured</span>
                  </div>
                  <div className="p-8">
                    <div className="text-sm text-primary font-medium mb-3">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-4 transition-all duration-300">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.demo && project.demo !== '#' ? (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="hero-btn"><ExternalLink className="mr-2 h-4 w-4" />Live Demo</Button>
                        </a>
                      ) : (
                        <Button size="sm" className="hero-btn" disabled><ExternalLink className="mr-2 h-4 w-4" />Live Demo</Button>
                      )}
                      {project.github && project.github !== '#' ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="glass-card border-white/20"><Github className="mr-2 h-4 w-4" />Code</Button>
                        </a>
                      ) : (
                        <Button variant="outline" size="sm" className="glass-card border-white/20" disabled><Github className="mr-2 h-4 w-4" />Code</Button>
                      )}
                      <Button variant="ghost" size="sm"><PlayCircle className="mr-2 h-4 w-4" />Video</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <div key={project.title} className="tech-card group animate-floating" style={{ animationDelay: `${(index + 2) * 0.2}s` }}>
                  <div className={`w-full h-1 bg-gradient-to-r ${project.gradient} mb-6`}></div>
                  <div className="text-sm text-primary font-medium mb-3">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 transition-all duration-300">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (<span className="px-2 py-1 text-xs text-muted-foreground">+{project.tech.length - 3} more</span>)}
                  </div>
                  <div className="flex gap-2">
                    {project.demo && project.demo !== '#' ? (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" variant="outline" className="w-full text-xs glass-card border-white/20"><ExternalLink className="mr-1 h-3 w-3" />Demo</Button>
                      </a>
                    ) : (
                      <Button size="sm" variant="outline" className="flex-1 text-xs glass-card border-white/20" disabled><ExternalLink className="mr-1 h-3 w-3" />Demo</Button>
                    )}
                    {project.github && project.github !== '#' ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" variant="ghost" className="w-full text-xs"><Github className="mr-1 h-3 w-3" />Code</Button>
                      </a>
                    ) : (
                      <Button size="sm" variant="ghost" className="flex-1 text-xs" disabled><Github className="mr-1 h-3 w-3" />Code</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button size="lg" className="hero-btn"><Github className="mr-2 h-5 w-5" />View All Projects on GitHub</Button><br></br><br></br>
              <Button size="lg" className="hero-btn"><Database className="mr-2 h-5 w-5" />View DS Projects on Kaggle</Button>
            </div>
          </>
        )}

        {/* Hackathon Ideas Tab */}
        {activeTab === 'Hackathon' && (
          <div>
            {/* First 2 Hackathons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {hackathonIdeas.slice(0, 2).map((idea, idx) => (
                <div key={idea.title} className="tech-card group relative overflow-hidden animate-floating bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-pink-700">{idea.title}</h3>
                    <div className="mb-4">
                      <h4 className="font-semibold text-purple-600 mb-2">💡 Idea</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{idea.idea}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-600 mb-2">🔧 Prototype</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{idea.prototype}</p>
                    </div>
                    {idea.video && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-red-600 mb-3">🎥 Demo Video</h4>
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <iframe
                            src={idea.video.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}
                            title={`${idea.title} Demo`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3">
                      {idea.demo && (
                        <a href={idea.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            <ExternalLink className="mr-2 h-4 w-4" />Demo
                          </Button>
                        </a>
                      )}
                      {idea.github && (
                        <a href={idea.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline">
                            <Github className="mr-2 h-4 w-4" />GitHub
                          </Button>
                        </a>
                      )}
                      {typeof idea.linkedin === 'object' && (
                        <div className="flex gap-2">
                          {idea.linkedin.day1 && <a href={idea.linkedin.day1} target="_blank"><Button size="sm" variant="ghost" className="text-xs">Day 1</Button></a>}
                          {idea.linkedin.day2 && <a href={idea.linkedin.day2} target="_blank"><Button size="sm" variant="ghost" className="text-xs">Day 2</Button></a>}
                          {idea.linkedin.day3 && <a href={idea.linkedin.day3} target="_blank"><Button size="sm" variant="ghost" className="text-xs">Day 3</Button></a>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SIH 2025 Teams Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="gradient-text">SIH 2025 - 5 Teams (Led at MITS University)</span>
              </h2>
              <div className="space-y-8">
                {hackathonIdeas.slice(2).map((idea, idx) => (
                  <div key={idea.title} className="tech-card group relative overflow-hidden animate-floating bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row">
                      {/* Full Background Image */}
                      <div className="lg:w-1/2 h-50 lg:h-auto relative overflow-hidden">
                        <img 
                          src={idea.image} 
                          alt={idea.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="lg:w-1/2 p-8">
                        <h3 className="text-2xl font-bold mb-4 text-purple-700">{idea.title}</h3>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-purple-600 mb-2">💡 Idea</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{idea.idea}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-blue-600 mb-2">🔧 Prototype</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{idea.prototype}</p>
                        </div>
                        
                        {idea.video && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-red-600 mb-3">🎥 Demo Video</h4>
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                              <iframe
                                src={idea.video.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}
                                title={`${idea.title} Demo`}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-3">
                          {idea.demo && (
                            <a href={idea.demo} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                <ExternalLink className="mr-2 h-4 w-4" />Demo
                              </Button>
                            </a>
                          )}
                          {idea.github && (
                            <a href={idea.github} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" variant="outline">
                                <Github className="mr-2 h-4 w-4" />GitHub
                              </Button>
                            </a>
                          )}
                          {idea.linkedin && (
                            <a href={idea.linkedin} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" variant="ghost" className="text-blue-600">
                                LinkedIn
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Startup Ideas Tab */}
        {activeTab === 'Startup' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {startupIdeas.map((idea, idx) => (
              <div key={idea.title} className="tech-card group p-8 animate-floating bg-white">
                <h3 className="text-xl font-bold mb-2 text-orange-700">{idea.title}</h3>
                <div className="mb-2"><span className="font-semibold">Idea:</span> {idea.idea}</div>
                <div className="mb-2"><span className="font-semibold">Plan:</span> {idea.plan}</div>
                <div className="flex gap-2 mt-4">
                  {idea.demo && <a href={idea.demo} target="_blank" rel="noopener noreferrer"><Button size="sm" className="hero-btn">Demo</Button></a>}
                  {idea.github && <a href={idea.github} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline" className="glass-card border-white/20">GitHub</Button></a>}
                  {idea.linkedin && <a href={idea.linkedin} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="ghost">LinkedIn</Button></a>}
                </div>
                {/* Images/videos can be added here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
