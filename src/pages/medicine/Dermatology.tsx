// src/pages/medicine/Dermatology.tsx
import React from 'react';
import skinImg from "../../images/images.jpg";
import anchita from "../../images/dermatology/dr anchitha.webp"
import nihal from "../../images/dermatology/Dr. NIHAL XAVIER PINTO.png"

const Dermatology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      <div className="rounded-xl overflow-hidden shadow">
        <img src={skinImg} alt="Dermatology" className="w-full h-56 object-cover" />
      </div>

      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        OVERVIEW - DERMATOLOGY
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Dermatology at Alva’s Health Centre provides expert care for
          conditions affecting the skin, hair, and nails. Along with general dermatology,
          the hospital also offers cosmetic and aesthetic treatments through its dedicated
          Aesthetic Rejuvenation Centre.
        </p>
      </section>

      {/* Doctor Availability */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Staff & Specialist Availability
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>
            <span className="font-semibold">Dr. Nihal</span> – Available in the
            dermatology clinic on <span className="italic">Monday & Tuesday (4:15 PM – 5:00 PM)</span> 
            and <span className="italic">Friday (1:00 PM – 2:00 PM)</span>.
          </li>
          <li>
            <span className="font-semibold">Dr. Anchitha</span> – Available on the 
            <span className="italic"> 13th, 20th, 27th, and 30th of every month from 12:00 PM</span>.
          </li>
        </ul>
      </section>

      {/* Common Conditions */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Common Conditions Treated
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Acne, pimples, and acne scars</li>
          <li>Eczema, psoriasis, and allergic rashes</li>
          <li>Fungal, bacterial, and viral skin infections</li>
          <li>Vitiligo and pigmentation disorders</li>
          <li>Hair fall, dandruff, and alopecia</li>
          <li>Nail problems (ingrown nails, brittle nails, fungal nails)</li>
          <li>Skin cancers and suspicious lesions</li>
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services & Facilities
        </h2>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">General Dermatology</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Diagnosis and treatment of skin diseases (eczema, acne, infections)</li>
            <li>Comprehensive skin, hair, and nail care</li>
            <li>Minor dermatologic surgical procedures</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Diagnostic Procedures</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Skin biopsy & patch testing</li>
            <li>Dermoscopy for mole/lesion evaluation</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Medical Treatments</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Prescription medications for acute & chronic skin diseases</li>
            <li>Phototherapy for psoriasis, vitiligo, and eczema</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Cosmetic Dermatology</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Advanced skincare & cosmetic treatments</li>
            <li>Chemical peels, laser procedures, Botox & fillers</li>
            <li>Acne scar reduction & rejuvenation therapies</li>
          </ul>
        </div>
      </section>

      {/* Doctors Showcase */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Our Dermatologists
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[ 
            { name: 'Dr. Nihal', role: 'Dermatology Specialist', img: nihal},
            { name: 'Dr. Anchitha', role: 'Dermatology Consultant', img: anchita }
          ].map((d: any, i: number) => (
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

export default Dermatology;
