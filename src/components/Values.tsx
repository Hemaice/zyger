import React from 'react';
import { Lightbulb, Award, Handshake } from 'lucide-react';

const GradientIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <Icon
    className="w-16 h-16"
    stroke="url(#gradientStroke)"
    strokeWidth="2"
  >
    <defs>
      <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#24E0C0" offset="0%" />
        <stop stopColor="#3BA6FF" offset="50%" />
        <stop stopColor="#8A3FFC" offset="100%" />
      </linearGradient>
    </defs>
  </Icon>
);

const Values: React.FC = () => {
  const values = [
    {
      icon: <GradientIcon Icon={Lightbulb} />,
      title: 'Innovation',
      description: 'Creativity is thinking up new things. Innovation is doing new things.',
      details: 'We constantly push boundaries, embracing new technologies and methodologies to create solutions that set industry standards.'
    },
    {
      icon: <GradientIcon Icon={Award} />,
      title: 'Quality',
      description: 'We prioritize excellence in every project.',
      details: 'Our commitment to quality ensures robust, reliable, and scalable solutions that exceed client expectations and industry standards.'
    },
    {
      icon: <GradientIcon Icon={Handshake} />,
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
            Our <span className="bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to excellence in everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <blockquote className="text-lg font-medium bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] bg-clip-text text-transparent italic mb-4">
                  "{value.description}"
                </blockquote>
                <p className="text-gray-600 leading-relaxed">{value.details}</p>
              </div>
              
              <div className="h-1 bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] rounded-2xl p-8 text-white">
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
