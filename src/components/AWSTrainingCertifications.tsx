import { useState } from "react";
import { Award, ExternalLink, Calendar, Shield, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Badge images
const badge1 = '/src/assets/AWS_TrainingBadges/AWSEducateBagde1_CC101.png';
const badge2 = '/src/assets/AWS_TrainingBadges/AWSEducateBagde2_Storage.png';
const badge3 = '/src/assets/AWS_TrainingBadges/AWSEducateBagde3_Compute.png';
const badge4 = '/src/assets/AWS_TrainingBadges/AWSEducateBagde4_Networking.png';
const badge5 = '/src/assets/AWS_TrainingBadges/AWSEducateBagde5_Databases.png';
const badge6 = '/src/assets/AWS_TrainingBadges/AWSEducateBagde6_Serverless.png';
const badge7 = '/src/assets/AWS_TrainingBadges/AWSEducateBagde7_CloudOperations.png';
const badge8 = '/src/assets/AWS_TrainingBadges/AWSEducateBagde8_Security.png';
const badge10 = '/src/assets/AWS_TrainingBadges/AWSEducateBagdeML_foundations.png';
const badge9 = '/src/assets/AWS_TrainingBadges/AWSEducateBagde_GenAI.png';
const badge11 = '/src/assets/AWS_TrainingBadges/AWS Academy 2025(Aug).png';

interface Certification {
  id: number;
  title: string;
  description: string;
  skills: string[];
  issuedDate: string;
  credentialId: string;
  credentialUrl: string;
  badgeImage: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Educate Introduction to Cloud 101",
    description: "Completed Cloud Computing 101 training with required assessment scores. Demonstrated ability to create simple cloud applications in virtual lab environment with fundamental understanding of AWS cloud core services.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Cloud Computing", "Cloud Foundations"],
    issuedDate: "Oct 1, 2024",
    credentialId: "862e8e53-3047-4fe3-ab60-043dc1664c44",
    credentialUrl: "https://www.credly.com/badges/862e8e53-3047-4fe3-ab60-043dc1664c44/public_url",
    badgeImage: badge1
  },
  {
    id: 2,
    title: "AWS Educate Getting Started with Storage",
    description: "Completed Getting Started with Storage training with required assessment scores. Demonstrated ability to describe storage solutions and use Amazon S3 to store and retrieve objects.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Storage Services"],
    issuedDate: "Oct 30, 2024",
    credentialId: "e7eada8f-88ae-46ba-a844-9e13fb38f299",
    credentialUrl: "https://www.credly.com/badges/e7eada8f-88ae-46ba-a844-9e13fb38f299/public_url",
    badgeImage: badge2
  },
  {
    id: 3,
    title: "AWS Educate Getting Started with Compute",
    description: "Completed Getting Started with Compute training with required assessment scores. Demonstrated ability to describe different types of compute and use Amazon EC2 to create a compute instance.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Compute"],
    issuedDate: "Nov 7, 2024",
    credentialId: "10d19535-c901-44e9-96bb-503636a6332f",
    credentialUrl: "https://www.credly.com/badges/10d19535-c901-44e9-96bb-503636a6332f/public_url",
    badgeImage: badge3
  },
  {
    id: 4,
    title: "AWS Educate Getting Started with Networking",
    description: "Completed Getting Started with Networking training with required assessment scores. Demonstrated ability to describe different ways to manage a network and how to use an Amazon VPC to do so.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Networking"],
    issuedDate: "Feb 27, 2025",
    credentialId: "73460360-df1b-4616-bc1c-3ab1fbc3def0",
    credentialUrl: "https://www.credly.com/badges/73460360-df1b-4616-bc1c-3ab1fbc3def0/public_url",
    badgeImage: badge4
  },
  {
    id: 5,
    title: "AWS Educate Getting Started with Databases",
    description: "Completed Getting Started with Databases training with required assessment scores. Demonstrated ability to set up an Amazon Relational Database instance and how to use SQL commands to read and write to the database.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Databases"],
    issuedDate: "March 6, 2025",
    credentialId: "47024d3e-3cfe-4fa0-b705-c3767cd60cce",
    credentialUrl: "https://www.credly.com/badges/47024d3e-3cfe-4fa0-b705-c3767cd60cce/public_url",
    badgeImage: badge5
  },
  {
    id: 6,
    title: "AWS Educate Getting Started with Serverless",
    description: "Completed Getting Started with Serverless training with required assessment scores. Demonstrated ability to describe how to configure an AWS Lambda function and identify services like Amazon SQS, SNS, and API Gateway to scale data.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "Serverless", "Serverless Computing"],
    issuedDate: "March 7, 2025",
    credentialId: "0961a6ac-5609-45e7-889e-05791bc35be3",
    credentialUrl: "https://www.credly.com/badges/0961a6ac-5609-45e7-889e-05791bc35be3/public_url",
    badgeImage: badge6
  },
  {
    id: 7,
    title: "AWS Educate Getting Started with Cloud Ops",
    description: "Completed Getting Started with Cloud Operations training with required assessment scores. Demonstrated ability to define the Well-Architected Framework and identify how to use AWS services to manage AWS Cloud environment.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Cloud Ops", "Cloud Operations"],
    issuedDate: "March 10, 2025",
    credentialId: "07013e2f-e054-4106-b5cc-5e3c7a429eaf",
    credentialUrl: "https://www.credly.com/badges/07013e2f-e054-4106-b5cc-5e3c7a429eaf/public_url",
    badgeImage: badge7
  },
  {
    id: 8,
    title: "AWS Educate Getting Started with Security",
    description: "Completed Getting Started with Security training with required assessment scores. Demonstrated ability to use AWS Identity and Access Management (AWS IAM) and identify additional AWS security services.",
    skills: ["Amazon Web Services (AWS)", "Cloud Security", "AWS Cloud"],
    issuedDate: "March 11, 2025",
    credentialId: "1b849edf-48fa-477f-aa4d-fe2c67fbedca",
    credentialUrl: "https://www.credly.com/badges/1b849edf-48fa-477f-aa4d-fe2c67fbedca/public_url",
    badgeImage: badge8
  },
  {
    id: 9,
    title: "AWS Educate Introduction to Generative AI",
    description: "Completed Introduction to Generative Artificial Intelligence training with required assessment scores. Shown fundamental understanding in generative AI concepts, and demonstrated ability to define foundation models and discuss generative AI use cases.",
    skills: ["Amazon Web Services (AWS)", "AI", "AI and ML on AWS - Foundational", "AWS Cloud"],
    issuedDate: "Jul 21, 2025",
    credentialId: "1ca11f15-c11b-41de-8950-5b61e1d23e19",
    credentialUrl: "https://www.credly.com/badges/1ca11f15-c11b-41de-8950-5b61e1d23e19/public_url",
    badgeImage: badge9
  },
  {
    id: 10,
    title: "AWS Educate Machine Learning Foundations",
    description: "Completed Machine Learning Foundations training with required assessment scores. Demonstrated ability to discuss fundamental concepts of machine learning and how to apply the machine learning pipeline to solve a business problem.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "ML"],
    issuedDate: "Jul 21, 2025",
    credentialId: "5e9112bd-b0c8-4de7-92c7-503c4c3d1cc3",
    credentialUrl: "https://www.credly.com/badges/5e9112bd-b0c8-4de7-92c7-503c4c3d1cc3/public_url",
    badgeImage: badge10
  },
  {
    id: 11,
    title: "AWS Academy Graduate - Cloud Foundations",
    description: "Completed AWS Academy Cloud Foundations course covering AWS Architecture, Cloud Services, Pricing, and Support.",
    skills: ["AWS Architecture", "AWS Cloud", "AWS Core Services", "AWS Pricing", "AWS Support"],
    issuedDate: "Aug 9, 2025",
    credentialId: "edb4e86e-9549-4876-a898-e052d06b9954",
    credentialUrl: "https://www.credly.com/badges/edb4e86e-9549-4876-a898-e052d06b9954/public_url",
    badgeImage: badge11
  }
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AWSTrainingCertifications({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="overflow-y-auto max-h-[90vh] p-6 md:p-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-6 py-2 text-base bg-blue-100 text-blue-700 border-blue-200">
              <Award className="mr-4 h-10 w-15" />
              <h1>My AWS Training & Certifications</h1>
            </Badge>
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My AWS Training Certifications
            </h2><br></br> */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AWS training badges earned through hands-on learning, Labs, Simulation,Tutorials, Challenges, Games on services and Assessments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id}
              className="group overflow-hidden border-2 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50/30"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Badge Image - Left Side */}
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 group-hover:scale-110 transition-transform duration-700" />
                    <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <img 
                        src={cert.badgeImage} 
                        alt={cert.title}
                        className="w-full h-auto max-w-[180px] drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Content - Right Side */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-blue-600" />
                          <span className="text-xs font-semibold text-gray-700">Skills</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t pt-4 mt-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{cert.issuedDate}</span>
                        </div>
                      </div>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-3 transition-all group/link"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Credential
                        <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
