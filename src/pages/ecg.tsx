import React from 'react';
import { Activity, Heart, Radio, Cpu } from 'lucide-react';

// Import images (adjust paths)
import EcgImg from '../images/ecg1.jpg';
import XrayImg from '../images/ecg2.jpg';
import CtScanImg from '../images/xray1.jpg';

const DiagnosticServices: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-6xl mx-auto my-16 space-y-10">
      <h2 className="text-3xl font-bold text-teal-800 flex items-center">
        <Activity className="mr-3" size={28} /> ECG / XRAY / CT SCAN Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        {[{ src: EcgImg, alt: 'ECG Machine' }, { src: XrayImg, alt: 'Digital X-Ray Facility' }, { src: CtScanImg, alt: 'CT Scan Equipment' }].map((img, i) => (
          <figure key={i} className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover aspect-video" />
            <figcaption className="p-3 text-sm text-slate-600 text-center">{img.alt}</figcaption>
          </figure>
        ))}
      </div> 

      <p className="text-lg text-slate-700 max-w-4xl">
        Our centre includes various imaging technologies like X-ray and CT scan to diagnose and treat diseases. We also offer ECG services which help in diagnosing multiple cardiac conditions and provide appropriate treatment.
      </p>

      <div className="space-y-8 text-slate-700 text-lg max-w-4xl">

        {/* ECG Section */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700 flex items-center mb-2">
            <Heart className="mr-2" size={24} /> ECG (Electrocardiogram)
          </h3>
          <p>An Electrocardiogram (ECG) is a simple, painless test that records the electrical activity of the heart.</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Records the electrical activity of the heart.</li>
            <li>Helps in detecting arrhythmias, heart attacks, and cardiac abnormalities.</li>
            <li>Quick, safe, and painless procedure.</li>
          </ul>
        </div>

        {/* X-Ray Section */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700 flex items-center mb-2">
            <Radio className="mr-2" size={24} /> X-Ray
          </h3>
          <p>
            X-Rays use a small dose of ionizing radiation to create images of bones and internal organs. Our lab is equipped with digital X-ray machines that provide sharper images with less radiation exposure.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Uses low-dose radiation to capture images of bones, chest, joints, and soft tissues.</li>
            <li>Commonly used for detecting fractures, infections, lung conditions, and abdominal issues.</li>
            <li>Digital X-Ray facility for faster and clearer results.</li>
          </ul>
        </div>

        {/* CT Scan Section */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700 flex items-center mb-2">
            <Cpu className="mr-2" size={24} /> CT Scan (Computed Tomography)
          </h3>
          <p>
            A CT Scan combines X-ray images taken from different angles with computer technology to create detailed cross-sectional images of the body.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Advanced imaging technique providing cross-sectional 3D images of internal organs.</li>
            <li>Useful for diagnosing brain injuries, tumors, chest/abdominal conditions, and vascular diseases.</li>
            <li>High-resolution scans with reduced exposure time for patient safety.</li>
          </ul>
        </div>
      </div>

      {/* Images Section */}
      
    </section>
  );
};

export default DiagnosticServices;
