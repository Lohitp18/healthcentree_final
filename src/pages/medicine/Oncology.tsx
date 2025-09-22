// src/pages/medicine/Oncology.tsx
import React from 'react';
import oncoImg from "../../images/dr-sanal-fernandes-medical-oncologist-in-mangalore.png";

const Oncology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-10 font-serif">

      {/* Banner Image */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={oncoImg} alt="Oncology" className="w-full h-56 object-cover" />
      </div>

      {/* Page Title */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        OVERVIEW - ONCOLOGY & ONCOSURGERY
      </h1>

      {/* Overview */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Alva’s Health Centre provides a dedicated Oncology & Onco-Surgery department, empanelled under ESIC (Karnataka). 
          We offer comprehensive care for cancer patients, including surgical interventions, medical oncology (chemotherapy, targeted therapy, immunotherapy), and supportive care. 
          Our multidisciplinary approach ensures patients receive personalized treatment, combining precision, safety, and compassion.
        </p>
      </section>

      {/* Common Conditions Treated */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Common Conditions Treated
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700 leading-relaxed tracking-wide">
          <li>Breast, lung, colorectal, and prostate cancers</li>
          <li>Blood cancers: leukemia, lymphoma, multiple myeloma</li>
          <li>Head and neck cancers</li>
          <li>Gynecological cancers (ovarian, cervical, uterine)</li>
          <li>Skin cancers (melanoma, basal cell carcinoma, squamous cell carcinoma)</li>
          <li>Bone and soft tissue cancers (sarcomas)</li>
          <li>Brain and spinal cord tumors</li>
          <li>Pediatric cancers</li>
        </ul>
      </section>

      {/* Services Provided */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Provided by the Oncology Department
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed tracking-wide">
          
          {/* Diagnostic & Screening */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Diagnostic & Screening Services</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Cancer screening programs: mammography, colonoscopy, Pap smear, PSA testing</li>
              <li>Advanced imaging: CT, MRI, PET-CT scans</li>
              <li>Biopsy and pathological evaluation</li>
              <li>Genetic counseling and testing for hereditary cancers</li>
            </ul>
          </div>

          {/* Medical Oncology */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Medical Oncology</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Chemotherapy and immunotherapy</li>
              <li>Targeted therapy and hormone therapy</li>
              <li>Day-care chemotherapy units</li>
              <li>Management of treatment side effects</li>
            </ul>
          </div>

          {/* Surgical Oncology */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Surgical Oncology</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Tumor removal surgeries</li>
              <li>Breast-conserving and reconstructive surgeries</li>
              <li>Minimally invasive cancer surgeries</li>
              <li>Palliative surgical procedures</li>
            </ul>
          </div>

          {/* Radiation Oncology */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Radiation Oncology</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>External beam radiation therapy (EBRT)</li>
              <li>Brachytherapy (internal radiation)</li>
              <li>Stereotactic radiosurgery (SRS) & stereotactic body radiotherapy (SBRT)</li>
            </ul>
          </div>

          {/* Supportive & Palliative Care */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Supportive & Palliative Care</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Pain management and symptom control</li>
              <li>Nutritional counseling</li>
              <li>Psychological support and counseling</li>
              <li>Hospice and end-of-life care</li>
            </ul>
          </div>

          {/* Rehabilitation & Preventive Care */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Rehabilitation & Preventive Care</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Post-treatment rehabilitation and survivorship programs</li>
              <li>Lifestyle guidance for cancer prevention</li>
              <li>Smoking cessation and wellness programs</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Oncology;
