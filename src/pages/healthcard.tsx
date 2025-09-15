import React from 'react';

const HealthCard: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto my-16 p-6 bg-white rounded-lg shadow-md text-slate-800">
      <h1 className="text-4xl font-bold text-teal-800 mb-8 text-center">HEALTH CARD</h1>

      <p className="mb-6 text-lg">
        Alvas Health Card offers various facilities in different hospitals affiliated to the AEF foundation at discount prices.
      </p>

      <h2 className="text-2xl font-semibold text-teal-700 mb-4">Benefits of Health Card:</h2>

      {/* IPD Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-teal-600 mb-3">IPD:</h3>
        <ol className="list-decimal list-inside space-y-1 text-lg">
          <li>The card holder will have 20% Discount on General Ward Charges.</li>
          <li>The card holder will have 15% Discount on Semi special, Special and Deluxe ward charges.</li>
          <li>20% Discount on Doctors/Professional Fees.</li>
          <li>20% Discount on the total CT, MRI and Ultrasound including Doctor's Fees.</li>
          <li>20% Discount on Laboratory Investigations & Other Procedures.</li>
          <li>Up to 5% Discount on Medicines Purchased in Hospital Pharmacy.</li>
        </ol>
      </div>

      {/* OPD Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-teal-600 mb-3">OPD:</h3>
        <ol className="list-decimal list-inside space-y-1 text-lg">
          <li>10% Concession on Consultation.</li>
          <li>20% Discount on Doctor/Professional Fees/Procedure Fees.</li>
          <li>20% Discount on the total CT, MRI and Ultrasound including Doctor's Fees.</li>
          <li>20% Discount on Laboratory Investigations.</li>
          <li>Total of Rs.50/- Discount on Dialysis.</li>
          <li>10% Discount on Dental Treatment. (Excluding Consumables & Materials)</li>
          <li>Up to 5% Discount on Medicines Purchased in Hospital Pharmacy.</li>
        </ol>
        <p className="mt-4 italic">You may carry out any number of transactions with the card during the period of validity.</p>
      </div>

      {/* How to become a cardholder */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">How to become a cardholder:</h2>
        <ol className="list-decimal list-inside space-y-1 text-lg">
          <li>Application Available in Alva's Hospital and various medical camps conducted by Alva's Health Centre.</li>
          <li>Filled Application can be submitted immediately and an acknowledgement is to be collected.</li>
          <li>The acknowledgement is to be submitted on receiving the card.</li>
        </ol>
      </div>

      {/* Documents Required */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Documents Required:</h2>
        <ol className="list-decimal list-inside space-y-1 text-lg">
          <li>For Individual Health Card: 2 Passport size photos.</li>
          <li>For Family Health Card: 2 Passport size photos of all the members.</li>
          <li>Proof of Identity (Aadhar Card/ Pan Card/ Voter ID/ Passport/Any other card issued by the Government)</li>
          <li>Proof of Address (Aadhar Card/Voter ID/Ration Card/Passport/ Any other card issued by the Government)</li>
        </ol>
      </div>

      {/* Renewal */}
      <div>
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Renewal:</h2>
        <ol className="list-decimal list-inside space-y-1 text-lg">
          <li>The card should be renewed by submitting the application duly filled 1 month earlier to the date of expiry.</li>
          <li>Renewal is possible with the same category of cards for the same time period. If the owner wishes to change, he/she has to wait for the desired category.</li>
          <li>No member is allowed to switch from one category to another.</li>
        </ol>
      </div>
    </section>
  );
};

export default HealthCard;
