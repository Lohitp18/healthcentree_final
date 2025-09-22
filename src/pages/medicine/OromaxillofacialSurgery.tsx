// src/pages/GeneralMedicine.tsx
import React from 'react';
import oralSurgeryImg from "../../images/about.png"; // Add a relevant image

const GeneralMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-10 font-serif">

      {/* Banner Image */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={oralSurgeryImg} alt="Oral & Maxillofacial Surgery" className="w-full h-56 object-cover" />
      </div>

      {/* Page Title */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        ORAL & MAXILLOFACIAL SURGERY
      </h1>

      {/* Overview */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Oral & Maxillofacial Surgery Department at Alva’s Health Centre offers specialized surgical care for conditions affecting the face, mouth, jaws, and neck. 
          Our experienced team combines advanced surgical techniques with modern technology to ensure safe, effective, and personalized treatment for every patient.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Provided
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Surgical removal of impacted and wisdom teeth</li>
          <li>Management of jaw fractures and facial injuries</li>
          <li>Treatment of oral cysts, tumors, and infections</li>
          <li>Corrective jaw surgery for deformities (orthognathic surgery)</li>
          <li>Management of temporomandibular joint (TMJ) disorders</li>
          <li>Reconstructive surgery for facial defects and trauma</li>
          <li>Supportive surgical care in dental implant placement</li>
        </ul>
      </section>

      {/* Expertise & Approach */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Our Approach
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
          Our team of oral and maxillofacial surgeons, dentists, and specialists provides comprehensive care for facial trauma, dental implants, jaw disorders, and oral pathology. 
          We emphasize restoring function, enhancing facial aesthetics, and ensuring patient comfort, using evidence-based techniques and state-of-the-art facilities.
        </p>
      </section>

    </div>
  );
};

export default GeneralMedicine;
