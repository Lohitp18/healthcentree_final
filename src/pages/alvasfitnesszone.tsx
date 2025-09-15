import React from 'react';
import fitZoneImage from '../images/fit1.jpg'; // Make sure to update the path to your actual image

const AlvasFitZone = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
      <div className="max-w-4xl w-full text-gray-900">
        {/* Image Section */}
        

        {/* Content Section */}
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-8">
          ALVA’S FIT ZONE
        </h1>
        <div className="flex justify-center mb-8">
          <img
            src={fitZoneImage}
            alt="Alva's Fit Zone Gym"
            className="rounded-lg shadow-lg max-w-full h-auto"
            style={{ maxHeight: '400px' }}
          />
        </div>

        <p className="mb-6 text-lg leading-relaxed">
          Our fitness zone aims on providing utmost quality training to keep ourselves healthy.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          Welcome to Alva's Fit Zone, where fitness meets rehabilitation! Our gym is unlike any other, as it's run by a team of expert physiotherapists who are dedicated to optimizing your physical health and well-being. Here's what sets us apart:
        </p>

        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700 mb-6">
          <li>
            <strong>Expert Guidance:</strong> Our physiotherapists are highly trained professionals with extensive knowledge of anatomy, biomechanics, and rehabilitation techniques. They will guide you through your fitness journey with personalized attention and expertise, ensuring that you exercise safely and effectively.
          </li>
          <li>
            <strong>Rehabilitation Focus:</strong> Whether you're recovering from an injury, managing a chronic condition, or simply aiming to improve your overall fitness, our programs are designed to prioritize your rehabilitation needs. We integrate therapeutic exercises and techniques into every workout to help you regain strength, mobility, and function.
          </li>
          <li>
            <strong>Customized Programs:</strong> No two bodies are the same, which is why we tailor our programs to meet your individual goals, abilities, and limitations. Whether you're a beginner or an experienced athlete, we'll create a customized exercise plan that suits your unique needs and preferences.
          </li>
          <li>
            <strong>State-of-the-Art Equipment:</strong> Our gym is equipped with the latest tools and technologies to support your fitness and rehabilitation goals. From strength training machines to cardiovascular equipment to therapeutic modalities, we have everything you need to achieve optimal results.
          </li>
          <li>
            <strong>Holistic Approach:</strong> We believe in taking a holistic approach to health and wellness, addressing not just the physical aspects of fitness but also the mental and emotional aspects. Our team is here to support you every step of the way, providing encouragement, motivation, and education to help you achieve long-term success.
          </li>
        </ol>

        <p className="text-lg font-semibold text-center">
          At Alva's Fit Zone, we're not just a gym – we're your partners in health. Join us and experience the difference that expert physiotherapy-led fitness can make in your life.
        </p>
      </div>
      
    </section>
  );
};

export default AlvasFitZone;
