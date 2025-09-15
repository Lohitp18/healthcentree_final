// src/pages/GeneralMedicine.tsx
import React from 'react';

const GeneralMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-10 font-serif">
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        NEPHROLOGY AND UROLOGY
      </h1>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Our team of nephrologists and urologists provides comprehensive care for conditions such as kidney stones, urinary tract infections, and kidney disease. From medical management to surgical interventions, we offer personalized treatment plans tailored to each patient's needs. With a focus on innovation and compassionate care, we're dedicated to improving the health and quality of life for our patients.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Department of Nephrology Services
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-4">
          The Department of Nephrology is dedicated to the prevention, diagnosis, and treatment of diseases affecting the kidneys and urinary system. It provides comprehensive care for patients with acute and chronic kidney disorders, electrolyte imbalances, and hypertension, along with specialized renal replacement therapies.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Core Services</h3>
        <ol className="list-decimal list-inside ml-6 space-y-4 text-gray-700 leading-relaxed tracking-wide">
          <li>
            <strong>Outpatient & Inpatient Nephrology Care</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Management of chronic kidney disease (CKD)</li>
              <li>Evaluation and treatment of acute kidney injury (AKI)</li>
              <li>Hypertension and electrolyte disorders</li>
            </ul>
          </li>
          <li>
            <strong>Dialysis Services</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Hemodialysis (regular and emergency)</li>
              <li>Peritoneal dialysis (continuous ambulatory and automated)</li>
              <li>Home-based dialysis programs</li>
            </ul>
          </li>
          <li>
            <strong>Transplant Nephrology</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Pre-transplant evaluation and optimization</li>
              <li>Post-kidney transplant care and long-term follow-up</li>
              <li>Immunosuppressive therapy management</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Specialized Services</h3>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Renal Replacement Therapy (RRT): Continuous renal replacement therapy (CRRT), plasmapheresis, hemoperfusion</li>
          <li>Kidney Biopsy & Diagnostics: Ultrasound-guided renal biopsies, evaluation of glomerular and interstitial diseases</li>
          <li>Hypertension & Metabolic Management: Resistant hypertension clinics, management of metabolic bone disease, anemia of CKD, and fluid imbalances</li>
          <li>Preventive Nephrology: Screening for diabetic kidney disease, hypertensive nephropathy, lifestyle modification programs</li>
          <li>Pediatric Nephrology: Diagnosis and treatment of congenital and acquired kidney diseases in children, pediatric dialysis and transplant support</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Support & Training</h3>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>24/7 emergency services for acute renal failure and poisoning requiring dialysis</li>
          <li>Patient and family education on kidney disease management</li>
          <li>Training for medical students, residents, and nephrology fellows</li>
          <li>Research in kidney diseases, dialysis innovation, and transplant outcomes</li>
        </ul>
      </section>
    </div>
  );
};

export default GeneralMedicine;
