import { Linkedin, Mail } from 'lucide-react';
import React from 'react';
import logo from './Zyger logo _full_PNG.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Zyger Pal Company Logo"
                className="h-6 w-auto"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                Zyger Technology 
              </h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transforming ideas into innovative software solutions with cutting-edge technology
              and exceptional service.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/zyger-technology/"
                className="w-12 h-12 bg-gradient-to-r from-primary-purple to-primary-blue rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=zygertechnology@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-primary-purple to-primary-blue rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#expertise')}
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300"
                >
                  Our Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#values')}
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300"
                >
                  Our Values
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Attendance Management</li>
              <li>Geo-fencing Technology</li>
              <li>Face Recognition Systems</li>
              <li>Salary & Payroll Solutions</li>
              <li>Employee Management</li>
              <li>Cloud-based Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>HRMS</li>
              <li>CRM</li>
              <li>Customisation Manufacturing ERP</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-2">
                <span className="text-primary-blue mt-1">📍</span>
                <span className="text-sm">
                  208/1/(222/1), Sadhana Castle,<br />
                  M.T.H Road, Villivakkam,<br />
                  Chennai - 600049
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary-blue">📞</span>
                <span>6380108840</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary-blue">📧</span>
                <span>zygertechnology@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} Zyger Technology. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-primary-blue transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary-blue transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-primary-blue transition-colors duration-300">Support</a>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-blue to-primary-purple h-1 w-24 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
