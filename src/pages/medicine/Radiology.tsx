// src/pages/Radiology.tsx
import React from 'react';
import xray from "../../images/xray1.jpg";

const Radiology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">

      {/* Header Image */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={xray} alt="Radiology" className="w-full h-56 object-cover" />
      </div>

      {/* Page Title */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        OVERVIEW - RADIOLOGY
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Alva’s Health Centre (AHC) offers modern radiology services with advanced imaging equipment
          and skilled technicians, ensuring accurate diagnosis and effective treatment planning. Our
          radiology department supports clinical teams in assessing fractures, tumors, internal organ
          health, and other conditions through safe, high-quality imaging techniques.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Radiology & Diagnostic Services
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>X-ray Imaging:</strong> For bone injuries, fractures, chest, and other diagnostic needs.</li>
          <li><strong>Ultrasound & Doppler Studies:</strong> Abdominal, fetal monitoring, soft tissues, and vascular assessments.</li>
          <li><strong>CT Scans:</strong> Detailed imaging of internal organs, bones, chest, abdomen, and neuro assessments.</li>
          <li><strong>MRI:</strong> Neuro, musculoskeletal, and soft tissue imaging for precise diagnostics.</li>
          <li><strong>ECG & Echocardiography:</strong> Cardiac imaging and assessment as part of diagnostic services.</li>
          <li><strong>Image-guided Procedures & Biopsies:</strong> Supporting interventional and diagnostic procedures safely.</li>
        </ul>
      </section>

      {/* Technology & Quality */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Technology & Quality
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
          Our radiology department utilizes state-of-the-art equipment and follows strict radiation
          safety protocols. Timely imaging and accurate reporting help clinicians make informed decisions
          to improve patient outcomes and provide comprehensive care across all specialties.
        </p>
      </section>

    </div>
  );
};

export default Radiology;
