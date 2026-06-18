import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Calendar, Users, ArrowLeft, ArrowRight } from 'lucide-react';

import dsImage1 from '@/assets/AWS_sessions/DS_Session_Image1_23-12-25.jpg';
import dsImage2 from '@/assets/AWS_sessions/DS_Session_Image2_23-12-25.jpg';
import dsImage3 from '@/assets/AWS_sessions/DS_Session_Image3_23-12-25.jpg';
import dsImage4 from '@/assets/AWS_sessions/DS_Session_Image4_23-12-25.jpg';
import dsImage5 from '@/assets/AWS_sessions/DS_Session_Image5_23-12-25.jpg';
import skillBeeImage0 from '@/assets/AWS_sessions/Skill_BeeClub_Session_Image0_29-12-25.jpg';
import skillBeeImage1 from '@/assets/AWS_sessions/Skill_BeeClub_Session_Image1_29-12-25.jpg';
import skillBeeImage2 from '@/assets/AWS_sessions/Skill_BeeClub_Session_Image2_29-12-25.jpg';
import skillBeeImage3 from '@/assets/AWS_sessions/Skill_BeeClub_Session_Image3_29-12-25.jpg';
import skillBeeImage4 from '@/assets/AWS_sessions/Skill_BeeClub_Session_Image4_29-12-25.jpg';
import skillBeeImage5 from '@/assets/AWS_sessions/Skill_BeeClub_Session_Image5_29-12-25.jpg';
import dept2ndImage0 from '@/assets/AWS_sessions/Dept_2nd_Session_Image0.jpeg';
import dept2ndImage1 from '@/assets/AWS_sessions/Dept_2nd_Session_Image1.jpeg';
import dept2ndImage2 from '@/assets/AWS_sessions/Dept_2nd_Session_Image2.jpeg';
import dept2ndImage3 from '@/assets/AWS_sessions/Dept_2nd_Session_Image3.jpeg';
import dept3rdImage1 from '@/assets/AWS_sessions/Dept_3rd_Session_Image1.jpeg';
import dept3rdImage2 from '@/assets/AWS_sessions/Dept_3rd_Session_Image2.jpeg';
import dept3rdImage3 from '@/assets/AWS_sessions/Dept_3rd_Session_Image3.jpeg';
import dept3rdImage4 from '@/assets/AWS_sessions/Dept_3rd_Session_Image4.jpeg';
import dept3rdImage5 from '@/assets/AWS_sessions/Dept_3rd_Session_Image5.jpeg';
import dept3rdImage6 from '@/assets/AWS_sessions/Dept_3rd_Session_Image6.jpeg';
import dept3rdImage7 from '@/assets/AWS_sessions/Dept_3rd_Session_Image7.jpeg';
import dept3rdImage8 from '@/assets/AWS_sessions/Dept_3rd_Session_Image8.jpeg';

