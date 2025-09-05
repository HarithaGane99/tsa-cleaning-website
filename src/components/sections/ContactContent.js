'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // In a real app, you would send this data to an API endpoint
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get a Free Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              id="name"
              name="name"
              label="Full Name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              id="email"
              name="email"
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              id="phone"
              name="phone"
              label="Phone Number"
              type="tel"
              placeholder="0400 123 456"
              value={formData.phone}
              onChange={handleChange}
            />
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md ${
                  formData.service ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                <option value="" disabled>
                  Please select a service...
                </option>
                <option value="Residential Cleaning">Residential Cleaning</option>
                <option value="Commercial Cleaning">Commercial Cleaning</option>
                <option value="End of Lease Cleaning">End of Lease Cleaning</option>
                <option value="Carpet Cleaning">Carpet Cleaning</option>
                <option value="Window Cleaning">Window Cleaning</option>
              </select>
            </div>
            <Textarea
              id="message"
              name="message"
              label="Your Message"
              placeholder="Tell us about your cleaning needs..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            <p className="text-gray-600">
              Have a question or need to speak with us directly? We&apos;re here to help. Reach out via phone, email, or visit us at our Sydney office.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <span>(02) 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <span>contact@tsacleaning.com.au</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                <span>123 Cleaning St, Sydney, NSW 2000, Australia</span>
              </li>
            </ul>
            <div className="h-64 rounded-lg overflow-hidden shadow-md">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212163.3372200232!2d150.95000562167968!3d-33.8479279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1694000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="TSA Cleaning Location"
                ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;




