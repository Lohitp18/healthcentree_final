import React from 'react';

// Replace with your dialysis image path
import DialysisImage from '../images/dialysis.png';

const Dialysis = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
      <div className="max-w-4xl w-full text-slate-800">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          DIALYSIS
        </h1>
        {/* Image Section */}
        <div className="mt-10 max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src={DialysisImage}
            alt="Dialysis Unit"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <p className="mb-6 text-lg leading-relaxed">
          Our dialysis unit was the first one to be started in Moodbidri which is well staffed and actively running 24x7 providing dialysis services with utmost efficiency.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Dialysis Services</h2>
        <p className="mb-6 text-lg leading-relaxed">
          Our hospital offers a state-of-the-art Dialysis Unit to provide safe, effective, and compassionate care for patients with kidney-related conditions. With modern dialysis machines, skilled nephrologists, and trained nursing staff, we ensure that every patient receives the highest standard of treatment in a comfortable environment.
        </p>

        <hr className="my-6 border-gray-300" />

        <h3 className="text-xl font-semibold text-blue-500 mb-2">🔹 What is Dialysis?</h3>
        <p className="mb-6 text-lg leading-relaxed">
          Dialysis is a life-saving treatment that removes waste products, excess fluids, and toxins from the blood when the kidneys are unable to function properly. It helps maintain balance in the body, improves overall health, and supports a better quality of life for patients with kidney failure.
        </p>

        <hr className="my-6 border-gray-300" />

        <h3 className="text-xl font-semibold text-blue-500 mb-2">🔹 Types of Dialysis We Provide</h3>
        <ul className="list-disc list-inside mb-6 text-lg text-slate-700 space-y-1">
          <li><strong>Hemodialysis</strong> – Blood is filtered using advanced dialysis machines to remove toxins and excess fluid.</li>
          <li><strong>Peritoneal Dialysis (PD)</strong> – A home-based dialysis option where cleansing is done through the lining of the abdomen.</li>
          <li><strong>SLED (Sustained Low-Efficiency Dialysis)</strong> – Special dialysis support for critically ill patients in the ICU.</li>
          <li><strong>CRRT (Continuous Renal Replacement Therapy)</strong> – Continuous dialysis support for unstable or high-risk patients.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-500 mb-2">Key Features of Our Dialysis Unit</h3>
        <ul className="list-disc list-inside mb-6 text-lg text-slate-700 space-y-1">
          <li>Modern, fully automated dialysis machines</li>
          <li>Strict infection control & patient safety measures</li>
          <li>Experienced nephrologists & trained dialysis technicians</li>
          <li>Individualized treatment plans for each patient</li>
          <li>Comfortable, air-conditioned treatment area with reclining chairs/beds</li>
          <li>Regular monitoring of patient vitals during sessions</li>
          <li>Availability of emergency dialysis services</li>
          <li>Nutritional & counselling support for kidney patients</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-500 mb-2">🔹 Who Needs Dialysis?</h3>
        <ul className="list-disc list-inside mb-6 text-lg text-slate-700 space-y-1">
          <li>Patients with Chronic Kidney Disease (CKD)</li>
          <li>Patients with Acute Kidney Failure</li>
          <li>Those awaiting a Kidney Transplant</li>
          <li>Patients with uncontrolled fluid overload or electrolyte imbalance</li>
        </ul>

        
      </div>
    </section>
  );
};

export default Dialysis;
