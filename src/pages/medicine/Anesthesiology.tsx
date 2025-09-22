// src/pages/Anesthesiology.tsx
import React from 'react';

const Anesthesiology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - ANESTHESIOLOGY
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          <strong>Anesthesiology at Alva’s Health Centre</strong> focuses on providing safe and
          effective pain relief and anesthesia services for patients undergoing surgeries and
          procedures. The department ensures patient comfort, monitors vital signs, and supports
          recovery before, during, and after surgery.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Anesthesiology provides comprehensive medical services focused on the
          safe administration of anesthesia and the management of pain before, during, and after
          surgical or medical procedures.
        </p>
      </section>

      {/* Key Highlights */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Key Highlights
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>Pre-operative Assessment:</strong> Thorough evaluation to ensure patient safety.</li>
          <li><strong>General & Regional Anesthesia:</strong> Tailored to the type of surgery and patient needs.</li>
          <li><strong>Sedation Services:</strong> For minor procedures and diagnostic tests.</li>
          <li><strong>Post-operative Care:</strong> Pain management and monitoring during recovery.</li>
          <li><strong>Critical Care Support:</strong> Assistance in ICU and emergency situations.</li>
        </ul>
      </section>

      {/* Core Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Core Services
        </h2>
        <ol className="list-decimal list-inside ml-6 space-y-4 text-gray-700 leading-relaxed tracking-wide">
          <li>
            <strong>Preoperative Evaluation</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Patient assessment before surgery (medical history, physical exam, risk stratification)</li>
              <li>Optimization of comorbidities (e.g., heart, lung, kidney conditions)</li>
              <li>Counseling about anesthesia risks and options</li>
            </ul>
          </li>
          <li>
            <strong>Intraoperative Anesthesia</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>General anesthesia (complete unconsciousness)</li>
              <li>Regional anesthesia (spinal, epidural, nerve blocks)</li>
              <li>Monitored anesthesia care (sedation with pain control)</li>
              <li>Tailored anesthesia plans for complex or high-risk surgeries</li>
            </ul>
          </li>
          <li>
            <strong>Post-Anesthesia Care</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Recovery room (PACU) management</li>
              <li>Monitoring of vital signs, pain control, and emergence from anesthesia</li>
              <li>Management of nausea, vomiting, or complications</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Specialized Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Specialized Services
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>Critical Care Medicine:</strong> Intensive Care Unit (ICU) support, life support, advanced monitoring</li>
          <li><strong>Pain Medicine:</strong> Acute and chronic pain services, interventional pain procedures</li>
          <li><strong>Obstetric Anesthesia:</strong> Labor analgesia, cesarean section anesthesia</li>
          <li><strong>Pediatric Anesthesia:</strong> Specialized techniques for infants and children</li>
          <li><strong>Cardiac & Neuroanesthesia:</strong> Advanced care for heart and brain surgeries</li>
        </ul>
      </section>

      {/* Support & Training */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Support & Training
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Emergency & Trauma Response (airway management, resuscitation)</li>
          <li>Education & Training (medical students, residents, fellows)</li>
          <li>Research (anesthesia safety, pain management, new drug protocols)</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide font-semibold">
          The Department of Anesthesiology plays a central role in patient safety, pain management,
          and perioperative care, extending its expertise from the operating room to intensive care
          units, labor & delivery suites, pain clinics, and beyond.
        </p>
      </section>
    </div>
  );
};

export default Anesthesiology;
