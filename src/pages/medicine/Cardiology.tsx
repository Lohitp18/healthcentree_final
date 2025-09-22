// src/pages/Cardiology.tsx
import React from 'react';
import ecg1 from "../../images/ecg1.jpg";
import narayan from "../../images/dr-narayan-bhat-m-consultant-cardiology.jpg";
import padmanaba from "../../images/padmanaba.png";

const Cardiology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12 bg-gray-50 rounded-lg shadow-lg font-serif">
      {/* Banner Image */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={ecg1} alt="Cardiology" className="w-full h-56 object-cover" />
      </div>

      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        OVERVIEW - CARDIOLOGY
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          <strong>Cardiology at Alva’s Health Centre</strong> provides comprehensive heart care 
          services ranging from preventive cardiology to management of acute emergencies. 
          The department is supported by experienced in-house and visiting cardiologists, 
          modern diagnostic tools, and ICU facilities to ensure patient safety and effective treatment.
        </p>
      </section>

      {/* What They Offer */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2">
          What We Offer
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Cardiac Clinic / Cardiology Services offered as a key speciality.</li>
          <li>Diagnostic services such as Treadmill Test (TMT), ECHO (echocardiogram), and ECG.</li>
          <li>ICU / Intensive Care Units available to manage acute cardiac emergencies.</li>
        </ul>
      </section>

      {/* Doctors / Specialists */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2">
          Our Doctors & Specialists
        </h2>
        <p className="mb-4 text-gray-700">
          Both in-house and visiting cardiologists provide expert care at Alva’s. 
          Some of the visiting specialists include:
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {[ 
            { name: 'Dr. Padmanabha Kamath', role: 'Senior Cardiologist', img: padmanaba },
            { name: 'Dr. Narasimha Pai', role: 'Visiting Cardiologist', img: '' },
            { name: 'Dr. Praveen J. Shetty', role: 'Interventional Cardiologist', img: '' },
            { name: 'Dr. Narayan Bhat M', role: 'Consultant Cardiologist', img: narayan }
          ].map((d, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border">
              {d.img ? (
                <img src={d.img} alt={d.name} className="w-20 h-20 object-cover rounded-full shadow" />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  No Image
                </div>
              )}
              <div>
                <div className="font-semibold text-gray-900">{d.name}</div>
                <div className="text-sm text-gray-600">{d.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities / Equipment */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2">
          Facilities & Equipment
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Diagnostic tools: Echo, Treadmill Test (TMT), ECG.</li>
          <li>Critical care support including ICU and trauma care for severe cardiac cases.</li>
        </ul>
      </section>

      {/* Scheduling / Access */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2">
          Scheduling & Access
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>
            Visiting cardiologists are available on specific days:
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li><strong>Dr. Narasimha Pai:</strong> 2nd Sunday of every month</li>
              <li><strong>Dr. Padmanabha Kamath:</strong> Last Thursday of every month</li>
            </ul>
          </li>
          <li>The cardiology department follows a structured schedule with both regular and visiting physicians.</li>
        </ul>
      </section>
    </div>
  );
};

export default Cardiology;
