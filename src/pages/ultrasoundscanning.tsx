import React from 'react';
import { Scan, Info, ShieldCheck } from 'lucide-react';

// Import your image here. Make sure the path is correct.
import ultra1 from '../images/ultra1.jpg';

const UltrasoundScanning: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6 lg:px-20 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Introduction */}
        <div>
          <h1 className="text-4xl font-bold text-teal-800 mb-3 flex items-center">
            <Scan className="mr-3" size={32} /> Ultrasound Scanning
          </h1>
          <section>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={ultra1} 
              alt="Ultrasound scanning procedure" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </section>  
          <p className="text-lg text-slate-700">
            Ultrasound scanning is a safe, painless test that uses sound waves to create real-time images of the body’s internal organs and tissues. This non-invasive procedure is a crucial diagnostic tool for a wide range of medical conditions.
          </p>
        </div>

        {/* Benefits & How It Works */}
        <section className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4 flex items-center">
              <Info className="mr-2" /> How It Works
            </h2>
            <p className="text-slate-700">
              During an ultrasound, a small device called a transducer is placed on the skin. It sends high-frequency sound waves into the body, which bounce off internal structures and return to the transducer. A computer then uses these returning echoes to form a live image on a monitor. This allows doctors to observe organs and tissues in real time without the use of radiation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4 flex items-center">
              <ShieldCheck className="mr-2" /> Key Advantages
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>**Safety:** It's a radiation-free procedure, making it safe for all patients, including pregnant women.</li>
              <li>**Painless & Non-Invasive:** There are no needles or injections involved, and the procedure is typically very comfortable.</li>
              <li>**Real-Time Imaging:** Allows doctors to see movement of internal organs, blood flow, and a baby's heartbeat during pregnancy.</li>
              <li>**Versatility:** Used to examine many parts of the body, including the abdomen, heart, blood vessels, and muscles.</li>
            </ul>
          </div>
        </section>
        
        {/* Main Image Section */}
        
      </div>
    </div>
  );
};

export default UltrasoundScanning;