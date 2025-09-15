import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Header from './components/header';
import Hero from './pages/Main';
import Footer from './components/footer';
import Department from "./pages/department";
import Aasare from './pages/aasare';
import ContactPage1 from './pages/asthetic';
import ContactPage2 from './pages/BloodTests';
import ContactPage3 from './pages/CancerPostOpCare';
import ContactPage4 from './pages/DaycareFacility';
import ContactPage5 from './pages/Doctors';
import ContactPage6 from './pages/ElderlyCare';
import ContactPage7 from './pages/ExpertConsultation';
import ContactPage8 from './pages/Helpers';
import ContactPage9 from './pages/MedicalEquipment';
import ContactPage10 from './pages/Medicines';
import ContactPage11 from './pages/Nurses';
import ContactPage12 from './pages/PalliativeCare';
import ContactPage13 from './pages/Physiotherapists';
import ContactPage14 from './pages/punarjanma';
import ContactPage15 from './pages/Vaccination';
import ContactPage16 from './pages/medicine/Cardiology';
import ContactPage17 from './pages/medicine/DentalSurgery';
import ContactPage18 from './pages/medicine/Dermatology';
import ContactPage19 from './pages/medicine/EmergencyMedicine';
import ContactPage20 from './pages/medicine/ENT';
import ContactPage21 from './pages/medicine/GeneralMedicine';
import ContactPage22 from './pages/medicine/GeneralSurgery';
import ContactPage23 from './pages/medicine/NephrologyUrology';
import ContactPage24 from './pages/medicine/Neurology';
import ContactPage25 from './pages/medicine/Neurosurgery';
import ContactPage26 from './pages/medicine/ObstetricsGynecology';
import ContactPage27 from './pages/medicine/Oncology';
import ContactPage28 from './pages/medicine/OromaxillofacialSurgery';
import ContactPage29 from './pages/medicine/Orthopedics';
import ContactPage30 from './pages/medicine/Paediatrics';
import ContactPage31 from './pages/medicine/PainPalliativeCare';
import ContactPage32 from './pages/medicine/Psychiatry';
import ContactPage33 from './pages/medicine/Radiology';
import ContactPage34 from  './pages/medicine/Historyofmedicine';
import ContactPage35 from   './pages/medicine/Plasticsurgery';
import ContactPage36 from   './pages/medicine/Pulmonology';
import ContactPage37 from   './pages/medicine/Anesthesiology';


import Pharmacy from './pages/parmacy';
import Ultrasoundscanning from './pages/ultrasoundscanning';
import HomeVisit from'./pages/homevisit';
import Laboratory from './pages/laboratory';
import Mortuary from './pages/mortuary'
import NICU from './pages/nicu';
import Otandlt from './pages/otandlt';
import Parkingservices from './pages/parkingservices';
import Ecg from './pages/ecg';
import Emergencyandtraumacare from './pages/emergencyandtraumacare';
import Endoscopy from './pages/endoscopy';
import Healthcard from './pages/healthcard';
import Healthinsurance from './pages/healthinsurance';
import Healthpackage from './pages/healthpackage';
import Bloodbank from './pages/bloodbank';
import Cafeteria from './pages/cafeteria';
import Dailysis from './pages/dailysis';
import Alvasfitnesszone from './pages/alvasfitnesszone';
import Service from './pages/Services';





import Abouts from './pages/About';
import Vision from './pages/Visionmission';
import Messages from './pages/Messages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Navbar />
        <Header />

        {/* Navbar */}

        {/* Main Content */}
        <main className="w-full">
          <div className="max-w-[2000px] mx-auto">

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/aasare" element={<Aasare />} />
              <Route path="/department" element={<Department />} />
              <Route path="/asthetic" element={<ContactPage1 />} />
              <Route path="/bloodtests" element={<ContactPage2 />} />
              <Route path="/cancer" element={<ContactPage3 />} />
              <Route path="/daycarefacilities" element={<ContactPage4 />} />
              <Route path="/doctor" element={<ContactPage5 />} />
              <Route path="/elderlycare" element={<ContactPage6 />} />
              <Route path="/expertconsulation" element={<ContactPage7 />} />
              <Route path="/helper" element={<ContactPage8 />} />
              <Route path="/medicalequipments" element={<ContactPage9 />} />
              <Route path="/medicines" element={<ContactPage10 />} />
              <Route path="/nurses" element={<ContactPage11 />} />
              <Route path="/pallicare" element={<ContactPage12 />} />
              <Route path="/physiotherapists" element={<ContactPage13 />} />
              <Route path="/punarjanma" element={<ContactPage14 />} />
              <Route path="/vaccination" element={<ContactPage15 />} />
              <Route path="/cardiology" element={<ContactPage16 />} />
              <Route path="/dentalsurgery" element={<ContactPage17 />} />
              <Route path="/dermatology" element={<ContactPage18 />} />
              <Route path="/emergencymedicine" element={<ContactPage19 />} />
              <Route path="/ent" element={<ContactPage20 />} />
              <Route path="/generalmedicine" element={<ContactPage21 />} />
              <Route path="/generalsurgery" element={<ContactPage22 />} />
              <Route path="/nephrologyurology" element={<ContactPage23 />} />
              <Route path="/neurology" element={<ContactPage24 />} />
              <Route path="/neurosurgery" element={<ContactPage25 />} />
              <Route path="/obstrics" element={<ContactPage26 />} />
              <Route path="/oncology" element={<ContactPage27 />} />
              <Route path="/oromax" element={<ContactPage28 />} />
              <Route path="/ortho" element={<ContactPage29 />} />
              <Route path="/paediatrics" element={<ContactPage30 />} />
              <Route path="/pain" element={<ContactPage31 />} />
              <Route path="/psychitary" element={<ContactPage32 />} />
              <Route path="/radio" element={<ContactPage33 />} />
              <Route path="/historyofmedicine" element={<ContactPage34/>} />
              <Route path="/plasticsurgery" element={<ContactPage35 />} />
               <Route path="/pulmonology" element={<ContactPage36 />} />
              <Route path="/anesthesiology" element={<ContactPage37 />} />


              


              <Route path="/services" element={<Service />} />
              <Route path="/about" element={<Abouts />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/emergencyandtraumacare" element={<Emergencyandtraumacare/>} />
              <Route path="/parmacy" element={<Pharmacy/>} />
              <Route path="/laboratory" element={<Laboratory/>} /> 
              <Route path="/ecg" element={<Ecg/>} />
              <Route path="/otandlt" element={<Otandlt/>} />
              <Route path="/dailysis" element={<Dailysis/>} />
              <Route path="/bloodbank" element={<Bloodbank/>} />
              <Route path="/nicu" element={<NICU/>} />
              <Route path="/endoscopy" element={<Endoscopy/>} />
              {/* <Route path="/ambulanceservices" element={<Ambulanceservices/>} /> */}
              <Route path="/parkingservices" element={<Parkingservices/>} /> 
              <Route path="/mortuary" element={<Mortuary/>} /> 
               <Route path="/ultrasoundscanning" element={<Ultrasoundscanning/>} />
              <Route path="/healthcard" element={<Healthcard/>} />
              <Route path="/healthpackage" element={<Healthpackage/>} />
              <Route path="/healthinsurance" element={<Healthinsurance/>} />
              <Route path="/alvasfitnesszone" element={<Alvasfitnesszone/>} />
              <Route path="/homevisit" element={<HomeVisit/>} />
              {/* <Route path="/atmservices" element={<Atmservices/>} /> */}
              <Route path="/cafeteria" element={<Cafeteria/>} />

            </Routes>

          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
