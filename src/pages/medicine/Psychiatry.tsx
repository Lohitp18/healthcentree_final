// src/pages/medicine/Psychiatry.tsx
import React from 'react';
import careImg from "../../images/fit1.jpg";

const Psychiatry = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-10 font-serif">

      {/* Header Image */}
      <div className="rounded-xl overflow-hidden shadow">
        <img src={careImg} alt="Psychiatry" className="w-full h-56 object-cover" />
      </div>

      {/* Page Title */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">
        OVERVIEW - PSYCHIATRY & MENTAL HEALTH
      </h1>

      {/* Introduction */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Alva’s Health Centre offers comprehensive psychiatric and mental health care through an integrated team of psychiatrists, psychologists, therapists, and social workers. Our approach combines evidence-based treatments with holistic methods, including Ayurveda, yoga, naturopathy, and supportive counseling, aiming to improve mental wellness, quality of life, and overall resilience.
        </p>
      </section>

      {/* Special Units */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Special Units & Holistic Care
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li><strong>Punarjanma Centre:</strong> Established in Jan 2020, focuses on addiction treatment and mental health rehabilitation using a multidisciplinary approach (allopathy, Ayurveda, homeopathy, yoga, naturopathy) with family counseling.</li>
          <li><strong>Shubhadhama:</strong> Holistic mental wellness centre integrating Ayurveda, yoga, and naturopathy for preventive and complementary mental health care.</li>
          <li>Clinical Psychology & Counseling Department providing therapy, psychological assessments, and individualized interventions.</li>
          <li>Visiting psychiatrists available for specialized care and consultations.</li>
        </ul>
      </section>

      {/* Common Conditions */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Common Conditions Treated</h3>
        <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700 leading-relaxed tracking-wide">
          <li>Depression and mood disorders</li>
          <li>Anxiety disorders (panic, generalized anxiety, phobias)</li>
          <li>Bipolar disorder</li>
          <li>Schizophrenia and psychotic disorders</li>
          <li>Post-traumatic stress disorder (PTSD)</li>
          <li>Obsessive-compulsive disorder (OCD)</li>
          <li>Substance use and addiction disorders</li>
          <li>Child and adolescent behavioral problems</li>
          <li>Personality disorders</li>
          <li>Sleep disorders with psychiatric causes</li>
          <li>Dementia and neurocognitive disorders</li>
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Services Provided</h3>

        <div className="space-y-6 text-gray-700 leading-relaxed tracking-wide">

          <div>
            <h4 className="text-xl font-semibold mb-2">Diagnostic & Assessment</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Comprehensive psychiatric evaluations</li>
              <li>Psychological and neuropsychological assessments</li>
              <li>Cognitive and memory testing</li>
              <li>Suicide and risk assessments</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Medical Management</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Prescription and monitoring of psychiatric medications</li>
              <li>Electroconvulsive therapy (ECT) when indicated</li>
              <li>Advanced treatments such as TMS (Transcranial Magnetic Stimulation)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Therapy & Counseling</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Individual psychotherapy (CBT, DBT, supportive therapy)</li>
              <li>Group therapy and family counseling</li>
              <li>Child and adolescent counseling</li>
              <li>Stress management and coping strategies</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Addiction & Rehabilitation</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Structured detoxification and 28-day programs at Punarjanma</li>
              <li>Relapse prevention and rehabilitation planning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Emergency & Inpatient Care</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Crisis intervention for acute psychiatric emergencies</li>
              <li>Inpatient psychiatric care units</li>
              <li>Collaborative care with neurology, psychology, and social work teams</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Preventive & Community Mental Health</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Mental health awareness programs</li>
              <li>Preventive interventions for high-risk groups</li>
              <li>School and workplace mental wellness initiatives</li>
              <li>Holistic lifestyle and resilience training</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Psychiatry;
