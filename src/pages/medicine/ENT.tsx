// src/pages/ENT.tsx
import React from 'react';

const ENT = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Full-width heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - ENT (Ear, Nose, Throat & Head & Neck Surgery)
      </h1>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The ENT Department specializes in comprehensive care for ear, nose, throat, head, and neck conditions. 
          It provides medical, surgical, and diagnostic services for both adults and children, focusing on restoring 
          hearing, improving breathing, managing voice disorders, and treating cancers and other complex conditions.
        </p>
      </section>

      {/* Ear */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Ear (Otology & Neurotology)</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Hearing assessment & audiology services</li>
          <li>Treatment of ear infections (acute & chronic otitis media/externa)</li>
          <li>Ear microsuction & wax removal</li>
          <li>Balance & dizziness evaluation (vertigo, Meniere’s disease)</li>
          <li>Tinnitus management</li>
          <li>Hearing aids & cochlear implants</li>
          <li>Surgery: Tympanoplasty, mastoidectomy, stapedectomy</li>
        </ul>
      </section>

      {/* Nose & Sinuses */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Nose & Sinuses (Rhinology)</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Diagnosis & treatment of sinusitis (acute & chronic)</li>
          <li>Nasal obstruction & deviated septum correction (septoplasty)</li>
          <li>Allergy testing & management</li>
          <li>Nasal polyps & endoscopic sinus surgery (FESS)</li>
          <li>Treatment of nosebleeds (epistaxis)</li>
          <li>Cosmetic & functional rhinoplasty</li>
        </ul>
      </section>

      {/* Throat & Voice */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Throat & Voice (Laryngology)</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Voice disorder evaluation & therapy</li>
          <li>Swallowing disorder (dysphagia) assessment & treatment</li>
          <li>Sleep apnea & snoring management (including surgery)</li>
          <li>Tonsillectomy & adenoidectomy</li>
          <li>Microlaryngeal surgery for vocal cord lesions</li>
          <li>Laryngeal cancer diagnosis & surgery</li>
        </ul>
      </section>

      {/* Head & Neck Surgery */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Head & Neck Surgery</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Thyroid & parathyroid surgery</li>
          <li>Salivary gland surgery (parotid, submandibular)</li>
          <li>Neck masses & cysts removal</li>
          <li>Head & neck cancer screening, biopsy & surgery</li>
          <li>Reconstructive head & neck surgery</li>
        </ul>
      </section>

      {/* Pediatric ENT */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Pediatric ENT</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Ear infections & hearing loss in children</li>
          <li>Tonsil & adenoid problems</li>
          <li>Airway disorders in children</li>
          <li>Congenital neck masses & anomalies</li>
          <li>Pediatric sleep apnea evaluation</li>
        </ul>
      </section>

      {/* Diagnostic & Support Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Diagnostic & Support Services</h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Audiometry & tympanometry</li>
          <li>Endoscopy of ear, nose, throat</li>
          <li>Allergy testing</li>
          <li>Voice & speech therapy</li>
          <li>Imaging support (CT, MRI for ENT conditions)</li>
        </ul>
      </section>
    </div>
  );
};

export default ENT;
