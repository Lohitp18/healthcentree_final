// src/pages/medicine/Dermatology.tsx
import React from 'react';
import skinImg from "../../images/images.jpg";

const Dermatology = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md space-y-10 font-serif">
      <div className="rounded-xl overflow-hidden shadow">
        <img src={skinImg} alt="Dermatology" className="w-full h-56 object-cover" />
      </div>
      <h1 className="bg-blue-900 text-white text-4xl font-extrabold px-4 py-2 mb-2 block w-full">OVERVIEW - DERMATOLOGY</h1>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
          The Department of Dermatology specializes in the diagnosis, treatment, and prevention of conditions affecting the skin, hair, and nails. Dermatologists provide both medical and cosmetic care, addressing a wide range of acute and chronic skin problems.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Common Conditions Treated
        </h2>
        <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 leading-relaxed tracking-wide">
          <li>Acne and acne scars</li>
          <li>Eczema (atopic dermatitis)</li>
          <li>Psoriasis</li>
          <li>Vitiligo and pigmentation disorders</li>
          <li>Fungal infections (ringworm, athlete’s foot, nail infections)</li>
          <li>Bacterial and viral skin infections (impetigo, shingles, warts)</li>
          <li>Allergic skin conditions (hives, contact dermatitis)</li>
          <li>Hair disorders (hair loss, dandruff, alopecia areata)</li>
          <li>Nail disorders (fungal nails, ingrown nails, brittle nails)</li>
          <li>Skin cancers (melanoma, basal cell carcinoma, squamous cell carcinoma)</li>
          <li>Chronic wounds and ulcers</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">
          Services Provided by Dermatology Department
        </h2>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Comprehensive Skin Examination</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>For moles, rashes, suspicious lesions</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Diagnostic Procedures</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Skin biopsy</li>
            <li>Patch testing for allergies</li>
            <li>Dermoscopy (detailed mole/lesion examination)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Medical Management</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Prescription medications for skin, hair, and nail diseases</li>
            <li>Phototherapy (light-based treatment for psoriasis, vitiligo, eczema)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Surgical Dermatology</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Removal of moles, cysts, warts, and benign growths</li>
            <li>Skin cancer excisions</li>
            <li>Cryotherapy (freezing therapy for warts, precancerous lesions)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Cosmetic Dermatology</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Chemical peels</li>
            <li>Botox and fillers</li>
            <li>Laser treatments (scar reduction, pigmentation, hair removal)</li>
            <li>Acne scar treatment and skin rejuvenation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Preventive Care</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed tracking-wide">
            <li>Skin cancer screening</li>
            <li>Education on sun protection and skin health</li>
          </ul>
        </div>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b border-blue-200 pb-2">Our Doctors</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[{ name: 'Dr. Dithesh', role: 'Consultant Dermatologist', img: require('../../images/dr dithesh.jpg') }, { name: 'Dr. Dhanya', role: 'Dermatology Specialist', img: require('../../images/dr dhanya.jpg') }].map((d: any, i: number) => (
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

export default Dermatology;
