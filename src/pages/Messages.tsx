import React from 'react';
import chairman from "../images/chairman.webp"
const Messages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 dark:border-white/10 transition duration-300 hover:scale-[1.02] cursor-pointer">
        <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
          
          {/* Founder Image */}
          <img
            src={chairman}
            alt="Founder"
            className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700"
          />

          {/* Message Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Message from the Founder</h2>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              “At our core, we believe in empowering communities through innovation and integrity. Our mission is to build a future where technology and humanity walk hand in hand. Thank you for being a part of this journey.”
            </p>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">– Dr Mohan Alva, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
