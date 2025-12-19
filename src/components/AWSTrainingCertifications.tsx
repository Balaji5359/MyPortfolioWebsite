import { useState } from "react";
import { Award, ExternalLink, Calendar, Shield, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import badge images
import sb1 from '/src/assets/AWS_TrainingBadges/AWS_SB_B1_CL01_87d9f1ba-9b5a-4bcb-b0f2-3910de7d68e7.png';
import sb2 from '/src/assets/AWS_TrainingBadges/AWS_SB_B2_CL01_56d0d0f8-56c7-49b1-ae44-0bba2ac31deb.png';
import sb3 from '/src/assets/AWS_TrainingBadges/AWS_SB_B3_CL01_70848990-7a8f-4b02-be84-b111e3aacd99.png';
import sb4 from '/src/assets/AWS_TrainingBadges/AWS_SB_B4_CL01_1dbd7196-f485-43a4-870b-077ac68fb291.png';
import sb5 from '/src/assets/AWS_TrainingBadges/AWS_SB_B5_CL01_83fe4335-4b2a-4637-b8ee-45853ef53ca4.png';
import sb6 from '/src/assets/AWS_TrainingBadges/AWS_SB_B6_CL01_a0f8f908-d800-44ac-a3c0-4b11f0dba8b0.png';
import sb7 from '/src/assets/AWS_TrainingBadges/AWS_SB_B7_CL01_8e1407c1-a6a7-4862-b3bc-9c1f74c4f420.png';
import sb8 from '/src/assets/AWS_TrainingBadges/AWS_SB_B8_CL01_460504f2-d472-4574-b4bc-0f218ae80160.png';
import sb9 from '/src/assets/AWS_TrainingBadges/AWS_SB_B9_CL01_c628e0e1-cba2-4b3b-b529-2e0838dfaa7c.png';
import sb10 from '/src/assets/AWS_TrainingBadges/AWS_SB_B10_CL01_c6da4509-3522-43bd-a30f-46197f583794.png';
import sb11 from '/src/assets/AWS_TrainingBadges/AWS_SB_B11_CL01_925d90eb-fdbf-40fe-ae5d-9198a7920339.png';
import sb12 from '/src/assets/AWS_TrainingBadges/AWS_SB_B12_CL01_fb6e61e3-1c0c-44cc-98b1-3710c8844a95.png';
import sb13 from '/src/assets/AWS_TrainingBadges/AWS_SB_B13_CL01_e16a9725-af16-48b7-91af-5ceb7e33a5b7.png';
import sb14 from '/src/assets/AWS_TrainingBadges/AWS_SB_B14_CL01_TE_f51be61b-7336-4e0f-a32d-26d5da6946ca.png';
import sb15 from '/src/assets/AWS_TrainingBadges/AWS_SB_B15_CL01_CE_22de1550-0f7a-4a5f-9696-87e09f7fc918.png';
import sb16 from '/src/assets/AWS_TrainingBadges/AWS_SB_B16_Bedrock_54d2ed58-30cf-4f13-8384-5769ec378432.png';
import sb17 from '/src/assets/AWS_TrainingBadges/AWS_SB_B17_Lex_bc2e0ded-4e31-430e-9bc5-c5f6a9b78ad5.png';
import sb18 from '/src/assets/AWS_TrainingBadges/AWS_SB_B18_Transcribe_54d2ed58-30cf-4f13-8384-5769ec378432.png';
import sb19 from '/src/assets/AWS_TrainingBadges/AWS_SB_B19_AI_assistBuilding_5b21bb76-23d8-43c7-88ce-9ee17ee3a5f9.png';
import sb20 from '/src/assets/AWS_TrainingBadges/AWS_SB_B20_Bedrock2_02b55b7f-4309-475e-b28a-e52efb7a6115.png';
import sb21 from '/src/assets/AWS_TrainingBadges/AWS_SB_B21_ML_Model_SM_6b4371ad-b906-442f-b35c-8af22722f79a.png';

// AWS AI Practitioner Badge imports
import aip22 from '/src/assets/AWS_TrainingBadges/AWS_SB_B22_AIP_Badge_.png';
import aip23 from '/src/assets/AWS_TrainingBadges/AWS_SB_B23_AIP_Badge_55193053-8200-4373-892c-941524cc5b6e.png';
import aip24 from '/src/assets/AWS_TrainingBadges/AWS_SB_B24_AIP_Badge_b18ee92c-b505-4a4d-b16e-0c36d0e1da23.png';
import aip25 from '/src/assets/AWS_TrainingBadges/AWS_SB_B25_AIP_Badge_357027af-48bf-4d8b-af9c-2e70ac054c14.png';
import aip26 from '/src/assets/AWS_TrainingBadges/AWS_SB_B26_AIP_Badge_4caacc7e-a608-4c01-82da-9e42c3b52199.png';
import aip27 from '/src/assets/AWS_TrainingBadges/AWS_SB_B27_AIP_Badge_c2bca3b7-5a18-4394-8421-3e872e9fadb5.png';
import aip28 from '/src/assets/AWS_TrainingBadges/AWS_SB_B28_AIP_Badge_659266fb-eae0-45ed-9c37-de52d5d85741.png';
import aip29 from '/src/assets/AWS_TrainingBadges/AWS_SB_B29_AIP_Badge_.png';
import aip30 from '/src/assets/AWS_TrainingBadges/AWS_SB_B30_AIP_Badge_10096bda-943e-4e42-9cd6-f3615ae390a0.png';
import aip31 from '/src/assets/AWS_TrainingBadges/AWS_SB_B31_AIP_Badge_c5498b47-2e29-4016-bbdd-7266c2a6ff34.png';
import aip32 from '/src/assets/AWS_TrainingBadges/AWS_SB_B32_AIP_Badge_c855a05d-b748-4189-ad74-d54a02e0fbb3.png';
import aip33 from '/src/assets/AWS_TrainingBadges/AWS_SB_B33_AIP_Badge_367c962e-a136-4f1a-b091-b69b1bced677.png';
import aip34 from '/src/assets/AWS_TrainingBadges/AWS_SB_B34_AIP_Badge_aef6e6db-b67a-401e-a70b-da965ec999a4.png';
import aip35 from '/src/assets/AWS_TrainingBadges/AWS_SB_B35_AIP_Badge_e89ebf2d-e1ef-4105-b26b-800517a2ab33.png';
import aip36 from '/src/assets/AWS_TrainingBadges/AWS_SB_B36_AIP_Badge_931647e6-19ce-4678-b433-e6976a639119.png';
import aip37 from '/src/assets/AWS_TrainingBadges/AWS_SB_B37_AIP_Badge_f3b66a69-bef1-47d6-ad44-345048426ecb.png';
import aip38 from '/src/assets/AWS_TrainingBadges/AWS_SB_B38_AIP_Badge_ada15459-9aae-4a78-904e-63e62074040c.png';
import aip39 from '/src/assets/AWS_TrainingBadges/AWS_SB_B39_AIP_Badge_46660159-bfc4-4e1d-9cc8-521629399441.png';
import aip40 from '/src/assets/AWS_TrainingBadges/AWS_SB_B40_AIP_Badge_d6fb0417-3a96-4eef-9d35-b51dfcea0c3c.png';

// AWS Educate Badge imports
import badge1 from '/src/assets/AWS_TrainingBadges/AWSEducateBagde1_CC101.png';
import badge2 from '/src/assets/AWS_TrainingBadges/AWSEducateBagde2_Storage.png';
import badge3 from '/src/assets/AWS_TrainingBadges/AWSEducateBagde3_Compute.png';
import badge4 from '/src/assets/AWS_TrainingBadges/AWSEducateBagde4_Networking.png';
import badge5 from '/src/assets/AWS_TrainingBadges/AWSEducateBagde5_Databases.png';
import badge6 from '/src/assets/AWS_TrainingBadges/AWSEducateBagde6_Serverless.png';
import badge7 from '/src/assets/AWS_TrainingBadges/AWSEducateBagde7_CloudOperations.png';
import badge8 from '/src/assets/AWS_TrainingBadges/AWSEducateBagde8_Security.png';
import badge9 from '/src/assets/AWS_TrainingBadges/AWSEducateBagde_GenAI.png';
import badge10 from '/src/assets/AWS_TrainingBadges/AWSEducateBagdeML_foundations.png';
import badge11 from '/src/assets/AWS_TrainingBadges/AWS Academy 2025(Aug).png';

// AWS Skill Builder Badge images
const awsSkillBuilderBadges = {
  sb1, sb2, sb3, sb4, sb5, sb6, sb7, sb8, sb9, sb10, sb11, sb12, sb13, sb14, sb15, sb16, sb17, sb18, sb19, sb20, sb21
};

// AWS AI Practitioner Badge images
const awsAIPractitionerBadges = {
  aip22, aip23, aip24, aip25, aip26, aip27, aip28, aip29, aip30, aip31, aip32, aip33, aip34, aip35, aip36, aip37, aip38, aip39, aip40
};

// AWS Educate Badge images
const awsEducateBadges = {
  badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8, badge9, badge10, badge11
};

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

// AWS Cloud Practitioner Exam Preparatory Badges (1-12)
const cpExamPrepBadges: Certification[] = [
  {
    id: 101,
    title: "CP Exam Prep Badge 1 - Cloud Concepts Domain",
    description: "Cloud Practitioner exam preparatory training focusing on cloud concepts domain. Covers fundamental cloud computing principles and AWS value proposition.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Cloud Concepts"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B1-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb1
  },
  {
    id: 102,
    title: "CP Exam Prep Badge 2 - Security & Compliance Domain",
    description: "Cloud Practitioner exam preparatory training for security and compliance domain. Essential preparation for AWS certification exam.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Security Domain"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B2-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb2
  },
  {
    id: 103,
    title: "CP Exam Prep Badge 3 - Technology Domain",
    description: "Cloud Practitioner exam preparatory training covering technology domain concepts and AWS core services for certification preparation.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Technology Domain"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B3-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb3
  },
  {
    id: 104,
    title: "CP Exam Prep Badge 4 - Billing & Pricing Domain",
    description: "Cloud Practitioner exam preparatory training for billing and pricing domain. Covers AWS pricing models and cost optimization strategies.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Billing & Pricing"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B4-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb4
  },
  {
    id: 105,
    title: "CP Exam Prep Badge 5 - Practice Exam Preparation",
    description: "Cloud Practitioner practice exam preparation with mock tests and exam simulation. Essential practice for AWS global certification exam.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Practice Exams"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B5-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb5
  },
  {
    id: 106,
    title: "CP Exam Prep Badge 6 - Exam Tips & Strategies",
    description: "Cloud Practitioner exam tips and test-taking strategies. Comprehensive preparation guidance for AWS certification success.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Exam Strategies"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B6-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb6
  },
  {
    id: 107,
    title: "CP Exam Prep Badge 7 - Core Services Deep Dive",
    description: "Cloud Practitioner exam preparatory training with deep dive into AWS core services. Domain-specific preparation for certification exam.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Core Services"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B7-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb7
  },
  {
    id: 108,
    title: "CP Exam Prep Badge 8 - Well-Architected Framework",
    description: "Cloud Practitioner exam preparation covering AWS Well-Architected Framework principles. Essential domain knowledge for certification.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Well-Architected"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B8-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb8
  },
  {
    id: 109,
    title: "CP Exam Prep Badge 9 - Getting Started Guide",
    description: "Cloud Practitioner exam getting started guide and foundational preparation. Initial steps for AWS global certification exam preparation.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Getting Started"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B9-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb9
  },
  {
    id: 110,
    title: "CP Exam Prep Badge 10 - Comprehensive Review",
    description: "Cloud Practitioner comprehensive exam review covering all domains. Final preparation phase for AWS certification exam.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Comprehensive Review"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B10-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb10
  },
  {
    id: 111,
    title: "CP Exam Prep Badge 11 - Advanced Practice Tests",
    description: "Cloud Practitioner advanced practice tests and exam simulation. Intensive practice preparation for AWS global certification exam.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Advanced Practice"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B11-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb11
  },
  {
    id: 112,
    title: "CP Exam Prep Badge 12 - Final Exam Readiness",
    description: "Cloud Practitioner final exam readiness assessment and preparation completion. Ready for AWS global certification exam.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Exam Readiness"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B12-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb12
  },
  {
    id: 113,
    title: "CP Exam Prep Badge 13 - Certification Path Completion",
    description: "Cloud Practitioner certification path completion badge. Final milestone in AWS global certification exam preparation journey.",
    skills: ["AWS Practice", "AWS Preparation for Global Certification Exam", "Certification Path"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B13-CP",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb13
  },
];

// AWS AI Practitioner Exam Preparatory Badges (22-40)
const aipExamPrepBadges: Certification[] = [
  {
    id: 201,
    title: "AI Exam Prep Badge 1 – AI & ML Foundations",
    description: "Covers the fundamental concepts of Artificial Intelligence and Machine Learning, including types of learning, common use cases, and the AI lifecycle.",
    skills: ["AI & ML fundamentals", "Supervised vs Unsupervised learning", "AI use-case identification", "AWS AI/ML overview"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B22-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip22
  },
  {
    id: 202,
    title: "AI Exam Prep Badge 2 – Machine Learning Concepts",
    description: "Focuses on core machine learning concepts such as features, labels, training, testing, and evaluation metrics.",
    skills: ["ML model basics", "Training & inference", "Model evaluation", "Data preparation concepts"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B23-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip23
  },
  {
    id: 203,
    title: "AI Exam Prep Badge 3 – Deep Learning & Neural Networks",
    description: "Introduces deep learning fundamentals, neural networks, and real-world applications like image and speech recognition.",
    skills: ["Neural network basics", "Deep learning concepts", "AI model architectures", "DL use cases"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B24-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip24
  },
  {
    id: 204,
    title: "AI Exam Prep Badge 4 – Natural Language Processing (NLP)",
    description: "Explains how machines understand and generate human language using NLP techniques.",
    skills: ["Text analysis concepts", "Sentiment analysis", "Language models", "NLP use cases"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B25-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip25
  },
  {
    id: 205,
    title: "AI Exam Prep Badge 5 – Computer Vision Basics",
    description: "Covers AI techniques used to analyze images and videos for detection, recognition, and classification.",
    skills: ["Image classification", "Object detection", "Facial recognition concepts", "Vision-based AI services"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B26-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip26
  },
  {
    id: 206,
    title: "AI Exam Prep Badge 6 – Generative AI Fundamentals",
    description: "Introduces Generative AI concepts including foundation models and content generation.",
    skills: ["Generative AI basics", "Foundation models", "Prompt concepts", "GenAI use cases"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B27-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip27
  },
  {
    id: 207,
    title: "AI Exam Prep Badge 7 – Amazon Bedrock Overview",
    description: "Focuses on Amazon Bedrock and how foundation models are accessed securely using AWS.",
    skills: ["Amazon Bedrock", "Foundation model usage", "Managed GenAI services", "Model selection"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B28-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip28
  },
  {
    id: 208,
    title: "AI Exam Prep Badge 8 – Prompt Engineering Basics",
    description: "Covers techniques to design effective prompts for better AI model responses.",
    skills: ["Prompt engineering", "Zero-shot & few-shot prompts", "Prompt optimization", "AI interaction design"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B29-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip29
  },
  {
    id: 209,
    title: "AI Exam Prep Badge 9 – Responsible AI",
    description: "Emphasizes ethical AI development including fairness, transparency, and accountability.",
    skills: ["Responsible AI principles", "Bias mitigation", "Explainable AI", "Ethical AI practices"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B30-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip30
  },
  {
    id: 210,
    title: "AI Exam Prep Badge 10 – AI Security Concepts",
    description: "Introduces security considerations when building and deploying AI systems on AWS.",
    skills: ["AI security risks", "Data protection", "Secure AI deployment", "Threat awareness"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B31-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip31
  },
  {
    id: 211,
    title: "AI Exam Prep Badge 11 – Privacy & Compliance in AI",
    description: "Covers data privacy, governance, and compliance requirements for AI workloads.",
    skills: ["Data privacy concepts", "Compliance awareness", "AI governance", "Regulatory understanding"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B32-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip32
  },
  {
    id: 212,
    title: "AI Exam Prep Badge 12 – AWS AI Services Overview",
    description: "Provides an overview of AWS managed AI services such as Rekognition, Comprehend, and Polly.",
    skills: ["AWS AI services", "Service selection", "AI integration", "Managed AI solutions"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B33-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip33
  },
  {
    id: 213,
    title: "AI Exam Prep Badge 13 – AI Use Case Selection",
    description: "Focuses on identifying the right AI solution for business problems.",
    skills: ["AI use-case evaluation", "Business problem mapping", "AI feasibility analysis", "Solution design"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B34-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip34
  },
  {
    id: 214,
    title: "AI Exam Prep Badge 14 – AI Model Lifecycle",
    description: "Covers the end-to-end lifecycle of AI models from data collection to deployment.",
    skills: ["Model lifecycle", "Training & deployment flow", "Monitoring basics", "AI operations concepts"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B35-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip35
  },
  {
    id: 215,
    title: "AI Exam Prep Badge 15 – Data for AI",
    description: "Explains the importance of data quality, labeling, and preparation for AI systems.",
    skills: ["Data quality concepts", "Data labeling", "Feature understanding", "AI data pipelines"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B36-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip36
  },
  {
    id: 216,
    title: "AI Exam Prep Badge 16 – AI Cost & Performance Optimization",
    description: "Focuses on cost management and performance considerations for AI workloads.",
    skills: ["AI cost optimization", "Performance trade-offs", "Resource planning", "Cost-aware AI design"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B37-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip37
  },
  {
    id: 217,
    title: "AI Exam Prep Badge 17 – Human-AI Interaction",
    description: "Covers how humans interact with AI systems and the importance of feedback loops.",
    skills: ["Human-in-the-loop AI", "AI feedback systems", "UX for AI", "Decision support"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B38-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip38
  },
  {
    id: 218,
    title: "AI Exam Prep Badge 18 – AI Monitoring & Improvement",
    description: "Introduces monitoring AI systems for accuracy, bias, and drift over time.",
    skills: ["Model monitoring", "Drift detection", "Continuous improvement", "AI performance tracking"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B39-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip39
  },
  {
    id: 219,
    title: "AI Exam Prep Badge 19 – AI Practitioner Exam Readiness",
    description: "Consolidates all exam domains and prepares learners for the AWS Certified AI Practitioner exam.",
    skills: ["Exam readiness", "Domain-wise revision", "AI concept integration", "Certification preparation"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B40-AIP",
    credentialUrl: "#",
    badgeImage: awsAIPractitionerBadges.aip40
  }
];

// AWS Skill Builder Specialized Training Badges (14-21)
const skillBuilderSpecializedBadges: Certification[] = [
  {
    id: 114,
    title: "AWS Technical Essentials",
    description: "Fundamental AWS technical concepts and hands-on experience with core services.",
    skills: ["AWS Fundamentals", "Technical Skills", "Cloud Basics"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B14-TE",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb14
  },
  {
    id: 115,
    title: "AWS Cloud Essentials",
    description: "Essential cloud computing concepts and AWS service fundamentals.",
    skills: ["Cloud Essentials", "AWS Services", "Cloud Computing"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B15-CE",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb15
  },
  {
    id: 116,
    title: "AWS Bedrock Foundations",
    description: "Generative AI and foundation models using Amazon Bedrock service.",
    skills: ["Amazon Bedrock", "Generative AI", "Foundation Models"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B16-Bedrock",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb16
  },
  {
    id: 117,
    title: "AWS Lex Conversational AI",
    description: "Building conversational interfaces and chatbots using Amazon Lex.",
    skills: ["Amazon Lex", "Conversational AI", "Chatbots"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B17-Lex",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb17
  },
  {
    id: 118,
    title: "AWS Transcribe Speech Recognition",
    description: "Speech-to-text conversion and audio processing using Amazon Transcribe.",
    skills: ["Amazon Transcribe", "Speech Recognition", "Audio Processing"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B18-Transcribe",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb18
  },
  {
    id: 119,
    title: "AWS AI Assistant Building",
    description: "Building intelligent AI assistants using AWS AI and ML services.",
    skills: ["AI Assistants", "AWS AI Services", "Intelligent Applications"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B19-AI-Assistant",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb19
  },
  {
    id: 120,
    title: "AWS Bedrock Advanced",
    description: "Advanced generative AI applications and custom model implementations.",
    skills: ["Advanced Bedrock", "Custom Models", "AI Applications"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B20-Bedrock2",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb20
  },
  {
    id: 121,
    title: "AWS SageMaker ML Models",
    description: "Machine learning model development and deployment using Amazon SageMaker.",
    skills: ["Amazon SageMaker", "ML Models", "Model Deployment"],
    issuedDate: "2024",
    credentialId: "AWS-SB-B21-SageMaker",
    credentialUrl: "#",
    badgeImage: awsSkillBuilderBadges.sb21
  }
];

// AWS Educate Certifications
const educateCertifications: Certification[] = [
  {
    id: 1,
    title: "AWS Educate Introduction to Cloud 101",
    description: "Completed Cloud Computing 101 training with required assessment scores. Demonstrated ability to create simple cloud applications in virtual lab environment with fundamental understanding of AWS cloud core services.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Cloud Computing", "Cloud Foundations"],
    issuedDate: "Oct 1, 2024",
    credentialId: "862e8e53-3047-4fe3-ab60-043dc1664c44",
    credentialUrl: "https://www.credly.com/badges/862e8e53-3047-4fe3-ab60-043dc1664c44/public_url",
    badgeImage: awsEducateBadges.badge1
  },
  {
    id: 2,
    title: "AWS Educate Getting Started with Storage",
    description: "Completed Getting Started with Storage training with required assessment scores. Demonstrated ability to describe storage solutions and use Amazon S3 to store and retrieve objects.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Storage Services"],
    issuedDate: "Oct 30, 2024",
    credentialId: "e7eada8f-88ae-46ba-a844-9e13fb38f299",
    credentialUrl: "https://www.credly.com/badges/e7eada8f-88ae-46ba-a844-9e13fb38f299/public_url",
    badgeImage: awsEducateBadges.badge2
  },
  {
    id: 3,
    title: "AWS Educate Getting Started with Compute",
    description: "Completed Getting Started with Compute training with required assessment scores. Demonstrated ability to describe different types of compute and use Amazon EC2 to create a compute instance.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Compute"],
    issuedDate: "Nov 7, 2024",
    credentialId: "10d19535-c901-44e9-96bb-503636a6332f",
    credentialUrl: "https://www.credly.com/badges/10d19535-c901-44e9-96bb-503636a6332f/public_url",
    badgeImage: awsEducateBadges.badge3
  },
  {
    id: 4,
    title: "AWS Educate Getting Started with Networking",
    description: "Completed Getting Started with Networking training with required assessment scores. Demonstrated ability to describe different ways to manage a network and how to use an Amazon VPC to do so.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Networking"],
    issuedDate: "Feb 27, 2025",
    credentialId: "73460360-df1b-4616-bc1c-3ab1fbc3def0",
    credentialUrl: "https://www.credly.com/badges/73460360-df1b-4616-bc1c-3ab1fbc3def0/public_url",
    badgeImage: awsEducateBadges.badge4
  },
  {
    id: 5,
    title: "AWS Educate Getting Started with Databases",
    description: "Completed Getting Started with Databases training with required assessment scores. Demonstrated ability to set up an Amazon Relational Database instance and how to use SQL commands to read and write to the database.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Databases"],
    issuedDate: "March 6, 2025",
    credentialId: "47024d3e-3cfe-4fa0-b705-c3767cd60cce",
    credentialUrl: "https://www.credly.com/badges/47024d3e-3cfe-4fa0-b705-c3767cd60cce/public_url",
    badgeImage: awsEducateBadges.badge5
  },
  {
    id: 6,
    title: "AWS Educate Getting Started with Serverless",
    description: "Completed Getting Started with Serverless training with required assessment scores. Demonstrated ability to describe how to configure an AWS Lambda function and identify services like Amazon SQS, SNS, and API Gateway to scale data.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "Serverless", "Serverless Computing"],
    issuedDate: "March 7, 2025",
    credentialId: "0961a6ac-5609-45e7-889e-05791bc35be3",
    credentialUrl: "https://www.credly.com/badges/0961a6ac-5609-45e7-889e-05791bc35be3/public_url",
    badgeImage: awsEducateBadges.badge6
  },
  {
    id: 7,
    title: "AWS Educate Getting Started with Cloud Ops",
    description: "Completed Getting Started with Cloud Operations training with required assessment scores. Demonstrated ability to define the Well-Architected Framework and identify how to use AWS services to manage AWS Cloud environment.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Cloud Ops", "Cloud Operations"],
    issuedDate: "March 10, 2025",
    credentialId: "07013e2f-e054-4106-b5cc-5e3c7a429eaf",
    credentialUrl: "https://www.credly.com/badges/07013e2f-e054-4106-b5cc-5e3c7a429eaf/public_url",
    badgeImage: awsEducateBadges.badge7
  },
  {
    id: 8,
    title: "AWS Educate Getting Started with Security",
    description: "Completed Getting Started with Security training with required assessment scores. Demonstrated ability to use AWS Identity and Access Management (AWS IAM) and identify additional AWS security services.",
    skills: ["Amazon Web Services (AWS)", "Cloud Security", "AWS Cloud"],
    issuedDate: "March 11, 2025",
    credentialId: "1b849edf-48fa-477f-aa4d-fe2c67fbedca",
    credentialUrl: "https://www.credly.com/badges/1b849edf-48fa-477f-aa4d-fe2c67fbedca/public_url",
    badgeImage: awsEducateBadges.badge8
  },
  {
    id: 9,
    title: "AWS Educate Introduction to Generative AI",
    description: "Completed Introduction to Generative Artificial Intelligence training with required assessment scores. Shown fundamental understanding in generative AI concepts, and demonstrated ability to define foundation models and discuss generative AI use cases.",
    skills: ["Amazon Web Services (AWS)", "AI", "AI and ML on AWS - Foundational", "AWS Cloud"],
    issuedDate: "Jul 21, 2025",
    credentialId: "1ca11f15-c11b-41de-8950-5b61e1d23e19",
    credentialUrl: "https://www.credly.com/badges/1ca11f15-c11b-41de-8950-5b61e1d23e19/public_url",
    badgeImage: awsEducateBadges.badge9
  },
  {
    id: 10,
    title: "AWS Educate Machine Learning Foundations",
    description: "Completed Machine Learning Foundations training with required assessment scores. Demonstrated ability to discuss fundamental concepts of machine learning and how to apply the machine learning pipeline to solve a business problem.",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "ML"],
    issuedDate: "Jul 21, 2025",
    credentialId: "5e9112bd-b0c8-4de7-92c7-503c4c3d1cc3",
    credentialUrl: "https://www.credly.com/badges/5e9112bd-b0c8-4de7-92c7-503c4c3d1cc3/public_url",
    badgeImage: awsEducateBadges.badge10
  },
  {
    id: 11,
    title: "AWS Academy Graduate - Cloud Foundations",
    description: "Completed AWS Academy Cloud Foundations course covering AWS Architecture, Cloud Services, Pricing, and Support.",
    skills: ["AWS Architecture", "AWS Cloud", "AWS Core Services", "AWS Pricing", "AWS Support"],
    issuedDate: "Aug 9, 2025",
    credentialId: "edb4e86e-9549-4876-a898-e052d06b9954",
    credentialUrl: "https://www.credly.com/badges/edb4e86e-9549-4876-a898-e052d06b9954/public_url",
    badgeImage: awsEducateBadges.badge11
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AWS training badges earned through hands-on learning, Labs, Simulation,Tutorials, Challenges, Games on services and Assessments
            </p>
          </div>



          {/* AWS AI Practitioner Exam Preparatory Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">AWS Exam Preparatory for AIP - AI Practitioner</h2>
              <p className="text-gray-600">AI Practitioner certification exam preparation badges - Comprehensive AI/ML training and exam readiness</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aipExamPrepBadges.map((cert, index) => (
                <Card 
                  key={cert.id}
                  className="group overflow-hidden border-2 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-white to-purple-50/30"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Badge Image - Left Side */}
                      <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-indigo-100 p-6 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 group-hover:scale-110 transition-transform duration-700" />
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
                          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors line-clamp-2">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                            {cert.description}
                          </p>

                          {/* Skills */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Shield className="h-4 w-4 text-purple-600" />
                              <span className="text-xs font-semibold text-gray-700">Skills</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {cert.skills.map((skill, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant="secondary" 
                                  className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
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
                            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 hover:gap-3 transition-all group/link"
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

          {/* AWS Cloud Practitioner Exam Preparatory Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">AWS Exam Preparatory for CP - Cloud Practitioner</h2>
              <p className="text-gray-600">Cloud Practitioner certification exam preparation badges - Domain-wise training and practice exams</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cpExamPrepBadges.map((cert, index) => (
                <Card 
                  key={cert.id}
                  className="group overflow-hidden border-2 hover:border-green-400 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-white to-green-50/30"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Badge Image - Left Side */}
                      <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-emerald-100 p-6 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 group-hover:scale-110 transition-transform duration-700" />
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
                          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                            {cert.description}
                          </p>

                          {/* Skills */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Shield className="h-4 w-4 text-green-600" />
                              <span className="text-xs font-semibold text-gray-700">Skills</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {cert.skills.map((skill, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant="secondary" 
                                  className="text-xs bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
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
                            className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 hover:gap-3 transition-all group/link"
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

          {/* AWS Skill Builder Specialized Training Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">AWS Skill Builder Specialized Training</h2>
              <p className="text-gray-600">Advanced AWS training badges for specialized services and technologies (Badges 14-21)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillBuilderSpecializedBadges.map((cert, index) => (
                <Card 
                  key={cert.id}
                  className="group overflow-hidden border-2 hover:border-orange-400 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-white to-orange-50/30"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Badge Image - Left Side */}
                      <div className="md:w-1/3 bg-gradient-to-br from-orange-100 to-red-100 p-6 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 group-hover:scale-110 transition-transform duration-700" />
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
                          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                            {cert.description}
                          </p>

                          {/* Skills */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Shield className="h-4 w-4 text-orange-600" />
                              <span className="text-xs font-semibold text-gray-700">Skills</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {cert.skills.map((skill, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant="secondary" 
                                  className="text-xs bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors"
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
                            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 hover:gap-3 transition-all group/link"
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

          {/* AWS Educate Badges Section */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">AWS Educate Badges</h2>
              <p className="text-gray-600">Foundational AWS training badges with hands-on labs and assessments</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educateCertifications.map((cert, index) => (
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
    </div>
  );
}
