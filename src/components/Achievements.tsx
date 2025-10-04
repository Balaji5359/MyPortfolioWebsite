// --- Third Year Images ---
const gateImages = [
  {
    src: '/src/assets/thirdyear/gate-image-MITS.jpg',
    caption: 'GATE DA Appreciation',
    alt: 'GATE DA Qualified Certificate',
  },
];

const sih2024Images = [
  {
    src: '/src/assets/thirdyear/sih2024-01.jpg',
    caption: 'SIH 2024 Team',
    alt: 'SIH 2024 Team',
  },
  {
    src: '/src/assets/thirdyear/sih2024-02.jpg',
    caption: 'SIH 2024 Project',
    alt: 'SIH 2024 Project',
  },
  {
    src: '/src/assets/thirdyear/sih2024-03.jpg',
    caption: 'SIH 2024 Demo',
    alt: 'SIH 2024 Demo',
  },
  {
    src: '/src/assets/thirdyear/sih2024-04.jpg',
    caption: 'SIH 2024 Presentation',
    alt: 'SIH 2024 Presentation',
  },
];

// --- Fourth Year Images ---
const startupChallengeImages = [
  { src: '/src/assets/fourthyear/startup-challenge-certificate-money.jpg', caption: 'Certificate & Prize', alt: 'Startup Challenge Certificate and Prize' },
  { src: '/src/assets/fourthyear/startup-challenge1.jpg', caption: 'Startup Challenge 1', alt: 'Startup Challenge 1' },
  { src: '/src/assets/fourthyear/startup-challenge2.jpg', caption: 'Startup Challenge 2', alt: 'Startup Challenge 2' },
  { src: '/src/assets/fourthyear/startup-challenge-poster.jpg', caption: 'Poster', alt: 'Startup Challenge Poster' },
  { src: '/src/assets/fourthyear/startup-idea-slide1.png', caption: 'Idea Slide 1', alt: 'Startup Idea Slide 1' },
  { src: '/src/assets/fourthyear/startup-idea-slide2.png', caption: 'Idea Slide 2', alt: 'Startup Idea Slide 2' },
  { src: '/src/assets/fourthyear/startup-challenge-environment1.jpg', caption: 'Environment 1', alt: 'Startup Challenge Environment 1' },
  { src: '/src/assets/fourthyear/startup-challenge-environment2.jpg', caption: 'Environment 2', alt: 'Startup Challenge Environment 2' },
  { src: '/src/assets/fourthyear/startup-challenge-environment3.jpg', caption: 'Environment 3', alt: 'Startup Challenge Environment 3' },
  { src: '/src/assets/fourthyear/startup-challenge-environment4.jpg', caption: 'Environment 4', alt: 'Startup Challenge Environment 4' },
  { src: '/src/assets/fourthyear/startup-challenge-environment5.jpg', caption: 'Environment 5', alt: 'Startup Challenge Environment 5' },
  { src: '/src/assets/fourthyear/startup-challenge-environment6.jpg', caption: 'Environment 6', alt: 'Startup Challenge Environment 6' },
  { src: '/src/assets/fourthyear/startup-challenge-environment7.jpg', caption: 'Environment 7', alt: 'Startup Challenge Environment 7' },
];

const sih5TeamsImages = [
  { src: '/src/assets/fourthyear/sih poster.jpg', caption: 'SIH Poster', alt: 'SIH Poster' },
  { src: '/src/assets/fourthyear/sih-department-level.jpg', caption: 'Department Level', alt: 'SIH Department Level' },
  { src: '/src/assets/fourthyear/sihmeeting.jpg', caption: 'SIH Meeting', alt: 'SIH Meeting' },
  { src: '/src/assets/fourthyear/Team01-group-image1.jpg', caption: 'Team 01', alt: 'Team 01 Group' },
  { src: '/src/assets/fourthyear/Team02-group-image1.jpg', caption: 'Team 02', alt: 'Team 02 Group 1' },
  { src: '/src/assets/fourthyear/Team02-group-image2.jpg', caption: 'Team 02', alt: 'Team 02 Group 2' },
  { src: '/src/assets/fourthyear/Team03-ar.jpg', caption: 'Team 03 AR', alt: 'Team 03 AR' },
  { src: '/src/assets/fourthyear/Team03-group-image1.jpg', caption: 'Team 03', alt: 'Team 03 Group 1' },
  { src: '/src/assets/fourthyear/Team03-group-image2.jpg', caption: 'Team 03', alt: 'Team 03 Group 2' },
  { src: '/src/assets/fourthyear/Team04-group-image1.jpg', caption: 'Team 04', alt: 'Team 04 Group 1' },
  { src: '/src/assets/fourthyear/Team04-group-image2.jpg', caption: 'Team 04', alt: 'Team 04 Group 2' },
  { src: '/src/assets/fourthyear/Team05-aibot.png', caption: 'Team 05 AI Bot', alt: 'Team 05 AI Bot' },
  { src: '/src/assets/fourthyear/Team05-group-image1.jpg', caption: 'Team 05', alt: 'Team 05 Group 1' },
  { src: '/src/assets/fourthyear/Team05-group-image2.jpg', caption: 'Team 05', alt: 'Team 05 Group 2' },
];

