"use client";
import vinay from "../images/vinay alva.jpg";
import hana from "../images/hana.jpg";
import sadanand from "../images/sadanand.jpg";
import vasanth from "../images/vasanth.jpg";
import harish from "../images/harish.jpg";
import revathi from "../images/revathi.jpg";
import sachin from "../images/sachin.jpg";
import srikanth from "../images/srikanth.jpg";
import swarna from "../images/swarna.jpg";
import sushan from "../images/sushan.jpg";
import dhanya from "../images/dhanya.jpg";
import sukesh from "../images/sukesh.jpg";
import thilak from "../images/thilak.jpg";
import renaz from "../images/renaz.jpg";
import ramesh from "../images/ramesh.jpg";
import murali from "../images/murali.jpg";
import mamatha from "../images/mamtha.jpg";
import arvind from "../images/arind.jpg";
import althaf from "../images/althaf.jpg";
import padmanaba from "../images/padmanaba.png";
import suhan from "../images/dr suhan alva.jpg";
import chaitra from "../images/dr chaithra.jpg";
import bhushan from "../images/dr bhushan.png";
import anirudh from "../images/dr anirudh.jpg";
import arun from "../images/dr arun bhat.jpg";
import anchitha from "../images/dr anchitha.webp";
import nihal from "../images/dr hihal.jpg";
import arjun from "../images/arjun ballal.jpg";
import noor from "../images/dr noor.jpg";
import dithesh from "../images/dithesh.png";
import janardhan from "../images/Janardhan.png";
import keerthan from "../images/Keerthan.png";
import praveenjshetty from "../images/praveenjshetty.png";
import ragavendra from "../images/ragavendra.png";
import rakshithkedambody from"../images/rakshithkedambody.png";
import sandhyarani from "../images/sandhyarani.png";
import mnbhat from"../images/mnbhat.png";
import narasimha from "../images/narasimha.png";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  MapPin,
  Phone,
  Mail,
  Star,
  Award,
  Calendar,
  Languages,
  Wallet,
} from "lucide-react";

// ✅ Card Component
function Card({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

// ✅ Badge Component
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
      {children}
    </span>
  );
}

