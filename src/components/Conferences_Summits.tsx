import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

// Import images
import awsBuilders1 from "../assets/conferences_summits_Images/AWS_Builders2025_Conference1.png";
import awsBuilders2 from "../assets/conferences_summits_Images/AWS_Builders2025_Conference2.jpg";
import awsBuilders3 from "../assets/conferences_summits_Images/AWS_Builders2025_Conference3.jpg";
import awsBuilders4 from "../assets/conferences_summits_Images/AWS_Builders2025_Conference4.jpg";
import awsBuilders5 from "../assets/conferences_summits_Images/AWS_Builders2025_Conference5.jpg";

import awsSummitIndia1_1 from "../assets/conferences_summits_Images/AWS_Summit_India2025_1.1.jpg";
import awsSummitIndia1_2 from "../assets/conferences_summits_Images/AWS_Summit_India2025_1.2.png";
import awsSummitIndia2 from "../assets/conferences_summits_Images/AWS_Summit_India2025_2.png";
import awsSummitIndia3 from "../assets/conferences_summits_Images/AWS_Summit_India2025_3.png";
import awsSummitIndia3_1 from "../assets/conferences_summits_Images/AWS_Summit_India2025_3.1.png";
import awsSummitIndia4 from "../assets/conferences_summits_Images/AWS_Summit_India2025_4.png";
import awsSummitIndia5 from "../assets/conferences_summits_Images/AWS_Summit_India2025_5.png";
import awsSummitIndia6 from "../assets/conferences_summits_Images/AWS_Summit_India2025_6.png";
import awsSummitIndia7 from "../assets/conferences_summits_Images/AWS_Summit_India2025_7.png";

import awsSummitNY1 from "../assets/conferences_summits_Images/AWS_Summit_NewYork2025_1.png";
import awsSummitNY2 from "../assets/conferences_summits_Images/AWS_Summit_NewYork2025_2.png";
import awsSummitNY3 from "../assets/conferences_summits_Images/AWS_Summit_NewYork2025_3.png";
import awsSummitNY4 from "../assets/conferences_summits_Images/AWS_Summit_NewYork2025_4.png";
import awsSummitNY5 from "../assets/conferences_summits_Images/AWS_Summit_NewYork2025_5.png";
import awsSummitNY6 from "../assets/conferences_summits_Images/AWS_Summit_NewYork2025_6.png";
import awsSummitNY7 from "../assets/conferences_summits_Images/AWS_Summit_NewYork2025_7.png";
import awsSummitNY8 from "../assets/conferences_summits_Images/AWS_Summit_NewYork2025_8.png";
import awsSummitNY9 from "../assets/conferences_summits_Images/AWS_Summit_NewYork2025_9.png";

import awsomeday1 from "../assets/conferences_summits_Images/AWSomeDay_Coference1.jpg";
import awsomeday2 from "../assets/conferences_summits_Images/AWSomeDay_Coference2.jpg";
import awsomeday3 from "../assets/conferences_summits_Images/AWSomeDay_Coference3.jpg";
import awsomeday4 from "../assets/conferences_summits_Images/AWSomeDay_Coference4.jpg";
import awsomeday5 from "../assets/conferences_summits_Images/AWSomeDay_Coference5.jpg";

