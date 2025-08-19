import React, { useState } from "react";

type Service = {
  title: string;
  description: string | JSX.Element;
};

const services: Service[] = [
  {
    title: "EMERGENCY & TRAUMA CARE",
    description:
      "Our hospital boasts one of the best emergency and trauma care centres in Moodbidri. Immediate and efficient care for trauma and accidents by well-trained staff with technical skills and bedside procedures.",
  },
  {
    title: "PHARMACY",
    description:
      "AHC pharmacy is open 24x7, providing medications in the most hassle-free way for Moodbidri and surrounding areas.",
  },
  {
    title: "LABORATORY",
    description:
      "Efficient lab services analyzing samples with standard procedures to provide accurate reports for diagnosis and treatment.",
  },
  {
    title: "ECG / XRAY / CT SCAN",
    description:
      "Includes imaging technologies like X-ray, CT scan, and ECG services to help diagnose and treat cardiac and other conditions.",
  },
  {
    title: "OT AND LT SERVICES",
    description:
      "Four major OTs, three minor OTs, and a labour theatre for general, laparoscopic, OBG, orthopedic, ENT, and onco surgeries.",
  },
  {
    title: "DIALYSIS",
    description:
      "First dialysis unit in Moodbidri, staffed 24x7, providing efficient renal care.",
  },
  {
    title: "BLOOD BANK",
    description:
      "Only blood bank in the area, used across districts, with regular awareness camps on blood donation.",
  },
  {
    title: "NICU / ICU WITH VENTILATOR",
    description:
      "Provides critical care for ill and injured patients. NICU offers 24x7 care for preterm or complicated newborns. Includes ITU & HDU.",
  },
  {
    title: "ENDOSCOPY",
    description:
      "Expert surgeon Dr. Vinay Alva provides procedures like EGD, sigmoidoscopy, colonoscopy, banding, and foreign body removal.",
  },
  {
    title: "AMBULANCE SERVICES",
    description:
      "Two well-equipped ambulances offer emergency and inter-facility transfers.",
  },
  {
    title: "PARKING SERVICES",
    description:
      "Spacious and well-maintained parking on both hospital entrances for inpatients and outpatients.",
  },
  {
    title: "MORTUARY",
    description:
      "Mortuary facility for identification, autopsy, and respectful burial or cremation of corpses.",
  },
  {
    title: "ULTRASOUND SCANNING",
    description:
      "Imaging of fetus growth and other organs like thyroid, heart, brain, breast, abdomen, muscles, etc.",
  },
  {
    title: "HEALTH CARD",
    description: (
      <ul className="list-disc pl-5 text-base leading-relaxed">
        <li>Discounts on IPD/OPD treatments, lab, imaging, doctor fees, and pharmacy.</li>
        <li>Application available in hospital or camps. Photo and ID proof required.</li>
        <li>Renewable 1 month before expiry. No category switch during validity.</li>
      </ul>
    ),
  },
  {
    title: "HEALTH PACKAGES",
    description: (
      <div>
        <strong>Available Packages:</strong>
        <ul className="list-disc pl-5 text-base leading-relaxed">
          <li>General Checkup – ₹2800</li>
          <li>Cardiac Checkup – ₹1750</li>
          <li>Women's Wellness – ₹2990</li>
          <li>Senior Citizen – ₹3300</li>
          <li>Diabetic – ₹1950</li>
          <li>Executive Master Checkup – ₹3990</li>
        </ul>
      </div>
    ),
  },
  {
    title: "HEALTH INSURANCES",
    description: (
      <ul className="list-disc pl-5 text-base leading-relaxed">
        <li>AYUSHMAN BHARAT</li>
        <li>ESIC, Yashaswini, Sampoorna Suraksha</li>
        <li>Aditya Birla, HDFC, SBI, Future, Star, Bajaj Allianz</li>
        <li>Manipal Cigna, TATA AIG, Reliance, MRPL, Heritage TPA</li>
      </ul>
    ),
  },
  {
    title: "ALVA'S FITNESS ZONE",
    description:
      "Physiotherapist-run fitness center focused on rehabilitation and personalized fitness training with a holistic approach and state-of-the-art equipment.",
  },
  {
    title: "HOME VISIT",
    description:
      "Doctor consultation, lab tests, and pharmacy services offered at home for critically ill and immobile patients.",
  },
  {
    title: "ATM SERVICES",
    description:
      "24x7 ATM available on campus in collaboration with Canara Bank.",
  },
  {
    title: "CAFETERIA",
    description:
      "Canteen offering a wide variety of hygienic food and beverages for inpatients and outpatients.",
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#004D40]">
        Our Services
      </h1>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-[#B2DFDB] rounded-xl shadow-sm"
          >
            <button
              className="w-full text-left p-4 bg-[#E0F2F1] hover:bg-[#B2DFDB] transition-colors duration-300 rounded-t-xl"
              onClick={() => toggleService(index)}
            >
              <h2 className="text-lg font-semibold text-[#004D40]">
                {service.title}
              </h2>
            </button>
            {activeIndex === index && (
              <div className="p-5 bg-white text-gray-800 text-base leading-relaxed">
                {service.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
