import React from "react";

const AlvasAestheticCentre = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">ALVA'S AESTHETIC REJUVENATION CENTRE</h1>
          <p className="text-gray-700 text-lg">
            Welcome to Alva's Aesthetic Rejuvenation Centre, where beauty meets science in a sanctuary of rejuvenation and transformation.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">Our Philosophy</h2>
          <p className="text-gray-700">
            Step into our sleek and modern facility, where skilled professionals enhance your natural beauty and restore your youthful glow. From skincare treatments to advanced procedures, we combine technology and personalized care.
          </p>
          <p className="text-gray-700">
            Our spa-like atmosphere offers a serene experience with luxurious services that melt stress and elevate confidence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            {[
              "Medical Hair Treatment",
              "Hair Transplant",
              "Laser Scar Reduction",
              "Acne Treatment",
              "Skin Rejuvenation",
              "Anti-Aging Treatment",
              "Botox and Fillers",
              "Dark Circles",
              "Laser Moles/Wart Removal",
              "Laser Tattoo Removal"
            ].map((service) => (
              <div key={service} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-blue-700 mb-1">{service}</h3>
                <p className="text-sm">
                  {(() => {
                    switch (service) {
                      case "Medical Hair Treatment":
                        return "Diagnosing and treating hair loss and scalp conditions using professional therapies.";
                      case "Hair Transplant":
                        return "Surgical restoration of hair growth by transplanting hair follicles.";
                      case "Laser Scar Reduction":
                        return "Using light energy to stimulate collagen and reduce scars.";
                      case "Acne Treatment":
                        return "Topical, oral, and laser therapies to reduce acne and prevent scarring.";
                      case "Skin Rejuvenation":
                        return "Chemical peels, microdermabrasion, and laser treatments for youthful skin.";
                      case "Anti-Aging Treatment":
                        return "Reducing signs of aging through skincare and lifestyle enhancements.";
                      case "Botox and Fillers":
                        return "Minimizing wrinkles and adding volume for a rejuvenated look.";
                      case "Dark Circles":
                        return "Targeting under-eye pigmentation and texture using peels and lasers.";
                      case "Laser Moles/Wart Removal":
                        return "Non-invasive mole and wart removal via focused light treatment.";
                      case "Laser Tattoo Removal":
                        return "Fading unwanted tattoos using light energy with minimal scarring.";
                      default:
                        return "";
                    }
                  })()}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Courses Offered</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>FMC (Fellowship in Medical Cosmetology):</strong> 6 months online + 10 days hands-on training. <br />
              <em>Eligibility: MBBS, BAMS, BHMS, BNYS, BDS</em>
            </li>
            <li>
              <strong>FAM (Fellowship in Aesthetic Medicine):</strong> 6 months online + 10 days hands-on training. <br />
              <em>Eligibility: MBBS, BAMS, BHMS, BNYS, BDS</em>
            </li>
            <li>
              <strong>PGDC (Post Graduate Diploma in Cosmetology):</strong> 3 months online + 10 days hands-on training. <br />
              <em>Eligibility: MBBS, BAMS, BHMS, BNYS, BDS</em>
            </li>
            <li>
              <strong>Certificate Course in Cosmetology (For Beauticians):</strong> 1 month online + 10 days hands-on training. <br />
              <em>Eligibility: Beauticians, BSc Nursing</em>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-2">
            • Exam: Online and Offline<br />
            • Courses Begin: June 15th, 2024<br />
            • Pursuing Students Can Also Apply<br />
            • Stay Provided During Offline Classes (Charges Apply)<br />
            • Candidates May Pursue Multiple Courses Simultaneously
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Contact</h2>
          <p className="text-gray-700">
            <strong>Call Us:</strong> 9379525826 / 988290454 / 9481974422<br />
            <strong>Visit Us:</strong> Alvas Hospital Road, Mudbidri, Karnataka, India<br />
            <strong>WhatsApp:</strong> +91 9731336925<br />
            <strong>Hours:</strong> Mon–Sat: 09:30 AM – 05:00 PM
          </p>
          <p className="text-gray-600 mt-2">
            Better yet, see us in person. We love our customers, so feel free to visit during business hours.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AlvasAestheticCentre;
