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
import AWSSessionsEvents from '@/components/AWSSessionsEvents';
import AWSInPersonEvents from '@/components/AWSInPersonEvents';
import Experience from '@/components/Experience';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. Hero (includes open-to-work banner + About + Stats) */}
        <Hero />

        {/* 2. Experience */}
        <Experience />

        {/* 3. Projects */}
        <Projects />

        {/* 4. Skills */}
        <Skills />

        {/* 5. AWS Training Certifications Button */}
        <div id="aws-training-anchor" className="flex flex-col items-center gap-4 py-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-base transform hover:scale-105"
          >
            <Award className="h-6 w-6" />
            View My AWS Training Certifications
          </button>
          <a
            href="/aws-activities"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-base"
          >
            <Cloud className="h-6 w-6" />
            Explore My AWS Cloud Journey
          </a>
        </div>
        <AWSTrainingCertifications isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* 6. AWS Sessions & Events */}
        <AWSSessionsEvents />
        <AWSInPersonEvents />

        {/* 7. Conferences & Summits */}
        <Conferences_Summits />

        {/* 8. Achievements */}
        <Achievements />

        {/* 9. Extra Curricular */}
        <ExtraCurricular />

        {/* 10. Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
