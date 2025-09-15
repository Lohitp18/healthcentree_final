import React from 'react';
import { AlertTriangle } from 'lucide-react';

import EmergencyImg1 from '../images/emergency1.jpg';
import EmergencyImg2 from '../images/emergency2.jpg';
import EmergencyImg3 from '../images/emergency3.jpg';

const EmergencyDepartment: React.FC = () => {
  const images = [
    { src: EmergencyImg1, alt: 'Emergency Department ' },
    { src: EmergencyImg2, alt: 'Emergency Department ' },
    { src: EmergencyImg3, alt: 'Emergency Department' },
  ];

  return (
    <section className="bg-gray-50 p-10 max-w-5xl mx-auto my-20 space-y-12 font-sans text-gray-800">
      <header className="flex items-center space-x-4">
        <AlertTriangle className="text-teal-600" size={36} />
        <h1 className="text-4xl font-extrabold tracking-tight">Emergency Department</h1>

      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map(({ src, alt }, idx) => (
          <figure key={idx} className="overflow-hidden rounded-lg shadow-sm">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <figcaption className="p-2 text-xs text-gray-500 text-center">{alt}</figcaption>
          </figure>
        ))}
      </div>

      <p className="text-lg max-w-3xl leading-relaxed">
        Our hospital boasts one of the best emergency and trauma care centres in Moodbidri. It provides immediate care to the injured and efficient management of accidental cases. The staff are well-trained in disease processes, bedside procedures, and possess the technical skills to handle critical, emergency, and traumatic cases.
      </p>

      {[
        {
          title: 'Overview',
          content: (
            <>
              <p>
                Our Emergency Department is open 24 hours a day, 7 days a week, providing immediate care for patients with urgent and life-threatening conditions. Staffed by a skilled team of emergency physicians, nurses, and support staff, we are committed to delivering rapid, compassionate, and evidence-based medical attention.
              </p>
              <p className="mt-2">
                We ensure quick triage, accurate diagnosis, and prompt treatment, with seamless coordination between specialties for comprehensive patient care.
              </p>
            </>
          ),
        },
        {
          title: 'Facilities & Features',
          content: (
            <ul className="list-disc list-inside space-y-1 max-w-3xl">
              <li>24×7 Emergency Services</li>
              <li>Dedicated resuscitation and trauma bays</li>
              <li>Advanced life support systems</li>
              <li>Fully equipped Ambulance services with trained paramedics</li>
              <li>Minor procedure room for immediate interventions</li>
              <li>24-hour access to Radiology (X-ray, CT, Ultrasound, MRI)</li>
              <li>24-hour Laboratory services</li>
              <li>Critical care backup (ICU & Operation Theatre on standby)</li>
            </ul>
          ),
        },
        {
          title: 'Conditions Treated',
          content: (
            <ul className="list-disc list-inside space-y-1 max-w-3xl">
              <li>Cardiac emergencies (Heart attack, chest pain, arrhythmias)</li>
              <li>Stroke and neurological emergencies</li>
              <li>Trauma and accidents (road traffic injuries, fractures, burns)</li>
              <li>Respiratory distress and asthma attacks</li>
              <li>Poisoning and drug overdose</li>
              <li>Acute abdominal pain and gastrointestinal emergencies</li>
              <li>Pediatric emergencies</li>
              <li>Obstetric & gynecological emergencies</li>
              <li>All other sudden, life-threatening conditions</li>
            </ul>
          ),
        },
        {
          title: 'Our Emergency Team',
          content: (
            <ul className="list-disc list-inside space-y-1 max-w-3xl">
              <li>Emergency Physicians trained in advanced life support</li>
              <li>Trauma care specialists</li>
              <li>Critical care doctors for immediate stabilization</li>
              <li>Experienced nursing staff with emergency care expertise</li>
              <li>On-call specialists from cardiology, neurology, surgery, pediatrics, and orthopedics</li>
            </ul>
          ),
        },
        {
          title: 'When to Visit the Emergency Department',
          content: (
            <>
              <p>If you or your loved one experiences any of the following, seek immediate care:</p>
              <ul className="list-disc list-inside space-y-1 max-w-3xl mt-2">
                <li>Sudden severe chest pain</li>
                <li>Difficulty breathing</li>
                <li>Uncontrolled bleeding</li>
                <li>Loss of consciousness or seizures</li>
                <li>Severe injury or accident</li>
                <li>Signs of stroke (sudden weakness, slurred speech, facial droop)</li>
              </ul>
            </>
          ),
        },
      ].map(({ title, content }, idx) => (
        <section key={idx} className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-700">{title}</h2>
          <div className="text-base leading-relaxed">{content}</div>
        </section>
      ))}

      
    </section>
  );
};

export default EmergencyDepartment;
