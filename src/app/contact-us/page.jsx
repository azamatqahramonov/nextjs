'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form yuborish logikasini shu yerga qo'shishingiz mumkin
    alert('Message sent!');
  };

  return (
    <section className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 py-16">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Drop us a message, and we will get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Message"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-pink-500 text-white text-lg font-medium rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
