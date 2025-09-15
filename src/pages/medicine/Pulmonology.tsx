// src/pages/Pulmonology.tsx
import React from 'react';

const Pulmonology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - PULMONOLOGY
      </h1>

      {/* Intro */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Pulmonology specializes in the diagnosis, treatment, and prevention of respiratory system disorders, including diseases of the lungs, airways, and breathing muscles. Our pulmonologists provide both inpatient and outpatient care using advanced diagnostic tools and therapies to manage a wide range of acute and chronic respiratory conditions.
        </p>
      </section>

      {/* Common Conditions */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Common Conditions Treated
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Asthma</li>
          <li>Chronic Obstructive Pulmonary Disease (COPD)</li>
          <li>Pneumonia and lung infections</li>
          <li>Tuberculosis (TB)</li>
          <li>Interstitial lung disease (ILD)</li>
          <li>Pulmonary fibrosis</li>
          <li>Sleep-related breathing disorders (sleep apnea, snoring)</li>
          <li>Lung cancer</li>
          <li>Pulmonary hypertension</li>
          <li>Occupational lung diseases (asbestosis, silicosis)</li>
          <li>Respiratory failure and critical care lung diseases</li>
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm space-y-6">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Provided by the Pulmonology Department
        </h2>

        {/* Diagnostic Services */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Diagnostic Services</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Pulmonary function testing (spirometry, lung volumes, diffusion capacity)</li>
            <li>Arterial blood gas (ABG) analysis</li>
            <li>Chest X-ray, CT, and MRI interpretation</li>
            <li>Bronchoscopy (airway examination and biopsy)</li>
            <li>Sleep studies (polysomnography)</li>
            <li>Allergy and asthma testing</li>
          </ul>
        </div>

        {/* Medical & Non-Surgical Management */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Medical & Non-Surgical Management</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Comprehensive asthma and COPD management plans</li>
            <li>Oxygen therapy and home ventilation support</li>
            <li>Medication management (inhalers, nebulizers, biologic therapy)</li>
            <li>Pulmonary rehabilitation programs</li>
            <li>Smoking cessation counseling</li>
          </ul>
        </div>

        {/* Critical Care & Preventive Services */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Critical Care & Preventive Services</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Management of respiratory failure in ICU settings</li>
            <li>Ventilator management (invasive and non-invasive)</li>
            <li>Preventive lung health programs</li>
            <li>Vaccination guidance (flu, pneumonia)</li>
            <li>Patient education on lifestyle and environmental risk reduction</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Pulmonology;
