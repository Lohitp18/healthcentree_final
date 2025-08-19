import React from "react";

const AlvasVaccinationCentre = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <header>
          <h1 className="text-4xl font-bold text-blue-900">ABOUT ALVA'S VACCINATION CENTRE</h1>
        </header>

        <section className="text-gray-700 text-lg space-y-4">
          <p>
            Alva's Vaccination Centre is part of a larger initiative run by Alva's Health Centre, located in Moodabidri, Karnataka, India. It provides vaccination services to the local community, focusing on public health by offering vaccines for diseases like COVID-19, among others.
          </p>
          <p>
            The centre is set up to ensure easy access to vaccines, aiming to help improve immunity levels and protect the population from preventable diseases.
          </p>
          <p>
            Our goal is to make vaccines more accessible, reduce waiting times, and support the health and wellness of the population in and around Moodbidri.
          </p>
          <p className="text-sm text-gray-600">
            For more details such as services, schedules, or updates, please contact us directly or visit Alva's Health Centre or follow us on social media.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AlvasVaccinationCentre;
