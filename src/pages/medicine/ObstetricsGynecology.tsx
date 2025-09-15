// src/pages/ObstetricsGynecology.tsx
import React from 'react';
import nicu from "../../images/nicu1.jpg";
import suhitha from "../../images/dr suhitha.jpg";

const ObstetricsGynecology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      <div className="rounded-xl overflow-hidden shadow">
        <img src={nicu} alt="Obstetrics & Gynecology" className="w-full h-56 object-cover" />
      </div>

      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">OVERVIEW - OBSTETRICS & GYNAECOLOGY</h1>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Comprehensive care for women across life stages—from adolescent health and fertility to
          pregnancy, childbirth, and menopause—delivered by experienced obstetricians and gynecologists.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Treatments & Services</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Antenatal care, high-risk pregnancy and painless delivery</li>
          <li>Normal delivery, C-section and postnatal care</li>
          <li>Gynecological surgeries: hysterectomy, laparoscopy, cyst removal</li>
          <li>PCOS, fibroid, endometriosis and menstrual disorder management</li>
          <li>Family planning, contraception and infertility workup</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Our Doctors</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[{ name: 'Dr. Suhitha', role: 'Consultant Obstetrician & Gynecologist', img: suhitha }].map((d, i) => (
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

export default ObstetricsGynecology;
