import { useState, useEffect } from "react";
import { Calendar, MapPin, Users, ExternalLink, Sparkles, ChevronLeft, ChevronRight, X, Linkedin } from "lucide-react";
import { Button } from '@/components/ui/button';

// AISDLC / Kiro & AgentCore workshop (Orion)
import aiSdlc0 from '@/assets/AWS_Events_photos/AISDLC_WS 2026-03-25 at Bengluru-0.jpeg';
import aiSdlc1 from '@/assets/AWS_Events_photos/AISDLC_WS 2026-03-25 at Bengluru-1.jpeg';
import aiSdlc3 from '@/assets/AWS_Events_photos/AISDLC_WS 2026-03-25 at Bengluru-3.jpeg';
import aiSdlc4 from '@/assets/AWS_Events_photos/AISDLC_WS 2026-03-25 at Bengluru-4.jpeg';
import aiSdlc5 from '@/assets/AWS_Events_photos/AISDLC_WS 2026-03-25 at Bengluru-5.jpeg';
import aiSdlc6 from '@/assets/AWS_Events_photos/AISDLC_WS 2026-03-25 at Bengluru-6.jpeg';
import aiSdlc7 from '@/assets/AWS_Events_photos/AISDLC_WS 2026-03-25 at Bengluru-7.jpeg';

// Amazon QuickSuite workshop (Aquila)
import quickSuite0 from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-0.jpeg';
import quickSuite1 from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-1.jpeg';
import quickSuite1b from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-1.1.jpeg';
import quickSuite2 from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-2.jpeg';
import quickSuite3 from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-3.jpeg';
import quickSuite4 from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-4.jpeg';
import quickSuite5 from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-5.jpeg';
import quickSuite6 from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-6.jpeg';
import quickSuite7 from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-7.jpeg';
import quickSuite8 from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-8.jpeg';
import quickSuite8b from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-8.1.jpeg';
import quickSuite9 from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-9.jpeg';
import quickSuite9b from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-9.1.jpeg';
import quickSuite9c from '@/assets/AWS_Events_photos/AWS_Quicksuit_WS 2026-03-25 at Bengluru-9.2.jpeg';

type InPersonEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  organizers: string[];
  description: string;
  highlights: string[];
  linkedinUrl: string;
  images: string[];
  tags: string[];
};

const events: InPersonEvent[] = [
  {
    id: 'quicksuite-workshop',
    title: 'Unlock AI-Powered Productivity: Amazon QuickSuite Workshop',
    date: 'March 16, 2026',
    time: '10:30 AM – 2:30 PM IST',
    location: 'Amazon Development Center, Aquila, Bagmane Constellation Business Park, Bengaluru',
    organizers: ['Writeom Guha Roy – Sr. Solutions Architect, AWS', 'Ayush Sharma – GenAI Solutions Architect, AWS'],
    description:
      'Deep dive into QuickSuite for intelligent productivity systems with custom agents, analytics, flows, and governance best practices.',
    highlights: [
      'Built custom AI agents + connected data sources',
      'QuickSight analytics + Flows automation demos',
      'Responsible AI guardrails for enterprise rollouts',
      'Career & product discussions with AWS architects'
    ],
    linkedinUrl:
      'https://www.linkedin.com/posts/rrbalaji_aws-amazon-artificialintelligence-activity-7439382542199365632-OoGA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
    images: [
      quickSuite0,
      quickSuite1,
      quickSuite1b,
      quickSuite2,
      quickSuite3,
      quickSuite4,
      quickSuite5,
      quickSuite6,
      quickSuite7,
      quickSuite8,
      quickSuite8b,
      quickSuite9,
      quickSuite9b,
      quickSuite9c
    ],
    tags: [
      '#AWS',
      '#Amazon',
      '#ArtificialIntelligence',
      '#CloudComputing',
      '#GenAI',
      '#AWSStartups',
      '#LearningJourney',
      '#Innovation'
    ]
  },
  {
    id: 'ai-sdlc-kiro-agentcore',
    title: 'AI-Led SDLC with Kiro & Amazon Bedrock AgentCore',
    date: 'March 25, 2026',
    time: '10:00 AM GMT+5:30',
    location: 'Amazon Bagmane Orion, Ferns City Road, Bengaluru',
    organizers: ['Syed Wajid Kashani – Sr. Solutions Architect, AWS', 'Debapriyo Jogi – AWS Tech Consultant'],
    description:
      'Hands-on AI-SDLC workshop with AWS architects covering Kiro, AgentCore, and Bedrock-powered agent workflows plus startup feedback.',
    highlights: [
      'SDLC → AI-SDLC: designing intelligent delivery loops',
      'Kiro + AgentCore: orchestrating agents and workflows',
      'Live labs with Bedrock + feedback on my AI product roadmap',
      'Networking with AWS SA team and builders community'
    ],
    linkedinUrl:
      'https://www.linkedin.com/posts/rrbalaji_aws-cloudcomputing-generativeai-activity-7442799629546680320-bIvL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
    images: [aiSdlc0, aiSdlc1, aiSdlc3, aiSdlc4, aiSdlc5, aiSdlc6, aiSdlc7],
    tags: ['#AWS', '#CloudComputing', '#GenerativeAI', '#AI', '#LearningJourney', '#Networking', '#Tech', '#Innovation']
  }
];

