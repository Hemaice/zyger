import { 
  BarChart3, Bell, Building, Calendar, CheckCircle, Clock, 
  CreditCard, DollarSign, FileText, Shield, Smartphone, Users 
} from 'lucide-react';
import React, { useState } from 'react';

const GradientIcon = ({ Icon }: { Icon: any }) => (
  <Icon className="w-8 h-8 bg-gradient-to-r from-[#24E0C0] via-[#3BA6FF] to-[#8A3FFC] bg-clip-text text-transparent" />
);

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('attendance');

  const features = {
    attendance: {
      title: 'Attendance Management',
      icon: <GradientIcon Icon={Clock} />,
      description: 'Advanced attendance tracking with cutting-edge technology',
      items: [
        {
          icon: <GradientIcon Icon={Clock} />,
          title: 'Automated Time Tracking',
          description: 'Accurately records employee attendance, eliminating manual errors.'
        },
        {
          icon: <GradientIcon Icon={BarChart3} />,
          title: 'Real-time Monitoring',
          description: 'Provides instant updates on employee attendance, enabling prompt action.'
        },
        {
          icon: <GradientIcon Icon={Calendar} />,
          title: 'Customizable Attendance Rules',
          description: 'Allows setting specific rules for different employee groups, such as flexible hours or shift work.'
        },
        {
          icon: <GradientIcon Icon={FileText} />,
          title: 'Leave Management',
          description: 'Integrates with leave management to track employee absences and balances.'
        },
      ]
    },
    payroll: {
      title: 'Salary & Payroll System',
      icon: <GradientIcon Icon={DollarSign} />,
      description: 'Comprehensive payroll management and financial processing',
      items: [
        {
          icon: <GradientIcon Icon={DollarSign} />,
          title: 'Automated Salary Calculations',
          description: 'Calculates salaries based on attendance, leaves, and other factors.'
        },
        {
          icon: <GradientIcon Icon={FileText} />,
          title: 'Payroll Processing',
          description: 'Manages payroll cycles, including generating pay slips and payment schedules.'
        },
        {
          icon: <GradientIcon Icon={CheckCircle} />,
          title: 'Tax Compliance',
          description: 'Handles tax deductions, filings, and compliance with local regulations.'
        },
        {
          icon: <GradientIcon Icon={Shield} />,
          title: 'Benefits Management',
          description: 'Administers employee benefits, such as health insurance, retirement plans, and other perks.'
        },
      ]
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Key <span className="bg-gradient-to-r from-[#24E0C0] via-[#3BA6FF] to-[#8A3FFC] bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive feature set designed to streamline your business operations 
            and enhance workforce management efficiency.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-3 shadow-xl border border-gray-100">
            {Object.entries(features).map(([key, feature]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-4 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-[#24E0C0] via-[#3BA6FF] to-[#8A3FFC] text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:text-primary-purple hover:bg-gray-50 hover:scale-102 bg-white'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === key ? 'bg-white/20' : 'bg-gray-100 text-gray-700'}`}>
                  {feature.icon}
                </div>
                <span>{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#24E0C0] via-[#3BA6FF] to-[#8A3FFC] p-8 text-white text-center">
              <p className="text-xl opacity-90">{features[activeTab as keyof typeof features].description}</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features[activeTab as keyof typeof features].items.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GradientIcon Icon={Clock} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Real-time Processing</h3>
            <p className="text-gray-600">Instant data processing and updates across all modules for immediate insights</p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GradientIcon Icon={Users} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Scalable Architecture</h3>
            <p className="text-gray-600">Designed to grow with your business from small teams to enterprise scale</p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GradientIcon Icon={Shield} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise Security</h3>
            <p className="text-gray-600">Bank-level security protocols with data encryption and compliance standards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

