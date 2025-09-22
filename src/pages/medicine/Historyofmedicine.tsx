// src/pages/HistoryOfMedicine.tsx
import React from 'react';

const HistoryOfMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        HISTORY OF ALVA’S HEALTH CENTRE
      </h1>

      {/* Key Origins & Early Steps */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Key Origins & Early Steps
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>
            <strong>1980:</strong> Dr. M. Mohan Alva started an Ayurvedic clinic in Moodubidire to
            serve rural health needs, especially common local issues such as snake bites.
          </li>
          <li>
            <strong>1982:</strong> Alva’s Pharmacy was founded to produce medicines locally to meet
            demand.
          </li>
          <li>
            <strong>1986 (May 31):</strong> Alva’s Health Centre was formally established as a
            full-fledged multi-speciality hospital to provide affordable and quality healthcare in
            and around Moodbidri, for people who otherwise had to travel long distances (30–40 km or
            more).
          </li>
        </ul>
      </section>

      {/* Expansion of Medical Services & Facilities */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Expansion of Medical Services & Facilities
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>
            The hospital has grown to about <strong>200–300 beds</strong>, serving multiple
            specialties.
          </li>
          <li>
            Developed a <strong>broad multi-speciality service department</strong>: General Medicine,
            Surgery (including endoscopic/laparoscopic), Orthopaedics, Obstetrics & Gynaecology,
            Paediatrics, ENT, Ophthalmology, Cardiology, Neurology, Nephrology, Dermatology,
            Psychiatry, Dental care, and more.
          </li>
          <li>
            <strong>Critical care facilities:</strong> ICU, Surgical ICU (SICU), NICU, Emergency &
            Trauma Care.
          </li>
          <li>
            <strong>Diagnostics & Imaging:</strong> CT Scan, Ultrasound, X-ray, PFT (Pulmonary
            Function Test), ECG, and ECHO.
          </li>
        </ul>
      </section>

      {/* Integration with Traditional Medicine & Education */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Integration with Traditional Medicine & Education
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>
            <strong>1996:</strong> Establishment of <strong>Alva’s Ayurveda Medical College &
            Hospital</strong> under Alva’s Education Foundation, expanding into Ayurvedic medicine.
          </li>
          <li>
            The Ayurveda College began with undergraduate <strong>BAMS</strong> (Bachelor of
            Ayurvedic Medicine & Surgery) and later added postgraduate specialties (e.g. Dravyaguna
            Vijnana, Shalya Tantra) from around 2006 onwards.
          </li>
          <li>
            The college developed a hospital component (IPD wards, OPDs) giving students hands-on
            clinical exposure, alongside associated modern hospital services.
          </li>
          <li>
            A facility called <strong>“Shubhadhama”</strong> was also created for mental health,
            integrating Ayurveda, Yoga, and Naturopathy approaches.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HistoryOfMedicine;
