import React from 'react';
import { MapPin, Camera, DollarSign, Users, Clock, Shield } from 'lucide-react';

const GradientIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <svg className="w-24 h-24">  {/* increase size here */}
    <defs>
      <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#24E0C0" offset="0%" />
        <stop stopColor="#3BA6FF" offset="50%" />
        <stop stopColor="#8A3FFC" offset="100%" />
      </linearGradient>
    </defs>
    <Icon 
      className="w-24 h-24"  // <-- force Lucide icon size
      stroke="url(#gradientStroke)" 
      strokeWidth="2" 
      fill="none" 
    />
  </svg>
);


const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      icon: <GradientIcon Icon={MapPin} />,
      title: 'Geo-fencing Technology',
      description: 'Advanced location-based attendance tracking with precise boundary detection and real-time monitoring.',
      features: ['GPS Accuracy', 'Custom Boundaries', 'Real-time Alerts'],
    },
    {
      icon: <GradientIcon Icon={Camera} />,
      title: 'Face Recognition',
      description: 'State-of-the-art biometric authentication ensuring secure and accurate employee identification.',
      features: ['AI-Powered Recognition', 'Anti-Spoofing', 'Multi-face Detection'],
    },
    {
      icon: <GradientIcon Icon={DollarSign} />,
      title: 'Salary & Payroll',
      description: 'Comprehensive payroll management system with automated calculations and compliance features.',
      features: ['Automated Processing', 'Tax Compliance', 'Multi-currency Support'],
    },
    {
      icon: <GradientIcon Icon={Users} />,
      title: 'Employee Management',
      description: 'Complete lifecycle management from onboarding to performance tracking and analytics.',
      features: ['Digital Onboarding', 'Performance Metrics', 'Analytics Dashboard'],
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our <span className="bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in cutting-edge technologies that revolutionize how businesses manage their workforce. 
            Our solutions combine innovation with reliability to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] rounded-2xl p-8 text-center text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Clock className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
              <p>Round-the-clock technical assistance and system monitoring</p>
            </div>
            <div>
              <Shield className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Enterprise Security</h3>
              <p>Bank-grade security with encryption and compliance standards</p>
            </div>
            <div>
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Scalable Solutions</h3>
              <p>Systems that grow with your business from startup to enterprise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
