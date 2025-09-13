import React from 'react';
import { Target, Rocket, Globe } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our <span className="text-primary-purple">Mission</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-blue via-purple-300 to-primary-purple rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16"></div>
            
            <Target className="w-20 h-20 mx-auto mb-8 text-white" />
            
            <blockquote className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed relative z-10">
              "To empower businesses and individuals through technology, delivering software solutions 
              that drive growth, efficiency, and success."
            </blockquote>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">Drive Growth</h3>
                <p className="text-white/90">Accelerating business expansion through innovative technology solutions</p>
              </div>
              
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">Enhance Efficiency</h3>
                <p className="text-white/90">Streamlining operations and automating complex processes</p>
              </div>
              
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">Deliver Success</h3>
                <p className="text-white/90">Ensuring measurable outcomes and long-term value creation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision for the Future</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We envision a world where technology seamlessly integrates with human potential, 
              where businesses can focus on innovation while our solutions handle the complexity.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-purple rounded-full mr-4"></div>
                Democratizing access to enterprise-grade software solutions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-purple rounded-full mr-4"></div>
                Building sustainable and scalable technology ecosystems
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-purple rounded-full mr-4"></div>
                Fostering innovation through collaborative partnerships
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <img 
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Future of Technology"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-center text-gray-600 italic">
              "Technology is best when it brings people together and solves real-world challenges."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;