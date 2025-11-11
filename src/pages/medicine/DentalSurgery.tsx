// src/pages/DentalSurgery.tsx
import React from 'react';
import reenaz from "../../images/dental surgery/Dr Reenaz Begum.webp";

const DentalSurgery = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - DENTAL SURGERY
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          <strong>Dental Surgery / Dental Care at Alva’s Health Centre</strong> 
          offers advanced oral health care within the hospital’s multidisciplinary environment. 
          The department plays a vital role in maintaining overall patient health and well-being, 
          complementing other medical specialties.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Offered
        </h2>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">1. Preventive Care</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Routine dental check-ups</li>
            <li>Professional cleaning & fluoride treatments</li>
            <li>Patient education on oral hygiene</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">2. Restorative Dentistry</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Dental fillings for cavities</li>
            <li>Root Canal Treatment (RCT)</li>
            <li>Crowns and bridges to restore damaged teeth</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">3. Oral Surgery</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Extractions (deciduous and permanent teeth)</li>
            <li>Third molar (wisdom tooth) extractions</li>
            <li>Surgical procedures & impactions</li>
            <li>Operculectomy and dental implants</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">4. Periodontal Care</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Treatment for gum diseases like gingivitis and periodontitis</li>
            <li>Supragingival and subgingival scaling</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">5. Emergency Care</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Management of dental trauma</li>
            <li>Urgent care for severe infections</li>
            <li>Post-extraction bleeding control</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">6. Specialized Care</h3>
          <p className="text-gray-700 leading-relaxed tracking-wide">
            Expertise in managing patients with complex medical needs and 
            disabilities who require hospital-based dental treatment.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">7. Orthodontic Services</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Braces (metal, ceramic, lingual)</li>
            <li>Invisalign and retainers</li>
            <li>Diagnosis and treatment of malocclusion & jaw alignment problems</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DentalSurgery;
