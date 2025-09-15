import React from 'react';
import { Car } from 'lucide-react';

// Import parking image (adjust path as needed)
import ParkingImg from '../images/Parking1.jpg';

const ParkingServices: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-6xl mx-auto my-16 space-y-8">
      <h2 className="text-3xl font-bold text-teal-800 flex items-center">
        <Car className="mr-3" size={28} /> Parking Services
      </h2>

      <div className="space-y-4 text-slate-700 text-lg">
        <p>
          Our hospital offers convenient, secure, and spacious parking facilities for patients, visitors, and staff. Located close to the main entrance, the parking lot is designed for easy access and hassle-free parking experience.
        </p>
        <p>
          We have dedicated parking spaces reserved for emergency vehicles to ensure quick response times. Specially marked spots for differently-abled persons provide ease of access and compliance with accessibility standards.
        </p>
        <p>
          Separate areas for two-wheelers and staff parking help in smooth traffic management within the premises. Our parking area is well-lit and monitored 24/7 by CCTV cameras, complemented by trained security personnel to guarantee the safety of all vehicles.
        </p>
        <p>
          Additional amenities include clear signage, wide driveways, and smooth entry/exit points to make parking stress-free for all our visitors.
        </p>
      </div>

      {/* Parking Image Section */}
      <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 max-w-4xl mx-auto">
        <img
          src={ParkingImg}
          alt="Hospital Parking Facilities"
          loading="lazy"
          className="w-full object-cover aspect-video"
        />
        <figcaption className="p-4 text-sm text-slate-600 text-center">
          Spacious and Secure Parking Facilities at Our Hospital
        </figcaption>
      </div>
    </section>
  );
};

export default ParkingServices;
