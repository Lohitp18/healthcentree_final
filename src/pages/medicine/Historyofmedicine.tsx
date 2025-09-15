// src/pages/HistoryOfMedicine.tsx
import React from 'react';

const HistoryOfMedicine = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Heading */}
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
        OVERVIEW - HISTORY OF MEDICINE
      </h1>

      {/* Intro Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of History of Medicine at St. John’s Medical College was established in 1964 by Prof. Emeritus Major General S. L. Bhatia (Retd.), upon the invitation of Dr. L. Monteiro, the founding Dean. Since its inception, the Department has served as a center of interdisciplinary inquiry and education, blending historical scholarship with the practice of modern medicine.
        </p>
      </section>

      {/* Objectives Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Objectives
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Foster a community of scholars and enthusiasts interested in the history of medicine.</li>
          <li>Organize lectures, discussions, and exhibitions with a special focus on Indian medical traditions.</li>
          <li>Curate and maintain a unique library and archive to support interdisciplinary historical research.</li>
        </ul>
      </section>

      {/* Museum Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          S. L. Bhatia Museum of the History of Medicine
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide mb-4">
          In 1974, the Department established the pioneering S. L. Bhatia Museum of the History of Medicine. The museum houses an exceptional collection of books, journals, medical artefacts, and illustrations donated by General Bhatia. Originally envisioned in the 1950s as part of a collaboration with the Government of Mysore, the museum found its home at St. John’s Medical College, where it continues to be a vital educational resource.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          General Bhatia’s bequest remains the heart of the museum, continually enriched by additional contributions over the years.
        </p>
      </section>

      {/* Annual Oration Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Major General S. L. Bhatia Memorial Oration
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          A highlight of the academic calendar, the annual Major General S. L. Bhatia Memorial Oration invites distinguished scholars to share their insights into the history of medicine and the broader medical humanities. This oration carries forward General Bhatia’s legacy of inquiry, education, and intellectual exchange.
        </p>
      </section>
    </div>
  );
};

export default HistoryOfMedicine;
