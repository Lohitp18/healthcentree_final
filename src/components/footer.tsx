import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Award, Shield, Heart } from 'lucide-react';
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="Alvas Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Alva's Health Centre</h3>
                <p className="text-blue-300 text-sm">Excellence in Healthcare Since 1985</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A world-class healthcare institution committed to providing exceptional medical care 
              with international standards, advanced technology, and compassionate service.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-blue-900/50 px-3 py-2 rounded-lg">
                <Award className="text-blue-400" size={16} />
                <span className="text-sm text-blue-300">JCI Accredited</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-900/50 px-3 py-2 rounded-lg">
                <Shield className="text-green-400" size={16} />
                <span className="text-sm text-green-300">ISO 9001:2015</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Doctors',
                'Medical Services',
                'Departments',
                'Patient Portal',
                'Health Packages',
                'International Patients',
                'Careers'
              ].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div className="text-sm text-gray-300">
                  <p>123 Healthcare Avenue</p>
                  <p>Medical District, City - 560001</p>
                  <p>Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div className="text-sm text-gray-300">
                  <p className="font-semibold text-red-400">Emergency: +91 9876543210</p>
                  <p>Appointments: +91 9876543211</p>
                  <p>General Inquiry: +91 9876543212</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                <p className="text-sm text-gray-300">info@alvashealthcare.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div className="text-sm text-gray-300">
                  <p className="font-semibold text-green-400">Emergency: 24/7</p>
                  <p>OPD: 8:00 AM - 8:00 PM</p>
                  <p>Visiting Hours: 4:00 PM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© 2024 Alva's Healthcare. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>for better healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;