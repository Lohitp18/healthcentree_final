import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FaHeartbeat,
  FaChild,
  FaStethoscope,
  FaUserMd,
  FaXRay,
  FaBrain,
  FaTooth,
  FaAllergies,
  FaUserInjured,
  FaAmbulance,
  FaMicroscope,
  FaTheaterMasks,
  FaSkullCrossbones,
  FaBone,
  FaFemale,
  FaLungs,
  FaClinicMedical,
  FaSyringe,
} from 'react-icons/fa';

interface Department {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const departmentsData: Record<string, Department> = {
  'general-medicine': {
    title: 'General Medicine',
    description:
      'Managed by excellent doctors like Dr B Sadananda Naik and Dr Dhanya Hegde, treating diabetes, hypertension, thyroid, and more.',
    icon: <FaStethoscope className="text-3xl text-[#0a5c5a]" />,
  },
  paediatrics: {
    title: 'Paediatrics',
    description:
      'Compassionate care for infants to adolescents with a child-friendly environment and family-centered approach.',
    icon: <FaChild className="text-3xl text-[#0a5c5a]" />,
  },
  cardiology: {
    title: 'Cardiology',
    description:
      'Expert care for heart conditions with advanced diagnostics, treatments, and rehabilitation services.',
    icon: <FaHeartbeat className="text-3xl text-[#0a5c5a]" />,
  },
  'general-endoscopic-laparoscopic-surgery': {
    title: 'General, Endoscopic & Laparoscopic Surgery',
    description: 'Minimally invasive surgical techniques with skilled surgeons for better outcomes.',
    icon: <FaUserMd className="text-3xl text-[#0a5c5a]" />,
  },
  otorhinolaryngology: {
    title: 'Otorhinolaryngology',
    description: 'ENT specialists providing care for sinusitis, hearing issues, infections, and speech problems.',
    icon: <FaClinicMedical className="text-3xl text-[#0a5c5a]" />,
  },
  orthopedics: {
    title: 'Orthopedics',
    description:
      'Comprehensive bone and joint care from fractures to joint replacements with personalized plans.',
    icon: <FaBone className="text-3xl text-[#0a5c5a]" />,
  },
  'obstetrics-gynecology': {
    title: 'Obstetrics & Gynaecology',
    description: 'Prenatal to postnatal care, childbirth services, and gynecological treatments by expert OB-GYNs.',
    icon: <FaFemale className="text-3xl text-[#0a5c5a]" />,
  },
  'oncology-oncosurgery': {
    title: 'Oncology & Oncosurgery',
    description: 'Holistic cancer care with advanced treatment and emotional support for patients and families.',
    icon: <FaSkullCrossbones className="text-3xl text-[#0a5c5a]" />,
  },
  dermatology: {
    title: 'Dermatology',
    description: 'Skin care specialists managing acne, eczema, psoriasis, infections, and cancer screenings.',
    icon: <FaAllergies className="text-3xl text-[#0a5c5a]" />,
  },
  neurology: {
    title: 'Neurology',
    description:
      'Care for epilepsy, stroke, multiple sclerosis, Parkinson’s, and other neurological disorders.',
    icon: <FaBrain className="text-3xl text-[#0a5c5a]" />,
  },
  oromaxillofacial: {
    title: 'Oromaxillofacial Surgery',
    description: 'Surgery for facial trauma, dental issues, jaw correction, and oral cancers.',
    icon: <FaTooth className="text-3xl text-[#0a5c5a]" />,
  },
  neurosurgery: {
    title: 'Neurosurgery',
    description: 'Brain and spine surgeries by experienced neurosurgeons using advanced techniques.',
    icon: <FaBrain className="text-3xl text-[#0a5c5a]" />,
  },
  'nephrology-urology': {
    title: 'Nephrology and Urology',
    description: 'Expert treatment for kidney diseases, UTIs, and urinary tract disorders.',
    icon: <FaSyringe className="text-3xl text-[#0a5c5a]" />,
  },
  'emergency-medicine-trauma-care': {
    title: 'Emergency Medicine and Trauma Care',
    description: 'Critical care for heart attacks, strokes, and accidents 24/7 by trained ER doctors.',
    icon: <FaAmbulance className="text-3xl text-[#0a5c5a]" />,
  },
  radiology: {
    title: 'Radiology',
    description: 'Diagnostic imaging services including X-rays, CT scans, ultrasound, and MRI.',
    icon: <FaXRay className="text-3xl text-[#0a5c5a]" />,
  },
  psychiatry: {
    title: 'Psychiatry',
    description:
      'Mental health treatment for depression, anxiety, bipolar, schizophrenia with therapy and care.',
    icon: <FaTheaterMasks className="text-3xl text-[#0a5c5a]" />,
  },
  'dental-surgery': {
    title: 'Dental Surgery',
    description: 'Surgical dental care like implants, jaw surgery, and wisdom tooth removal.',
    icon: <FaTooth className="text-3xl text-[#0a5c5a]" />,
  },
  'pain-management-palliative-care': {
    title: 'Pain Management & Palliative Care',
    description: 'Supportive care and pain relief for chronic conditions and end-of-life care.',
    icon: <FaUserInjured className="text-3xl text-[#0a5c5a]" />,
  },
};

const DepartmentPage: React.FC = () => {
  const { name } = useParams<{ name?: string }>();
  const key = name?.toLowerCase() || '';
  const department = departmentsData[key];
  const navigate = useNavigate();
  const selectedRef = useRef<HTMLDivElement | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [key]);

  const filteredDepartments = Object.entries(departmentsData).filter(([_, dept]) =>
    dept.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-8">
      {department && (
        <div ref={selectedRef} className="mb-12">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{department.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{department.description}</p>
        </div>
      )}

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search departments..."
          className="w-full border px-4 py-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-[#0a5c5a]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section>
       <h2 className="text-5xl font-bold text-teal-900 mb-8 text-center">
  Departments List
</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepartments.length > 0 ? (
            filteredDepartments.map(([deptKey, dept]) => (
              <li
                key={deptKey}
                className={`border rounded-xl p-5 shadow transition hover:shadow-lg bg-white ${
                  deptKey === key ? 'border-[#0a5c5a] ring-2 ring-[#A0F0E0]' : ''
                }`}
              >
                <button
                  onClick={() => navigate(`/department/${deptKey}`)}
                  className="flex items-start gap-4 text-left"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-[#e6f2f1] rounded-full">
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0a5c5a]">{dept.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {dept.description.length > 100
                        ? dept.description.substring(0, 100) + '...'
                        : dept.description}
                    </p>
                  </div>
                </button>
              </li>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No departments found matching "<strong>{search}</strong>"
            </p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default DepartmentPage;
