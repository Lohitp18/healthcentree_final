// src/pages/Orthopedics.tsx
import React from 'react';
import ot from "../../images/Ot3.jpg";

const Orthopedics = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      <div className="rounded-xl overflow-hidden shadow">
        <img src={ot} alt="Orthopedics" className="w-full h-56 object-cover" />
      </div>
      {/* <h1 className="text-4xl font-extrabold text-blue-700 border-b-4 border-blue-500 pb-3 mb-6">
        ORTHOPEDICS
      </h1>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Our team of orthopedic surgeons, physiotherapists, and rehabilitation specialists provides comprehensive care for patients of all ages. From fractures and joint replacements to sports injuries and arthritis management, we offer personalized treatment plans tailored to each individual's needs. With a focus on restoring mobility and improving quality of life, we're dedicated to helping you regain function and live pain-free.
        </p>
      </section> */}

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-6 block w-full">
          OVERVIEW - ORTHOPEDICS
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-6">
          The Department of Orthopedics specializes in the diagnosis, treatment, and prevention of disorders and injuries of the bones, joints, muscles, ligaments, tendons, and spine. Orthopedic specialists provide both surgical and non-surgical care to restore mobility, reduce pain, and improve quality of life.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Common Conditions Treated</h3>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Fractures and dislocations</li>
          <li>Osteoarthritis and rheumatoid arthritis</li>
          <li>Back and spine disorders (slipped disc, scoliosis, spinal stenosis)</li>
          <li>Sports injuries (ligament tears, meniscus injuries, tendonitis)</li>
          <li>Osteoporosis and bone health disorders</li>
          <li>Congenital deformities (clubfoot, hip dysplasia)</li>
          <li>Joint and cartilage problems</li>
          <li>Shoulder, elbow, wrist, hip, knee, and ankle disorders</li>
          <li>Carpal tunnel syndrome</li>
          <li>Musculoskeletal infections and tumors</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Services Provided by the Orthopedics Department</h3>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-500 mb-2">Diagnostic Services</h4>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700 leading-relaxed tracking-wide">
            <li>Digital X-ray, CT, and MRI scans</li>
            <li>Bone density testing (DEXA scan)</li>
            <li>Arthroscopy for joint evaluation</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-500 mb-2">Non-Surgical Management</h4>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700 leading-relaxed tracking-wide">
            <li>Casting, splinting, and bracing</li>
            <li>Physiotherapy and rehabilitation programs</li>
            <li>Pain management (injections, medications)</li>
            <li>Sports injury management</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-500 mb-2">Surgical Interventions</h4>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700 leading-relaxed tracking-wide">
            <li>Fracture fixation (plates, screws, rods)</li>
            <li>Joint replacement surgery (hip, knee, shoulder)</li>
            <li>Arthroscopic (keyhole) surgeries for joints</li>
            <li>Spine surgeries (discectomy, spinal fusion)</li>
            <li>Corrective surgeries for deformities</li>
            <li>Tumor excisions (bone and soft tissue)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-blue-500 mb-2">Rehabilitation & Preventive Care</h4>
          <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700 leading-relaxed tracking-wide">
            <li>Post-surgical physiotherapy and recovery plans</li>
            <li>Fall prevention and osteoporosis management</li>
            <li>Lifestyle guidance for bone and joint health</li>
          </ul>
        </div>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-3xl font-semibold text-blue-600 mb-3">Treatments & Procedures</h3>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Joint replacement: hip, knee, shoulder</li>
          <li>Arthroscopy for knee, shoulder, ankle</li>
          <li>Trauma care: fracture fixation and ligament repair</li>
          <li>Spine surgery: discectomy, fusion, deformity correction</li>
          <li>Sports injury management and rehab</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-3xl font-semibold text-blue-600 mb-3">Our Doctors</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[{ name: 'Dr. Krishna B', role: 'Orthopedic Surgeon', img: require('../../images/dr krishna.jpg') }, { name: 'Dr. Arun Bhat', role: 'Consultant Orthopedics', img: require('../../images/dr arun bhat.jpg') }].map((d: any, i: number) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border">
              <img src={d.img} alt={d.name} className="w-20 h-20 object-cover rounded-full shadow" />
              <div>
                <div className="font-semibold text-gray-900">{d.name}</div>
                <div className="text-sm text-gray-600">{d.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Orthopedics;
