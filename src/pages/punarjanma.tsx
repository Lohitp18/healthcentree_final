import React from "react";

const AlvasPunarjanmaCentre = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold text-teal-800 mb-2">
            ALVA'S PUNARJANMA - DEADDICTION CENTRE
          </h1>
          <p className="italic text-emerald-700 text-lg">
            A place for rebirth from addiction
          </p>
        </header>

        {/* About Section */}
        <section>
          <p className="text-gray-800 text-lg">
            Alva's Punarjanma is a unit of Alva's Health Centre established on
            19/01/2020 by Dr. Vinay Alva to support individuals suffering from
            addiction to various substances. The 28-day treatment program
            integrates Allopathy, Ayurveda, Homeopathy, Yoga, and Naturopathy.
          </p>
          <p className="text-gray-800 text-lg mt-4">
            Services include consultations with expert doctors, mental and
            social education, family and individual counselling, group
            counselling, and physical activities. Punarjanma has treated over
            700 patients with a success rate of more than 70% and promotes
            social awareness about abstaining from addictive substances.
          </p>
        </section>

        {/* Doctors */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Our Doctors
          </h2>
          <ul className="text-gray-800 space-y-2">
            <li>
              <strong>Dr. Vinay Alva</strong> - Managing Director
            </li>
            <li>
              <strong>Dr. Anirudh Shetty</strong> - Consultant Psychiatrist
            </li>
            <li>
              <strong>Dr. Raviprasad Hegde</strong> - Ayurveda Consultant
            </li>
          </ul>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Our Team
          </h2>
          <ul className="text-gray-800 space-y-2">
            <li>
              <strong>Mr. Lohith K</strong> - BA, MSW (Medical & Psychiatry), Counsellor
            </li>
            <li>
              <strong>Mrs. Suman Pinto</strong> - MSW (Medical & Psychiatry), Counsellor
            </li>
            <li>
              <strong>Mr. Jackson</strong> - MSW (Medical & Psychiatry), Counsellor
            </li>
          </ul>
        </section>

        {/* Kannada Slogan */}
        <section className="bg-emerald-50 p-6 rounded-xl">
          <p className="text-xl font-semibold text-center text-emerald-900">
            ದುಶ್ಚಟಗಳಿಂದ ದೂರವಿರೋಣ, ಸ್ವಾಸ್ಥ್ಯ ಸಮಾಜ ನಿರ್ಮಿಸೋಣ
          </p>
          <p className="text-center text-emerald-700 mt-1">- ALVAS PUNARJANMA -</p>
        </section>

        {/* Courses */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Courses Offered
          </h2>
          <ul className="space-y-4 text-gray-800">
            <li>
              <strong>Certificate Course in Addiction Management:</strong>
              <br />
              3 months online + 10 days offline internship/workshop.
              <br />
              <em>
                Eligibility: BSc(Nursing), MSc(Psychiatric Nursing), BSW, MSW
              </em>
            </li>
            <li>
              <strong>Diploma in Addiction Management:</strong>
              <br />
              6 months to 1 year online + 30 days offline internship.
              <br />
              <em>
                Eligibility: MBBS, BAMS, BHMS, BNYS, BUMS, BSc(Nursing),
                MSc(Psychiatric Nursing), BSW, MSW
              </em>
            </li>
          </ul>
          <p className="text-sm text-gray-700 mt-2">
            • Exam: Online and Offline
            <br />
            • Course Starting: June 15th, 2024
            <br />
            • Pursuing Students Can Apply
            <br />
            • Stay Provided During Offline Classes (Charges Apply)
            <br />
            • Candidates Can Pursue One or More Courses Together
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-teal-700 mb-2">Contact</h2>
          <p className="text-gray-800">
            <strong>Course Contact:</strong> 9379525826 / 988290454 / 9481974422
            <br />
            <strong>Treatment & Admission Enquiry:</strong> 8147248015 /
            9535718015
            <br />
            <strong>Address:</strong> Alvas Punarjanma Deaddiction Center,
            Tenkamijar, Karnataka, India
          </p>
        </section>
      </div>
    </div>
  );
};

export default AlvasPunarjanmaCentre;