const rawEventsData = [
  {
    id: 'ds-session',
    title: 'AWS Session for Data Science Students',
    organizer: 'Data Science Department',
    date: '23-12-2025',
    description:
      'Delivered an inspiring AWS session to 100+ Data Science students, sharing my cloud journey and motivating them to pursue AWS certifications.',
    linkedInPost:
      'Sharing My AWS Journey to Inspire many Future Cloud Enthusiasts. Data Science HOD invited me to give a session on AWS and global certification to their students.',
    images: [dsImage1, dsImage2, dsImage3, dsImage4, dsImage5],
  },
  {
    id: 'skillbee-session',
    title: 'Skill Bee Club — AWS Workshop',
    organizer: 'Skill Bee Club',
    date: '29-12-2025',
    description:
      'Conducted a comprehensive AWS workshop for all interested students in the university, organized by Skill Bee Club, covering cloud fundamentals and practical applications.',
    linkedInPost:
      'From a Curious Beginner to Addressing the many on AWS. Honored to deliver a college-level workshop on Amazon Web Services, addressing students across the university.',
    images: [skillBeeImage0, skillBeeImage1, skillBeeImage2, skillBeeImage3, skillBeeImage4, skillBeeImage5],
  },
  {
    id: 'cst-2nd-year-department-event',
    title: '3rd Year CST Department — AWS, AI & DevOps Session',
    organizer: 'CST Department',
    date: '03-01-2026',
    description:
      'Delivered an in-depth session for 3rd-year CST students, highlighting AWS learning pathways, certifications, AI/DevOps project workflows, and practical cloud adoption steps.',
    linkedInPost:
      'An insightful and memorable day with strong student engagement, deep curiosity, and requests for more sessions. Thankful to HOD Dr Dinesh K and the event coordinator for the opportunity.',
    images: [dept3rdImage1, dept3rdImage2, dept3rdImage3, dept3rdImage4, dept3rdImage5, dept3rdImage6, dept3rdImage7, dept3rdImage8],
  },
  {
    id: 'cst-department-event',
    title: '2nd Year CST Department — AWS & Cloud Career Guidance',
    organizer: 'CST Department',
    date: '05-02-2026',
    description:
      'Guided juniors through AWS foundations, cloud learning roadmaps, certifications, and live demos of EC2, S3, Bedrock, global certifications and projects.',
    linkedInPost:
      'Guiding juniors on AWS, cloud, global certifications, and my personal learning journey. Covered AWS basics, project insights, AI demos, and real-world industry use cases with 60+ active students.',
    images: [dept2ndImage0, dept2ndImage1, dept2ndImage2, dept2ndImage3],
  },
];

const parseEventDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).getTime();
};

const eventsData = [...rawEventsData].sort(
  (a, b) => parseEventDate(b.date) - parseEventDate(a.date)
);

/* ─── Image Modal ─── */
interface ModalProps {
  event: (typeof eventsData)[0];
  startIndex: number;
  onClose: () => void;
  onNavigateEvent: (dir: 'prev' | 'next') => void;
}

