import React from 'react';

// Import insurance related images - update paths accordingly
import InsuranceImg1 from '../images/insurance1.jpg';
import InsuranceImg2 from '../images/insurance2.jpg';
import InsuranceImg3 from '../images/insurance3.jpg';

const HealthInsurances: React.FC = () => {
  const insurances = [
    'SAMPOORNA SURAKSHA',
    'ESIC',
    'YASHASWINI INSURANCE',
    'ADITYA BIRLA',
    'HDFC',
    'SBI GENERAL INSURANCE',
    'FUTURE HEALTH INSURANCE',
    'STAR HEALTH INSURANCE',
    'BAJAJ ALLIANZ LIFE INSURANCE',
    'MANIPAL CIGNA HEALTH INSURANCE',
    'HERITAGE TPA',
    'RELIANCE GENERAL INSURANCE',
    'TATA AIG INSURANCE',
    'MRPL',
    'AYUSHMAN BHARATH INSURANCE',
  ];

  const images = [
    { src: InsuranceImg1,},
    { src: InsuranceImg2,  },
    { src: InsuranceImg3,   },
  ];

  return (
    <section className="max-w-5xl mx-auto my-16 p-6 bg-white rounded-lg shadow-md text-slate-800">
      <h1 className="text-4xl font-bold text-teal-800 mb-8 text-center">HEALTH INSURANCES</h1>
      
      {/* Image Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg overflow-hidden shadow-lg border border-slate-200 max-w-4xl mx-auto">
        {images.map(({ src, alt }, idx) => (
          <figure key={idx} className="overflow-hidden rounded-lg">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <figcaption className="p-2 text-xs text-slate-600 text-center">{alt}</figcaption>
          </figure>
        ))}
      </div>

      <p className="mb-6 text-lg text-center font-semibold uppercase tracking-wide">
        Our hospital has tie-up with various health insurances so as to ease the financial burden on our patients.
      </p>

      <p className="mb-8 text-lg text-center">
        We offer the following insurances in our hospital:
      </p>

      <ol className="list-decimal list-inside space-y-2 text-lg text-slate-700 max-w-md mx-auto">
        {insurances.map((insurance, index) => (
          <li key={index}>{insurance}</li>
        ))}
      </ol>

    </section>
  );
};

export default HealthInsurances;
