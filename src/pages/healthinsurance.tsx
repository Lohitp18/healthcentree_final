import React from 'react';
import { Info, User, Target, Eye, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* About Us Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700 p-10 backdrop-blur-md">
          {/* Title Section */}
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <Info className="w-8 h-8 text-blue-900 dark:text-blue-400" />
              <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-400">About Us</h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The Hospital has evolved into one of the finest - and certainly the most preferred - healthcare providers in Moodbidri. A warm and friendly ambience, high quality medical services and personalized nursing care have been the hallmarks of Alva’s Health Centre. Those of you who have visited us earlier will notice that our focus places healing value on therapy as on technology.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
              We are dedicated to providing meaningful “care” for all those seeking wellness through modern day remedies as much as we advocate the cause of wellness. “Retaining our values as we modernize we add care” perfectly illustrates how we are forging ahead. The patient remains our prime focus, and as we evolve with changing times, our ever-growing numbers of patients bear testimony to our dedication and the quality of our care and our services.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
              Several generations walk our doors. The continuum of care is something we edge that we offer as hospital and we aim to at the top of the list. Our aim is to, through our unrelenting efforts, devise processes that pace consistently from patient to patient. We continue to do this through processes that revolve around the patients’ well-being.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
              Our philosophy is to offer the expected level of quality and care at a fair price as care providers. We have succeeded in enhancing our service standards without overburdening the patients financially. The overall environment delivered through prompt access has resulted in a high level of satisfaction among our patients. Our doctors are a motivated and vital part of our commitment to deliver exceptional care. Their passion to heal and constant learning to deliver higher quality outcomes is unmatched. They are thorough, professional and compassionate, helping extend a personal touch, speeding up patient recovery with the least amount of stress.
            </p>
          </div>
        </div>

     

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white/20 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-6 h-6 text-blue-900 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">Our Mission</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Promote health & reduce illness</li>
              <li>Providing quality of service & economically affordable healthcare</li>
              <li>Responsibility to ensure sustainable, patient centered, high quality healthcare at all times</li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-white/20 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition">
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="w-6 h-6 text-blue-900 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">Our Vision</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              To deliver the safest and highest quality of care to the patient.
            </p>
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
    </div>
  );
};

export default About;
