// src/pages/PlasticSurgery.tsx
import React from 'react';

const PlasticSurgery = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - PLASTIC SURGERY
      </h1>

      {/* Intro */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Plastic Surgery specializes in reconstructive, cosmetic, and corrective surgeries aimed at restoring form and function, as well as enhancing physical appearance. Our surgeons manage patients with congenital deformities, traumatic injuries, burns, and aesthetic concerns using state-of-the-art surgical and non-surgical techniques.
        </p>
      </section>

      {/* Conditions Treated */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Common Conditions & Cases Treated
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Congenital deformities (cleft lip and palate, ear deformities, hand malformations)</li>
          <li>Post-trauma reconstruction (facial fractures, complex wounds)</li>
          <li>Burn injuries and scar contractures</li>
          <li>Skin and soft tissue tumors</li>
          <li>Breast reconstruction after mastectomy</li>
          <li>Post-weight loss body contouring</li>
          <li>Aesthetic and cosmetic concerns (nose, face, body reshaping)</li>
          <li>Chronic non-healing wounds</li>
          <li>Pressure sores and diabetic ulcers</li>
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm space-y-6">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Provided by the Plastic Surgery Department
        </h2>

        {/* Reconstructive Surgery */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Reconstructive Surgery</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Cleft lip and palate repair</li>
            <li>Facial and jaw reconstruction</li>
            <li>Breast reconstruction (post-mastectomy)</li>
            <li>Hand and microsurgery for trauma or deformities</li>
            <li>Skin grafting and flap surgeries</li>
          </ul>
        </div>

        {/* Cosmetic Surgery */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Cosmetic (Aesthetic) Surgery</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Rhinoplasty (nose reshaping)</li>
            <li>Facelift and eyelid surgery (blepharoplasty)</li>
            <li>Liposuction and body contouring</li>
            <li>Breast augmentation, reduction, and lift</li>
            <li>Abdominoplasty (tummy tuck)</li>
            <li>Botox and fillers</li>
            <li>Laser treatments for skin rejuvenation and scars</li>
          </ul>
        </div>

        {/* Burns & Scar Management */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Burns & Scar Management</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Acute burn care and critical burn management</li>
            <li>Scar revision surgeries</li>
            <li>Contracture release procedures</li>
            <li>Advanced wound care</li>
          </ul>
        </div>

        {/* Non-Surgical Treatments */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Non-Surgical Treatments</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Chemical peels</li>
            <li>Laser hair removal</li>
            <li>Skin tightening procedures</li>
            <li>Minimally invasive anti-aging therapies</li>
          </ul>
        </div>

        {/* Rehabilitation & Supportive Care */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Rehabilitation & Supportive Care</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Post-surgical physiotherapy and occupational therapy</li>
            <li>Psychological support for trauma and cosmetic surgery patients</li>
            <li>Patient education on scar care, wound healing, and lifestyle modifications</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PlasticSurgery;