const ImageModal = ({ event, startIndex, onClose, onNavigateEvent }: ModalProps) => {
  const [idx, setIdx] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setIdx((i) => (i === 0 ? event.images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === event.images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    setIdx(startIndex);
  }, [event.id, startIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [event]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col"
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (diff > 50) next();
        else if (diff < -50) prev();
        touchStartX.current = null;
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 shrink-0">
        <div className="flex gap-2">
          <button
            onClick={() => onNavigateEvent('prev')}
            className="bg-white/15 hover:bg-white/25 text-white p-2 rounded-full transition-colors"
            aria-label="Previous event"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => onNavigateEvent('next')}
            className="bg-white/15 hover:bg-white/25 text-white p-2 rounded-full transition-colors"
            aria-label="Next event"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <span className="text-white/60 text-sm">
          {idx + 1} / {event.images.length}
        </span>
        <button
          onClick={onClose}
          className="bg-white/15 hover:bg-white/25 text-white p-2 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Image */}
      <div className="relative flex-1 flex items-center justify-center px-10 min-h-0">
        <img
          key={idx}
          src={event.images[idx]}
          alt={`${event.title} — photo ${idx + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none"
          draggable={false}
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/35 text-white p-2 sm:p-3 rounded-full transition-colors touch-manipulation"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/35 text-white p-2 sm:p-3 rounded-full transition-colors touch-manipulation"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 py-3 shrink-0">
        {event.images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-white scale-125' : 'bg-white/40'}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="px-4 pb-4 shrink-0">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 text-white">
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-1 text-xs text-white/70">
            <span className="flex items-center gap-1"><Users className="h-3 w-3" />{event.organizer}</span>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{event.date}</span>
          </div>
          <p className="text-sm font-semibold leading-snug line-clamp-2">{event.title}</p>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
const AWSSessionsEvents = () => {
  const [activeEventIdx, setActiveEventIdx] = useState(0);
  const [modalEventIdx, setModalEventIdx] = useState<number | null>(null);
  const [modalStartImg, setModalStartImg] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const openModal = (eventIdx: number, imgIdx = 0) => {
    setModalEventIdx(eventIdx);
    setModalStartImg(imgIdx);
  };
  const closeModal = () => setModalEventIdx(null);

  const navigateModalEvent = (dir: 'prev' | 'next') => {
    setModalEventIdx((prev) => {
      if (prev === null) return null;
      return dir === 'prev'
        ? (prev - 1 + eventsData.length) % eventsData.length
        : (prev + 1) % eventsData.length;
    });
    setModalStartImg(0);
  };

  // Horizontal scroll helpers
  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: idx * w, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.clientWidth;
    const pos = scrollRef.current.scrollLeft;
    setScrollPos(pos);
    setActiveEventIdx(Math.round(pos / w));
  };

  const canScrollLeft = scrollPos > 4;
  const canScrollRight = scrollRef.current
    ? scrollPos < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 4
    : true;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" id="aws-sessions">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            AWS Sessions &amp; Events
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Sharing my AWS journey — cloud learning, services, projects, and global certifications — through
            sessions and workshops with students across departments.
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="relative">
          {/* Prev arrow — hidden on mobile (use dots instead) */}
          <button
            onClick={() => scrollTo(activeEventIdx - 1)}
            disabled={!canScrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 items-center justify-center bg-white dark:bg-gray-800 shadow-lg rounded-full text-gray-700 dark:text-gray-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollTo(activeEventIdx + 1)}
            disabled={!canScrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 items-center justify-center bg-white dark:bg-gray-800 shadow-lg rounded-full text-gray-700 dark:text-gray-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-2"
          >
            {eventsData.map((event, eventIdx) => (
              <div
                key={event.id}
                className="snap-center flex-shrink-0 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* ── Mobile: stacked layout ── */}
                <div className="flex flex-col lg:flex-row">

                  {/* Image side */}
                  <div
                    className="relative w-full lg:w-1/2 cursor-pointer group"
                    onClick={() => openModal(eventIdx, 0)}
                  >
                    <img
                      src={event.images[0]}
                      alt={`${event.title} — main`}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium">Click to view gallery</span>
                    </div>
                    {/* Image count badge */}
                    <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {event.images.length} photos
                    </span>
                  </div>

                  {/* Content side */}
                  <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col gap-4">

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full">
                        <Users className="h-3 w-3" /> {event.organizer}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-full">
                        <Calendar className="h-3 w-3" /> {event.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-snug">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Thumbnail strip */}
                    <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                      {event.images.slice(1, 5).map((img, i) => (
                        <button
                          key={i}
                          onClick={() => openModal(eventIdx, i + 1)}
                          className="relative group overflow-hidden rounded-lg aspect-square focus:outline-none focus:ring-2 focus:ring-blue-500"
                          aria-label={`View photo ${i + 2}`}
                        >
                          <img
                            src={img}
                            alt={`${event.title} — ${i + 2}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                          {/* +N overlay on last thumb if more images exist */}
                          {i === 3 && event.images.length > 5 && (
                            <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                              <span className="text-white text-xs sm:text-sm font-bold">+{event.images.length - 5}</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* LinkedIn quote */}
                    <div className="mt-auto bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 sm:p-4 border-l-4 border-blue-500">
                      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">
                        "{event.linkedInPost}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {eventsData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeEventIdx
                    ? 'w-6 h-3 bg-blue-600 dark:bg-blue-400'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                }`}
                aria-label={`Go to event ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalEventIdx !== null && (
        <ImageModal
          event={eventsData[modalEventIdx]}
          startIndex={modalStartImg}
          onClose={closeModal}
          onNavigateEvent={navigateModalEvent}
        />
      )}
    </section>
  );
};

export default AWSSessionsEvents;
