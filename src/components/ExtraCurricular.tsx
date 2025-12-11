import React from 'react';

import { motion } from 'framer-motion';

// Import all images
import HackerRank1 from '/src/assets/extra_curr_images/2ndyear_HackerRank1.jpg';
import HackerRank2 from '/src/assets/extra_curr_images/2ndyear_HackerRank2.png';
import HackerRank3 from '/src/assets/extra_curr_images/2ndyear_HackerRank3.jpg';
import HackerRank4 from '/src/assets/extra_curr_images/2ndyear_HackerRank4.jpg';
import HackerRank5 from '/src/assets/extra_curr_images/2ndyear_HackerRank5.jpg';
import EC2Seminar1 from '/src/assets/extra_curr_images/3rdyear_EC2_seminar1.jpg';
import EC2Seminar2 from '/src/assets/extra_curr_images/3rdyear_EC2_seminar2.jpg';
import EC2Seminar3 from '/src/assets/extra_curr_images/3rdyear_EC2_seminar3.jpg';
import EC2Seminar4 from '/src/assets/extra_curr_images/3rdyear_EC2_seminar4.jpg';
import EC2Seminar5 from '/src/assets/extra_curr_images/3rdyear_EC2_seminar5.jpg';
import GFG1 from '/src/assets/extra_curr_images/3rdyear_GFG1.jpg';
import GFG2 from '/src/assets/extra_curr_images/3rdyear_GFG2.jpg';
import GFG3 from '/src/assets/extra_curr_images/3rdyear_GFG3.jpg';
import GFG5 from '/src/assets/extra_curr_images/3rdyear_GFG5.jpg';
import GFG14 from '/src/assets/extra_curr_images/3rdyear_GFG14.jpg';
import SchoolEvent1 from '/src/assets/extra_curr_images/3rdyear_schoolEvent1.jpg';
import SchoolEvent2 from '/src/assets/extra_curr_images/3rdyear_schoolEvent2.jpg';
import SchoolEvent3 from '/src/assets/extra_curr_images/3rdyear_schoolEvent3.jpg';
import SchoolEvent31 from '/src/assets/extra_curr_images/3rdyear_schoolEvent3.1.jpg';
import SchoolEvent4 from '/src/assets/extra_curr_images/3rdyear_schoolEvent4.jpg';
import SchoolEvent5 from '/src/assets/extra_curr_images/3rdyear_schoolEvent5.jpg';
import SchoolEvent6 from '/src/assets/extra_curr_images/3rdyear_schoolEvent6.jpg';
import SoftSkills1 from '/src/assets/extra_curr_images/3rdyear_softskills1.jpg';
import SoftSkills2 from '/src/assets/extra_curr_images/3rdyear_softskills2.jpg';
import SoftSkills3 from '/src/assets/extra_curr_images/3rdyear_softskills3.jpg';
import SoftSkills4 from '/src/assets/extra_curr_images/3rdyear_softskills4.jpg';
import SoftSkills5 from '/src/assets/extra_curr_images/3rdyear_softskills5.jpg';
import SoftSkills6 from '/src/assets/extra_curr_images/3rdyear_softskills6.jpg';
import MySivi1 from '/src/assets/extra_curr_images/4thyear_my_sivi1.jpg';
import MySivi2 from '/src/assets/extra_curr_images/4thyear_my_sivi2.jpg';
import MySivi3 from '/src/assets/extra_curr_images/4thyear_my_sivi3.jpg';
import MySivi4 from '/src/assets/extra_curr_images/4thyear_my_sivi4.jpg';
import MySivi5 from '/src/assets/extra_curr_images/4thyear_my_sivi5.jpg';
import AWSCertificate from '/src/assets/My_AWS_Activities_Images/AWS-Certified-Cloud-Practitioner.jpeg';
import AWSAICertificate from '/src/assets/My_AWS_Activities_Images/AWS-Certified-AI-Practitioner.png';


