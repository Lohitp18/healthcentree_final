import React from 'react';

// Example images - replace these with your actual image paths
import BloodBankImg1 from '../images/blood1.jpg';
import BloodBankImg2 from '../images/blood2.jpg';
import BloodBankImg3 from '../images/blood3.jpg';

const images = [
  { src: BloodBankImg1,  },
  { src: BloodBankImg2,  },
  { src: BloodBankImg3, },
];

const BloodBank = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
      <div className="max-w-4xl w-full text-slate-800">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
          BLOOD BANK
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map(({ src, alt }, idx) => (
            <figure key={idx} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <figcaption className="p-2 text-sm text-center text-slate-600">
                {alt}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mb-6 text-lg leading-relaxed">
          Our hospital has the only Blood bank in the vicinity which is used not only in Moodbidri but also from other taluks and districts. It hosts regular camps to spread awareness regarding importance of blood donation in and around Moodbidri.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Our Blood Bank is dedicated to providing safe, reliable, and timely blood and blood products to patients in need. With advanced testing facilities, strict quality control measures, and compassionate service, we ensure the availability of life-saving blood 24/7.
        </p>

        <h2 className="text-2xl font-semibold text-red-600 mb-4">Blood Bank Services</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-10">
          <li>Blood Collection</li>
          <li>Blood Component Separation</li>
          <li>Blood Grouping & Cross Matching</li>
          <li>Infectious Disease Screening</li>
          <li>Blood Storage & Issue</li>
          <li>Platelet Apheresis</li>
          <li>Emergency Blood Supply</li>
          <li>Donor Registration & Counseling</li>
          <li>Voluntary Blood Donation Camps</li>
        </ul>

        {/* Image Section */}
        
      </div>
    </section>
  );
};

export default BloodBank;
