import React from 'react';
import { Baby, Heart, Stethoscope, Bed, Users } from 'lucide-react';

// Import your images here for the combined section. Make sure the paths are correct.
import nicu1 from '../images/nicu1.jpg'; // Placeholder
import nicu2 from '../images/nicu2.jpg'; // Placeholder
import nicu3 from '../images/nicu3.jpg'; // Placeholder

const CriticalCare: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6 lg:px-20 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main Title and Introduction */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-800 mb-3 flex items-left justify-left">
            <Heart className="mr-3" size={32} /> NICU / ICU with Ventilator
          </h1>
          <section className="space-y-8">
          <h2 className="text-3xl font-bold text-teal-800 flex items-center justify-center">
        
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <img src={nicu1} alt="Inside a modern NICU unit" className="w-full h-48 object-cover" />

            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <img src={nicu2} alt="Medical staff attending to a patient in the ICU" className="w-full h-48 object-cover" />
              
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <img src={nicu3} alt="High-tech ventilator equipment" className="w-full h-48 object-cover" />
              
            </div>
          </div>
        </section>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Our hospital provides critical care and life support for acutely ill and injured patients through our state-of-the-art Neonatal Intensive Care Unit (NICU) and Intensive Care Unit (ICU), offering round-the-clock specialized services.
          </p>
        </div>

        {/* NICU Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-teal-800 flex items-center">
            <Baby className="mr-3" size={28} /> Our NICU Services
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-lg text-slate-700 mb-4">
              The Neonatal Intensive Care Unit (NICU) provides specialized medical care for premature babies, critically ill newborns, and infants with special medical needs. Our unit is equipped with advanced technology and staffed by expert neonatologists, nurses, and respiratory therapists to ensure the highest standard of care.
            </p>
            <h3 className="text-xl font-semibold text-teal-700 mb-4">Key Services We Offer</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Advanced Newborn Care:</strong> Management of premature and low-birth-weight babies, care for babies with birth complications, and support for infants with congenital conditions.</li>
              <li><strong>Respiratory Support:</strong> Ventilator and oxygen therapy, CPAP support, and high-frequency ventilation for delicate lungs.</li>
              <li><strong>Specialized Monitoring & Treatment:</strong> Continuous monitoring, infection control, phototherapy for newborn jaundice, and nutrition management.</li>
              <li><strong>Emergency & Critical Care:</strong> Immediate resuscitation, advanced life support, and safe neonatal transport.</li>
              <li><strong>Family Support:</strong> Parent education on newborn care and counseling.</li>
            </ul>
          </div>
        </section>

        {/* ICU Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-teal-800 flex items-center">
            <Bed className="mr-3" size={28} /> Our ICU Services
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-lg text-slate-700 mb-4">
              Our hospital ICU provides critical care for seriously ill or injured patients. We offer 24/7 care with advanced monitoring equipment, ventilator support, and a team of experienced doctors and nurses dedicated to managing complex medical conditions.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>24/7 Critical Care:</strong> Round-the-clock care for all emergencies.</li>
              <li><strong>Advanced Support:</strong> Ventilator support for patients with breathing difficulties, oxygen therapy, and emergency life support.</li>
              <li><strong>Medical Management:</strong> Treatment for heart problems, strokes, infections, and organ failure.</li>
              <li><strong>Post-Surgical Care:</strong> Intensive care for patients recovering from major surgeries or accidents.</li>
              <li><strong>Specialized Procedures:</strong> Services like dialysis, tracheostomy, and blood transfusions.</li>
              <li><strong>Compassionate Care:</strong> Our team provides professional and empathetic support to both patients and their families.</li>
            </ul>
          </div>
        </section>

        {/* Combined Image Section */}
        

      </div>
    </div>
  );
};

export default CriticalCare;