import suSummit1 from "../assets/conferences_summits_Images/SU_Summit2025_Offline1.jpg";
import suSummit2 from "../assets/conferences_summits_Images/SU_Summit2025_Offline2.jpg";
import suSummit3 from "../assets/conferences_summits_Images/SU_Summit2025_Offline3.jpg";
import suSummit4 from "../assets/conferences_summits_Images/SU_Summit2025_Offline4.jpg";
import suSummit5 from "../assets/conferences_summits_Images/SU_Summit2025_Offline5.jpg";
import suSummit6 from "../assets/conferences_summits_Images/SU_Summit2025_Offline6.jpg";
import suSummit7 from "../assets/conferences_summits_Images/SU_Summit2025_Offline7.jpg";
import suSummit8 from "../assets/conferences_summits_Images/SU_Summit2025_Offline8.jpg";
import suSummit9 from "../assets/conferences_summits_Images/SU_Summit2025_Offline9.jpg";
import suSummit10 from "../assets/conferences_summits_Images/SU_Summit2025_Offline10.jpg";
import suSummit11 from "../assets/conferences_summits_Images/SU_Summit2025_Offline11.jpg";
import suSummit12 from "../assets/conferences_summits_Images/SU_Summit2025_Offline12.jpg";
import suSummit13 from "../assets/conferences_summits_Images/SU_Summit2025_Offline13.jpg";
import suSummit14 from "../assets/conferences_summits_Images/SU_Summit2025_Offline14.jpg";
import suSummit15 from "../assets/conferences_summits_Images/SU_Summit2025_Offline15.jpg";
import suSummit16 from "../assets/conferences_summits_Images/SU_Summit2025_Offline16.jpg";
import suSummit17 from "../assets/conferences_summits_Images/SU_Summit2025_Offline17.jpg";
import suSummit18 from "../assets/conferences_summits_Images/SU_Summit2025_Offline18.jpg";

// AWS re:Invent Images
import reinvent0_1 from "../assets/conferences_summits_Images/image0 (1).png";
import reinvent0_2 from "../assets/conferences_summits_Images/image0 (2).png";
import reinvent0_3 from "../assets/conferences_summits_Images/image0 (3).png";
import reinvent1 from "../assets/conferences_summits_Images/image1.png";
import reinvent2 from "../assets/conferences_summits_Images/image2.png";
import reinvent3 from "../assets/conferences_summits_Images/image3.png";
import reinvent4 from "../assets/conferences_summits_Images/image4.png";
import reinvent5 from "../assets/conferences_summits_Images/image5.png";
import reinvent6 from "../assets/conferences_summits_Images/image6.png";
import reinvent7 from "../assets/conferences_summits_Images/image7.png";
import reinvent8 from "../assets/conferences_summits_Images/image8.png";
import reinvent9 from "../assets/conferences_summits_Images/image9.png";
import reinvent10 from "../assets/conferences_summits_Images/image10.png";
import reinvent11 from "../assets/conferences_summits_Images/image11.png";
import reinvent12 from "../assets/conferences_summits_Images/image12.png";
import reinvent13 from "../assets/conferences_summits_Images/image13.png";
import reinvent14 from "../assets/conferences_summits_Images/image14.png";
import reinvent15 from "../assets/conferences_summits_Images/image15.png";
import reinvent16 from "../assets/conferences_summits_Images/image16.jpg";
import reinvent17 from "../assets/conferences_summits_Images/image17.jpg";
import reinvent18 from "../assets/conferences_summits_Images/image18.jpg";
import reinvent19 from "../assets/conferences_summits_Images/image19.jpg";
import reinvent20 from "../assets/conferences_summits_Images/image20.png";