// --- Generic Carousel ---
function GenericCarousel({ images }: { images: { src: string; caption: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, images.length]);
  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  return (
    <div className="relative w-full max-w-3xl mx-auto">
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

const ThirdYearAchievements = () => (
  <div>
    <section className="bg-yellow-50 rounded-2xl p-8 mb-10 shadow-2xl border border-gray-200">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-yellow-700 tracking-wide">
        🎓 GATE DA Qualified in 2025
      </h3>
      <GenericCarousel images={gateImages} />
      <p className="mt-8 text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        Qualified <span className="font-semibold text-yellow-700">GATE 2025</span> in Data Science and Artificial Intelligence (DA) with a score of 366 and 30.33 marks. Achieved All India Rank (AIR) 7217. Received an appreciation letter and prize money from the College Principal and Dean, for this achievement.
      </p>
    </section>
    <section className="bg-blue-50 rounded-2xl p-8 mb-10 shadow-2xl border border-gray-200">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-blue-700 tracking-wide">
        🏆 SIH 2024 Finalist in College Level (Internal)
      </h3>
      <GenericCarousel images={sih2024Images} />
      <p className="mt-8 text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        Our team got selected in college level, on Internal Hackathon (SIH) and 1st at department level. Led a team and developed a website integrated with a chatbot for museum visitors to book tickets and access museum information.
      </p>
    </section>
  </div>
);

const FourthYearAchievements = () => (
  <div>
    <section className="bg-pink-50 rounded-2xl p-8 mb-10 shadow-2xl border border-gray-200">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-pink-700 tracking-wide">
        🚀 Secured First Prize in Startup Challenge at MITS University
      </h3>
      <GenericCarousel images={startupChallengeImages} />
    </section>
    <section className="bg-purple-50 rounded-2xl p-8 mb-10 shadow-2xl border border-gray-200">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-purple-700 tracking-wide">
        🏅 Won SIH 5 Teams at MITS University College Level (Internal)
      </h3>
      <GenericCarousel images={sih5TeamsImages} />
    </section>
  </div>
);
// --- Second Year Images ---
const cyberSecurityImages = [
  {
    src: '/src/assets/secondyear/cyber-pre-certificate-shield.jpg',
    caption: 'Certificate Shield',
    alt: 'Cyber Security Certificate Shield',
  },
  {
    src: '/src/assets/secondyear/cyber-pre-certificate.png',
    caption: 'Certificate',
    alt: 'Cyber Security Certificate',
  },
  {
    src: '/src/assets/secondyear/cyber-pre-image-newpaper1.jpg',
    caption: 'Newspaper Feature 1',
    alt: 'Cyber Security Newspaper 1',
  },
  {
    src: '/src/assets/secondyear/cyber-pre-image-newpaper2.jpg',
    caption: 'Newspaper Feature 2',
    alt: 'Cyber Security Newspaper 2',
  },
  {
    src: '/src/assets/secondyear/cyber-pre-image-newpaper3.jpg',
    caption: 'Newspaper Feature 3',
    alt: 'Cyber Security Newspaper 3',
  },
  {
    src: '/src/assets/secondyear/cyber-pre-image-newpaper4.jpg',
    caption: 'Newspaper Feature 4',
    alt: 'Cyber Security Newspaper 4',
  },
  {
    src: '/src/assets/secondyear/cyber-pre-image-newpaper5.jpg',
    caption: 'Newspaper Feature 5',
    alt: 'Cyber Security Newspaper 5',
  },
];

const scienceDayImages = [
  {
    src: '/src/assets/secondyear/scienceday-essay-certificate.png',
    caption: 'Essay Certificate',
    alt: 'Science Day Essay Certificate',
  },
  {
    src: '/src/assets/secondyear/scienceday-image.jpg',
    caption: 'HOD\'s and Vice-Principal',
    alt: 'Science Day Essay Prize Photo',
  },
  {
    src: '/src/assets/secondyear/scienceday-essay-photo.jpg',
    caption: 'Prize Photo',
    alt: 'Science Day Essay Prize Photo',
  },
];

// Carousel for Cyber Security
const CyberSecCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % cyberSecurityImages.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + cyberSecurityImages.length) % cyberSecurityImages.length);
  const next = () => setCurrent((prev) => (prev + 1) % cyberSecurityImages.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <motion.img
          key={cyberSecurityImages[current].src}
          src={cyberSecurityImages[current].src}
          alt={cyberSecurityImages[current].alt}
          loading="lazy"
          className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-contain bg-white transition-transform duration-300"
          initial={{ opacity: 0.7, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
        />
      </div>
      <div className="text-center mt-4">
        <span className="block text-lg text-gray-700 font-medium">{cyberSecurityImages[current].caption}</span>
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
        {cyberSecurityImages.map((_, idx) => (
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
};

// Carousel for Science Day Essay
const ScienceDayCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % scienceDayImages.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + scienceDayImages.length) % scienceDayImages.length);
  const next = () => setCurrent((prev) => (prev + 1) % scienceDayImages.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <motion.img
          key={scienceDayImages[current].src}
          src={scienceDayImages[current].src}
          alt={scienceDayImages[current].alt}
          loading="lazy"
          className="w-full h-[320px] sm:h-[400px] md:h-[420px] object-contain bg-white transition-transform duration-300"
          initial={{ opacity: 0.7, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
        />
      </div>
      <div className="text-center mt-4">
        <span className="block text-lg text-gray-700 font-medium">{scienceDayImages[current].caption}</span>
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
        {scienceDayImages.map((_, idx) => (
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
};

const SecondYearAchievements = () => (
  <div>
    <section className="bg-blue-50 rounded-2xl p-8 mb-10 shadow-2xl border border-gray-200">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-blue-700 tracking-wide">
        🥇 Paper Presentation 1st Prize in Cyber Security Event
      </h3>
      <CyberSecCarousel />
      <p className="mt-8 text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        <span className="font-semibold text-blue-700">Paper Presentation 1st Prize</span><br />
        Issued by Principal of MITS (Dr C.Yuvaraj sir) · Oct 2023<br />
        Associated with MADANAPALLE INSTITUTE OF TECHNOLOGY & SCIENCE<br />
        I'm glad to share my cyber security paper presentation certificate issued by our MITS principal on occasion of Cyber security Awareness day
      </p>
    </section>
    <section className="bg-green-50 rounded-2xl p-8 mb-10 shadow-2xl border border-gray-200">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-green-700 tracking-wide">
        📝 Essay Writing Competition 1st Prize on Science Day
      </h3>
      <ScienceDayCarousel />
      <p className="mt-8 text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        Happy moment to win first prize in essay writing and to be get appreciation on Science Day from HOD of Science Dept and Vice-Prinicipal
      </p>
    </section>
  </div>
);
// Carousel component for English Competition
const EngCompCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % engcompitationImages.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + engcompitationImages.length) % engcompitationImages.length);
  const next = () => setCurrent((prev) => (prev + 1) % engcompitationImages.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <motion.img
          key={engcompitationImages[current].src}
          src={engcompitationImages[current].src}
          alt={engcompitationImages[current].alt}
          loading="lazy"
          className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-contain bg-white transition-transform duration-300"
          initial={{ opacity: 0.7, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
        />
      </div>
      {/* Caption */}
      <div className="text-center mt-4">
        <span className="block text-lg text-gray-700 font-medium">{engcompitationImages[current].caption}</span>
      </div>
      {/* Navigation Buttons */}
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
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {engcompitationImages.map((_, idx) => (
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
};

const EnglishCompetition = () => (
  <section className="bg-blue-100 rounded-2xl p-8 mb-10 shadow-2xl border border-gray-200">
    <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-blue-700 tracking-wide">
      🏅 English Speaking Competition – College Level Runner Up
    </h3>
    <EngCompCarousel />
    <p className="mt-8 text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
      Secured <span className="font-semibold text-blue-700">2nd position</span> in the college English Speaking competition in Orientation Program at MITS. Head of English Department Mam appreciated with small gift, each moment captured below reflects the journey to victory!
    </p>
  </section>
);
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const chessImages = [
  {
    src: '/src/assets/firstyear/chess_compettion2.jpg',
    caption: 'Champion Move',
    alt: 'Chess competition champion move',
  },
  {
    src: '/src/assets/firstyear/chess_competation3.jpg',
    caption: 'Champion Move',
    alt: 'Chess competition champion move',
  },
  {
    src: '/src/assets/firstyear/chess_compettion.jpg',
    caption: 'Final Round',
    alt: 'Chess competition final round',
  },
  {
    src: '/src/assets/firstyear/chess-spokenEng_prizes.jpg',
    caption: 'Victory Moment',
    alt: 'Chess competition victory moment',
  },
];

const engcompitationImages = [
  {
    src: '/src/assets/firstyear/spoken_Eng_compettion.jpg ',
    caption: 'Champion Move',
    alt: 'Chess competition champion move',
  },
  {
    src: '/src/assets/firstyear/spoken_Eng_compettion2.jpg',
    caption: 'Final Round',
    alt: 'Chess competition final round',
  },
  {
    src: '/src/assets/firstyear/chess-spokenEng_prizes.jpg',
    caption: 'Victory Moment',
    alt: 'Chess competition victory moment',
  },
];

const firstYearAchievements = [
  {
    title: 'Chess Competition',
    description: 'Secured 1st position in the college Chess competition',
    images: chessImages.map((img) => img.src),
  },
  {
    title: 'Speaking Competition',
    description: 'Secured 2nd position in the college Speaking competitions',
    images: [
      '/src/assets/firstyear/spoken_Eng_compettion.jpg',
      '/src/assets/firstyear/spoken_Eng_compettion2.jpg',
    ],
  },
];


// Carousel component with auto-slide and manual controls
const ChessCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % chessImages.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + chessImages.length) % chessImages.length);
  const next = () => setCurrent((prev) => (prev + 1) % chessImages.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <motion.img
          key={chessImages[current].src}
          src={chessImages[current].src}
          alt={chessImages[current].alt}
          loading="lazy"
          className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-contain bg-white transition-transform duration-300"
          initial={{ opacity: 0.7, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
        />
      </div>
      {/* Caption */}
      <div className="text-center mt-4">
        <span className="block text-lg text-gray-700 font-medium">{chessImages[current].caption}</span>
      </div>
      {/* Navigation Buttons */}
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
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {chessImages.map((_, idx) => (
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
};

const ChessCompetition = () => (
  <section className="bg-red rounded-2xl p-8 mb-10 shadow-2xl border border-gray-200">
    <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-blue-700 tracking-wide">
      🏆 Chess Champion – College Level Winner
    </h3>
    <ChessCarousel />
    <p className="mt-8 text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
      Secured <span className="font-semibold text-blue-700">1st position</span> in the college Chess competition in Orientation Program at MITS.Dean of School appreciated with medal, each moment captured below reflects the journey to victory!
    </p>
  </section>
);

const Achievements = () => {
  const [activeYear, setActiveYear] = useState('First Year');

  const renderFirstYear = () => (
    <div>
      <ChessCompetition />
      <EnglishCompetition />
    </div>
  );

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-lg max-w-7xl mx-auto px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-700">My Achievements</h2>
      <div className="flex justify-center gap-4 mb-10">
        {['First Year', 'Second Year', 'Third Year', 'Fourth Year'].map((year) => (
          <Button
            key={year}
            variant={activeYear === year ? 'default' : 'outline'}
            onClick={() => setActiveYear(year)}
            className="capitalize"
          >
            {year}
          </Button>
        ))}
      </div>
      <div>
        {activeYear === 'First Year' && renderFirstYear()}
        {activeYear === 'Second Year' && <SecondYearAchievements />}
        {activeYear === 'Third Year' && <ThirdYearAchievements />}
        {activeYear === 'Fourth Year' && <FourthYearAchievements />}
        {['First Year','Second Year','Third Year','Fourth Year'].indexOf(activeYear) === -1 && (
          <div className="text-center text-gray-500 text-lg py-20">
            Achievements for {activeYear} are coming soon.
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
