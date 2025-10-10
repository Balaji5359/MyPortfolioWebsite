import { Cloud } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Achievements from '@/components/Achievements';
import ExtraCurricular from '@/components/ExtraCurricular';
import Conferences_Summits from '@/components/Conferences_Summits';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="flex justify-center mt-8 mb-2">
          <a
            href="/aws-activities"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold py-5 px-10 rounded-full shadow-lg transition-all duration-400 text-base backdrop-blur-sm border border-blue-700/30"
          >
            <Cloud className="h-10 w-10" />
            Explore My AWS Journey
          </a>
        </div>
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
