import { ArrowLeft, Award, BookOpen, Briefcase, Calendar, Cloud, Code, Cpu, Database, GraduationCap, Rocket, Sparkles, Trophy, Users, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AWSCertificate from '/src/assets/My_AWS_Activities_Images/AWS-Certified-Cloud-Practitioner.jpeg';
import AWSAICertificate from '/src/assets/My_AWS_Activities_Images/AWS-Certified-AI-Practitioner.png';
import AWSStartupCreditsImage from '/src/assets/My_AWS_Activities_Images/AWS-StartUp-credits.png';
import dept2ndEventImage from '@/assets/AWS_sessions/Dept_2nd_Session_Image0.jpeg';
import dept3rdEventImage from '@/assets/AWS_sessions/Dept_3rd_Session_Image1.jpeg';
import skillBeeEventImage from '@/assets/AWS_sessions/Skill_BeeClub_Session_Image0_29-12-25.jpg';
import dsEventImage from '@/assets/AWS_sessions/DS_Session_Image1_23-12-25.jpg';

// Add custom CSS animations
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(5px) rotate(-1deg); }
  }
  
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(8px) rotate(-1deg); }
    66% { transform: translateY(-12px) rotate(1deg); }
  }
  
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(0.5deg); }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  
  @keyframes pulse-slower {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.5; }
  }
  
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 10s ease-in-out infinite;
  }
  
  .animate-float-slow {
    animation: float-slow 12s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
  
  .animate-pulse-slower {
    animation: pulse-slower 6s ease-in-out infinite;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
  }
`;

// Debug: Log the imported image
console.log('AWSAICertificate:', AWSAICertificate);

interface ActivityEntry {
  year: number;
  date: string;
  title: string;
  type: "Conference" | "Training" | "Certification" | "Membership" | "Startup" | "Global Certification" | "Event";
  description: string;
  highlights?: string[];
  tags?: string[];
  project?: string;
  media?: {
    certificate?: string;
    post?: string;
    video?: string;
    link?: string;
    platform?: string;
  };
}

const activities: ActivityEntry[] = [
  {
    year: 2026,
    date: "February 05, 2026",
    title: "2nd Year CST Department Event - AWS, AI & Global Certification road-map Session",
    type: "Event",
    description: "Delivered an in-depth AWS session for 2nd year CST students on cloud foundations, certifications, AI/DevOps workflows, and practical industry-ready learning pathways.",
    highlights: [
      "Guided students on a practical AWS roadmap from beginner to project-ready",
      "Connected AI + DevOps concepts with real implementation examples",
      "Shared project workflow and how to build consistency in learning",
      "Strong engagement and student interest for advanced follow-up sessions"
    ],
    tags: ["CST Department", "AWS Session", "AI", "DevOps", "Student Mentoring"],
    media: {
      certificate: dept2ndEventImage,
    },
  },
  {
    year: 2026,
    date: "February 04, 2026",
    title: "AWS Activate Approved - Startup Funding Credits ($1000)",
    type: "Startup",
    description: "Recognized under AWS Startups and received AWS Activate credits worth $1000 as initial startup funding support after three rejections.",
    highlights: [
      "Approved on 04-02-2026 after 3 previous rejections",
      "Received official confirmation email: Your AWS Activate Credits are approved - get started now",
      "Credits added to billing for eligible AWS services",
      "Funding supports development and launch acceleration for the startup"
    ],
    tags: ["AWS Startups", "AWS Activate", "$1000 Credits", "Startup Funding", "Persistence"],
    media: {
      certificate: AWSStartupCreditsImage,
    },
  },
  {
    year: 2026,
    date: "January 03, 2026",
    title: "CST Department Event - Guiding Juniors on AWS & Certifications",
    type: "Event",
    description: "Conducted two sessions (9 AM-11 AM and 3 PM-5 PM) on AWS, cloud journey, global certifications, and project demonstrations for 140+ students.",
    highlights: [
      "Explained AWS fundamentals and a clear learning roadmap",
      "Showcased EC2, S3, Bedrock, Amplify, and Amazon Q demos",
      "Presented AI and DevOps use cases with end-to-end project demo",
      "Recognized by HOD Dr Dinesh K and department coordinator"
    ],
    tags: ["CST Department", "AWS", "Cloud Computing", "Knowledge Sharing", "Career Guidance"],
    media: {
      certificate: dept3rdEventImage,
    },
  },
  {
    year: 2025,
    date: "December 29, 2025",
    title: "Skill Bee Club - AWS Workshop",
    type: "Event",
    description: "Conducted a university-wide AWS workshop through Skill Bee Club covering cloud fundamentals, services, and practical project pathways.",
    highlights: [
      "Delivered AWS fundamentals for cross-department students",
      "Covered practical service usage and project orientation",
      "Guided participants on certification and learning direction",
      "Helped students understand real-world cloud adoption"
    ],
    tags: ["Skill Bee Club", "AWS Workshop", "Cloud Fundamentals", "Student Community"],
    media: {
      certificate: skillBeeEventImage,
    },
  },
  {
    year: 2025,
    date: "December 23, 2025",
    title: "AWS Session for Data Science Students",
    type: "Event",
    description: "Delivered an AWS-focused session to 100+ Data Science students, sharing cloud learning journey, certifications, and hands-on service understanding.",
    highlights: [
      "Motivated students to pursue AWS and cloud skill building",
      "Explained practical roadmap from beginner to certified learner",
      "Shared project experiences and applied cloud insights",
      "Interactive Q&A with strong student participation"
    ],
    tags: ["Data Science Department", "AWS Session", "Mentoring", "Cloud Journey"],
    media: {
      certificate: dsEventImage,
    },
  },
  {
    year: 2025,
    date: "December 1-5, 2025",
    title: "AWS re:Invent 2025 (Las Vages, USA)",
    type: "Conference",
    description: "My Learning Journey from AWS re:Invent (Dec 1–5) | 5 Days of Deep AI Agents & AWS Insights on new services from Las Vegas (USA) online live. After getting notification mail from AWS about re:Invent, from Day One, I made a conscious decision to learn deeply, document everything, and reflect on every insight shared by industry leaders. The AWS re:Invent event was not just a conference for me — it was a mindset shift towards AWS and Agentic AI.",
    highlights: [
      "Keynotes by AWS CEO and Dr Swami Shiva Subramanyam - most impactful moments",
      "AI Agents Core Components: Model, Code, Tools (APIs, workflows)",
      "Agent Memory: Enables learning from experience, history-aware agents",
      "Agent Evaluation: Measuring agent behavior, continuous improvement",
      "Amazon Nova: Nova Lite, Nova Pro, Nova Omni - Unified multimodal model",
      "Bring Your Own Data: Train custom models, Fine-tune or build from scratch",
      "Amazon Nova Forge: Access to open-training models (Cohere, Stability)",
      "AI Factory Concept: Domain-specific AI at scale with reliability + governance",
      "AWS Lambda: Durable functions, Event-driven architecture",
      "Amazon S3: Max object size 5TB, Intelligent Tiering & replication",
      "AWS Security Hub & FortiAgent for secure applications",
      "DevOps Agent: Operational excellence, Faster alerts, reduced ops load",
      "Reinforcement fine-tuning in Amazon Bedrock for improved accuracy"
    ],
    tags: ["re:Invent", "AI Agents", "Amazon Bedrock", "Nova Models", "Agentic AI", "AWS CEO Keynote", "Agent Memory", "AI Factory", "Las Vegas Online"],
    media: {
      post: "https://www.linkedin.com/posts/rrbalaji_aws-reinvent-aiagents-activity-7270123456789012345-abcd?utm_source=share&utm_medium=member_desktop",
      link: "https://lnkd.in/gMxFAiUF"
    }
  },
  
  {
    year: 2026,
    date: "February 2026",
    title: "SkillRoute-AI Startup Launch 🚀",
    type: "Startup",
    description: "Founded SkillRoute-AI, an AI-powered skill development platform built entirely on AWS services. Transformed a pre-final year project into a production-ready startup after applying 1.5 years experience and learning of AWS.",
    highlights: [
      "First product launch planned for October 2025",
      "Built using Amazon Bedrock, Lambda, S3, EC2, DynamoDB and many other AWS services",
      "Agentic AI application for personalized learning",
      "Operating as a registered company with structured processes",
    ],
    tags: ["Startup", "GenAI", "Amazon Bedrock", "Full-Stack", "AI Agents", "..."],
  },
  
  {
    year: 2025,
    date: "December 11, 2025",
    title: "AWS Certified AI Practitioner 🏆",
    type: "Global Certification",
    description: "Successfully cleared AWS Certified AI Practitioner (AIF-C01) exam - second global certification in one month! Secured 100% exam voucher through AWS Skill Builder and AWS Educate programs.",
    highlights: [
      "Exam Score: 766/1000 - Strong Performance",
      "Double AWS Global Certification in one month",
      "20+ AWS AI services explored with hands-on experience",
      "Deep understanding of AIML, LLM, FM, RAG, Fine-Tuning",
      "AI Security and Compliance expertise",
      "100% exam voucher secured through consistent effort"
    ],
    tags: ["Global Certification", "AI Practitioner", "GenAI", "AWS AI Services", "Double Achievement"],
    media: {
      certificate: AWSAICertificate,
      post: "https://www.linkedin.com/posts/rrbalaji_aws-certified-ai-practitioner-activity-7404866772106903552-MF54?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/0abd09a0a37a4858a309e168011e4a24",
    },
  },
  {
    year: 2025,
    date: "November 18, 2025",
    title: "AWS Certified Cloud Practitioner 🏆",
    type: "Global Certification",
    description: "Successfully cleared AWS Global Certification - Cloud Practitioner in 4th year B.Tech. Comprehensive understanding of AWS Cloud fundamentals, core services, security, architecture, pricing, and support models.",
    highlights: [
      "Exam Score: 761/1000 - Strong Performance",
      "Mastered 100+ AWS services across all domains",
      "Deep understanding of cloud economics and billing",
      "Expertise in AWS security and compliance frameworks",
      "Hands-on experience with AWS Well-Architected Framework",
      "Completed extensive training through AWS Skill Builder"
    ],
    tags: ["Global Certification", "AWS Services", "Cloud Fundamentals", "4th Year Achievement"],
    media: {
      certificate: AWSCertificate,
      post: "https://www.linkedin.com/posts/rrbalaji_aws-certified-cloud-practitioner-activity-7396550578954362880-83p8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/74f4d7e957af45c7b4032b8977311bb4",
    },
  },
  {
    year: 2025,
    date: "August 2025",
    title: "AWS Academy Graduate - Cloud Foundations",
    type: "Certification",
    description: "Completed a learning of all basics of AWS Cloud including core services, security, architecture, pricing, and support.Started journey in ETC for Global Certification voucher.",
    highlights: [
      "Revision of core AWS services",
      "Hands-on labs and quizzes for practical understanding",
      "Became AWS Academy Graduate",
      "Suggested to 40+ juniors to join ETC, and 38 joined",
    ],
    tags: ["Services Revision", "AWS Services", "Global Certification Voucher"],
  },
  {
    year: 2025,
    date: "July 31, 2025",
    title: "AWS Builders Online Conference",
    type: "Conference",
    description: "Attended AWS Builders Online Series focused on agent building, scaling, and application development. Applied learnings directly to startup foundation.",
    highlights: [
      "Gained insights into agent building and scaling",
      "Applied knowledge to AI agent-based application",
      "Received $25 AWS credits for project building",
      "Transformed project into startup foundation",
    ],
    tags: ["Agentic AI", "AWS Builders", "Scaling"],
    media: {
      post: "https://www.linkedin.com/feed/update/urn:li:activity:builders2025",
    },
  },
  
  {
    year: 2025,
    date: "July 16, 2025",
    title: "AWS Summit New York",
    type: "Conference",
    description: "Explored cutting-edge AWS services at New York Summit, focusing on AI Agent development, new AWS services for agents, and Agentic core sub-services.",
    highlights: [
      "Met industry leaders and AWS AI Agent developers",
      "Learned about new AWS services for AI Agent builders",
      "Discussed future of Agentic AI with experts",
      "Networking with global tech leaders",
    ],
    tags: ["AI Agents", "AWS Services", "Global Summit"],
  },
  {
    year: 2025,
    date: "June 26, 2025",
    title: "AWS Summit India (Mumbai & Bangalore)",
    type: "Conference",
    description: "Attended AWS Summit in both Mumbai and Bangalore, exploring real-world applications of AWS in government services, GenAI, and next-gen hardware.",
    highlights: [
      "Poshan Tracker - impacting 100M+ lives",
      "Digilocker - 526M+ users, 9.4B+ documents",
      "AWS Graviton 4 - 45% faster for Java, 40% faster for databases",
      "AWS Trainium 2 - 4x faster, 3x more energy efficient",
      "Foundation Models, RAG, Knowledge Bases, Guardrails",
    ],
    tags: ["GenAI", "Graviton", "Trainium", "RAG", "Foundation Models"],
    media: {
      certificate: "https://lnkd.in/gYK83NjD",
      video: "https://lnkd.in/geyBPdTa",
    },
  },
  {
    year: 2025,
    date: "July 2025",
    title: "Amazon Bedrock Training - Building GenAI Applications",
    type: "Certification",
    description: "Completed comprehensive Amazon Bedrock training covering generative AI, foundation models, RAG, LangChain, and Bedrock integrations.",
    highlights: [
      "Foundation Models: Amazon Titan, Claude 3, Stable Diffusion",
      "RAG (Retrieval Augmented Generation)",
      "LangChain framework for LLM-powered apps",
      "Bedrock integrations: models, prompts, agents",
      "Knowledge Bases and fine-tuning techniques",
    ],
    tags: ["Amazon Bedrock", "GenAI", "RAG", "LangChain", "Foundation Models"],
  },
  {
    year: 2025,
    date: "June 13, 2025",
    title: "AWS Educate Emerging Talent Community Member",
    type: "Membership",
    description: "Joined AWS Educate Emerging Talent Community after completing 7-8 courses and exploring AWS blogs and company case studies.",
    highlights: [
      "Completed 7-8 AWS courses on Compute, Storage, Networking",
      "Deep dive into AWS blogs and case studies",
      "Started research on Amazon Bedrock and GenAI",
      "Connected with global AWS community",
    ],
    tags: ["AWS Educate", "Community", "Research"],
    media: {
      link: "https://lnkd.in/g-DEQmAD",
    },
  },
  {
    year: 2025,
    date: "April - May 2025",
    title: "AWS Educate - 7 Badges Earned",
    type: "Training",
    description: "Earned 7 badges across AWS core services through hands-on simulations and labs on AWS Educate platform.",
    highlights: [
      "Storage: S3, EBS, EFS - hosted static website on S3",
      "Compute: EC2, EKS, ECS - launched and connected to instances",
      "Database: RDS, DynamoDB - created MySQL RDS instance",
      "Serverless: Lambda, Fargate - triggered Lambda from S3",
      "Networking: VPC, Subnets, Security Groups, Gateways",
      "Security: IAM users, groups, roles, access management",
    ],
    tags: ["AWS Educate", "Hands-on", "Labs", "Simulations"],
  },
  {
    year: 2024,
    date: "October 2024",
    title: "AWS Cloud Practitioner Essentials",
    type: "Certification",
    description: "Completed comprehensive 15-day training covering 50+ AWS services as preparation for AWS Cloud Practitioner certification.",
    highlights: [
      "50+ AWS services covered",
      "Compute, Storage, Networking, Security",
      "Global Infrastructure and Reliability",
      "Monitoring, Analytics, Pricing, Support",
      "Migration and Innovation",
    ],
    tags: ["AWS Skill Builder", "Cloud Practitioner", "Certification Prep"],
  },
  {
    year: 2024,
    date: "August 2024",
    title: "AWS Lex - Chatbot Development Training",
    type: "Training",
    description: "Successfully completed Amazon Lex training and built a museum ticket booking chatbot using Amazon Lex and Lambda.",
    highlights: [
      "Built conversational interfaces",
      "Museum ticket booking chatbot project",
      "Lambda function integration",
      "Customer service applications",
    ],
    tags: ["Amazon Lex", "Lambda", "Chatbot", "Conversational AI"],
    project: "Museum Ticket Booking Bot",
  },
  {
    year: 2024,
    date: "July 11, 2024",
    title: "AWSome Day Conference - Cloud Journey Begins",
    type: "Conference",
    description: "My first AWS conference that sparked the cloud computing journey. Learned AWS basics and received $25 credits to explore services.",
    highlights: [
      "How cloud differs from data centers",
      "AWS EC2, Lambda, DynamoDB, S3 fundamentals",
      "Building and deploying ML models on cloud",
      "Serverless application development",
      "Received $25 AWS credits",
    ],
    tags: ["AWS Basics", "First Conference", "B.Tech 2nd Year"],
    media: {
      certificate: "https://lnkd.in/gSxdGZUc",
      post: "https://lnkd.in/g_WKa7ri",
    },
  },
];

const typeIcons = {
  Conference: Users,
  Training: BookOpen,
  Certification: Award,
  Membership: GraduationCap,
  Startup: Rocket,
  "Global Certification": Trophy,
  Event: Calendar,
};

const typeColors = {
  Conference: "bg-blue-600 text-white border-blue-600",
  Training: "bg-gray-800 text-white border-gray-800",
  Certification: "bg-green-600 text-white border-green-600",
  Membership: "bg-purple-600 text-white border-purple-600",
  Startup: "bg-gradient-to-r from-primary to-accent text-primary-foreground border-0",
  "Global Certification": "bg-yellow-600 text-white border-yellow-600",
  Event: "bg-cyan-600 text-white border-cyan-600",
};

export default function MyAWSActivitiesWorld() {
  const startupEntry = activities.find((a) => a.title.includes("Startup Launch"));
  const otherActivities = activities.filter((a) => a !== startupEntry);
  const isImageAsset = (value: string) => /\.(png|jpe?g|webp|gif)$/i.test(value);

  return (
    <>
      <style>{customStyles}</style>
    <div className="min-h-screen relative overflow-hidden font-inter" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 20%, #f093fb 40%, #f5576c 60%, #4facfe 80%, #00f2fe 100%)'}}>
      {/* Floating Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-white/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-88 h-88 bg-white/12 rounded-full blur-3xl animate-float-delayed" style={{animationDelay: '3s'}} />
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6" style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)'}}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute top-20 right-20 w-24 h-24 bg-white/25 rounded-full blur-2xl animate-pulse-slower" />
          <div className="absolute bottom-10 left-1/2 w-28 h-28 bg-white/15 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}} />
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-8 px-6 py-3 text-lg bg-white/20 backdrop-blur-md border-2 border-white/30 text-white shadow-lg">
            <Cloud className="mr-3 h-6 w-6" />
            AWS Cloud Journey 2024-2026
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            My AWS Activities World
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6 drop-shadow-md">
              From Curious Beginner to Startup Founder
            </h2>
            <p className="text-lg text-white/80 leading-relaxed drop-shadow-sm">
              An inspiring 2-year journey through AWS conferences, global summits, intensive training, 
              professional certifications, AWS sessions and hands-on learning experiences, culminating in the creation of <br></br>
              <span className="font-bold text-yellow-300 drop-shadow-sm">SkillRoute-AI</span> - 
              a revolutionary AI-powered learning platform.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-800 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 hover:border-orange-500 transition-all duration-500 ease-out group animate-fade-in-up">
              <Trophy className="h-10 w-10 mb-3 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-3xl font-bold text-gray-900 mb-2">2</p>
              <p className="text-sm font-medium text-gray-600 text-center">Global AWS Certifications</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-800 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 hover:border-blue-500 transition-all duration-500 ease-out group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <Award className="h-10 w-10 mb-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-3xl font-bold text-gray-900 mb-2">30+</p>
              <p className="text-sm font-medium text-gray-600 text-center">Training Badges</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-800 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 hover:border-emerald-500 transition-all duration-500 ease-out group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Sparkles className="h-10 w-10 mb-3 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-3xl font-bold text-gray-900 mb-2">100+</p>
              <p className="text-sm font-medium text-gray-600 text-center">AWS Services Known</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-800 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 hover:border-cyan-500 transition-all duration-500 ease-out group animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <Code className="h-10 w-10 mb-3 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-3xl font-bold text-gray-900 mb-2">30+</p>
              <p className="text-sm font-medium text-gray-600 text-center">Hands-On Projects</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-800 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 hover:border-red-500 transition-all duration-500 ease-out group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Rocket className="h-10 w-10 mb-3 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-3xl font-bold text-gray-900 mb-2">1</p>
              <p className="text-sm font-medium text-gray-600 text-center">AI Startup Founded</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-800 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 hover:border-red-500 transition-all duration-500 ease-out group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Code className="h-10 w-10 mb-3 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-3xl font-bold text-gray-900 mb-2">4</p>
              <p className="text-sm font-medium text-gray-600 text-center">AWS Sessions Taken</p>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Highlight */}
      {startupEntry && (
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <Card className="overflow-hidden bg-white rounded-2xl shadow-xl border-2 border-gray-800 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500 transition-all duration-500 ease-out animate-fade-in-up">
            
            <CardHeader className="p-8">
              <div className="flex items-start justify-between mb-6">
                <Badge className="bg-orange-500 text-white px-4 py-2 text-base font-semibold">
                  <Rocket className="mr-2 h-5 w-5" />
                  {startupEntry.type}
                </Badge>
                <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{startupEntry.date}</span>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {startupEntry.title}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 leading-relaxed">{startupEntry.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-300 hover:bg-gray-100/50 hover:border-orange-400 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                    <Sparkles className="h-5 w-5 text-orange-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {startupEntry.highlights?.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2" />
                        <span className="text-gray-700 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-300 hover:bg-gray-100/50 hover:border-blue-400 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                    <Code className="h-5 w-5 text-blue-500" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Amazon Bedrock", "Lambda", "S3", "EC2", "DynamoDB", "GenAI", "Agentic AI"].map((tech) => (
                      <Badge key={tech} className="text-xs px-3 py-1 bg-blue-100 text-blue-700 border border-blue-200 font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {startupEntry.tags && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {startupEntry.tags.map((tag, index) => (
                    <Badge key={tag} className={`px-3 py-1 text-xs font-medium border transition-all duration-200 ${
                      index % 4 === 0 ? 'bg-red-50 text-red-700 border-red-200' :
                      index % 4 === 1 ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      index % 4 === 2 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                      'bg-purple-50 text-purple-700 border-purple-200'
                    }`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      )}

      {/* Timeline Roadmap */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative">
        <div className="text-center mb-16">
          <Badge className="mb-6 px-6 py-3 text-base bg-white/20 backdrop-blur-md border-2 border-white/30 text-white shadow-md">
            Journey Timeline
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Learning Journey Roadmap
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            From B.Tech 2nd year to startup founder — Every milestone, achievement, and breakthrough that shaped my AWS expertise and entrepreneurial journey
          </p>
        </div>

        <div className="relative">
          {/* Clean Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300" />

          <div className="space-y-12">
            {otherActivities.map((activity, index) => {
              const Icon = typeIcons[activity.type];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${activity.date}-${index}`}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Clean Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-3 flex items-center justify-center">
                    <div className={`h-6 w-6 rounded-full border-4 border-white shadow-lg ${
                      activity.type === 'Global Certification' ? 'bg-orange-500' :
                      activity.type === 'Conference' ? 'bg-blue-500' :
                      activity.type === 'Event' ? 'bg-cyan-500' :
                      activity.type === 'Training' ? 'bg-emerald-500' :
                      activity.type === 'Certification' ? 'bg-cyan-500' :
                      activity.type === 'Membership' ? 'bg-purple-500' :
                      activity.type === 'Startup' ? 'bg-orange-500' :
                      'bg-gray-500'
                    }`} />
                  </div>

                  {/* Clean Year badge */}
                  <div className="hidden md:block absolute left-1/2 -ml-12 -mt-12">
                    <Badge className="bg-white text-gray-700 border border-gray-200 px-3 py-1 text-sm font-medium shadow-md">
                      {activity.year}
                    </Badge>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 w-full md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card className="group bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out border-2 border-gray-700 hover:border-blue-500 rounded-2xl animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardHeader className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <Badge className={`px-3 py-1 text-sm font-medium ${
                            activity.type === 'Global Certification' ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                            activity.type === 'Conference' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                            activity.type === 'Event' ? 'bg-cyan-100 text-cyan-700 border border-cyan-200' :
                            activity.type === 'Training' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                            activity.type === 'Certification' ? 'bg-cyan-100 text-cyan-700 border border-cyan-200' :
                            activity.type === 'Membership' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                            activity.type === 'Startup' ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                            'bg-gray-100 text-gray-700 border border-gray-200'
                          }`}>
                            <Icon className="mr-2 h-3 w-3" />
                            {activity.type}
                          </Badge>
                          <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{activity.date}</span>
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-900 mb-3">
                          {activity.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-600 leading-relaxed">{activity.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="p-6">
                        {activity.highlights && (
                          <div className="mb-6">
                            <h4 className="text-base font-semibold mb-3 flex items-center gap-2 text-gray-900">
                              <Cpu className={`h-4 w-4 ${
                                activity.type === 'Global Certification' ? 'text-orange-500' :
                                activity.type === 'Conference' ? 'text-blue-500' :
                                activity.type === 'Event' ? 'text-cyan-500' :
                                activity.type === 'Training' ? 'text-emerald-500' :
                                activity.type === 'Certification' ? 'text-cyan-500' :
                                activity.type === 'Membership' ? 'text-purple-500' :
                                activity.type === 'Startup' ? 'text-orange-500' :
                                'text-gray-500'
                              }`} />
                              Key Learnings & Achievements
                            </h4>
                            <ul className="space-y-2">
                              {activity.highlights.map((highlight, i) => (
                                <li key={i} className="text-sm flex items-start gap-2">
                                  <div className={`h-1.5 w-1.5 rounded-full mt-2 ${
                                    activity.type === 'Global Certification' ? 'bg-orange-500' :
                                    activity.type === 'Conference' ? 'bg-blue-500' :
                                    activity.type === 'Event' ? 'bg-cyan-500' :
                                    activity.type === 'Training' ? 'bg-emerald-500' :
                                    activity.type === 'Certification' ? 'bg-cyan-500' :
                                    activity.type === 'Membership' ? 'bg-purple-500' :
                                    activity.type === 'Startup' ? 'bg-orange-500' :
                                    'bg-gray-500'
                                  }`} />
                                  <span className="text-gray-600 leading-relaxed">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {activity.project && (
                          <div className="mb-4 p-4 bg-gray-50 rounded-xl border-2 border-gray-300 hover:bg-gray-100/50 hover:border-cyan-400 transition-all duration-300">
                            <p className="text-sm flex items-center gap-2 text-gray-700">
                              <Database className="h-4 w-4 text-cyan-500" />
                              <strong className="text-cyan-600">Featured Project:</strong> 
                              <span className="font-medium">{activity.project}</span>
                            </p>
                          </div>
                        )}

                        {activity.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {activity.tags.map((tag, tagIndex) => (
                              <Badge key={tag} className={`text-xs px-2 py-1 font-medium border ${
                                tagIndex % 5 === 0 ? 'bg-red-50 text-red-700 border-red-200' :
                                tagIndex % 5 === 1 ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                tagIndex % 5 === 2 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                tagIndex % 5 === 3 ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                'bg-orange-50 text-orange-700 border-orange-200'
                              }`}>
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {activity.media && Object.keys(activity.media).length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                            {activity.media.certificate && isImageAsset(activity.media.certificate) && (
                              <div className={`rounded-2xl p-4 border-2 transition-all duration-300 ${
                                activity.type === 'Event'
                                  ? 'bg-cyan-50 border-cyan-300 hover:bg-cyan-100/50 hover:border-cyan-500'
                                  : activity.title.includes('AWS Activate Approved')
                                    ? 'bg-blue-50 border-blue-300 hover:bg-blue-100/50 hover:border-blue-500'
                                    : 'bg-orange-50 border-orange-300 hover:bg-orange-100/50 hover:border-orange-500'
                              }`}>
                                <div className="flex items-center gap-2 mb-3">
                                  {activity.type === 'Event' ? (
                                    <Calendar className="h-5 w-5 text-cyan-500" />
                                  ) : activity.title.includes('AWS Activate Approved') ? (
                                    <Rocket className="h-5 w-5 text-blue-500" />
                                  ) : (
                                    <Trophy className="h-5 w-5 text-orange-500" />
                                  )}
                                  <span className={`text-base font-semibold ${
                                    activity.type === 'Event'
                                      ? 'text-cyan-700'
                                      : activity.title.includes('AWS Activate Approved')
                                        ? 'text-blue-700'
                                        : 'text-orange-700'
                                  }`}>
                                    {activity.type === 'Event'
                                      ? 'Event Snapshot'
                                      : activity.title.includes('AWS Activate Approved')
                                        ? 'AWS Activate Approval'
                                        : 'AWS Official Certificate'}
                                  </span>
                                </div>
                                <div className={`w-full max-w-xl mx-auto rounded-lg border-2 overflow-hidden bg-white ${
                                  activity.type === 'Event'
                                    ? 'border-cyan-400'
                                    : activity.title.includes('AWS Activate Approved')
                                      ? 'border-blue-400'
                                      : 'border-orange-400'
                                }`}>
                                  <img
                                    src={activity.media.certificate}
                                    alt={activity.type === 'Event' ? `${activity.title} image` : 'AWS Certificate'}
                                    className="w-full h-72 object-contain shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer"
                                    onClick={() => window.open(activity.media.certificate, '_blank')}
                                  />
                                </div>
                              </div>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {activity.media.certificate && !isImageAsset(activity.media.certificate) && (
                                <a
                                  href={activity.media.certificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 text-white px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ease-out flex items-center gap-1 shadow-md hover:shadow-lg"
                                >
                                  <Award className="h-3 w-3" />
                                  Certificate
                                </a>
                              )}
                              {activity.media.link && (
                                <a
                                  href={activity.media.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-blue-500 hover:bg-blue-600 hover:-translate-y-0.5 text-white px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ease-out flex items-center gap-1 shadow-md hover:shadow-lg"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  View Certificate
                                </a>
                              )}
                              {activity.media.post && (
                                <a
                                  href={activity.media.post}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-purple-500 hover:bg-purple-600 hover:-translate-y-0.5 text-white px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ease-out flex items-center gap-1 shadow-md hover:shadow-lg"
                                >
                                  <Briefcase className="h-3 w-3" />
                                  LinkedIn Post
                                </a>
                              )}
                              {activity.media.video && (
                                <a
                                  href={activity.media.video}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-emerald-500 hover:bg-emerald-600 hover:-translate-y-0.5 text-white px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ease-out flex items-center gap-1 shadow-md hover:shadow-lg"
                                >
                                  <Calendar className="h-3 w-3" />
                                  Video
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Colorful Gradient Footer */}
      <section className="relative py-20 px-6 overflow-hidden" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)'}}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float-slow" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in-up">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Build the Future? 🚀
          </h3>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Follow my incredible journey as <span className="font-bold text-yellow-300 drop-shadow-sm">AI SkillDev</span> launches in December 2025 — 
            The next chapter in revolutionizing AI-powered education! ✨
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Badge className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 text-lg font-bold hover:bg-white/30 hover:-translate-y-1 hover:scale-105 transition-all duration-500 ease-out shadow-2xl hover:shadow-white/20">
              <Rocket className="mr-3 h-6 w-6" />
              Coming Soon: AI SkillDev Platform
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 text-lg font-bold hover:bg-white/30 hover:-translate-y-1 hover:scale-105 transition-all duration-500 ease-out shadow-2xl hover:shadow-white/20">
              <Sparkles className="mr-3 h-6 w-6" />
              Powered by AWS & AI
            </Badge>
          </div>
        </div>
      </section>

      {/* Clean Sticky Back Button */}
      <a
        href="/"
        className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 hover:-translate-y-1 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
        aria-label="Back to Portfolio"
      >
        <ArrowLeft className="h-6 w-6" />
      </a>
    </div>
    </>
  );
}
