import React from 'react';
import chairman from "../images/chairman.webp";

const Messages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 dark:border-white/10">
        <div className="flex flex-col md:flex-row items-center md:items-start p-10 md:p-14 gap-8 md:gap-10">
          
          {/* Founder Image */}
          <img
            src={chairman}
            alt="Founder"
            className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700"
          />

          {/* Message Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Message from the Chairman</h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              “At Alva’s Health Centre, our promise is simple—safe care, skilled hands, and a compassionate heart for every patient. We continue to invest in people and technology so families in and around Moodbidri can access world-class healthcare close to home. Thank you for your trust in us.”
            </p>
            <div className="mt-6">
              <p className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-400">– Dr. Mohan Alva, Chairman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
