import React from 'react';

const healthPackages = [
  {
    title: 'GENERAL HEALTH CHECKUP - 2800/-',
    items: [
      'Fasting blood sugar (FBS)',
      'Complete blood count with ESR',
      'Blood group & Rh typing',
      'Fasting lipid profile',
      'Liver function test',
      'Kidney function test',
      'Serum Electrolytes',
      'Urine micro albumin',
      'Urine analysis',
      'Chest X Ray',
      'ECG',
      'Usg Abdomen and Pelvis',
      'Doctor consultation',
      'Dental consultation',
      'Dietician consultation',
    ],
  },
  {
    title: 'CARDIAC HEALTH CHECKUP - 1750/-',
    items: [
      'Fasting blood sugar (FBS)',
      'Complete blood count with ESR',
      'Advanced lipid profile',
      'Urine analysis',
      'ECG',
      'ECHO or TMT',
      'Doctor consultation',
      'Dietician consultation',
    ],
  },
  {
    title: 'WELLNESS WOMEN HEALTH CHECKUP - 2990/-',
    items: [
      'Fasting blood sugar(FBS)',
      'Complete Hemogram with ESR',
      'Cholesterol, Triglyceride levels',
      'SGOT, SGPT levels',
      'B.Urea, S.Creatinine levels',
      'TSH',
      'Calcium',
      'Vitamin D',
      'Urine Routine',
      'ECG',
      'USG Abdomen and Pelvis',
      'PAP smear',
      'Chest X Ray',
      'Dental consultation',
      'Dietician consultation',
    ],
  },
  {
    title: 'SENIOR CITIZEN HEALTH CHECKUP - 3300/-',
    items: [
      'Fasting blood sugar (FBS)',
      'Complete blood count with ESR',
      'HbA1C(Glycosylated Haemoglobin)',
      'Fasting lipid profile',
      'Liver function test',
      'Blood Urea',
      'Serum Creatinine',
      'TSH(Thyroid)',
      'PSA(Prostate Specific Antigen)',
      'Serum Calcium & Phosphorous',
      'Urine analysis',
      'Urine micro albumin',
      'Chest X Ray',
      'ECG',
      'Usg Abdomen and Pelvis',
      'Doctor consultation',
      'Dietician consultation',
      'Eye checkup',
    ],
  },
  {
    title: 'DIABETIC CHECKUP - 1950/-',
    items: [
      'Fasting blood sugar (FBS) / post prandial blood sugar(PPBS)',
      'Complete blood count with ESR',
      'HbA1C(Glycosylated Haemoglobin)',
      'Fasting lipid profile',
      'Serum Electrolytes',
      'Blood Urea, Serum Creatinine',
      'Urine analysis',
      'Urine micro albumin',
      'ECG',
      'Doctor consultation',
      'Dietician consultation',
    ],
  },
  {
    title: 'EXECUTIVE MASTER HEALTH CHECKUP - 3990/-',
    items: [
      'Fasting blood sugar (FBS)',
      'Post prandial blood sugar(PPBS)',
      'Complete blood count with ESR',
      'Blood group & Rh typing',
      'HbA1C(Glycosylated Haemoglobin)',
      'Fasting lipid profile',
      'Liver function test',
      'Kidney function test',
      'Serum Calcium',
      'Thyroid function Test',
      'PSA for men/ PAP smear for women',
      'Urine analysis',
      'Stool Routine',
      'Chest X Ray',
      'ECG',
      'Usg Abdomen and Pelvis',
      'ECHO or TMT',
      'Doctor consultation',
      'Dental consultation',
      'Dietician consultation',
    ],
  },
];

const HealthPackages: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
      <div className="max-w-6xl w-full text-slate-800">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">
          HEALTH PACKAGES
        </h1>
        <p className="text-center mb-12 text-lg font-semibold">
          Preventive health packages are available at affordable prices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {healthPackages.map(({ title, items }, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-300 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">{title}</h2>
              <ul className="list-disc list-inside space-y-1 text-lg text-slate-700">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
