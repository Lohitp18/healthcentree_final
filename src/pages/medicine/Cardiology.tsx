import React from 'react';
import ecg1 from "../../images/ecg1.jpg";
import narayan from "../../images/dr-narayan-bhat-m-consultant-cardiology.jpg";
import padmanaba from "../../images/padmanaba.png";

const Cardiology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12 bg-gray-50 rounded-lg shadow-lg font-serif">
      <div className="rounded-xl overflow-hidden shadow">
        <img src={ecg1} alt="Cardiology" className="w-full h-56 object-cover" />
      </div>

      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">OVERVIEW - CARDIOLOGY</h1>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Cardiology provides comprehensive evaluation and treatment for heart and vascular
          diseases. From preventive cardiology to advanced interventions, our team delivers safe, evidence-based
          care tailored to each patient.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2">Key Treatments</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Coronary angiography, angioplasty and stenting</li>
          <li>Heart failure management and cardiac rehabilitation</li>
          <li>Arrhythmia care: Holter, EP study, pacemaker and ICD</li>
          <li>Non-invasive cardiology: ECG, Echo, TMT, cardiac CT/MRI</li>
          <li>Prevention programs for hypertension, diabetes, cholesterol</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2">Our Doctors</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[{ name: 'Dr. Narayan Bhat M', role: 'Consultant Cardiologist', img: narayan }, { name: 'Dr. Padmanabha Kamath', role: 'Senior Cardiologist', img: padmanaba }].map((d, i) => (
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

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2">Support & Training</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed tracking-wide ml-6 space-y-2">
          <li>24/7 emergency cardiac services and STEMI response</li>
          <li>Patient education for lifestyle change and risk reduction</li>
          <li>Regular CME, audits, and quality improvement programs</li>
        </ul>
      </section>
    </div>
  );
};

export default Cardiology;
