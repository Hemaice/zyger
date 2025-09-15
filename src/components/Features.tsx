import { 
  BarChart3, Bell, Building, Calendar, CheckCircle, Clock, 
  CreditCard, IndianRupee, FileText, Shield, Smartphone, Users 
} from 'lucide-react';
import React, { useState } from 'react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('attendance');

  const features = {
    attendance: {
      title: 'Attendance Management',
      icon: <Clock className="w-8 h-8" />,
      description: 'Advanced attendance tracking with cutting-edge technology',
      items: [
        {
          icon: <Clock className="w-6 h-6 text-secondary-500" />,
          title: 'Automated Time Tracking',
          description: 'Accurately records employee attendance, eliminating manual errors.'
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-secondary-500" />,
          title: 'Real-time Monitoring',
          description: 'Provides instant updates on employee attendance, enabling prompt action.'
        },
        {
          icon: <Calendar className="w-6 h-6 text-secondary-500" />,
          title: 'Customizable Attendance Rules',
          description: 'Allows setting specific rules for different employee groups, such as flexible hours or shift work.'
        },
        {
          icon: <FileText className="w-6 h-6 text-secondary-500" />,
          title: 'Leave Management',
          description: 'Integrates with leave management to track employee absences and balances.'
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-secondary-500" />,
          title: 'Reporting and Analytics',
          description: 'Generates detailed reports on attendance patterns, late arrivals, and absenteeism.'
        },
        {
          icon: <Bell className="w-6 h-6 text-secondary-500" />,
          title: 'Notifications and Alerts',
          description: 'Sends automated notifications to employees and managers for attendance-related events.'
        },
        {
          icon: <CreditCard className="w-6 h-6 text-secondary-500" />,
          title: 'Integration with Payroll',
          description: 'Seamlessly integrates with payroll systems to ensure accurate salary calculations.'
        },
        {
          icon: <Smartphone className="w-6 h-6 text-secondary-500" />,
          title: 'Mobile Accessibility',
          description: 'Allows employees to mark attendance and access attendance records on-the-go.'
        },
        {
          icon: <Shield className="w-6 h-6 text-secondary-500" />,
          title: 'Security and Access Control',
          description: 'Ensures secure data storage and access controls to protect sensitive employee information.'
        },
        {
          icon: <Building className="w-6 h-6 text-secondary-500" />,
          title: 'Scalability',
          description: 'Accommodates growing organizations with ease, handling large volumes of employee data.'
        }
      ]
    },
    payroll: {
      title: 'Salary & Payroll System',
      icon: <IndianRupee className="w-8 h-8" />,
      description: 'Comprehensive payroll management and financial processing',
      items: [
        {
          icon: <IndianRupee className="w-6 h-6 text-secondary-500" />,
          title: 'Automated Salary Calculations',
          description: 'Calculates salaries based on attendance, leaves, and other factors.'
        },
        {
          icon: <FileText className="w-6 h-6 text-secondary-500" />,
          title: 'Payroll Processing',
          description: 'Manages payroll cycles, including generating pay slips and payment schedules.'
        },
        {
          icon: <CheckCircle className="w-6 h-6 text-secondary-500" />,
          title: 'Tax Compliance',
          description: 'Handles tax deductions, filings, and compliance with local regulations.'
        },
        {
          icon: <Shield className="w-6 h-6 text-secondary-500" />,
          title: 'Benefits Management',
          description: 'Administers employee benefits, such as health insurance, retirement plans, and other perks.'
        },
        {
          icon: <CreditCard className="w-6 h-6 text-secondary-500" />,
          title: 'Deductions Management',
          description: 'Manages various deductions, including loans, advances, and statutory deductions.'
        }
      ]
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Key <span className="bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] bg-clip-text text-transparent">Features</span>
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
                    ? 'bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:text-primary-purple hover:bg-gray-50 hover:scale-102 bg-white'
                }`}
              >
                {feature.icon}
                <span>{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] p-8 text-white text-center">
              <p className="text-xl opacity-90">{features[activeTab as keyof typeof features].description}</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features[activeTab as keyof typeof features].items.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex-shrink-0">
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

        {/* Additional Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-blue-100 p-8 rounded-2xl shadow-lg">
            <Clock className="w-12 h-12 text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Real-time Processing</h3>
            <p className="text-gray-600">Instant data processing and updates across all modules for immediate insights</p>
          </div>

          <div className="text-center bg-blue-100 p-8 rounded-2xl shadow-lg">
            <Users className="w-12 h-12 text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Scalable Architecture</h3>
            <p className="text-gray-600">Designed to grow with your business from small teams to enterprise scale</p>
          </div>

          <div className="text-center bg-blue-100 p-8 rounded-2xl shadow-lg">
            <Shield className="w-12 h-12 text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise Security</h3>
            <p className="text-gray-600">Bank-level security protocols with data encryption and compliance standards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
