import React from "react";

const AboutAasare = () => {
  const services = [
    "Doctors",
    "Nurses",
    "Physiotherapists",
    "Cancer and Post-Op Care",
    "Palliative Care",
    "Elderly Care",
    "Helpers",
    "Medical Equipment",
    "Medicines",
    "Blood Tests",
    "Daycare Facility",
    "Expert Consultation",
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">About Alva's Aasare</h1>

      <p className="text-lg text-gray-800 leading-relaxed mb-4">
        ALVA'S AASARE, a unit of Alva's Health Centre, Moodbidri is a premier home healthcare
        service dedicated to providing compassionate and professional care to individuals in the
        comfort of their own homes. Our mission is to enhance the quality of life for patients,
        ensuring they receive the support they need while promoting independence and dignity.
      </p>

      <p className="text-lg text-gray-800 leading-relaxed mb-4">
        At ALVA'S AASARE, we offer a wide range of services tailored to meet the unique needs of
        each client. Our highly trained healthcare professionals, including nurses, caregivers, and
        therapists, deliver personalized care plans that encompass medical assistance,
        rehabilitation, and daily living support. Whether it's post-operative care, chronic illness
        management, or assistance with daily activities, our team is committed to fostering a
        nurturing environment.
      </p>

      <p className="text-lg text-gray-800 leading-relaxed mb-4">
        We understand that every patient is different, which is why we emphasize a holistic
        approach to healthcare. Our services are designed not only to address physical health needs
        but also to support emotional and psychological well-being. We engage families in the care
        process, ensuring open communication and collaboration to provide the best possible
        outcomes.
      </p>

      <p className="text-lg text-gray-800 leading-relaxed mb-4">
        With a strong focus on safety, reliability, and respect, ALVA'S AASARE is dedicated to
        building trust with our clients and their families. We strive to create a positive and
        supportive atmosphere, helping our clients to thrive in their own homes. Choose ALVA'S
        AASARE for home healthcare services that prioritize compassion, professionalism, and
        personalized care, making a meaningful difference in the lives of those we serve.
      </p>

      <h2 className="text-3xl font-bold text-blue-900 mt-8 mb-4">Our Services</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <li
            key={service}
            className="bg-white p-4 rounded-2xl shadow border text-center font-medium text-blue-800"
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutAasare;
