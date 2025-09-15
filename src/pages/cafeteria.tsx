import React from 'react';

// Replace with your actual image
import CafeteriaImage from '../images/cafeteria1.jpg';

const Cafeteria = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
      <div className="max-w-4xl w-full text-slate-800">
        <h1 className="text-4xl font-bold text-left text-green-700 mb-8">
          CAFETERIA
        </h1>
        <div className="mt-10 max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src={CafeteriaImage}
            alt="Hospital Cafeteria"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <p className="mb-6 text-lg leading-relaxed">
          Our hospital cafeteria provides patients, visitors, and staff with fresh, healthy, and affordable meals in a clean and comfortable environment. We focus on nutrition, hygiene, and variety to meet different dietary needs.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          We offer a wide range of nutritious options including vegetarian, vegan, and gluten-free meals to cater to diverse tastes and health requirements.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Our cafeteria emphasizes the use of fresh ingredients, hygienic preparation methods, and timely service to ensure a pleasant dining experience for all.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          The hospital also provides canteen facilities for both inpatients and outpatients, offering a variety of delicacies and beverages including snacks, fresh juices, and hot beverages.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Our staff is trained to maintain high standards of cleanliness and customer service to make sure everyone feels comfortable and cared for during their visit.
        </p>

        {/* Single Image Section */}
        
      </div>
    </section>
  );
};

export default Cafeteria;
