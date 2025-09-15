// src/pages/GeneralMedicine.tsx
import React from 'react';
import lab from "../../images/laboratory1.jpg";
import sadanand from "../../images/sadanand.jpg";
import dhanya from "../../images/dr dhanya.jpg";

const GeneralMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      <div className="rounded-xl overflow-hidden shadow">
        <img src={lab} alt="General Medicine" className="w-full h-56 object-cover" />
      </div>

      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">OVERVIEW - GENERAL MEDICINE</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Our internal medicine physicians provide comprehensive primary and complex medical care for
          adults, including diabetes, hypertension, thyroid disorders, infectious diseases, and more.
          We coordinate care across specialties and focus on prevention and lifestyle counselling.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Treatments & Services</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Comprehensive diabetic care and education</li>
          <li>Hypertension and cardiovascular risk management</li>
          <li>Thyroid and endocrine disorder management</li>
          <li>Fever, infection and respiratory illness care</li>
          <li>Preventive health checks and vaccinations</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Our Doctors</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[{ name: 'Dr. B. Sadananda Naik', role: 'Senior Physician', img: sadanand }, { name: 'Dr. Dhanya Hegde', role: 'Physician', img: dhanya }].map((d, i) => (
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

export default GeneralMedicine;
