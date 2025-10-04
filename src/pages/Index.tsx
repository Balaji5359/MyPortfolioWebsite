import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Achievements from '@/components/Achievements';
import ExtraCurricular from '@/components/ExtraCurricular';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <ExtraCurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
