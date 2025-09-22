// src/pages/GeneralMedicine.tsx
import React from 'react';
import lab from "../../images/laboratory1.jpg";
import sadanand from "../../images/sadanand.jpg";
import dhanya from "../../images/dr dhanya.jpg";

const GeneralMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Banner Image */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={lab} alt="General Medicine" className="w-full h-56 object-cover" />
      </div>

      {/* About Hospital */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        ABOUT ALVA’S HEALTH CENTRE
      </h1>
      <section className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <p className="text-gray-800 text-lg leading-relaxed">
          Founded in <strong>1986</strong> by <strong>Dr. M. Mohan Alva</strong>, Alva’s Health Centre was
          established with the mission of providing <strong>quality, affordable, and accessible healthcare</strong>
          to the people of Moodbidri and surrounding regions, who earlier had to travel long distances for
          advanced medical care.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed">
          Today, the facility has grown into a <strong>multi-speciality hospital with 200–300 beds</strong>, offering
          wide-ranging services including General Medicine, Surgery, Cardiology, Emergency & Trauma, Paediatrics,
          Neurology, Obstetrics & Gynaecology, and more.
        </p>
      </section>

      {/* General Medicine Overview */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        GENERAL MEDICINE DEPARTMENT
      </h1>
      <section className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <p className="text-gray-800 text-lg leading-relaxed">
          The Department of General Medicine at Alva’s Health Centre provides comprehensive care for a wide
          spectrum of medical conditions. Our team of experienced physicians ensures patient-centred,
          evidence-based medical care with round-the-clock service.
        </p>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed">
          <li><strong>Team / Staff:</strong> Managed by senior physicians including <em>Dr. B. Sadananda Naik</em> and <em>Dr. Dhanya Hegde</em>.</li>
          <li><strong>Focus Areas:</strong> Diabetes, hypertension, thyroid disorders, infectious diseases, and lifestyle-related illnesses.</li>
          <li><strong>Patient-Care Philosophy:</strong> Emphasis on evidence-based treatment and preventive healthcare.</li>
          <li><strong>Services & Facilities:</strong> General Medicine ward, diagnostic labs, outpatient consultations, and treatments for chronic and acute conditions.</li>
          <li><strong>Operating Hours:</strong> Mon–Sat: 8:00 AM – 6:00 PM; Sun: 8:00 AM – 2:00 PM. <br /> <strong>Emergency services available 24×7.</strong></li>
        </ul>
      </section>

      {/* Treatments & Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Treatments & Services
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Comprehensive diabetic care and education</li>
          <li>Hypertension and cardiovascular risk management</li>
          <li>Thyroid and endocrine disorder management</li>
          <li>Fever, infection and respiratory illness care</li>
          <li>Preventive health checks and vaccinations</li>
        </ul>
      </section>

      {/* Doctors */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Our Doctors
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[{ name: 'Dr. B. Sadananda Naik', role: 'Senior Physician', img: sadanand }, 
            { name: 'Dr. Dhanya Hegde', role: 'Physician', img: dhanya }]
            .map((d, i) => (
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