const AWSInPersonEvents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [activeTitle, setActiveTitle] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images: string[], title: string, startIndex = 0) => {
    setActiveImages(images);
    setActiveTitle(title);
    setCurrentIndex(startIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) => {
      if (activeImages.length === 0) return prev;
      return direction === 'prev'
        ? (prev - 1 + activeImages.length) % activeImages.length
        : (prev + 1) % activeImages.length;
    });
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isModalOpen, activeImages.length]);

  return (
    <section
      id="aws-inperson-events"
      className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 dark:from-gray-900 dark:via-gray-900 dark:to-amber-900/20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              AWS In-Person Summits, Events and Workshops Attended
            </h2>
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
          {events.map((event) => (
            <div
              key={event.id}
              className="snap-center flex-shrink-0 w-full md:w-[900px] lg:w-[1100px] bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden border border-amber-100/70 dark:border-amber-900/40 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-[1.1fr,1fr]">
                <div className="relative">
                  <img
                    src={event.images[0]}
                    alt={event.title}
                    className="h-full w-full object-cover min-h-[260px] cursor-pointer"
                    loading="lazy"
                    onClick={() => openModal(event.images, event.title, 0)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex flex-wrap gap-2">
                      {event.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-white/90 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300 font-semibold">
                      <Sparkles className="h-4 w-4" />
                      <span>{event.title}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{event.description}</p>
                  </div>

                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                      <span>{event.date} · {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                      <span>{event.organizers.join(' | ')}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Key highlights</p>
                    <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200 list-disc list-inside">
                      {event.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                      <a href={event.linkedinUrl} target="_blank" rel="noreferrer">
                        Visit LinkedIn Post
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <div className="flex -space-x-2">
                      {event.images.slice(1, 4).map((image, idx) => (
                        <img
                          key={image}
                          src={image}
                          alt={`${event.title} ${idx + 2}`}
                          className="h-12 w-12 rounded-full border-2 border-white dark:border-gray-900 object-cover shadow cursor-pointer"
                          loading="lazy"
                          onClick={() => openModal(event.images, event.title, idx + 1)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 bg-white/15 hover:bg-white/25 text-white p-2 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-5xl px-6">
            <div className="flex items-center justify-between mb-4 text-white">
              <h3 className="text-lg font-semibold">{activeTitle}</h3>
              <span className="text-sm opacity-80">
                {currentIndex + 1} / {activeImages.length}
              </span>
            </div>
            <div className="relative bg-black/40 rounded-xl p-4 flex items-center justify-center">
              <img
                src={activeImages[currentIndex]}
                alt={`${activeTitle} ${currentIndex + 1}`}
                className="max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => navigate('prev')}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('next')}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AWSInPersonEvents;