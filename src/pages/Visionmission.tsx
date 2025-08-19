import React from 'react';
import { Heart, Shield, Users, Award, Stethoscope, Activity } from 'lucide-react';

const HospitalVisionMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full shadow-lg">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Best Care Hospital
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leading healthcare excellence with compassion, innovation, and unwavering commitment to patient care
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 dark:bg-gray-800/70 dark:border-gray-700/50 transition duration-300 hover:scale-[1.01]">
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
                Delivering the safe and highest quality of care to the patient for better & healthier life.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 dark:bg-gray-800/70 dark:border-gray-700/50 transition duration-300 hover:scale-[1.01]">
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full mr-4">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Our Mission</h2>
              </div>
              <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 space-y-2">
                <li>Promote health and reduce illness</li>
                <li>Providing quality of service & cost effective healthcare</li>
                <li>We take responsibility to ensuring that sustainable, patient centered and high quality healthcare is provided at all time</li>
              </ul>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Compassionate Care</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Treating every patient with dignity, respect, and empathy</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Activity className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Medical Excellence</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Delivering the highest quality medical care and outcomes</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Pioneering advanced treatments and medical technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Always caring the patient",
                description: "We treat every patient with kindness, empathy, and understanding",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: Shield,
                title: "Leading through learning",
                description: "We uphold the highest ethical standards in all our interactions",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Award,
                title: "Validate patient expectations & concerns",
                description: "We strive for the highest quality in medical care and service",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Users,
                title: "Always first priority given to the patient",
                description: "We work together as a team to achieve the best patient outcomes",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Heart,
                title: "Safety, Smile, Greet and Respect",
                description: "Achieving the best results in what we do",
                color: "from-red-600 to-pink-600"
              },
              {
                icon: Award,
                title: "Leadership that sets the standards",
                description: "Leadership that sets the standards for better health care today & innovation for future",
                color: "from-yellow-600 to-orange-600"
              },
              {
                icon: Users,
                title: "Value others & embrace diversity",
                description: "We accept responsibility for caring patient",
                color: "from-green-600 to-emerald-600"
              },
              {
                icon: Shield,
                title: "Safety first & foremost",
                description: "Patient safety is our top priority always",
                color: "from-blue-600 to-cyan-600"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 dark:bg-gray-800/60 dark:border-gray-700/40 transition duration-300 hover:scale-105">
                <div className={`bg-gradient-to-r ${value.color} p-3 rounded-full w-fit mx-auto mb-4`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalVisionMission;
