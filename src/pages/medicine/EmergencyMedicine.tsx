// src/pages/GeneralMedicine.tsx
import React from 'react';

const GeneralMedicine = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-white bg-blue-900 px-4 py-3 rounded-lg">
        EMERGENCY & TRAUMA CARE AT AHC
      </h1>

      {/* Intro */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          Alva’s Health Centre runs a dedicated <span className="font-semibold">24×7 Emergency &
          Trauma Care Unit</span> equipped with modern facilities, highly trained staff, and advanced
          diagnostic and surgical support. The department is designed to handle life-threatening
          emergencies such as accidents, cardiac events, strokes, and critical trauma cases, ensuring
          rapid response, stabilization, and comprehensive care.
        </p>
      </section>

      {/* Features & Facilities */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Key Features & Facilities
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-4 py-2 text-left">Feature</th>
                <th className="border px-4 py-2 text-left">Details / Availability</th>
                <th className="border px-4 py-2 text-left">Importance</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border px-4 py-3 font-semibold">24×7 Emergency Unit</td>
                <td className="border px-4 py-3">Round-the-clock trauma & emergency services</td>
                <td className="border px-4 py-3">Critical for accidents & emergencies at any time</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-3 font-semibold">Qualified Staff</td>
                <td className="border px-4 py-3">Doctors & nurses trained in critical care & trauma</td>
                <td className="border px-4 py-3">Ensures skilled management of emergency cases</td>
              </tr>
              <tr>
                <td className="border px-4 py-3 font-semibold">ICU, SICU, ITU/HDU, NICU</td>
                <td className="border px-4 py-3">Ventilator support, intensive monitoring, newborn ICU</td>
                <td className="border px-4 py-3">Handles critically ill patients & complications</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-3 font-semibold">Diagnostics & Imaging</td>
                <td className="border px-4 py-3">X-ray, ECG, CT scan, pathology & microbiology labs</td>
                <td className="border px-4 py-3">Quick detection of fractures, bleeding, organ damage</td>
              </tr>
              <tr>
                <td className="border px-4 py-3 font-semibold">Operation Theatres</td>
                <td className="border px-4 py-3">Major & minor OTs for surgery & trauma operations</td>
                <td className="border px-4 py-3">Emergency surgeries (fracture fixation, abdominal surgery)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-3 font-semibold">Ambulance Services</td>
                <td className="border px-4 py-3">Two fully-equipped ambulances for rapid transfers</td>
                <td className="border px-4 py-3">Enables quick patient transfer & accident-site response</td>
              </tr>
              <tr>
                <td className="border px-4 py-3 font-semibold">Blood Bank</td>
                <td className="border px-4 py-3">In-house blood bank for emergency transfusions</td>
                <td className="border px-4 py-3">Life-saving in cases of hemorrhage & trauma</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-3 font-semibold">Trauma & Orthopaedics</td>
                <td className="border px-4 py-3">Specialized care for fractures & musculoskeletal injuries</td>
                <td className="border px-4 py-3">Vital for accident and injury recovery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          With its integrated emergency and trauma services, Alva’s Health Centre ensures
          <span className="font-semibold"> immediate response, expert intervention, and continuous
          care</span> for patients during the most critical moments of their lives.
        </p>
      </section>
    </div>
  );
};

export default GeneralMedicine;
