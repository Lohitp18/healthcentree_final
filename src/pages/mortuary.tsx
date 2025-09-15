import React from 'react';
import { HeartHandshake, FileText, Clock, Snowflake, Users } from 'lucide-react';

const MortuaryServices: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6 lg:px-20 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Introduction */}
        <div>
          <h1 className="text-4xl font-bold text-teal-800 mb-3 flex items-center">
            <HeartHandshake className="mr-3" size={32} /> Mortuary Services
          </h1>
          <p className="text-lg text-slate-700">
            Our hospital provides a dedicated mortuary facility to ensure the dignified care and preservation of the deceased. The mortuary is equipped with modern refrigeration systems and maintained under strict hygienic conditions. We understand the sensitivity of these moments and extend our support to families with compassion and respect.
          </p>
        </div>

        {/* Facilities & Services */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4 flex items-center">
            <Users className="mr-2" /> Our Facilities & Services
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="font-bold mr-2 text-teal-600"><Snowflake size={18} /></span>
                <div>
                  <strong>Safe and hygienic preservation:</strong> Our facility ensures the dignified care of the deceased.
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-teal-600"><Clock size={18} /></span>
                <div>
                  <strong>24/7 service availability:</strong> We are ready to assist with emergencies at any time.
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-teal-600"><HeartHandshake size={18} /></span>
                <div>
                  <strong>Respectful handling:</strong> Our trained staff handles the deceased with the utmost compassion and dignity.
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-teal-600"><FileText size={18} /></span>
                <div>
                  <strong>Assistance with legal documentation:</strong> We provide full support with death certificates and other paperwork.
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MortuaryServices;