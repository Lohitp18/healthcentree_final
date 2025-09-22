// src/pages/medicine/NephrologyUrology.tsx
import React from 'react';
import dialysis from "../../images/dialysis.png";

const NephrologyUrology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-10 font-serif">
      {/* Banner Image */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={dialysis} alt="Nephrology & Urology" className="w-full h-56 object-cover" />
      </div>

      {/* Page Title */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        NEPHROLOGY AND UROLOGY
      </h1>

      {/* Intro Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Nephrology and Urology at Alva’s Health Centre provide a wide range of services covering kidney-related conditions, 
          dialysis care, and urological surgeries. With 24×7 facilities, trained staff, and modern treatment options, 
          the departments are dedicated to delivering compassionate and effective care for patients.
        </p>
      </section>

      {/* Nephrology Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Nephrology at Alva’s
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-4">
          The Nephrology unit focuses on prevention, diagnosis, and management of kidney disorders. 
          Services are available around the clock, particularly for patients requiring dialysis.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Scope of Care</h3>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Medical management of chronic kidney disease (CKD), acute kidney injury (AKI), and hypertension.</li>
          <li>Management of electrolyte disturbances and related complications.</li>
          <li>24 × 7 Dialysis Unit: Regular hemodialysis and emergency dialysis care.</li>
          <li>Renal replacement therapy as a primary treatment for end-stage kidney disease.</li>
        </ul>
      </section>

      {/* Urology Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Urology at Alva’s
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-4">
          The Urology department provides comprehensive surgical and medical treatments for urinary tract and male reproductive system disorders. 
          Advanced techniques are available for minimally invasive stone management and other common urological conditions.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Core Urology Services</h3>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>Kidney Stone Management:</strong> ESWL (Extracorporeal Shock Wave Lithotripsy), RIRS (Retrograde Intrarenal Surgery), PCNL (Percutaneous Nephrolithotomy).</li>
          <li><strong>Benign Prostatic Hyperplasia (BPH):</strong> Diagnosis, medical management, and surgical interventions.</li>
          <li><strong>Hydrocele Treatment:</strong> Including surgical correction.</li>
          <li><strong>Circumcision:</strong> Both traditional and stapler methods.</li>
          <li><strong>Other Urological Surgeries:</strong> Management of balanitis, frenuloplasty, and related procedures.</li>
        </ul>
      </section>
    </div>
  );
};

export default NephrologyUrology;
