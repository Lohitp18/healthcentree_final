// src/pages/GeneralMedicine.tsx
import React from 'react';

const GeneralMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center">
        GENERAL, ENDOSCOPIC & LAPAROSCOPIC SURGERY
      </h1>

      {/* Intro */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 text-lg leading-relaxed">
          At <strong>Alva’s Health Centre</strong>, our General, Endoscopic, and Laparoscopic Surgery
          Department provides <strong>advanced surgical care</strong> with a focus on patient safety,
          comfort, and faster recovery. Our skilled surgeons and multidisciplinary team are committed
          to delivering precise and effective treatments using cutting-edge technologies.
        </p>
      </section>

      {/* General Surgery */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b border-blue-200 pb-2">
          General Surgery
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We provide comprehensive care for a wide range of common surgical conditions, including:
        </p>
        <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
          <li>Appendicitis</li>
          <li>Hernia</li>
          <li>Gallbladder diseases</li>
          <li>Abdominal disorders</li>
          <li>Breast lumps</li>
          <li>Skin and soft tissue problems</li>
        </ul>
      </section>

      {/* Endoscopic Surgery */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b border-blue-200 pb-2">
          Endoscopic Surgery
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our <strong>minimally invasive endoscopic procedures</strong> are performed using flexible
          endoscopes for both diagnostic and therapeutic purposes. These techniques allow early detection
          and treatment of conditions affecting the stomach, intestines, and other internal organs –
          all with minimal discomfort to patients.
        </p>
      </section>

      {/* Laparoscopic Surgery */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b border-blue-200 pb-2">
          Laparoscopic Surgery
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Often called <em>“keyhole surgery”</em>, laparoscopic surgery uses specialized instruments and
          a camera to perform surgical procedures through very small incisions. This approach offers
          patients numerous benefits such as:
        </p>
        <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
          <li>Gallbladder removal</li>
          <li>Appendix surgery</li>
          <li>Hernia repair</li>
          <li>Bariatric surgery</li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed mt-3">
          Patients benefit from <strong>smaller scars, reduced pain, shorter hospital stays,</strong> and
          much <strong>quicker recovery times</strong>, allowing them to return to normal life sooner.
        </p>
      </section>
    </div>
  );
};

export default GeneralMedicine;
