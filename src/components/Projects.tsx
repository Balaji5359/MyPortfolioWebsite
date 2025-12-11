import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, PlayCircle, Database, Trophy } from 'lucide-react';
import { features } from 'node:process';
import SIHTeam01Image from '/src/assets/SIH2025/Team01/SIHTeam01.png'
import SIHTeam02Image from '/src/assets/SIH2025/Team02/SIHTeam02.png'
import SIHTeam03Image from '/src/assets/SIH2025/Team03/SIHTeam03.png'
import SIHTeam04Image from '/src/assets/SIH2025/Team04/SIHTeam04.png'
import SIHTeam05Image from '/src/assets/SIH2025/Team05/SIHTeam05.png'
import AI_Skill_Dev_Image from '/src/assets/ai-skill-dev-image.png'
import AI_Skill_Dev_Logo from '/src/assets/ai-skill-dev-logo.png'
import Get_n_Grow_logo from '/src/assets/getngrow_logo.png'
import Get_n_Grow_image from '/src/assets/getngrow_image.png'
import AWSCertificate from '/src/assets/My_AWS_Activities_Images/AWS-Certified-Cloud-Practitioner.jpeg'
import AWSAICertificate from '/src/assets/My_AWS_Activities_Images/AWS-Certified-AI-Practitioner.png'

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState('Projects');
  
  const globalCertifications = [
    {
      title: 'AWS Certified AI Practitioner',
      description: 'Successfully cleared AWS Certified AI Practitioner (AIF-C01) exam - second global certification in one month! Secured 100% exam voucher through AWS Skill Builder and AWS Educate programs. Exam Score: 766/1000.',
      image: AWSAICertificate,
      linkedinPost: 'https://www.linkedin.com/posts/rrbalaji_aws-certified-ai-practitioner-activity-7404866772106903552-MF54?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
      verifyLink: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/0abd09a0a37a4858a309e168011e4a24',
      credlyLink: 'https://www.credly.com/badges/d28a3b74-9951-4e4f-9665-07e36069a092/public_url',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      description: 'Successfully cleared AWS Global Certification (On 18th Nov 2025)- Cloud Practitioner in 4th year B.Tech. Achieved comprehensive understanding of AWS Cloud fundamentals, core services, security, architecture, pricing, and support models through extensive preparation and hands-on practice. Exam Score: 761/1000.',
      image: AWSCertificate,
      linkedinPost: 'https://www.linkedin.com/posts/rrbalaji_aws-certified-cloud-practitioner-activity-7396550578954362880-83p8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
      verifyLink: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/74f4d7e957af45c7b4032b8977311bb4',
      credlyLink: 'https://www.credly.com/badges/c81e98f2-fb5c-45fa-b549-f5801cadef75/public_url',
    },
  ];

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
      title: 'AI Skill Dev',
      subtitle: 'AI, VR & Game-based Learning Platform',
      logo: AI_Skill_Dev_Logo,
      idea: [
        'An AI, VR, and game-based learning platform for CS students.',
        'Tracks student progress for institutes and placement trainers.',
        'Enables personalized, interactive, and engaging learning experiences.',
      ],
      plan: [
        'Sell products to institutions and university students.',
        'Incorporate AI-based adaptive learning modules.',
        'Enable easy tracking and analytics for institutions.',
        'Offer placement readiness and skill assessments.',
      ],
      demo: 'http://genaiapp.netlify.app/',
      github: 'https://github.com/Balaji5359/AI-Skill-Dev',
      linkedin: 'https://www.linkedin.com/posts/rrbalaji',
      image: AI_Skill_Dev_Image,
      video: 'https://youtu.be/f3UU1HiVXCE',
    },
    {
      title: 'Get and Grow',
      subtitle: 'Bridging Dreams of Students with Generous Donors',
      logo: Get_n_Grow_logo,
      idea: [
        'A student support platform connecting financially struggling students with donors.',
        'Covers tuition, living costs, exam fees, and more.',
        'Verified profiles, direct transfers, and real-time impact tracking.',
        'Ensures fast, transparent, and meaningful educational aid across India.',
      ],
      plan: [
        'Verify & Match: Students submit needs and documents, team verifies and matches with donors.',
        'Direct Support: Donors choose what to fund and send money directly to student accounts.',
        'Track Impact: Donors receive updates, receipts, and photos to see their impact.',
      ],
      demo: 'http://get-and-grow-startup-webapp-bucket.s3-website.ap-south-1.amazonaws.com/',
      github: 'https://github.com/Balaji5359',
      linkedin: 'https://www.linkedin.com/posts/rrbalaji_sih-smartindiahackathon-teamleadership-activity-7377231820070961152-Nyiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
      image: Get_n_Grow_image,
      video: 'https://youtu.be/f3UU1HiVXCE',
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
            <Button className={activeTab === 'GlobalCert' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' : 'bg-white dark:bg-gray-900'} onClick={() => setActiveTab('GlobalCert')}><Trophy className="mr-2 h-4 w-4" />Global Certification</Button>
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
                <div key={idea.title} className="tech-card group relative overflow-hidden animate-floating bg-white shadow-xl">
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
                  <div key={idea.title} className="tech-card group relative overflow-hidden animate-floating bg-white shadow-xl">
                    <div className="flex flex-col lg:flex-row">
                      {/* Full Background Image */}
                      <div className="lg:w-1/2 h-50 lg:h-auto relative overflow-hidden">
                        <img
                          src={idea.image}
                          alt={idea.title}
                          className="w-full h-full object-cover"
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
                          {typeof idea.linkedin === 'string' && idea.linkedin && (
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
          <div className="space-y-12">
            {startupIdeas.map((idea, idx) => (
              <div key={idea.title} className="tech-card group relative overflow-hidden animate-floating bg-white shadow-xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                <div className="flex flex-col lg:flex-row gap-8 p-8">
                  {/* Left side: logo, title+subtitle aligned horizontally, idea, plan, links */}
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-6 mb-4">
                      {idea.logo && (
                        <img
                          src={idea.logo}
                          alt={`${idea.title} logo`}
                          className="w-20 h-20 rounded-full shadow-lg border-4 border-orange-200"
                        />
                      )}
                      <div>
                        <h3 className="text-3xl font-bold text-orange-700 leading-tight">{idea.title}</h3>
                        {idea.subtitle && (
                          <p className="text-xl text-gray-600 italic mt-1">{idea.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-8">
                      <h4 className="font-semibold text-purple-600 mb-4 text-lg">💡 Idea</h4>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed space-y-2 pl-4">
                        {idea.idea.map((point, i) => (
                          <li key={i} className="pl-2">{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-8">
                      <h4 className="font-semibold text-blue-600 mb-4 text-lg">📋 Plan</h4>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed space-y-2 pl-4">
                        {idea.plan.map((point, i) => (
                          <li key={i} className="pl-2">{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {idea.demo && (
                        <a href={idea.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 px-6 py-3 text-lg font-semibold">
                            <ExternalLink className="mr-2 h-5 w-" />Visit Our Website
                          </Button>
                        </a>
                      )}
                      {idea.github && (
                        <a href={idea.github} target="_blank" rel="noopener noreferrer">
                          <Button size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50 transition-all duration-300 px-6 py-3 text-lg font-semibold">
                            <Github className="mr-2 h-5 w-5" />GitHub
                          </Button>
                        </a>
                      )}
                      {idea.linkedin && (
                        <a href={idea.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button size="lg" variant="ghost" className="text-blue-600 hover:bg-blue-50 transition-all duration-300 px-6 py-3 text-lg font-semibold">
                            LinkedIn
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Right side: video heading and image or video */}

                  
                  <div className="lg:w-1/2 flex flex-col items-center justify-center gap-6">
                    {idea.image && (
                      <>
                        <h5 className="mt-6 mb-2 text-lg font-semibold text-gray-700">Here is Image of Our Startup-Website</h5>
                        <img
                          src={idea.image}
                          alt={idea.title}
                          className="w-4/5 h-auto rounded-lg shadow-lg object-cover max-h-72"
                        />
                      </>
                    )}

                    <h4 className="mt-6 mb-2 text-lg font-semibold text-gray-700">Here is small demo video of Startup plan</h4>
                    {idea.video && (
                      <div className="relative aspect-video w-4/5 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          src={idea.video.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}
                          title={`${idea.title} Video`}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                    
                    {!idea.image && !idea.video && (
                      <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center text-gray-500 shadow-inner">
                        <div className="text-center">
                          <Database className="mx-auto h-12 w-12 mb-2 opacity-50" />
                          <p className="text-sm">Media Coming Soon</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global Certification Tab */}
        {activeTab === 'GlobalCert' && (
          <div className="max-w-7xl mx-auto space-y-12">
            {globalCertifications.map((cert, index) => (
              <div key={cert.title} className="tech-card group relative overflow-hidden animate-floating bg-white shadow-xl">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${index === 0 ? 'from-orange-500 to-red-500' : 'from-yellow-500 to-orange-500'}`}></div>
                <div className="p-12">
                  <div className="text-center mb-12">
                    <h3 className={`text-4xl font-bold mb-6 ${index === 0 ? 'text-orange-700' : 'text-yellow-700'}`}>{cert.title}</h3>
                    <p className="text-gray-700 text-xl leading-relaxed max-w-5xl mx-auto">{cert.description}</p>
                  </div>
                  
                  <div className="mb-12">
                    <h4 className="text-2xl font-semibold text-center mb-8 text-gray-800">📜 AWS Official Certificate</h4>
                    <div className="flex justify-center">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} Certificate`}
                        className={`w-full max-w-2xl h-auto object-contain rounded-xl border-4 ${index === 0 ? 'border-orange-200' : 'border-yellow-200'} shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
                        onClick={() => window.open(cert.credlyLink, '_blank')}
                      />
                    </div>
                    <p className="text-center text-gray-600 mt-4 text-lg">Click on the certificate to view Credly badge</p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-6">
                    <a
                      href={cert.linkedinPost}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 text-lg">
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        View LinkedIn Post
                      </Button>
                    </a>
                    
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 text-lg">
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Verify Credential
                      </Button>
                    </a>
                    
                    <a
                      href={cert.credlyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className={`${index === 0 ? 'bg-orange-600 hover:bg-orange-700' : 'bg-yellow-600 hover:bg-yellow-700'} text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 text-lg`}>
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                        </svg>
                        View Credly Badge
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
