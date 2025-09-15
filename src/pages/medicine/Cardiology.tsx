// src/pages/GeneralMedicine.tsx
import React from 'react';

const GeneralMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12 bg-gray-50 rounded-lg shadow-lg font-serif">
     <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - CARDIOLOGY
      </h1>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Cardiology is dedicated to the diagnosis, treatment, and prevention of diseases related to the heart and blood vessels. It offers comprehensive care for patients with cardiovascular conditions through advanced technology, skilled specialists, and patient-centered approaches.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Our team of experienced cardiologists, nurses, and technicians is dedicated to providing the highest quality of care for patients with heart conditions. From diagnostic testing to advanced treatments and cardiac rehabilitation, we offer comprehensive services to support patients at every stage of their cardiac journey. Whether you're seeking preventive care or managing a complex cardiac condition, you can trust our team to provide expert guidance and compassionate support for your heart health.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2">Core Services</h2>
        <ol className="list-decimal list-inside space-y-5 text-gray-700 leading-relaxed tracking-wide">
          <li>
            <strong className="text-lg text-blue-700">Outpatient Cardiology Clinics</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
              <li>Consultation for chest pain, palpitations, shortness of breath, hypertension, and other cardiac symptoms</li>
              <li>Risk assessment and preventive cardiology (cholesterol, diabetes, smoking, obesity management)</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg text-blue-700">Inpatient Cardiac Care</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
              <li>Management of acute coronary syndromes (heart attacks, unstable angina)</li>
              <li>Heart failure treatment and monitoring</li>
              <li>Arrhythmia management and monitoring</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg text-blue-700">Diagnostic & Non-Invasive Cardiology</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
              <li>Electrocardiogram (ECG/EKG)</li>
              <li>Echocardiography (2D/3D, stress echo)</li>
              <li>Exercise stress testing (treadmill test)</li>
              <li>Holter and event monitoring</li>
              <li>Cardiac CT and MRI</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2">Specialized Services</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed tracking-wide ml-6">
          <li>Interventional Cardiology: Coronary angiography, angioplasty, stenting, structural heart procedures (TAVI, ASD/PFO closure), peripheral vascular interventions</li>
          <li>Electrophysiology: Diagnosis and treatment of arrhythmias, pacemaker and ICD implantation, radiofrequency ablation</li>
          <li>Heart Failure & Transplant Services: Advanced heart failure clinics, ventricular assist devices (VAD), cardiac transplantation support</li>
          <li>Preventive Cardiology & Rehabilitation: Lifestyle modification programs, cardiac rehab, hypertension and cholesterol management</li>
          <li>Pediatric Cardiology: Congenital heart disease screening, pediatric echocardiography, interventional pediatric cardiology</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-5 border-b border-blue-200 pb-2">Support & Training</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed tracking-wide ml-6 space-y-2">
          <li>24/7 Emergency Cardiac Services (heart attack response teams)</li>
          <li>Education and training for medical students, residents, and fellows</li>
          <li>Research in cardiovascular medicine, interventional techniques, and prevention</li>
        </ul>
      </section>
    </div>
  );
};

export default GeneralMedicine;
