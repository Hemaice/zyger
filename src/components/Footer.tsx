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
        <div className="flex flex-wrap justify-between gap-6 mb-8">
          {/* Company Info */}
          <div className="flex-1 min-w-[200px] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Zyger Pal Company Logo" className="h-6 w-auto" />
              <h3 className="text-xl font-bold bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] bg-clip-text text-transparent">
                Zyger Technology
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-snug">
              Transforming ideas into innovative software solutions with cutting-edge technology and exceptional service.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/zyger-technology/"
                className="w-10 h-10 bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=zygertechnology@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[150px] flex flex-col gap-1">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300 text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#expertise')}
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300 text-sm"
                >
                  Our Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#values')}
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300 text-sm"
                >
                  Our Values
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex-1 min-w-[150px] flex flex-col gap-1">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>Attendance Management</li>
              <li>Geo-fencing Technology</li>
              <li>Face Recognition Systems</li>
              <li>Salary & Payroll Solutions</li>
              <li>Employee Management</li>
              <li>Cloud-based Solutions</li>
            </ul>
          </div>

          {/* Products */}
          <div className="flex-1 min-w-[150px] flex flex-col gap-1">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>HRMS</li>
              <li>CRM</li>
              <li>Customization Manufacturing ERP</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px] flex flex-col gap-1">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-1 text-gray-300 text-sm">
              <p className="flex items-start gap-2">
                <span className="text-primary-blue mt-1">📍</span>
                <span>
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
            <p className="text-gray-300 text-center md:text-left text-sm">
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
          <div className="inline-block bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] h-1 w-24 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
