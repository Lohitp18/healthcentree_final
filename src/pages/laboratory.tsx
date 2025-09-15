import React from 'react';
import { FlaskConical, Stethoscope, Briefcase, Users, Droplet, Microscope, Box } from 'lucide-react';

// Import your images here. Make sure the paths are correct.
import laboratory1 from '../images/laboratory1.jpg'; // Placeholder
import laboratory2 from '../images/laboratory2.jpg'; // Placeholder
import laboratory3 from '../images/laboratory3.jpg'; // Placeholder

const Laboratory: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6 lg:px-20 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Introduction */}
        <div>
          <h1 className="text-4xl font-bold text-teal-800 mb-3 flex items-center">
            <FlaskConical className="mr-3" size={32} /> Laboratory
          </h1>
           <section>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={laboratory1} alt="Inside the laboratory" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={laboratory2} alt="Lab technician at work" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={laboratory3} alt="Close-up of lab equipment" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>
          <p className="text-lg text-slate-700">
            Our lab is efficient in analyzing samples, designing and executing laboratory tests according to standard procedures, and providing accurate reports which help us diagnose and treat diseases more effectively.
          </p>
          <p className="text-lg text-slate-700 mt-2">
            The Laboratory acts as a bridge between patients, doctors, and the community. It ensures smooth communication, easy access to information, and efficient service delivery.
          </p>
        </div>

        {/* Audience-Specific Information */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center"><Users className="mr-2" size={20} /> For Patients</h3>
            <p className="text-sm text-slate-700">Provides clear guidance on available tests, sample collection, timings, reports, and online booking.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center"><Stethoscope className="mr-2" size={20} /> For Doctors & Clinicians</h3>
            <p className="text-sm text-slate-700">Offers quick access to test menus, reference ranges, and result turnaround times to aid accurate diagnosis and treatment.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center"><Briefcase className="mr-2" size={20} /> For Institutions & Partners</h3>
            <p className="text-sm text-slate-700">Demonstrates the lab’s credibility, certifications, and quality assurance standards, building trust with collaborators.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center"><Box className="mr-2" size={20} /> For the Community</h3>
            <p className="text-sm text-slate-700">Spreads awareness about preventive health check-ups, diagnostic advancements, and the role of timely testing.</p>
          </div>
        </section>

        {/* Laboratory Disciplines */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Laboratory Disciplines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-teal-800 mb-2 flex items-center"><Droplet className="mr-2" size={18} /> Biochemistry</h3>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Blood sugar, lipid profile, liver function tests, kidney function tests, electrolytes, enzymes.</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-teal-800 mb-2 flex items-center"><Microscope className="mr-2" size={18} /> Hematology</h3>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Complete blood count (CBC), blood grouping, coagulation studies, anemia work-up.</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-teal-800 mb-2 flex items-center"><Droplet className="mr-2" size={18} /> Microbiology</h3>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Culture & sensitivity, infection screening, stool/urine culture, fungal & viral studies.</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-teal-800 mb-2 flex items-center"><Microscope className="mr-2" size={18} /> Pathology</h3>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Histopathology, cytology, fine needle aspiration cytology (FNAC), biopsy analysis.</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-teal-800 mb-2 flex items-center"><Droplet className="mr-2" size={18} /> Immunology & Serology</h3>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>HIV, Hepatitis, thyroid profile, allergy tests, autoimmune disorders.</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-teal-800 mb-2 flex items-center"><Box className="mr-2" size={18} /> Molecular Diagnostics</h3>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>PCR testing, genetic analysis, infectious disease screening.</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-teal-800 mb-2 flex items-center"><Droplet className="mr-2" size={18} /> Clinical Chemistry</h3>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Hormone assays, tumor markers, vitamin levels.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Special Services */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Special Services</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong>Preventive Health Packages:</strong> Routine health check-ups and wellness profiles.</li>
            <li><strong>Emergency & Stat Services:</strong> Rapid testing for critical conditions.</li>
            <li><strong>Digital Reports:</strong> Secure online access to laboratory reports.</li>
          </ul>
        </section>
        
        {/* Image Section */}
       

      </div>
    </div>
  );
};

export default Laboratory;