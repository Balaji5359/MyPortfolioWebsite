import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Calendar, Users, ArrowLeft, ArrowRight } from 'lucide-react';

// Import images
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

// Event data with metadata extracted from filenames
const rawEventsData = [
  {
    id: 'ds-session',
    title: 'AWS Session for Data Science Students',
    organizer: 'Data Science Department',
    date: '23-12-2025',
    description: 'Delivered an inspiring AWS session to 100+ Data Science students, sharing my cloud journey and motivating them to pursue AWS certifications.',
    linkedInPost: 'Sharing My AWS Journey to Inspire many Future Cloud Enthusiasts. Data Science HOD invited me to give a session on AWS and global certification to their students.',
    images: [
      dsImage1,
      dsImage2,
      dsImage3,
      dsImage4,
      dsImage5
    ]
  },
  {
    id: 'skillbee-session',
    title: 'Skill Bee Club - AWS Workshop',
    organizer: 'Skill Bee Club',
    date: '29-12-2025',
    description: 'Conducted a comprehensive AWS workshop for all interested students in the university, organized by Skill Bee Club, covering cloud fundamentals and practical applications.',
    linkedInPost: 'From a Curious Beginner to Addressing the many on AWS. Honored to deliver a college-level workshop on Amazon Web Services, addressing students across the university.',
    images: [
      skillBeeImage0,
      skillBeeImage1,
      skillBeeImage2,
      skillBeeImage3,
      skillBeeImage4,
      skillBeeImage5
    ]
  },
  {
    id: 'cst-department-event',
    title: '2nd year CST Department Event - AWS & Cloud Career Guidance',
    organizer: 'CST Department',
    date: '05-02-2026',
    description: 'Guided juniors through AWS foundations, cloud learning roadmaps, certifications, and live demos of EC2, S3, Bedrock, global certifications and some projects.',
    linkedInPost: 'Guiding juniors on AWS, cloud, global certifications, and my personal learning journey. Covered AWS basics, project insights, AI demos, and real-world industry use cases with 60+ active students.',
    images: [
      dept2ndImage0,
      dept2ndImage1,
      dept2ndImage2,
      dept2ndImage3
    ]
  },
  {
    id: 'cst-2nd-year-department-event',
    title: '3nd Year CST Department Event - AWS, AI & DevOps Session',
    organizer: 'CST Department',
    date: '03-01-2026',
    description: 'Delivered an in-depth department event for 3nd-year CST students, highlighting AWS learning pathways, certifications, AI/DevOps project workflows, and practical cloud adoption steps.',
    linkedInPost: 'An insightful and memorable day with strong student engagement, deep curiosity, and requests for more sessions and a multi-day workshop. Thankful to HOD Dr Dinesh K and the event coordinator for the opportunity.',
    images: [
      dept3rdImage1,
      dept3rdImage2,
      dept3rdImage3,
      dept3rdImage4,
      dept3rdImage5,
      dept3rdImage6,
      dept3rdImage7,
      dept3rdImage8
    ]
  }
];

const parseEventDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).getTime();
};

const eventsData = [...rawEventsData].sort(
  (a, b) => parseEventDate(b.date) - parseEventDate(a.date)
);

const AWSSessionsEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openModal = (eventId: string, imageIndex: number = 0) => {
    setSelectedEvent(eventId);
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedEvent) return;
    const event = eventsData.find(e => e.id === selectedEvent);
    if (!event) return;

    if (direction === 'prev') {
      setCurrentImageIndex(prev => prev === 0 ? event.images.length - 1 : prev - 1);
    } else {
      setCurrentImageIndex(prev => prev === event.images.length - 1 ? 0 : prev + 1);
    }
  };

  const navigateEvent = (direction: 'prev' | 'next') => {
    const currentIndex = eventsData.findIndex(e => e.id === selectedEvent);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? eventsData.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === eventsData.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedEvent(eventsData[newIndex].id);
    setCurrentImageIndex(0);
  };

  // Scroll navigation functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth;
      const newPosition = Math.max(0, scrollPosition - cardWidth);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newPosition = Math.min(maxScroll, scrollPosition + cardWidth);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  // Update scroll position on scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  // Touch handlers for swipe navigation in scroll container
  const handleContainerTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleContainerTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleContainerTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      scrollRight();
    } else if (isRightSwipe) {
      scrollLeft();
    }
  };

  // Touch handlers for swipe navigation in modal
  // Touch handlers for swipe navigation in modal
  const handleModalTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleModalTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleModalTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigateImage('next');
    } else if (isRightSwipe) {
      navigateImage('prev');
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards(prev => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, selectedEvent]);

  const selectedEventData = selectedEvent ? eventsData.find(e => e.id === selectedEvent) : null;

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" id="aws-sessions">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AWS Sessions & Events
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interactive storytelling of my AWS journey <br></br>(Learning, services, Projects and Global Certifications) through sessions and workshops to students of all backgrounds and departments.
          </p>
        </div>

        <div className="relative">
          {/* Scroll Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={scrollPosition <= 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={scrollContainerRef.current && scrollPosition >= (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth)}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Horizontal Scrolling Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide px-12 py-4"
            onScroll={handleScroll}
            onTouchStart={handleContainerTouchStart}
            onTouchMove={handleContainerTouchMove}
            onTouchEnd={handleContainerTouchEnd}
          >
            {eventsData.map((event, eventIndex) => (
              <div
                key={event.id}
                ref={(el) => (cardRefs.current[eventIndex] = el)}
                className="flex-shrink-0 w-full lg:w-full bg-white dark:bg-gray-800 shadow-2xl mx-3"
              >
              <div className="flex flex-col lg:flex-row">
                {/* RIGHT SIDE - Featured Image */}
                <div 
                    className="lg:w-1/2 relative group cursor-pointer hover:scale-[1.02] transition-transform
                              lg:pt-10 xl:pt-12"
                    onClick={() => {
                      setSelectedEvent(event.id);
                      setCurrentImageIndex(0);
                      setIsModalOpen(true);
                    }}
                  >
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={event.images[0]}
                      alt={`${event.title} - Main`}
                      className="w-full h-64 lg:h-80 object-cover"
                      loading="lazy"
                    />
                  </div>


                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="text-sm font-medium">Click to view gallery</p>
                  </div>
                </div>

                {/* LEFT SIDE - Content */}
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <Users className="h-4 w-4" />
                        <span className="text-sm font-medium">{event.organizer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {event.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-4 gap-2 mb-6">
                      {event.images.slice(1, 5).map((image, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer overflow-hidden rounded-lg"
                          onClick={() => openModal(event.id, index + 1)}
                        >
                          <img
                            src={image}
                            alt={`${event.title} - ${index + 2}`}
                            className="w-full h-16 object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LinkedIn Post Highlight */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                      "{event.linkedInPost}"
                    </p>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {eventsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const targetPosition = index * scrollContainerRef.current.clientWidth;
                    scrollContainerRef.current.scrollTo({ left: targetPosition, behavior: 'smooth' });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(scrollPosition / (scrollContainerRef.current?.clientWidth || 1)) === index
                    ? 'bg-blue-600 dark:bg-blue-400' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))
            }
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedEventData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-modal-fade-in">
          <div className="relative w-full h-full max-w-6xl max-h-screen p-4 animate-scale-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Event Navigation */}
            <div className="absolute top-6 left-6 z-10 flex gap-2">
              <button
                onClick={() => navigateEvent('prev')}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigateEvent('next')}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Main Image */}
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onTouchStart={handleModalTouchStart}
              onTouchMove={handleModalTouchMove}
              onTouchEnd={handleModalTouchEnd}
            >
              <img
                src={selectedEventData.images[currentImageIndex]}
                alt={`${selectedEventData.title} - ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-image-zoom select-none"
                key={currentImageIndex}
                draggable={false}
              />

              {/* Image Navigation */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-colors duration-200 touch-manipulation"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-colors duration-200 touch-manipulation"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            {/* Event Info */}
            <div className="absolute bottom-2 md:bottom-6 left-2 md:left-6 right-2 md:right-6 bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-6 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <Users className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">{selectedEventData.organizer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">{selectedEventData.date}</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{selectedEventData.title}</h3>
              <p className="text-xs md:text-sm opacity-90 line-clamp-2 md:line-clamp-none">{selectedEventData.description}</p>
              <div className="mt-1 md:mt-2 text-xs opacity-75">
                Image {currentImageIndex + 1} of {selectedEventData.images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AWSSessionsEvents;
