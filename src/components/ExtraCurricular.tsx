import React from 'react';

import ExtraCurrImage from '/src/assets/extra-curr.png';
import { Button } from '@/components/ui/button';

const extraCurricularData = [
  {
    title: 'Volunteering',
    description: 'Participated in community service and volunteering activities to help local NGOs and social causes.',
    images: [
      '/src/assets/extra-curr.png', // Placeholder, ideally multiple images
    ],
  },
  {
    title: 'Sports',
    description: 'Active member of the college basketball and athletics teams, winning several inter-college tournaments.',
    images: [
      '/src/assets/extra-curr.png', // Placeholder, ideally multiple images
    ],
  },
];

const ExtraCurricular = () => {
  return (
    <section id="extra-curricular" className="py-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-lg max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-700">
        Extra Curricular Activities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {extraCurricularData.map((activity, idx) => (
          <div
            key={activity.title}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-green-800 hover:text-blue-600 transition-colors duration-300">
              {activity.title}
            </h3>
            <p className="text-gray-700 mb-4">{activity.description}</p>
            <div className="flex flex-wrap gap-4">
              {activity.images.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`${activity.title} image ${i + 1}`}
                  className="w-32 h-20 object-cover rounded-md shadow-sm hover:scale-105 transform transition-transform duration-300 cursor-pointer"
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
