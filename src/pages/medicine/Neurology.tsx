// src/pages/GeneralMedicine.tsx
import React from 'react';

const GeneralMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
<h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
          OVERVIEW - NEUROLOGY
      </h1>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Neurology is dedicated to the diagnosis, treatment, and management of disorders affecting the brain, spinal cord, nerves, and muscles. Neurologists provide comprehensive care for both acute and chronic neurological conditions, using advanced diagnostic techniques and evidence-based treatments.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Common Conditions Treated
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Headache disorders (migraines, cluster headaches, tension headaches)</li>
          <li>Epilepsy and seizures</li>
          <li>Stroke and transient ischemic attacks (TIAs)</li>
          <li>Multiple sclerosis (MS)</li>
          <li>Parkinson’s disease and other movement disorders</li>
          <li>Dementia and Alzheimer’s disease</li>
          <li>Neuropathy (including diabetic neuropathy)</li>
          <li>Brain and spinal cord injuries</li>
          <li>Muscular disorders (myasthenia gravis, muscular dystrophy)</li>
          <li>Sleep disorders (narcolepsy, restless legs syndrome, sleep apnea with neurological causes)</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Provided by the Neurology Department
        </h2>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Neurological Examinations</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Reflex, coordination, sensation, strength, and mental status testing</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Diagnostic Testing</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>MRI & CT scans</li>
            <li>EEG (electroencephalogram)</li>
            <li>EMG (electromyography)</li>
            <li>Lumbar puncture (spinal tap)</li>
            <li>Blood tests for neurological disorders</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Medical Management</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Prescription medications for seizures, migraines, and movement disorders</li>
            <li>Long-term management for chronic neurological diseases (MS, Parkinson’s, epilepsy)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Pain Management</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Treatment for nerve pain, chronic headaches, and neuropathic pain</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Rehabilitation Support</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Collaboration with physiotherapists, occupational therapists, and speech therapists</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Preventive Care</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Stroke prevention and risk factor management</li>
            <li>Cognitive decline monitoring and memory clinics</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GeneralMedicine;
