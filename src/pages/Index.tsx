import { useState } from 'react';
import { Cloud, Award } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Achievements from '@/components/Achievements';
import ExtraCurricular from '@/components/ExtraCurricular';
import Conferences_Summits from '@/components/Conferences_Summits';
import AWSTrainingCertifications from '@/components/AWSTrainingCertifications';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="flex flex-col items-center gap-4 mt-8 mb-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-base transform hover:scale-105 animate-pulse-slow"
          >
            <Award className="h-6 w-6" />
            View My AWS Training Certifications
          </button>
          <a
            href="/aws-activities"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold py-5 px-10 rounded-full shadow-lg transition-all duration-400 text-base backdrop-blur-sm border border-blue-700/30"
          >
            <Cloud className="h-10 w-10" />
            Explore My AWS Cloud Journey
          </a>
        </div>
        <AWSTrainingCertifications isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Skills />
        <Projects />
        <Conferences_Summits />
        <Achievements />
        <ExtraCurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
