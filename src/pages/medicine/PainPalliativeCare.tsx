// src/pages/GeneralMedicine.tsx
import React from 'react';

const PainManagement = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      {/* Overview */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-4 block w-full">
        PAIN MANAGEMENT & PALLIATIVE CARE
      </h1>
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          At Alva’s Health Centre, we understand that managing pain and improving quality of life are essential parts of comprehensive patient care. 
          Our Pain Management & Palliative Care Department provides compassionate, multidisciplinary support for patients suffering from chronic pain, terminal illnesses, or life-limiting conditions.
        </p>
      </section>

      {/* Key Objectives */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Key Objectives
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>Comprehensive Pain Relief:</strong> Addressing pain caused by cancer, neurological disorders, musculoskeletal problems, or post-surgical recovery.</li>
          <li><strong>Holistic Care:</strong> Supporting physical, emotional, psychological, and spiritual well-being.</li>
          <li><strong>Quality of Life:</strong> Helping patients live as comfortably and actively as possible, regardless of disease stage.</li>
          <li><strong>Family Support:</strong> Guiding families and caregivers through treatment decisions, counseling, and end-of-life care.</li>
        </ul>
      </section>

      {/* Services Offered */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Offered
        </h2>

        {/* Pain Management */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Pain Management</h3>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700 leading-relaxed tracking-wide">
            <li>Acute pain management (post-surgical, injury-related)</li>
            <li>Chronic pain management (back pain, arthritis, neuropathic pain)</li>
            <li>Cancer pain management with opioid and non-opioid regimens</li>
            <li>Interventional pain procedures</li>
            <li>Nerve blocks</li>
            <li>Epidural injections</li>
            <li>Trigger point injections</li>
            <li>Joint injections</li>
            <li>Medication optimization to minimize side effects</li>
          </ul>
        </div>

        {/* Palliative Care */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Palliative Care</h3>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700 leading-relaxed tracking-wide">
            <li>Symptom management: nausea, breathlessness, fatigue, loss of appetite</li>
            <li>Counseling and psychological support</li>
            <li>Home-based palliative care coordination (where applicable)</li>
            <li>End-of-life care planning</li>
            <li>Advance care planning & decision-making support</li>
          </ul>
        </div>
      </section>

      {/* Summary / Approach */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Our interdisciplinary team, including pain specialists, palliative care physicians, nurses, and therapists, offers comprehensive support and symptom management. 
          Through advanced pain interventions, medication management, and holistic therapies, we strive to alleviate suffering and enhance comfort. 
          With compassion and expertise, we're dedicated to providing personalized care and support for patients and their families.
        </p>
      </section>
      
    </div>
  );
};

export default PainManagement;
