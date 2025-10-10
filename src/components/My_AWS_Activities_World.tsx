import { ArrowLeft, Award, BookOpen, Briefcase, Calendar, Cloud, Code, Cpu, Database, GraduationCap, Rocket, Sparkles, Trophy, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ActivityEntry {
  year: number;
  date: string;
  title: string;
  type: "Conference" | "Training" | "Certification" | "Membership" | "Startup";
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
    year: 2025,
    date: "October 2025",
    title: "AI SkillDev - Startup Launch 🚀",
    type: "Startup",
    description: "Founded AI SkillDev, an AI-powered skill development platform built entirely on AWS services. Transformed a pre-final year project into a production-ready startup after applying 1.5 years experience and learning of AWS.",
    highlights: [
      "First product launch planned for October 2025",
      "Built using Amazon Bedrock, Lambda, S3, EC2, DynamoDB and many other AWS services",
      "Agentic AI application for personalized learning",
      "Operating as a registered company with structured processes",
    ],
    tags: ["Startup", "GenAI", "Amazon Bedrock", "Full-Stack", "Agentic AI", "..."],
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
};

const typeColors = {
  Conference: "bg-primary/10 text-primary border-primary/20",
  Training: "bg-secondary/10 text-secondary border-secondary/20",
  Certification: "bg-accent/10 text-accent border-accent/20",
  Membership: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  Startup: "bg-gradient-to-r from-primary to-accent text-primary-foreground border-0",
};

export default function MyAWSActivitiesWorld() {
  const startupEntry = activities.find((a) => a.type === "Startup");
  const otherActivities = activities.filter((a) => a.type !== "Startup");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-accent py-20 px-6">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-4 px-6 py-3 text-lg bg-white/30 text-black border-white/40 backdrop-blur-sm shadow-lg">
            <Cloud className="mr-3 h-6 w-6" />
            AWS Cloud Journey 2023-2025
          </Badge><br></br><br></br>
          <a
            href="/"
            className="inline-flex items-center gap-2 mb-6 bg-white/80 hover:bg-white text-blue-900 font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 text-sm backdrop-blur-sm border border-blue-200/50 hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Main Page
          </a>
          <h1 className="text-4xl md:text-7xl font-extrabold text-blue-900 mb-8 animate-fade-in-up font-serif tracking-wide">
            My AWS Activities World
          </h1>
          <p className="text-xl md:text-2xl text-black-800 max-w-3xl mx-auto mb-10 animate-fade-in-up [animation-delay:0.2s]">
            <h1 className="text-2xl md:text-3xl font-extrabold text-blue-800 mb-6 animate-fade-in-up font-serif tracking-wide">From curious beginner to startup founder</h1> A journey of 1.5 years through AWS conferences, Summits,Training 
            certifications, and hands-on learning, culminating in AI SkillDev.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up [animation-delay:0.4s]">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 flex flex-col items-center min-w-[140px]">
              <Trophy className="h-10 w-10 mb-3 text-yellow-600" />
              <p className="text-4xl font-extrabold text-gray-800">10+</p>
              <p className="text-sm font-medium text-gray-600">Milestones</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 flex flex-col items-center min-w-[140px]">
              <Award className="h-10 w-10 mb-3 text-blue-600" />
              <p className="text-4xl font-extrabold text-gray-800">7+</p>
              <p className="text-sm font-medium text-gray-600">Certifications</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 flex flex-col items-center min-w-[140px]">
              <Sparkles className="h-10 w-10 mb-3 text-purple-600" />
              <p className="text-4xl font-extrabold text-gray-800">30+</p>
              <p className="text-sm font-medium text-gray-600">AWS Services</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 flex flex-col items-center min-w-[140px]">
              <Rocket className="h-10 w-10 mb-3 text-green-600" />
              <p className="text-4xl font-extrabold text-gray-800">1</p>
              <p className="text-sm font-medium text-gray-600">Startup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Highlight */}
      {startupEntry && (
        <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-10 mb-20">
          <Card className="overflow-hidden border-2 border-primary shadow-[0_20px_70px_-20px_hsl(var(--primary)/0.5)] animate-scale-in hover:shadow-[0_30px_90px_-20px_hsl(var(--primary)/0.7)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <CardHeader className="relative">
              <div className="flex items-start justify-between mb-4">
                <Badge className={`${typeColors[startupEntry.type]} animate-glow-pulse`}>
                  <Rocket className="mr-2 h-4 w-4" />
                  {startupEntry.type}
                </Badge>
                <span className="text-sm text-muted-foreground">{startupEntry.date}</span>
              </div>
              <CardTitle className="text-4xl mb-2 flex items-center gap-3">
                {startupEntry.title}
              </CardTitle>
              <CardDescription className="text-lg">{startupEntry.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="relative">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {startupEntry.highlights?.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-6 border">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Code className="h-5 w-5 text-accent" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Amazon Bedrock", "Lambda", "S3", "EC2", "DynamoDB", "GenAI", "Agentic AI"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {startupEntry.tags && (
                <div className="flex flex-wrap gap-2">
                  {startupEntry.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
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
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Learning Journey Roadmap</h2>
          <p className="text-lg text-muted-foreground">
            From B.Tech 2nd year to startup founder — Every milestone that shaped my AWS expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

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
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-3 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-primary border-4 border-background shadow-lg animate-scale-in" />
                  </div>

                  {/* Year badge */}
                  <div className="hidden md:block absolute left-1/2 -ml-12 -mt-12">
                    <Badge variant="outline" className="bg-background">
                      {activity.year}
                    </Badge>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 w-full md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card className="group hover:shadow-hover transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/50">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={typeColors[activity.type]}>
                            <Icon className="mr-2 h-3 w-3" />
                            {activity.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{activity.date}</span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {activity.title}
                        </CardTitle>
                        <CardDescription>{activity.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        {activity.highlights && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                              <Cpu className="h-4 w-4 text-primary" />
                              Key Learnings
                            </h4>
                            <ul className="space-y-1.5">
                              {activity.highlights.map((highlight, i) => (
                                <li key={i} className="text-sm flex items-start gap-2">
                                  <div className="h-1 w-1 rounded-full bg-primary mt-2" />
                                  <span className="text-muted-foreground">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {activity.project && (
                          <div className="mb-4 p-3 bg-muted/50 rounded-lg border">
                            <p className="text-sm flex items-center gap-2">
                              <Database className="h-4 w-4 text-accent" />
                              <strong>Project:</strong> {activity.project}
                            </p>
                          </div>
                        )}

                        {activity.tags && (
                          <div className="flex flex-wrap gap-2">
                            {activity.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {activity.media && Object.keys(activity.media).length > 0 && (
                          <div className="mt-4 pt-4 border-t flex flex-wrap gap-2">
                            {activity.media.certificate && (
                              <a
                                href={activity.media.certificate}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary hover:underline flex items-center gap-1"
                              >
                                <Award className="h-3 w-3" />
                                Certificate
                              </a>
                            )}
                            {activity.media.post && (
                              <a
                                href={activity.media.post}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary hover:underline flex items-center gap-1"
                              >
                                <Briefcase className="h-3 w-3" />
                                Post
                              </a>
                            )}
                            {activity.media.video && (
                              <a
                                href={activity.media.video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary hover:underline flex items-center gap-1"
                              >
                                <Calendar className="h-3 w-3" />
                                Video
                              </a>
                            )}
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

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary via-primary-glow to-accent py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-blue">
          <h3 className="text-3xl font-bold mb-4">Ready to Build the Future?</h3>
          <p className="text-lg mb-8 opacity-90">
            Follow my journey as AI SkillDev launches in October 2025
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white text-primary px-6 py-2 text-base hover:scale-105 transition-transform">
              <Rocket className="mr-2 h-5 w-5" />
              Coming Soon: AI SkillDev
            </Badge>
          </div>
        </div>
      </section>

      {/* Sticky Back Button */}
      <a
        href="/"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="Back to Main Page"
      >
        <ArrowLeft className="h-6 w-6" />
      </a>
    </div>
  );
}
