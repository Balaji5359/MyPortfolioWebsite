import React from 'react';

import { motion } from 'framer-motion';


const extracurrData = [
  {
    year: 'Second Year',
    activities: [
      {
        title: 'Activities in HackerRank',
        description: 'Apart from Academics, I actively participated in coding challenges on HackerRank, earning multiple certificates in Python, Problem Solving, and SQL to enhance my programming skills.',
        images: [
          '/src/assets/extra_curr_images/2ndyear_HackerRank1.jpg',
          '/src/assets/extra_curr_images/2ndyear_HackerRank2.png',
          '/src/assets/extra_curr_images/2ndyear_HackerRank3.jpg',
          '/src/assets/extra_curr_images/2ndyear_HackerRank4.jpg',
          '/src/assets/extra_curr_images/2ndyear_HackerRank5.jpg',
        ],
      },
    ],
  },
  {
    year: 'Third Year',
    activities: [
      {
        title: 'Seminar on AWS Cloud and EC2 Service',
        description: 'Presented a seminar on AWS Cloud, basics of Cloud Computing, detailed insights into EC2 services and practically demonstrating their usage, enhancing my understanding of cloud technologies.',
        images: [
          '/src/assets/extra_curr_images/3rdyear_EC2_seminar1.jpg',
          '/src/assets/extra_curr_images/3rdyear_EC2_seminar2.jpg',
          '/src/assets/extra_curr_images/3rdyear_EC2_seminar3.jpg',
          '/src/assets/extra_curr_images/3rdyear_EC2_seminar4.jpg',
          '/src/assets/extra_curr_images/3rdyear_EC2_seminar5.jpg',
        ],
      },
      {
        title: 'Activities in GFG',
        description: 'To gain more knowledge on coding and problem solving, apart from labs programs solved some hundreds of problems on GeeksforGeeks and participated in various coding competitions hosted by GFG.',
        images: [
          '/src/assets/extra_curr_images/3rdyear_GFG1.jpg',
          '/src/assets/extra_curr_images/3rdyear_GFG2.jpg',
          '/src/assets/extra_curr_images/3rdyear_GFG3.jpg',
          '/src/assets/extra_curr_images/3rdyear_GFG5.jpg',
          '/src/assets/extra_curr_images/3rdyear_GFG14.jpg',
        ],
      },
      {
        title: 'School Events Volunteering',
        description: 'Volunteered and organized various school-level events and activities.Guided students about carrer, college applications, and extracurricular involvement to help them make informed decisions about their futures.',
        images: [
          '/src/assets/extra_curr_images/3rdyear_schoolEvent1.jpg',
          '/src/assets/extra_curr_images/3rdyear_schoolEvent2.jpg',
          '/src/assets/extra_curr_images/3rdyear_schoolEvent3.jpg',
          '/src/assets/extra_curr_images/3rdyear_schoolEvent3.1.jpg',
          '/src/assets/extra_curr_images/3rdyear_schoolEvent4.jpg',
          '/src/assets/extra_curr_images/3rdyear_schoolEvent5.jpg',
          '/src/assets/extra_curr_images/3rdyear_schoolEvent6.jpg',
        ],
      },
      {
        title: 'Attended Soft Skills Workshop',
        description: 'Attended soft skills workshops to enhance communication, teamwork, and leadership abilities.Involved actively with Dr.M.Prathima Mam and learned many new things which helped me to improve my personality and communication skills, and build connection with them.',
        images: [
          '/src/assets/extra_curr_images/3rdyear_softskills1.jpg',
          '/src/assets/extra_curr_images/3rdyear_softskills2.jpg',
          '/src/assets/extra_curr_images/3rdyear_softskills3.jpg',
          '/src/assets/extra_curr_images/3rdyear_softskills4.jpg',
          '/src/assets/extra_curr_images/3rdyear_softskills5.jpg',
          '/src/assets/extra_curr_images/3rdyear_softskills6.jpg',
        ],
      },
    ],
  },
  {
    year: 'Fourth Year',
    activities: [
      {
        title: 'MySivi English Communication Streak – Platinum Badge',
        description: 'Beyond college training and soft skills classes, I took the initiative to improve my spoken English through daily practice on MySivi. With a 225-day streak, 350+ conversations, and consistent grammar lessons, I earned the Platinum badge - strengthening my communication for tech presentations, teamwork, and leadership.',
        images: [
          '/src/assets/extra_curr_images/4thyear_my_sivi1.jpg',
          '/src/assets/extra_curr_images/4thyear_my_sivi2.jpg',
          '/src/assets/extra_curr_images/4thyear_my_sivi3.jpg',
          '/src/assets/extra_curr_images/4thyear_my_sivi4.jpg',
          '/src/assets/extra_curr_images/4thyear_my_sivi5.jpg',
        ],
      },
    ],
  },
];


const colors = [
  'from-pink-200 to-yellow-100',
  'from-blue-200 to-green-100',
  'from-purple-200 to-pink-100',
  'from-yellow-200 to-blue-100',
  'from-green-200 to-purple-100',
];

import { useState } from 'react';

const yearTabs = extracurrData.map((d) => d.year);

const ExtraCurricular = () => {
  const [activeYear, setActiveYear] = useState(yearTabs[0]);
  const yearData = extracurrData.find((d) => d.year === activeYear);
  return (
    <section id="extra-curricular" className="py-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-lg max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-700">
        Extra Curricular Activities
      </h2>
      <div className="flex justify-center gap-4 mb-10">
        {yearTabs.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`capitalize px-6 py-2 rounded-full font-semibold border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 ${
              activeYear === year
                ? 'bg-green-600 text-white border-green-700 shadow-lg scale-105'
                : 'bg-white text-green-700 border-green-300 hover:bg-green-100'
            }`}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="space-y-10">
        {yearData?.activities.map((activity, idx) => (
          <div key={activity.title} className={`rounded-3xl shadow-2xl p-10 bg-gradient-to-br ${colors[idx % colors.length]} max-w-5xl mx-auto`}>
            <h3 className="text-3xl font-bold text-blue-800 mb-4">{activity.title}</h3>
            <p className="text-lg text-gray-700 mb-6">{activity.description}</p>
            <div className="flex flex-wrap gap-6 justify-center">
              {activity.images.map((imgSrc, i) => (
                <motion.img
                  key={imgSrc}
                  src={imgSrc}
                  alt={`${activity.title} ${i + 1}`}
                  className="w-64 h-44 object-cover rounded-xl border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300 bg-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraCurricular;
