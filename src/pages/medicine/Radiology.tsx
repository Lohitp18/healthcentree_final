// src/pages/Radiology.tsx
import React from 'react';
import xray from "../../images/xray1.jpg";

const Radiology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      <div className="rounded-xl overflow-hidden shadow">
        <img src={xray} alt="Radiology" className="w-full h-56 object-cover" />
      </div>

      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">OVERVIEW - RADIOLOGY</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Our radiology department supports clinical teams with accurate, timely imaging using modern
          X-ray, ultrasound, CT and MRI modalities, following radiation safety and quality protocols.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Services</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Digital X-ray and portable radiography</li>
          <li>Ultrasound and Doppler studies</li>
          <li>CT scan for trauma, neuro, chest and abdomen</li>
          <li>MRI for neuro, musculoskeletal and soft tissue</li>
          <li>Image-guided procedures and biopsies</li>
        </ul>
      </section>
    </div>
  );
};

export default Radiology;
