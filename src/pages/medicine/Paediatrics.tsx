// src/pages/Paediatrics.tsx
import React from 'react';
import nicu from "../../images/about.png";
import pedi from "../../images/about.png";

const Paediatrics = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      {/* Banner Image */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={nicu} alt="Paediatrics" className="w-full h-56 object-cover" />
      </div>

      {/* Overview */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        OVERVIEW - PAEDIATRICS
      </h1>
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          At Alva’s Health Centre, the Paediatrics Department provides compassionate care for infants, children, and adolescents. 
          We maintain a child-friendly environment with a family-centred approach, ensuring parents are involved in care while minimizing stress for children. 
          Our comprehensive services include routine check-ups, vaccinations, growth monitoring, and treatment of acute or specialized pediatric illnesses.
        </p>
      </section>

      {/* Facilities & Support */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Facilities & Support Services
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Neonatal Intensive Care Unit (NICU) for newborns requiring special care</li>
          <li>Vaccination Centre for preventive immunization and community health initiatives</li>
          <li>Paediatric rehabilitation and physiotherapy for children with musculoskeletal or developmental needs</li>
          <li>Child-friendly wards and play areas to reduce fear and anxiety</li>
        </ul>
      </section>

      {/* Treatments & Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Treatments & Services
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Newborn care, NICU support, and management of premature infants</li>
          <li>Routine vaccinations, well-child check-ups, and growth monitoring</li>
          <li>Management of asthma, allergies, and infectious diseases</li>
          <li>Nutrition, developmental assessments, and pediatric counseling</li>
          <li>Emergency care and trauma stabilization for children</li>
        </ul>
      </section>

      {/* Our Doctors */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Our Doctors
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[{ name: 'Dr. Vasanth T', role: 'Consultant Paediatrician', img: pedi }].map((d, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border">
              <img src={d.img} alt={d.name} className="w-20 h-20 object-cover rounded-full shadow" />
              <div>
                <div className="font-semibold text-gray-900">{d.name}</div>
                <div className="text-sm text-gray-600">{d.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Paediatrics;