// ✅ Doctor Card
function DoctorCard({ doctor }: { doctor: any }) {
  return (
    <Card className="flex gap-3 p-4 h-auto">
      {/* Doctor Image */}
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-20 h-20 rounded-full border-2 border-blue-300 object-cover"
      />

      {/* Doctor Info */}
      <div className="flex-1 overflow-hidden">
        <h2 className="text-base font-semibold text-gray-800">
          {doctor.name}
        </h2>
        <p className="text-xs text-gray-500">{doctor.qualification}</p>
        <p className="text-sm text-gray-600 flex items-center gap-1">
          <Award size={14} /> {doctor.specialization}
        </p>
        <p className="text-xs text-gray-500">{doctor.department}</p>

        {/* Details Row */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-2 text-xs text-gray-600">
          <p className="flex items-center gap-1">
            <Star size={14} /> {doctor.experience}
          </p>
          <p className="flex items-center gap-1">
            <Calendar size={14} /> {doctor.availability}
          </p>
          <p className="flex items-center gap-1">
            <Languages size={14} /> {doctor.languages.join(", ")}
          </p>
          <p className="flex items-center gap-1">
            <Wallet size={14} /> {doctor.consultationFee}
          </p>
        </div>
      </div>
    </Card>
  );
}

// ✅ Doctors Data
const doctorsData = [
  {
    name: "Dr Vinay Alva",
    qualification: "M.B.B.S., M.S, FMAS, DMAS",
    specialization: "General, Endoscopic and Laparoscopic Surgeon",
    department: "General Surgery",
    type: "in-house",
    image: vinay, // replace with vinay
    experience: "15+ years",
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Sat 9AM-5PM",
    consultationFee: "₹800",
  },
   
  {
    id: "2",
    name: "Dr Hana Shetty",
    qualification: "M.B.B.S., M.S",
    specialization: "OBG, Laparoscopic Surgeon, Gynaecologist and Obstetrician",
    department: "Obstetrics & Gynaecology",
    type: "in-house",
    image: hana,
    experience: "12+ years",

    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Fri 10AM-6PM",
    consultationFee: "₹700"
  },
  {
    id: "3",
    name: "Dr B Sadanand Naik",
    qualification: "M.B.B.S., M.D., D.N.B",
    specialization: "Consultant Physician",
    department: "Internal Medicine",
    type: "in-house",
    image: sadanand,
    experience: "20+ years",
  
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Sat 8AM-4PM",
    consultationFee: "₹600"
  },
  {
    id: "4",
    name: "Dr Vasanth T",
    qualification: "M.B.B.S., M.D., D.C.H., D.H.H.M",
    specialization: "Consultant Paediatrician",
    department: "Pediatrics",
    type: "in-house",
    image: vasanth,
    experience: "18+ years",
    rating: 4.9,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Sat 9AM-5PM",
    consultationFee: "₹500"
  },
  {
    id: "5",
    name: "Dr Harish Nayak",
    qualification: "M.B.B.S., M.S",
    specialization: "General Surgeon",
    department: "General Surgery",
    type: "in-house",
    image: harish,
    experience: "14+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Fri 9AM-4PM",
    consultationFee: "₹650"
  },
  {
    id: "6",
    name: "Dr Revathi Bhat",
    qualification: "M.B.B.S., D.G.O",
    specialization: "Obstetrician and Gynaecologist",
    department: "Obstetrics & Gynaecology",
    type: "in-house",
    image: revathi,
    experience: "16+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Sat 10AM-5PM",
    consultationFee: "₹600"
  },
  {
    id: "7",
    name: "Dr Sachin Shetty",
    qualification: "M.B.B.S., M.S, Ortho",
    specialization: "Orthopedic Surgeon",
    department: "Orthopedics",
    type: "in-house",
    image: sachin,
    experience: "14+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Fri 10AM-4PM",
    consultationFee: "₹900"
  },
  {
    id: "8",
    name: "Dr Srikantu J",
    qualification: "M.D., D.A",
    specialization: "Anaesthesiologist",
    department: "Anesthesiology",
    type: "in-house",
    image: srikanth,
    experience: "12+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Sat 8AM-6PM",
    consultationFee: "₹550"
  },
  {
    id: "9",
    name: "Dr Swarnarekha",
    qualification: "M.B.B.S., DA, DNB",
    specialization: "Anesthesiologist & Intensivist",
    department: "Anesthesiology",
    type: "in-house",
    image: swarna,
    experience: "10+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Fri 9AM-5PM",
    consultationFee: "₹600"
  },
  {
    id: "10",
    name: "Dr Sushan Shetty",
    qualification: "M.B.B.S., M.S",
    specialization: "Consultant ENT, Head and Neck Surgeon",
    department: "ENT",
    type: "in-house",
    image: sushan,
    experience: "13+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Sat 10AM-4PM",
    consultationFee: "₹700"
  },
  {
    id: "11",
    name: "Dr Dhanya Hegde",
    qualification: "M.B.B.S., M.D",
    specialization: "Consultant Physician",
    department: "Internal Medicine",
    type: "in-house",
    image: dhanya,
    experience: "11+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Fri 9AM-5PM",
    consultationFee: "₹550"
  },
  {
    id: "12",
    name: "Dr Sukesh",
    qualification: "BAMS, M.S (Ayu)",
    specialization: "Ayurveda Surgeon",
    department: "Ayurveda",
    type: "in-house",
    image: sukesh,
    experience: "15+ years",
    rating: 4.6,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Sat 9AM-4PM",
    consultationFee: "₹400"
  },
  {
    id: "13",
    name: "Dr Thilak Shetty",
    qualification: "M.B.B.S., D.M.R.D, DNB",
    specialization: "Radiologist & Sonologist",
    department: "Radiology",
    type: "in-house",
    image: thilak,
    experience: "17+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Sat 8AM-6PM",
    consultationFee: "₹500"
  },
  {
    id: "14",
    name: "Dr Reenaz Begum",
    qualification: "B.D.S",
    specialization: "Dental Surgeon",
    department: "Dental",
    type: "in-house",
    image: renaz,
    experience: "9+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon-Fri 10AM-5PM",
    consultationFee: "₹350"
  },

  // On-Call Consultants
  {
    id: "15",
    name: "Dr Ramesha",
    qualification: "M.B.B.S., D.G.O., DNB",
    specialization: "Obstetrician and Gynaecologist",
    department: "Obstetrics & Gynaecology",
    type: "on-call",
    image: ramesh,
    experience: "18+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "On-call 24/7",
    consultationFee: "₹700"
  },
  {
    id: "16",
    name: "Dr Rashmi",
    qualification: "M.B.B.S., D.G.O",
    specialization: "Obstetrician and Gynaecologist",
    department: "Obstetrics & Gynaecology",
    type: "on-call",
    image: srikanth,
    experience: "12+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "On-call evenings",
    consultationFee: "₹650"
  },
  {
    id: "17",
    name: "Dr Muralikrishna",
    qualification: "M.B.B.S., D.C.H",
    specialization: "Paediatrician",
    department: "Pediatrics",
    type: "on-call",
    image: murali,
    experience: "15+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "On-call weekends",
    consultationFee: "₹500"
  },
  {
    id: "18",
    name: "Dr C S Jyothi",
    qualification: "M.B.B.S., D.V.D",
    specialization: "Dermatologist",
    department: "Dermatology",
    type: "on-call",
    image:srikanth,
    experience: "14+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Thu, Sat",
    consultationFee: "₹600"
  },
  {
    id: "19",
    name: "Dr Mamatha",
    qualification: "M.B.B.S., D.A",
    specialization: "Anaesthesiologist",
    department: "Anesthesiology",
    type: "on-call",
    image: mamatha,
    experience: "11+ years",
    rating: 4.6,
    languages: ["English", "Hindi", "Kannada"],
    availability: "On-call 24/7",
    consultationFee: "₹550"
  },
  {
    id: "20",
    name: "Dr Arvind Kini",
    qualification: "M.B.B.S., M.S",
    specialization: "Ophthalmologist",
    department: "Ophthalmology",
    type: "on-call",
    image:arvind,
    experience: "16+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Wed, Fri",
    consultationFee: "₹750"
  },
  {
    id: "21",
    name: "Dr Althaf Khan",
    qualification: "M.S., M.Ch.",
    specialization: "Urologist",
    department: "Urology",
    type: "on-call",
    image: althaf,
    experience: "19+ years",
    rating: 4.9,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Thu, Sat",
    consultationFee: "₹1000"
  },

  // Visiting Consultants
  {
    id: "22",
    name: "Dr Vignesh Shenoy",
    qualification: "M.B.B.S., M.S",
    specialization: "Ophthalmologist",
    department: "Ophthalmology",
    type: "visiting",
    image:srikanth,
    experience: "13+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Saturdays 2PM-6PM",
    consultationFee: "₹800"
  },

  // Cardiologists
  {
    id: "23",
    name: "Dr Padmanabha Kamath",
    qualification: "M.B.B.S., M.D, DM (Cardiology)",
    specialization: "Cardiologist",
    department: "Cardiology",
    type: "visiting",
    image: padmanaba,
    experience: "25+ years",
    rating: 5.0,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Thu, Sat 2PM-6PM",
    consultationFee: "₹1200"
  },
  {
    id: "24",
    name: "Dr Narasimha Pai",
    qualification: "M.B.B.S., M.D, DM (Cardiology)",
    specialization: "Cardiologist",
    department: "Cardiology",
    type: "visiting",
    image: narasimha,
    experience: "22+ years",
    rating: 4.9,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Wed, Fri 3PM-7PM",
    consultationFee: "₹1100"
  },
  {
    id: "25",
    name: "Dr Praveen Shetty",
    qualification: "M.B.B.S., M.D., D.M.",
    specialization: "Cardiologist",
    department: "Cardiology",
    type: "visiting",
    image: praveenjshetty,
    experience: "20+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Fri 4PM-8PM",
    consultationFee: "₹1000"
  },
  {
    id: "26",
    name: "Dr M N Bhat",
    qualification: "M.B.B.S., M.D.",
    specialization: "Cardiologist",
    department: "Cardiology",
    type: "visiting",
    image: mnbhat,
    experience: "18+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Wed, Sat 2PM-6PM",
    consultationFee: "₹950"
  },
  {
    id: "27",
    name: "Dr Dithesh M",
    qualification: "M.B.B.S., M.D, FAGE, DNB",
    specialization: "Cardiologist",
    department: "Cardiology",
    type: "visiting",
    image: dithesh,
    experience: "16+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Thu 3PM-7PM",
    consultationFee: "₹900"
  },
  {
    id: "28",
    name: "Dr Sandhyarani",
    qualification: "M.B.B.S.",
    specialization: "Cardiologist",
    department: "Cardiology",
    type: "visiting",
    image: sandhyarani,
    experience: "14+ years",
    rating: 4.6,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Fri 2PM-5PM",
    consultationFee: "₹800"
  },

  // Neurologists
  {
    id: "29",
    name: "Dr Rakshith Shetty",
    qualification: "M.B.B.S., Mch (NIMHANS)",
    specialization: "Neurologist",
    department: "Neurology",
    type: "visiting",
    image: srikanth,
    experience: "17+ years",
    rating: 4.9,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Wed, Sat 3PM-7PM",
    consultationFee: "₹1100"
  },
  {
    id: "30",
    name: "Dr Rakshith Kedambady",
    qualification: "M.B.B.S., M.D., D.M",
    specialization: "Neurologist",
    department: "Neurology",
    type: "visiting",
    image: rakshithkedambody,
    experience: "15+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Thu 4PM-8PM",
    consultationFee: "₹1000"
  },
  {
    id: "31",
    name: "Dr Raghavendra BS",
    qualification: "M.B.B.S., M.D., D.M",
    specialization: "Neurologist",
    department: "Neurology",
    type: "visiting",
    image: ragavendra,
    experience: "19+ years",
    rating: 4.9,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Fri 3PM-7PM",
    consultationFee: "₹1050"
  },
  {
    id: "32",
    name: "Dr Suhan Alva",
    qualification: "M.B.B.S., M.D.",
    specialization: "Neurologist",
    department: "Neurology",
    type: "visiting",
    image: suhan,
    experience: "12+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Wed, Sat 2PM-6PM",
    consultationFee: "₹900"
  },
  {
    id: "33",
    name: "Dr Chaithra",
    qualification: "M.B.B.S., M.D.",
    specialization: "Neurologist",
    department: "Neurology",
    type: "visiting",
    image: chaitra,
    experience: "10+ years",
    rating: 4.6,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Thu 3PM-6PM",
    consultationFee: "₹850"
  },

  // Nephrologists
  {
    id: "34",
    name: "Dr Janardhan Kamath",
    qualification: "M.B.B.S., DNB",
    specialization: "Nephrologist / Renal Specialist",
    department: "Nephrology",
    type: "visiting",
    image: janardhan,
    experience: "16+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Thu, Sat 3PM-6PM",
    consultationFee: "₹950"
  },
  {
    id: "35",
    name: "Dr Bhushan Shetty",
    qualification: "M.B.B.S., M.D., D.M",
    specialization: "Nephrologist",
    department: "Nephrology",
    type: "visiting",
    image: bhushan,
    experience: "18+ years",
    rating: 4.9,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Wed, Fri 4PM-7PM",
    consultationFee: "₹1000"
  },

  // Psychiatrists
  {
    id: "36",
    name: "Dr Anirudh Shetty",
    qualification: "M.B.B.S., MD, DM (Endocrinology)",
    specialization: "Psychiatrist",
    department: "Psychiatry",
    type: "visiting",
    image: anirudh,
    experience: "14+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Wed, Sat 2PM-6PM",
    consultationFee: "₹800"
  },
  {
    id: "37",
    name: "Dr Arun Bhat",
    qualification: "M.B.B.S., DPM, DNB (Psychiatry)",
    specialization: "Psychiatrist",
    department: "Psychiatry",
    type: "visiting",
    image:arun,
    experience: "16+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Thu, Sat 3PM-7PM",
    consultationFee: "₹850"
  },

  // Orthopedicians
  {
    id: "38",
    name: "Dr Arjun Ballal",
    qualification: "M.B.B.S., M.S",
    specialization: "Orthopedic Surgeon",
    department: "Orthopedics",
    type: "visiting",
    image:arjun,
    experience: "13+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Fri 3PM-7PM",
    consultationFee: "₹900"
  },
  {
    id: "39",
    name: "Dr Deepak Pinto",
    qualification: "M.B.B.S., M.S., FRCS",
    specialization: "Orthopedic Specialist",
    department: "Orthopedics",
    type: "visiting",
    image: srikanth,
    experience: "20+ years",
    rating: 4.9,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Wed, Sat 2PM-6PM",
    consultationFee: "₹1100"
  },

  // Dermatologists
  {
    id: "40",
    name: "Dr Anchitha",
    qualification: "M.B.B.S., M.D.",
    specialization: "Dermatology, Venereology, Leprosy",
    department: "Dermatology",
    type: "visiting",
    image: anchitha,
    experience: "11+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Wed, Fri 4PM-7PM",
    consultationFee: "₹700"
  },
  {
    id: "41",
    name: "Dr Nihal Xavier Pinto",
    qualification: "M.B.B.S., M.D.",
    specialization: "Dermatologist",
    department: "Dermatology",
    type: "visiting",
    image: nihal,
    experience: "9+ years",
    rating: 4.6,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Thu, Sat 3PM-6PM",
    consultationFee: "₹650"
  },

  // Oncosurgeons
  {
    id: "42",
    name: "Dr Noor Mohammed",
    qualification: "M.B.B.S., M.S, DNB",
    specialization: "Oncosurgeon",
    department: "Oncology",
    type: "visiting",
    image: noor,
    experience: "17+ years",
    rating: 4.9,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Thu 3PM-7PM",
    consultationFee: "₹1200"
  },
  {
    id: "43",
    name: "Dr Sanal",
    qualification: "M.B.B.S., M.S",
    specialization: "Oncosurgeon",
    department: "Oncology",
    type: "visiting",
    image: srikanth,
    experience: "14+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Wed, Sat 2PM-6PM",
    consultationFee: "₹1000"
  },
  {
    id: "44",
    name: "Dr Karthik",
    qualification: "M.B.B.S., M.S",
    specialization: "Oncosurgeon",
    department: "Oncology",
    type: "visiting",
    image: srikanth,
    experience: "12+ years",
    rating: 4.6,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Fri 4PM-8PM",
    consultationFee: "₹950"
  },

  // Other Specialists
  {
    id: "45",
    name: "Dr Ranjith Rao",
    qualification: "M.B.B.S., M.S",
    specialization: "Surgical Gastroenterologist",
    department: "Gastroenterology",
    type: "visiting",
    image: srikanth,
    experience: "15+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Wed, Fri 3PM-7PM",
    consultationFee: "₹1000"
  },
  {
    id: "46",
    name: "Dr Suhith Rao",
    qualification: "M.B.B.S., M.S",
    specialization: "Paediatric Surgeon",
    department: "Pediatric Surgery",
    type: "visiting",
    image: srikanth,
    experience: "13+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Thu, Sat 2PM-6PM",
    consultationFee: "₹900"
  },
  {
    id: "47",
    name: "Dr Surekha Pai",
    qualification: "BAMS, M.D (Ayu)",
    specialization: "Ayurveda Consultant",
    department: "Ayurveda",
    type: "visiting",
    image: srikanth,
    experience: "16+ years",
    rating: 4.6,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Wed, Fri 10AM-4PM",
    consultationFee: "₹400"
  },
  {
    id: "48",
    name: "Dr Saritha",
    qualification: "BNYS, M.D",
    specialization: "Yoga and Naturopathy Consultant",
    department: "Naturopathy",
    type: "visiting",
    image: srikanth,
    experience: "12+ years",
    rating: 4.5,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Tue, Thu, Sat 9AM-3PM",
    consultationFee: "₹350"
  },
  {
    id: "49",
    name: "Dr Nikhil S Shetty",
    qualification: "M.B.B.S., M.S, Mch",
    specialization: "Plastic & Reconstructive Surgeon",
    department: "Plastic Surgery",
    type: "visiting",
    image: srikanth,
    experience: "11+ years",
    rating: 4.8,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Wed, Sat 3PM-7PM",
    consultationFee: "₹1100"
  },
  {
    id: "50",
    name: "Dr Keerthan Ganapathi",
    qualification: "MBBS, MD, DNB",
    specialization: "Pulmonologist",
    department: "Pulmonology",
    type: "visiting",
    image: keerthan,
    experience: "14+ years",
    rating: 4.7,
    languages: ["English", "Hindi", "Kannada"],
    availability: "Mon, Thu, Sat 4PM-8PM",
    consultationFee: "₹800"
  }
];

// ✅ Main Page
export default function DoctorsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter(
      (doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase()) &&
        (filter ? doc.department === filter : true)
    );
  }, [search, filter]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex items-center border rounded px-3 py-2 flex-1 bg-white">
          <Search className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search doctors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 w-full outline-none text-sm"
          />
        </div>
        <div className="flex items-center border rounded px-3 py-2 bg-white">
          <Filter className="text-gray-500" size={20} />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="ml-2 outline-none text-sm"
          >
           <option value="">All Specializations</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Oncologist">Oncologist</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="ENT Specialist">ENT Specialist</option>
            <option value="Dentist">Dentist</option>
            <option value="General Physician">General Physician</option>
          </select>
        </div>
      </div>

      {/* Doctor List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDoctors.map((doctor, idx) => (
          <DoctorCard key={idx} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