const extracurrData = [
  {
    year: 'Second Year',
    activities: [
      {
        title: 'Activities in HackerRank',
        description: 'Apart from Academics, I actively participated in coding challenges on HackerRank, earning multiple certificates in Python, Problem Solving, and SQL to enhance my programming skills.',
        images: [
          HackerRank1,
          HackerRank2,
          HackerRank3,
          HackerRank4,
          HackerRank5,
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
          EC2Seminar1,
          EC2Seminar2,
          EC2Seminar3,
          EC2Seminar4,
          EC2Seminar5,
        ],
      },
      {
        title: 'Activities in GFG',
        description: 'To gain more knowledge on coding and problem solving, apart from labs programs solved some hundreds of problems on GeeksforGeeks and participated in various coding competitions hosted by GFG.',
        images: [
          GFG1,
          GFG2,
          GFG3,
          GFG5,
          GFG14,
        ],
      },
      {
        title: 'School Events Volunteering',
        description: 'Volunteered and organized various school-level events and activities.Guided students about carrer, college applications, and extracurricular involvement to help them make informed decisions about their futures.',
        images: [
          SchoolEvent1,
          SchoolEvent2,
          SchoolEvent3,
          SchoolEvent31,
          SchoolEvent4,
          SchoolEvent5,
          SchoolEvent6,
        ],
      },
      {
        title: 'Attended Soft Skills Workshop',
        description: 'Attended soft skills workshops to enhance communication, teamwork, and leadership abilities.Involved actively with Dr.M.Prathima Mam and learned many new things which helped me to improve my personality and communication skills, and build connection with them.',
        images: [
          SoftSkills1,
          SoftSkills2,
          SoftSkills3,
          SoftSkills4,
          SoftSkills5,
          SoftSkills6,
        ],
      },
    ],
  },
  {
    year: 'Fourth Year',
    activities: [
      {
        title: 'AWS Certified AI Practitioner – Global Certification',
        description: 'Successfully cleared AWS Certified AI Practitioner (AIF-C01) exam - second global certification in one month! Secured 100% exam voucher through AWS Skill Builder and AWS Educate programs. Deep understanding of AIML, LLM, FM, RAG, Fine-Tuning, and AI Security.',
        images: [
          AWSAICertificate,
        ],
        link: 'https://www.linkedin.com/posts/rrbalaji_aws-certified-ai-practitioner-activity-7404866772106903552-MF54?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
        verifyLink: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/0abd09a0a37a4858a309e168011e4a24',
        credlyLink: 'https://www.credly.com/badges/d28a3b74-9951-4e4f-9665-07e36069a092/public_url',
      },
      {
        title: 'AWS Certified Cloud Practitioner – Global Certification',
        description: 'Successfully cleared AWS Global Certification - Cloud Practitioner in 4th year B.Tech. Achieved comprehensive understanding of AWS Cloud fundamentals, core services, security, architecture, pricing, and support models through extensive preparation and hands-on practice.',
        images: [
          AWSCertificate,
        ],
        link: 'https://www.linkedin.com/posts/rrbalaji_aws-certified-cloud-practitioner-activity-7396550578954362880-83p8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRS9aMBZdOI4Ihdb8hQpRiXOdWq9n_Z4DE',
        verifyLink: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/74f4d7e957af45c7b4032b8977311bb4',
        credlyLink: 'https://www.credly.com/badges/c81e98f2-fb5c-45fa-b549-f5801cadef75/public_url',
      },
      {
        title: 'MySivi English Communication Streak – Platinum Badge',
        description: 'Beyond college training and soft skills classes, I took the initiative to improve my spoken English through daily practice on MySivi. With a 225-day streak, 350+ conversations, and consistent grammar lessons, I earned the Platinum badge - strengthening my communication for tech presentations, teamwork, and leadership.',
        images: [
          MySivi1,
          MySivi2,
          MySivi3,
          MySivi4,
          MySivi5,
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
                  className={(imgSrc === AWSCertificate || imgSrc === AWSAICertificate) ? "w-full h-auto object-contain rounded-xl border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300 bg-white max-w-2xl cursor-pointer" : "w-64 h-44 object-cover rounded-xl border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300 bg-white"}
                  onClick={(imgSrc === AWSCertificate || imgSrc === AWSAICertificate) ? () => window.open(activity.credlyLink, '_blank') : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  loading="lazy"
                />
              ))}
            </div>
            {(activity.link || activity.verifyLink || activity.credlyLink) && (
              <div className="mt-6 text-center space-y-3">
                {activity.link && (
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 mr-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    View LinkedIn Post
                  </a>
                )}
                {activity.verifyLink && (
                  <a
                    href={activity.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 mr-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Verify Credential
                  </a>
                )}
                {activity.credlyLink && (
                  <a
                    href={activity.credlyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                    View Credly Badge
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraCurricular;
