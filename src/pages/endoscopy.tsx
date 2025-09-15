import React from 'react';

// Import endoscopy-related images (update the path according to your folder structure)
import EndoscopyImg1 from '../images/endoscopy1.png';
import EndoscopyImg2 from '../images/endoscopy2.jpg';
import EndoscopyImg3 from '../images/endoscopy3.jpg';

const EndoscopyServices: React.FC = () => {
  const images = [
    { src: EndoscopyImg1, },
    { src: EndoscopyImg2, },
    { src: EndoscopyImg3,  },
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-md border border-slate-300 max-w-4xl mx-auto my-16 space-y-6">
      <h2 className="text-3xl font-bold text-teal-800 mb-4">Endoscopy Services</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl overflow-hidden shadow-lg border border-slate-200 mt-10">
        {images.map(({ src, alt }, idx) => (
          <figure key={idx} className="overflow-hidden rounded-lg">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <figcaption className="p-2 text-xs text-slate-600 text-center">
              {alt}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="text-lg text-slate-700">
        It is a long, thin, flexible tube with a light and camera attached to it. This lets doctors see images of the inside of the body on a screen.
      </p>

      <h3 className="text-2xl font-semibold text-teal-700 mt-8 mb-4">Our Services</h3>

      <ul className="list-disc list-inside space-y-2 text-slate-700 text-lg">
        <li><strong>Diagnostic Endoscopy</strong> – Examination of the digestive tract for accurate diagnosis.</li>
        <li><strong>Gastroscopy (Upper GI Endoscopy)</strong> – To view the food pipe, stomach, and upper small intestine.</li>
        <li><strong>Colonoscopy</strong> – To examine the large intestine and rectum.</li>
        <li><strong>Sigmoidoscopy</strong> – For lower colon evaluation.</li>
        <li><strong>Bronchoscopy</strong> – To look inside the airways and lungs.</li>
        <li><strong>ERCP (Endoscopic Retrograde Cholangiopancreatography)</strong> – For bile ducts, pancreas, and gallbladder.</li>
        <li><strong>Endoscopic Ultrasound (EUS)</strong> – For detailed imaging with ultrasound.</li>
        <li><strong>Polyp Removal & Biopsy</strong> – Safe removal of abnormal growths and tissue sampling.</li>
        <li><strong>Treatment of GI Bleeding</strong> – Stopping and managing gastrointestinal bleeding.</li>
        <li><strong>Stent Placement & Dilatation</strong> – Therapeutic procedures for blocked passages.</li>
        <li><strong>Cancer Screening</strong> – Early detection of digestive tract cancers.</li>
      </ul>

      {/* Image Section */}
      
    </section>
  );
};

export default EndoscopyServices;
