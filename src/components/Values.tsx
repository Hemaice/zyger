import React from 'react';
import { Lightbulb, Award, Handshake } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="w-16 h-16 text-primary-purple" />,
      title: 'Innovation',
      description: 'Creativity is thinking up new things. Innovation is doing new things.',
      details: 'We constantly push boundaries, embracing new technologies and methodologies to create solutions that set industry standards.'
    },
    {
      icon: <Award className="w-16 h-16 text-primary-purple" />,
      title: 'Quality',
      description: 'We prioritize excellence in every project.',
      details: 'Our commitment to quality ensures robust, reliable, and scalable solutions that exceed client expectations and industry standards.'
    },
    {
      icon: <Handshake className="w-16 h-16 text-primary-purple" />,
      title: 'Collaboration',
      description: 'We work closely with clients to understand their vision.',
      details: 'Partnership is at the heart of our approach, fostering transparent communication and shared success with every client.'
    }
  ];

  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our <span className="text-primary-purple">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to excellence in everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <blockquote className="text-lg font-medium text-primary-purple italic mb-4">
                  "{value.description}"
                </blockquote>
                <p className="text-gray-600 leading-relaxed">{value.details}</p>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-purple to-primary-blue rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Built on Trust</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              These values aren't just words on a page—they're the foundation of every relationship we build 
              and every solution we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;