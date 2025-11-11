// src/pages/ObstetricsGynecology.tsx
import React from 'react';
import hana from "../../images/obstetrics and gynaecology/DR HANA SHETTY.webp";
import ramesha from "../../images/obstetrics and gynaecology/DR RAMESHA.webp";
import revathi from "../../images/obstetrics and gynaecology/DR REVATHI BHAT.webp";

const ObstetricsGynecology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      
      {/* Banner */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={nicu} alt="Obstetrics & Gynecology" className="w-full h-56 object-cover" />
      </div>

      {/* Page Title */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        OVERVIEW - OBSTETRICS & GYNAECOLOGY
      </h1>

      {/* Overview */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Obstetrics & Gynecology Department at Alva’s Health Centre provides comprehensive care for women across all stages of life—from adolescent and reproductive health to pregnancy, childbirth, and menopause. 
          On-call consultants ensure emergency care is always available. The department is supported by fully equipped labour theatres, NICU for newborn care, and advanced ultrasound and diagnostic facilities.
        </p>
      </section>

      {/* Services & Facilities */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Treatments & Services</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Comprehensive antenatal care including high-risk pregnancy monitoring and painless delivery options</li>
          <li>Normal deliveries, C-sections, and postnatal care for mother and newborn</li>
          <li>Gynecological surgeries: laparoscopic procedures, hysterectomy, cyst removal, fibroid surgery</li>
          <li>Management of PCOS, endometriosis, menstrual disorders, and reproductive health issues</li>
          <li>Family planning, contraception, infertility evaluation and treatments</li>
          <li>Ultrasound scanning for foetal growth, anatomy checks, and gynecologic evaluations</li>
          <li>Access to NICU for specialized newborn care</li>
        </ul>
      </section>

      {/* Our Doctors */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Our Doctors</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[{ name: 'Dr. Suhitha', role: 'Consultant Obstetrician & Gynecologist', img: hana }].map((d, i) => (
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
