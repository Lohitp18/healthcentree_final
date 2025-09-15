// src/pages/Paediatrics.tsx
import React from 'react';
import nicu from "../../images/nicu2.jpg";
import pedi from "../../images/pedi.jpg";

const Paediatrics = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      <div className="rounded-xl overflow-hidden shadow">
        <img src={nicu} alt="Paediatrics" className="w-full h-56 object-cover" />
      </div>
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">OVERVIEW - PAEDIATRICS</h1>
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Compassionate care for infants, children and adolescents with a child-friendly environment and
          family-centred approach. Preventive care, growth monitoring, and acute illness management.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Treatments & Services</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Newborn care and NICU support</li>
          <li>Vaccinations and well-child checks</li>
          <li>Asthma, allergies and infectious disease care</li>
          <li>Nutrition, growth and developmental assessments</li>
          <li>Pediatric emergencies and trauma stabilization</li>
        </ul>
      </section>
    </div>
  );
};

export default Paediatrics;
