import React from 'react';
import { Home, ShieldCheck, User } from 'lucide-react';

const HomeVisit: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6 lg:px-20 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Introduction */}
        <div>
          <h1 className="text-4xl font-bold text-teal-800 mb-3 flex items-center">
            <Home className="mr-3" size={32} /> Home Visit Services
          </h1>
          <p className="text-lg text-slate-700">
            Our team offers home visits to extremely ill patients who have difficulty in mobilizing. Our visits include doctor consultation, laboratory, and pharmacy services, bringing comprehensive healthcare directly to your home.
          </p>
        </div>

        {/* List of Services */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4 flex items-center">
            <User className="mr-2" /> What Our Visits Include
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Doctor and nurse visits at home</li>
              <li>Health check-ups and consultations</li>
              <li>Post-surgery care</li>
              <li>Elderly and palliative care</li>
              <li>Wound dressing and injections</li>
              <li>Physiotherapy at home</li>
            </ul>
          </div>
        </section>

        {/* Our Commitment Section (can be adapted or removed) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-700 flex items-center">
            <ShieldCheck className="mr-2" /> Our Commitment
          </h2>
          <p>
            We are committed to providing compassionate, high-quality, and convenient care to patients in the comfort of their own homes. Our team is dedicated to ensuring you or your loved ones receive the best possible care with dignity and respect.
          </p>
        </section>

        {/* You can add an image section here if needed */}
        {/*
        <section>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/path/to/home-visit-image.jpg"
              alt="A medical professional visiting a patient at home"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
        */}

      </div>
    </div>
  );
};

export default HomeVisit;