const conferences = [
  {
    title: "AWS re:Invent 2025 – Las Vegas (Online Live)",
    description: "My Learning Journey from AWS re:Invent (Dec 1–5) | 5 Days of Deep AI Agents & AWS Insights. After getting notification from AWS, I made a conscious decision to learn deeply, document everything, and reflect on every insight shared by industry leaders. The AWS re:Invent event was not just a conference for me — it was a mindset shift towards AWS and Agentic AI. Every session added clarity to how AI, Agents, and Cloud-native systems are shaping the future. Keynotes by AWS CEO and Dr Swami Shiva Subramanyam were the most impactful moments, emphasizing thinking beyond tools, building AI systems with responsibility, scalability, and trust, and why Agents are the future of enterprise automation.",
    images: [
      { src: reinvent0_1, caption: 'AWS re:Invent Opening', alt: 'AWS re:Invent Opening' },
      { src: reinvent1, caption: 'AI Agents Core Components', alt: 'AI Agents Architecture' },
      { src: reinvent2, caption: 'Amazon Bedrock & Nova', alt: 'Amazon Bedrock Services' },
      { src: reinvent3, caption: 'AWS Lambda & S3 Insights', alt: 'AWS Core Services' },
      { src: reinvent4, caption: 'Database & Security Hub', alt: 'AWS Database Services' },
      { src: reinvent5, caption: 'DevOps Agent Excellence', alt: 'DevOps Best Practices' },
      { src: reinvent6, caption: 'AI Factory Concept', alt: 'AI Factory Architecture' },
      { src: reinvent7, caption: 'Nova Lite & Pro Models', alt: 'Amazon Nova Models' },
      { src: reinvent8, caption: 'Bring Your Own Data', alt: 'Custom Model Training' },
      { src: reinvent9, caption: 'Agent Memory & Learning', alt: 'Agent Memory Systems' },
      { src: reinvent10, caption: 'Agent Evaluation Methods', alt: 'Agent Performance Metrics' },
      { src: reinvent11, caption: 'Reinforcement Fine-tuning', alt: 'Model Improvement' },
      { src: reinvent12, caption: 'AWS Security Framework', alt: 'Security Best Practices' },
      { src: reinvent13, caption: 'Event-driven Architecture', alt: 'Serverless Architecture' },
      { src: reinvent14, caption: 'Intelligent Tiering S3', alt: 'S3 Storage Optimization' },
      { src: reinvent15, caption: 'Multi-modal Reasoning', alt: 'AI Reasoning Capabilities' },
      { src: reinvent16, caption: 'Learning Documentation', alt: 'Knowledge Capture' },
      { src: reinvent17, caption: 'Deep Learning Notes', alt: 'Technical Documentation' },
      { src: reinvent18, caption: 'Architecture Insights', alt: 'System Architecture' },
      { src: reinvent19, caption: 'AI Innovation Roadmap', alt: 'Future Technology Trends' },
      { src: reinvent20, caption: 'Complete Learning Journey', alt: 'Comprehensive Learning' }
    ],
    linkedinUrl: "https://www.linkedin.com/posts/rrbalaji_my-learning-journey-from-aws-re-invent-activity-7406399733306527744-4v32?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE"
  },
  {
    title: "Singularity Summit India 2025 – Bengaluru",
    description: "A dream turned reality! I had the incredible opportunity to attend the Singularity Summit India offline at the Sheraton Grand, Bengaluru. The summit was a powerhouse of innovation, featuring global leaders in AI, robotics, blockchain, AR/VR, and humanoid tech. Grateful to Dr. Dinesh K and MITS University for this transformative experience in tech, entrepreneurship, and leadership. Energized by deep discussions, global networking, and immersive learning—this summit marked a milestone in my journey toward future tech impact.",
    images: [
      { src: suSummit1, caption: 'At SU Summit', alt: 'At SU Summit' },
      { src: suSummit2, caption: 'SU Summit Bengaluru', alt: 'SU Summit Bengaluru' },
      { src: suSummit10, caption: 'SU Summit Bengaluru Entrance', alt: 'SU Summit Image 3' },
      { src: suSummit4, caption: 'SU Summit Inside', alt: 'SU Summit Inside' },
      { src: suSummit6, caption: 'SU Summit Inside', alt: 'SU Summit Inside' },
      { src: suSummit17, caption: 'Goodies at SU Summit', alt: 'SU Summit Image 17' },
      { src: suSummit8, caption: 'Snacks Time', alt: 'SU Summit Image 8' },
      { src: suSummit15, caption: 'Snacks Time', alt: 'SU Summit Image 15' },
      { src: suSummit16, caption: 'Lunch at Bengaluru', alt: 'SU Summit Image 13' },
      { src: suSummit9, caption: 'SU Summit Inside  ', alt: 'SU Summit Image 9' },
      { src: suSummit11, caption: 'Sharaton grand Hotel view', alt: 'SU Summit Image 11' },
      { src: suSummit12, caption: 'Our HOD', alt: 'SU Summit Image 12' },
      { src: suSummit13, caption: 'SU Summit Dept Team', alt: 'SU Summit Image 13' },
      { src: suSummit18, caption: 'SU Summit MITS Team', alt: 'SU Summit Image 18' }
    ],
    linkedinUrl: "https://www.linkedin.com/posts/rrbalaji_singularitysummitindia-techinnovation-ai-activity-7367418280665370624-nmBV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE"
  },
  {
    title: "AWS Builders 2025 Conference",
    description: "Attended the AWS Builders Online Series was a game-changer in my tech journey. The hands-on knowledge in agent building and scaling empowered me to transform my pre-final year AI agent project. Grateful to AWS Events and Training for the innovation, inspiration, and the $25 credit boost—fueling real-world impact through cloud-powered solutions",
    images: [
      { src: awsBuilders1, caption: 'AWS Builders Image 1', alt: 'AWS Builders Image 1' },
      { src: awsBuilders2, caption: 'AWS Builders Image 2', alt: 'AWS Builders Image 2' },
      { src: awsBuilders3, caption: 'AWS Builders Image 3', alt: 'AWS Builders Image 3' },
      { src: awsBuilders4, caption: 'AWS Builders Image 4', alt: 'AWS Builders Image 4' },
      { src: awsBuilders5, caption: 'AWS Builders Image 5', alt: 'AWS Builders Image 5' }
    ],
    linkedinUrl: "https://www.linkedin.com/posts/rrbalaji_attendance-certificate-and-project-header-activity-7363996192046755843-jDWp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE"
  },
  {
    title: "AWS Summit New York 2025",
    description: "Explored cutting-edge AWS services and met industry leaders at the New York Summit, discussing the future of AI Agent, AWS new service launched to help AI Agent Developers, Agentic core sub-service, it is a great opportunity to be part got great insights from AI Agent Leaders, President at New York.",
    images: [
      { src: awsSummitNY1, caption: 'AWS Summit NY Image 1', alt: 'AWS Summit NY Image 1' },
      { src: awsSummitNY2, caption: 'AWS Summit NY Image 2', alt: 'AWS Summit NY Image 2' },
      { src: awsSummitNY3, caption: 'AWS Summit NY Image 3', alt: 'AWS Summit NY Image 3' },
      { src: awsSummitNY4, caption: 'AWS Summit NY Image 4', alt: 'AWS Summit NY Image 4' },
      { src: awsSummitNY5, caption: 'AWS Summit NY Image 5', alt: 'AWS Summit NY Image 5' },
      { src: awsSummitNY6, caption: 'AWS Summit NY Image 6', alt: 'AWS Summit NY Image 6' },
      { src: awsSummitNY7, caption: 'AWS Summit NY Image 7', alt: 'AWS Summit NY Image 7' },
      { src: awsSummitNY8, caption: 'AWS Summit NY Image 8', alt: 'AWS Summit NY Image 8' },
      { src: awsSummitNY9, caption: 'AWS Summit NY Image 9', alt: 'AWS Summit NY Image 9' }
    ],
    linkedinUrl: "https://www.linkedin.com/posts/rrbalaji"
  },
  {
    title: "AWS Summit 2025 – Igniting Innovation with Cloud & Generative AI",
    description: "The AWS Summit 2025 at Bengaluru and Mumbai was a transformative experience, offering deep dives into cloud-native architectures, Generative AI, and scalable infrastructure. From witnessing real-world impact through government initiatives like Poshan Tracker and Digilocker, to exploring cutting-edge hardware like AWS Graviton 4 and Trainium 2, the summit showcased the future of intelligent systems. I gained hands-on insights into foundational models, multi-agent systems, and RAG pipelines—knowledge that’s already fueling my startup journey.",
    images: [
      { src: awsSummitIndia1_1, caption: 'AWS Summit India Image 1.1', alt: 'AWS Summit India Image 1.1' },
      { src: awsSummitIndia1_2, caption: 'AWS Summit India Image 1.2', alt: 'AWS Summit India Image 1.2' },
      { src: awsSummitIndia2, caption: 'AWS Summit India Image 2', alt: 'AWS Summit India Image 2' },
      { src: awsSummitIndia3, caption: 'AWS Summit India Image 3', alt: 'AWS Summit India Image 3' },
      { src: awsSummitIndia3_1, caption: 'AWS Summit India Image 3.1', alt: 'AWS Summit India Image 3.1' },
      { src: awsSummitIndia4, caption: 'AWS Summit India Image 4', alt: 'AWS Summit India Image 4' },
      { src: awsSummitIndia5, caption: 'AWS Summit India Image 5', alt: 'AWS Summit India Image 5' },
      { src: awsSummitIndia6, caption: 'AWS Summit India Image 6', alt: 'AWS Summit India Image 6' },
      { src: awsSummitIndia7, caption: 'AWS Summit India Image 7', alt: 'AWS Summit India Image 7' }
    ],
    linkedinUrl: "https://www.linkedin.com/posts/rrbalaji_awssummit2025-generativeai-cloudcomputing-activity-7345041595219460096-tLjI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE"
  },
  {
    title: "AWSome Day Conference 2024",
    description: "Attended the AWSome Day Online Conference and gained hands-on insights into cloud computing fundamentals, AWS services like EC2, Lambda, S3, and DynamoDB, and their role in building scalable, serverless applications. Explored how to deploy ML and Generative AI models on the cloud, and discovered innovative use cases across IoT, AI/ML, and web development. Grateful to AWS for the knowledge, inspiration, and the $25 credit to kickstart real-world projects.",
    images: [
      { src: awsomeday1, caption: 'AWSome Day Image 1', alt: 'AWSome Day Image 1' },
      { src: awsomeday2, caption: 'AWSome Day Image 2', alt: 'AWSome Day Image 2' },
      { src: awsomeday3, caption: 'AWSome Day Image 3', alt: 'AWSome Day Image 3' },
      { src: awsomeday4, caption: 'AWSome Day Image 4', alt: 'AWSome Day Image 4' },
      { src: awsomeday5, caption: 'AWSome Day Image 5', alt: 'AWSome Day Image 5' }
    ],
    linkedinUrl: "https://www.linkedin.com/posts/rrbalaji_awsomeconference-activity-7217086601628114946--y23?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE"
  }
];

