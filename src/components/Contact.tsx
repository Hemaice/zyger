import emailjs from '@emailjs/browser';
import {
  AlertCircle,
  CheckCircle,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send
} from 'lucide-react';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_kfaj7cp', // ✅ Your Service ID
        'template_n3mrmtr', // ✅ Your Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone,
          message: formData.message,
        },
        'h4dNtdjYBpQr2sRcH' // ✅ Your Public Key
      );

      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary-purple" />,
      label: 'Address',
      value:
        '208/1/(222/1), Sadhana Castle, M.T.H Road, Villivakkam, Chennai - 600049',
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-purple" />,
      label: 'Phone',
      value: '6380108840',
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-purple" />,
      label: 'Email',
      value: 'zygertechnology@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Contact <span className="bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with our innovative solutions? Get
            in touch with our team today and let's discuss your requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {info.label}
                    </h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.012345678901!2d80.200000!3d13.120000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzEyLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Social Links */}
{/*             <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/zyger-technology/"
                className="w-12 h-12 bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&to=zygertechnology@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div> */}
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    value={formData.from_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="from_email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    value={formData.from_email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center gap-2 text-red-800">
                  <AlertCircle className="w-5 h-5" />
                  <span>
                    Failed to send message. Please try again or contact us
                    directly.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
