import React from 'react';
import { Pill, ShieldCheck, Info } from 'lucide-react';

// Import your images here. Replace the paths with your actual image file locations.
import pharmacy1 from '../images/pharmacy1.jpg';
import pharmacy2 from '../images/pharmacy2.jpg';
import pharmacy3 from '../images/pharmacy3.jpg';



const Pharmacy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6 lg:px-20 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Introduction */}
        <div>
          <h1 className="text-4xl font-bold text-teal-800 mb-3 flex items-center">
            <Pill className="mr-3" size={32} />  PHARMACY
          </h1>
          <section>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={pharmacy1} alt="Inside the pharmacy" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={pharmacy2} alt="Pharmacist helping a customer" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={pharmacy3} alt="Shelves stocked with medicine" className="w-full h-auto object-cover" />
            </div>
            
          </div>
        </section>
          <p className="text-lg text-slate-700">
            AHC Pharmacy is open 24/7, providing the people of Moodbidri and the surrounding areas with a hassle-free way to get medications.
          </p>
          <p className="text-lg text-slate-700 mt-2">
            The Pharmacy Department plays a vital role in patient care by ensuring the safe, effective, and rational use of medicines. It serves as a bridge between doctors, nurses, and patients, providing high-quality pharmaceutical services and promoting better health outcomes. Our team of qualified pharmacists, clinical pharmacologists, and technicians ensures that every patient receives the right medicine, in the right dose, at the right time. We follow evidence-based practices and strict safety standards in drug dispensing and storage.
          </p>
        </div>

        {/* Our Commitment */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-700 flex items-center">
            <ShieldCheck className="mr-2" /> Our Commitment
          </h2>
          <p>
            We are committed to patient safety, quality assurance, and continuous improvement in pharmaceutical services. By combining advanced technology, expert knowledge, and compassionate care, we strive to provide the best possible outcomes for every patient.
          </p>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dispensing Services",
                description: [
                  "Safe and accurate dispensing of prescription medicines.",
                  "Availability of over-the-counter (OTC) medicines.",
                  "24/7 inpatient and outpatient pharmacy support."
                ]
              },
              {
                title: "Clinical Pharmacy Services",
                description: [
                  "Medication therapy management (MTM).",
                  "Monitoring for drug interactions and side effects.",
                  "Individualized patient counseling and education on medication use.",
                  "Collaboration with doctors to optimize drug therapy."
                ]
              },
              {
                title: "Specialized Services",
                description: [
                  "Preparation of intravenous (IV) admixtures.",
                  "Chemotherapy drug preparation under sterile conditions.",
                  "Compounding of customized medications when required.",
                  "Support for pediatric and geriatric patients with special needs."
                ]
              },
              {
                title: "Drug Information & Pharmacovigilance",
                description: [
                  "Providing accurate and updated drug information to doctors and patients.",
                  "Reporting and monitoring adverse drug reactions.",
                  "Ensuring rational and safe use of medicines."
                ]
              },
              {
                title: "Pharmacy Management",
                description: [
                  "Procurement and storage of essential medicines.",
                  "Strict inventory control to prevent shortages or wastage.",
                  "Maintenance of cold chain and controlled drugs."
                ]
              },
              {
                title: "Education & Research",
                description: [
                  "Conducting patient awareness programs on safe medicine use.",
                  "Training pharmacy students and healthcare staff.",
                  "Participation in drug research and clinical trials."
                ]
              }
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-5 rounded-xl shadow-sm border border-slate-200"
              >
                <h3 className="font-semibold text-teal-800 mb-2">{service.title}</h3>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  {service.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* Images Section */}
        

      </div>
    </div>
  );
};

export default Pharmacy;