// src/pages/medicine/Psychiatry.tsx
import React from 'react';
import careImg from "../../images/fit1.jpg";

const Psychiatry = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-10 font-serif">
      <div className="rounded-xl overflow-hidden shadow">
        <img src={careImg} alt="Psychiatry" className="w-full h-56 object-cover" />
      </div>
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">OVERVIEW - PSYCHIATRY</h1>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Our team of psychiatrists, psychologists, therapists, and social workers offers evidence-based treatments for various mental health conditions, including depression, anxiety, bipolar disorder, and schizophrenia. Through therapy, medication management, and supportive services, we strive to improve the well-being and quality of life of our patients. With compassion and expertise, we're dedicated to addressing mental health needs and promoting recovery and resilience.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Department of Psychiatry
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
          The Department of Psychiatry focuses on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders. Psychiatrists provide holistic care through medical, psychological, and social support, aiming to improve patients’ mental well-being and quality of life.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Common Conditions Treated</h3>
        <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700 leading-relaxed tracking-wide">
          <li>Depression and mood disorders</li>
          <li>Anxiety disorders (panic disorder, generalized anxiety, phobias)</li>
          <li>Bipolar disorder</li>
          <li>Schizophrenia and psychotic disorders</li>
          <li>Post-traumatic stress disorder (PTSD)</li>
          <li>Obsessive-compulsive disorder (OCD)</li>
          <li>Substance use and addiction disorders</li>
          <li>Sleep disorders with psychiatric causes</li>
          <li>Eating disorders (anorexia, bulimia, binge eating)</li>
          <li>Personality disorders</li>
          <li>Child and adolescent behavioral problems</li>
          <li>Dementia and psychiatric aspects of neurocognitive disorders</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Services Provided by the Psychiatry Department</h3>

        <div className="space-y-6 text-gray-700 leading-relaxed tracking-wide">
          <div>
            <h4 className="text-xl font-semibold mb-2">Diagnostic & Assessment Services</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Comprehensive psychiatric evaluations</li>
              <li>Psychological and neuropsychological testing</li>
              <li>Risk assessment for suicide and self-harm</li>
              <li>Cognitive and memory assessments</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Medical Management</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Prescription and monitoring of psychiatric medications</li>
              <li>Electroconvulsive therapy (ECT) when indicated</li>
              <li>Advanced treatments (such as TMS – Transcranial Magnetic Stimulation in some centers)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Therapy & Counseling</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Individual psychotherapy (CBT, DBT, supportive therapy)</li>
              <li>Group therapy sessions</li>
              <li>Family and couples therapy</li>
              <li>Child and adolescent counseling</li>
              <li>Stress management and coping strategies</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Addiction & Rehabilitation Services</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Substance abuse treatment programs</li>
              <li>Detoxification and relapse prevention</li>
              <li>Rehabilitation and recovery planning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Emergency & Inpatient Care</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Crisis intervention for acute psychiatric emergencies</li>
              <li>Inpatient psychiatric treatment units</li>
              <li>Collaborative care with neurology, psychology, and social work teams</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Preventive & Community Mental Health</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Awareness programs for mental health</li>
              <li>Preventive interventions for high-risk groups</li>
              <li>School and workplace mental health support programs</li>
              <li>Lifestyle modification and resilience training</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Psychiatry;
