import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const RequestDemo: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_kfaj7cp",       // ✅ Your Service ID
        "template_n3mrmtr",      // ✅ Your Template ID
        formRef.current,
        "h4dNtdjYBpQr2sRcH"      // ✅ Your Public Key
      )
      .then(
        () => {
          setSuccess("Thank you! Our expert will contact you soon.");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setSuccess("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="request-demo" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-2xl font-bold mb-2">Request a Demo</h2>
        <p className="text-gray-700 mb-6">
          Schedule your live demo, our expert will contact you soon.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name (optional)"
            className="p-3 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-[linear-gradient(135deg,#24E0C0,#3BA6FF,#8A3FFC)] text-white p-3 rounded hover:scale-105 transition-transform"
          >
            Request Demo
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-600 font-medium">{success}</p>
        )}
      </div>
    </section>
  );
};

export default RequestDemo;
