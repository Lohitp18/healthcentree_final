// src/pages/Neurology.tsx
import React from 'react';
import brainImg from "../../images/about.png";
import chaitra from "../../images/neurologist/Dr. CHAITHRA S P.png"
import ragavendra from "../../images/neurologist/Dr. RAGHAVENDRA B S.png"
import rakshitha from "../../images/neurologist/Dr. RAKSHITHA C KEDAMBADY.png"

const Neurology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Banner */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={brainImg} alt="Neurology" className="w-full h-56 object-cover" />
      </div>

      {/* Page Title */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        NEUROLOGY
      </h1>

      {/* Overview */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Neurology at Alva’s Health Centre is dedicated to the diagnosis,
          treatment, and rehabilitation of neurological conditions affecting the brain, spinal cord,
          nerves, and muscles. With the support of visiting consultants, an in-house rehabilitation
          unit, and advanced diagnostic facilities, patients receive comprehensive and compassionate care.
        </p>
      </section>

      {/* Key Features */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Key Features
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>Speciality:</strong> Neurology is one of the core specialties offered at Alva’s.</li>
          <li><strong>Visiting Neurologists:</strong> Experts such as Dr. Rakshith Kedambadi, Dr. Raghavendra BS, Dr. Suhan Alva, and Dr. Chaitra are available on scheduled days.</li>
          <li><strong>Rehabilitation Support:</strong> A well-equipped Physiotherapy & Rehabilitation Department manages neurological recovery along with orthopedic cases.</li>
          <li><strong>Pain Clinic:</strong> Provides care for nerve pain and chronic neurological pain through therapies and medications.</li>
          <li><strong>Diagnostics:</strong> Imaging and lab services including CT scans support timely neurological evaluation.</li>
        </ul>
      </section>

      {/* Services & Facilities */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services & Facilities
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Comprehensive evaluation and management of neurological disorders.</li>
          <li>Physiotherapy & Rehabilitation for post-stroke, spinal cord injury, and nerve-related conditions.</li>
          <li>Pain Clinic for chronic headaches, neuropathic pain, and nerve-related issues.</li>
          <li>Diagnostic imaging and laboratory support (CT, EEG, EMG, lab tests).</li>
          <li>Specialist consultations through visiting neurologist schedules.</li>
        </ul>
      </section>

      {/* Strengths */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Strengths of the Neurology Department
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>In-house rehabilitation ensures holistic recovery for neurological patients.</li>
          <li>Advanced diagnostics like CT scans and lab support aid accurate and early detection.</li>
          <li>Visiting neurologists provide diverse expertise across subspecialties.</li>
          <li>Pain Clinic adds value for managing chronic neurological pain effectively.</li>
        </ul>
      </section>

      {/* Doctors */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Our Neurologists & Consultants
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { name: "Dr. Rakshith Kedambadi", role: "Consultant Neurologist", img: chaitra },
            { name: "Dr. Raghavendra BS", role: "Consultant Neurologist", img: ragavendra },
            { name: "Dr. Chaitra", role: "Visiting Neurologist", img: rakshitha }
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

export default Neurology;
