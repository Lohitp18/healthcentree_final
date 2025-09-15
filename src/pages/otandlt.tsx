import React from 'react';
import { ScissorsSquare, Baby, Syringe } from 'lucide-react';

// Image imports (ensure file names & paths are correct)
import ot1 from '../images/OT1.jpg';
import ot2 from '../images/Ot2.jpg';
import lt1 from '../images/Ot3.jpg';

const OtLtServices: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6 lg:px-20 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Main Title */}
        <div className="text mb-12">
          <h1 className="text-4xl font-bold text-teal-800 flex justify-left items mb-3">
            <ScissorsSquare className="mr-3" size={32} /> OT & LT Services
          </h1>
           <section className="space-y-8">
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ src: ot1, alt: 'Modern OT Room' }, { src: ot2, alt: 'Sterile Surgical Area' }, { src: lt1, alt: 'Well-equipped Labour Theatre' }].map((img, i) => (
              <figure key={i} className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover aspect-video" />
                <figcaption className="p-4 text-sm text-slate-600">{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Alvas has well-equipped four major OTs, three minor OTs, and a labour theatre. We offer a range of procedures including general and laparoscopic surgeries, OBG, orthopedic surgeries, ENT procedures, onco surgeries, and more – all performed by expert surgeons.
          </p>
        </div>

        {/* Operation Theatre Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-teal-800 flex items-center">
            <Syringe className="mr-3" size={28} /> Operation Theatre (OT)
          </h2>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
            <p className="text-lg text-slate-700">
              Our hospital is equipped with state-of-the-art Operation Theatres (OTs) designed to provide a safe, sterile, and advanced environment for all types of surgical procedures. With modern infrastructure and a dedicated surgical team, we ensure precision, safety, and world-class care for every patient.
            </p>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">🔹 Features of Our Operation Theatres</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Modular OTs with laminar airflow and infection control systems</li>
                <li>Advanced anesthesia workstations and patient monitoring equipment</li>
                <li>High-end surgical instruments including laparoscopic and minimally invasive tools</li>
                <li>24/7 availability for both elective and emergency surgeries</li>
                <li>Strict sterilization protocols to maintain a germ-free environment</li>
                <li>Dedicated surgical teams – surgeons, anesthesiologists, nurses, and technicians</li>
              </ul>
            </div>

            {/* Surgeries */}
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">🔹 Types of Surgeries Performed</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>General surgery</li>
                <li>Orthopedic & joint replacement surgery</li>
                <li>Neurosurgery</li>
                <li>Cardiac & vascular surgery</li>
                <li>ENT, ophthalmic, and plastic surgery</li>
                <li>Urology & laparoscopic surgery</li>
                <li>Obstetrics & gynecology surgery</li>
              </ul>
            </div>

            {/* Safety */}
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">🔹 Patient Safety & Care</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Continuous monitoring during surgery</li>
                <li>Pre-operative and post-operative care units</li>
                <li>Strict adherence to international surgical safety protocols</li>
                <li>Infection prevention measures for patient protection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Labour Theatre Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-teal-800 flex items-center">
            <Baby className="mr-3" size={28} /> Labour Theatre (LT) Services
          </h2>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-lg text-slate-700 mb-4">
              Our hospital’s Labour Theatre (Delivery Suite) is specially designed to provide safe, hygienic, and compassionate care for mothers and newborns during childbirth. Equipped with advanced technology and supported by an expert medical team, we ensure that every delivery is handled with the highest standards of safety and comfort.
            </p>
          </div>
        </section>

        {/* Combined OT & LT Facilities Images Section */}
       
      </div>
    </div>
  );
};

export default OtLtServices;
