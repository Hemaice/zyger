import React from 'react';
import { Users, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-primary-purple">Us</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Zyger Pal, we're passionate about transforming ideas into innovative software solutions. 
              Our team of dedicated professionals combines creativity with technical expertise to deliver 
              cutting-edge applications that drive business growth and efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in simplifying complex business processes through intelligent automation 
              and cloud-based solutions, helping organizations streamline their operations and focus 
              on what matters most.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-purple rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Expert Team</h3>
                <p className="text-sm text-gray-600">Skilled professionals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-purple rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Client Focus</h3>
                <p className="text-sm text-gray-600">Tailored solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-purple rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Innovation</h3>
                <p className="text-sm text-gray-600">Cutting-edge tech</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-blue to-primary-purple rounded-2xl p-8 text-white">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Software Development Team"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Why Choose Zyger Pal?</h3>
              <ul className="space-y-2 text-white/90">
                <li>✓ Proven track record in software development</li>
                <li>✓ Cloud-based solutions for scalability</li>
                <li>✓ 24/7 technical support and maintenance</li>
                <li>✓ Custom solutions for unique business needs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;