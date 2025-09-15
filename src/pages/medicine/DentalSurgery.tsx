// src/pages/GeneralMedicine.tsx
import React from 'react';

const GeneralMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Heading with blue background and white text */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
  OVERVIEW - DENTAL SURGERY
</h1>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Dental Surgery provides comprehensive care for the teeth, gums, jaws, and oral cavity. Dental surgeons manage oral health, perform corrective and reconstructive procedures, and offer preventive and cosmetic treatments to ensure both function and aesthetics.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Common Conditions Treated
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Dental caries (tooth decay) and cavities</li>
          <li>Gum diseases (gingivitis, periodontitis)</li>
          <li>Toothache and infections</li>
          <li>Impacted wisdom teeth</li>
          <li>Misaligned teeth and bite problems</li>
          <li>Oral cysts and tumors</li>
          <li>Jaw fractures and facial trauma</li>
          <li>Temporomandibular joint (TMJ) disorders</li>
          <li>Oral cancer (diagnosis and management in collaboration with oncology)</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Provided by Dental Surgery Department
        </h2>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">General & Preventive Dentistry</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Dental check-ups and oral health education</li>
            <li>Professional teeth cleaning (scaling and polishing)</li>
            <li>Fluoride treatments and sealants</li>
            <li>Preventive care for children and adults</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Restorative Dentistry</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Dental fillings (to restore decayed teeth)</li>
            <li>Root canal treatment (endodontics)</li>
            <li>Crowns, bridges, and dentures</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Oral & Maxillofacial Surgery</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Wisdom tooth extraction</li>
            <li>Jaw fracture management</li>
            <li>Cyst and tumor removal</li>
            <li>Corrective jaw surgery (orthognathic surgery)</li>
            <li>Trauma and facial injury reconstruction</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Periodontics (Gum Care)</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Gum disease treatment</li>
            <li>Gum grafting and flap surgeries</li>
            <li>Scaling and root planing</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Orthodontics (Teeth Alignment)</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Braces (metal, ceramic, lingual, clear aligners)</li>
            <li>Bite correction therapies</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Prosthodontics (Tooth Replacement)</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Dental implants</li>
            <li>Complete and partial dentures</li>
            <li>Full-mouth rehabilitation</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Cosmetic Dentistry</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Teeth whitening</li>
            <li>Veneers and laminates</li>
            <li>Smile designing</li>
            <li>Cosmetic bonding</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Pediatric Dentistry</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Preventive and restorative dental care for children</li>
            <li>Habit-breaking appliances (thumb sucking, tongue thrusting)</li>
            <li>Early orthodontic interventions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GeneralMedicine;
