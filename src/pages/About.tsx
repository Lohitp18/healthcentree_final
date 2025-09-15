import React from "react";
import { Info, User, Target, Eye, ShieldCheck } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/about.png";
import img2 from "../images/about.png";

import img3 from "../images/about.png";

import img4 from "../images/about.png";



const About = () => {
  const images = [
    img1,img2,img3,img4
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    fade: true, // 🔥 smooth fade transition
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* 🔹 Image Slider Section */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Slider {...sliderSettings}>
            {images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`Hospital ${idx + 1}`}
                  className="w-full h-[450px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* About Us Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700 p-10 backdrop-blur-md">
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <Info className="w-8 h-8 text-blue-900 dark:text-blue-400" />
              <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-400">About Us</h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Alva’s Health Centre is one of Moodbidri’s most trusted healthcare destinations. We combine compassionate clinicians, evidence-based protocols, and modern technology to deliver safe, high-quality care across specialties.</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">From preventive health and diagnostics to complex surgeries and rehabilitation, our teams work together so every patient experiences seamless, personalized care. We keep our services affordable and accessible without compromising on quality.</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">With experienced consultants, 24/7 emergency support, modular OTs, NICU, advanced imaging, laboratory, and endoscopy suites, we are equipped to manage routine and critical needs with the same commitment—safety, dignity, and results.</p>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/20 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-6 h-6 text-blue-900 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">Our Mission</h3> </div> <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"> <li>Promote health & reduce illness</li> <li>Providing quality of service & economically affordable healthcare</li> <li>Responsibility to ensure sustainable, patient centered, high quality healthcare at all times</li> </ul> </div> {/* Vision */} <div className="bg-white/20 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition"> <div className="flex items-center space-x-2 mb-4"> <Eye className="w-6 h-6 text-blue-900 dark:text-blue-400" /> <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">Our Vision</h3> </div> <p className="text-gray-700 dark:text-gray-300"> To deliver the safest and highest quality of care to the patient. </p>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">Our Mission</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Prevent disease, promote wellness, and deliver timely, ethical care</li>
              <li>Provide affordable, patient-centered services guided by evidence and empathy</li>
              <li>Continuously improve outcomes through training, audit, and innovation</li>
            </ul>
          </div>
          {/* Vision */}
          <div className="bg-white/20 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition">
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="w-6 h-6 text-blue-900 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">Our Vision</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">To be the region’s most trusted hospital, known for safe outcomes, compassionate teams, and continuous learning.</p>
          </div>
        </div>

        {/* ALVAS Values Section */}
        <div className="bg-white/20 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
          <div className="flex items-center justify-center mb-6 space-x-2">
            <ShieldCheck className="w-6 h-6 text-blue-900 dark:text-blue-400" />
            <h3 className="text-xl font-semibold text-center text-blue-900 dark:text-blue-400">Our ‘ALVAS’ Values</h3>
          </div>
          <ul className="list-disc list-inside max-w-3xl mx-auto space-y-3 text-gray-700 dark:text-gray-300">
            <li><strong>Accountability</strong> – Being responsible & approachable</li>
            <li><strong>Leadership</strong> that sets standards for better healthcare today & innovation for the future</li>
            <li><strong>Value others</strong> & embrace diversity</li>
            <li><strong>Accept responsibility</strong> towards patient</li>
            <li><strong>Safety</strong> – utmost value on “do-no-harm”</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
            Join Our Journey
          </button>
        </div>
      </div>
    
  );
};

export default About;
