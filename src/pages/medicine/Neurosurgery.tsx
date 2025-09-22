// src/pages/Neurosurgery.tsx
import React from 'react';
import neuroImg from "../../images/about.png"; // Add an appropriate image

const Neurosurgery = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      
      {/* Banner */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={neuroImg} alt="Neurosurgery" className="w-full h-56 object-cover" />
      </div>

      {/* Page Title */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        NEUROSURGERY
      </h1>

      {/* Overview */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Neurosurgery Department at Alva’s Health Centre provides advanced surgical care for disorders of the brain, spine, and nervous system. Led by a team of highly skilled neurosurgeons, we combine modern techniques with state-of-the-art facilities to ensure safe and effective treatment for both emergency and elective cases. 
          Our focus is on precision, patient safety, and faster rehabilitation.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Neurosurgery Services
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Brain surgeries for tumors, trauma, aneurysms, and congenital conditions</li>
          <li>Spine surgeries for disc problems, spinal cord injuries, and deformities</li>
          <li>Surgical management of head injuries and neurological emergencies</li>
          <li>Treatment of nerve-related disorders such as trigeminal neuralgia and peripheral nerve injuries</li>
          <li>Minimally invasive neurosurgical procedures for faster recovery and reduced hospital stay</li>
        </ul>
      </section>

      {/* Strengths */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Department Strengths
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Highly skilled neurosurgeons with expertise in complex neurological conditions</li>
          <li>State-of-the-art operating theatres with advanced neurosurgical equipment</li>
          <li>Comprehensive care for both planned and emergency neurosurgical cases</li>
          <li>Emphasis on precision, safety, and patient-centered rehabilitation</li>
        </ul>
      </section>

      {/* Patient Focus */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Patient Care & Recovery
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Our team works closely with patients and their families to ensure comprehensive pre-operative counseling,
          individualized surgical planning, and post-operative rehabilitation. Minimally invasive approaches are preferred when possible to reduce recovery time and improve outcomes. The department collaborates with neurology, physiotherapy, and critical care teams to provide holistic care.
        </p>
      </section>
    </div>
  );
};

export default Neurosurgery;