// --- Generic Carousel ---
function GenericCarousel({ images }: { images: { src: string; caption: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0);
  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  return (
    <div className="relative w-full max-w-10xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <motion.img
          key={images[current].src}
          src={images[current].src}
          alt={images[current].alt}
          loading="lazy"
          className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-contain bg-white transition-transform duration-300"
          initial={{ opacity: 0.7, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
        />
      </div>
      <div className="text-center mt-4">
        <span className="block text-lg text-gray-700 font-medium">{images[current].caption}</span>
      </div>
      <button
        aria-label="Previous image"
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/90 border border-gray-300 rounded-full p-2 shadow hover:bg-blue-100 hover:scale-105 transition z-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Next image"
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/90 border border-gray-300 rounded-full p-2 shadow hover:bg-blue-100 hover:scale-105 transition z-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full transition border border-blue-300 ${
              idx === current ? 'bg-blue-500' : 'bg-gray-200 hover:bg-blue-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const Conferences_Summits = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Conferences and Summits Attended</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {conferences.map((conference, index) => (
          <Card key={index} className={`shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-xl overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}>
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <CardTitle className="text-2xl font-bold">{conference.title}</CardTitle>
              <CardDescription className="text-blue-100 mt-2">{conference.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <GenericCarousel images={conference.images} />
              <div className="flex justify-center mt-6">
                <Button
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open(conference.linkedinUrl, '_blank')}
                >
                  View LinkedIn Post
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Conferences_Summits;
