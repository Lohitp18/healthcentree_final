'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isUnitsOpen, setIsUnitsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      submenu: [
        { name: 'About Hospital', href: '/about' },
        { name: 'Mission and Vision', href: '/vision' },
        { name: 'Messages', href: '/messages' },
      ],
    },
    {
      name: 'Department',
      submenu: [
        { name: 'General Medicine', href: '/generalmedicine' },
        { name: 'Paediatrics', href: '/paediatrics' },
        { name: 'Cardiology', href: '/cardiology' },
        { name: 'General, Endoscopic & Laparoscopic Surgery', href: 'generalsurgery' },
        { name: 'Otorhinolaryngology', href: '/ent' },
        { name: 'Orthopedics', href: '/ortho' },
        { name: 'Obstetrics & Gynaecology', href: '/obstrics' },
        { name: 'Oncology & Oncosurgery', href: '/oncology' },
        { name: 'Dermatology', href: '/dermatology' },
        { name: 'Neurology', href: '/neurology' },
        { name: 'Oromaxillofacial Surgery', href: '/oromax' },
        { name: 'Neurosurgery', href: '/neurosurgery' },
        { name: 'Nephrology and Urology', href: '/nephrolog' },
        { name: 'Emergency Medicine and Trauma Care', href: '/emergencymedicine' },
        { name: 'Radiology', href: '/radio' },
        { name: 'Psychiatry', href: '/psychitary' },
        { name: 'Dental Surgery', href: '/dentalsurgery' },
        { name: 'Pain Management & Palliative Care', href: '/pain' },
      ],
    },
    {
      name: 'Services',
      submenu: [
        { name: 'EMERGENCY & TRAUMA CARE', href: '/emergency' },
        { name: 'PHARMACY', href: '/emergency' },
        { name: 'LABORATORY', href: '/emergency' },
        { name: 'ECG / XRAY / CT SCAN', href: '/emergency' },
        { name: 'OT AND LT SERVICES', href: '/emergency' },
        { name: 'DIALYSIS', href: '/emergency' },
        { name: 'BLOOD BANK', href: '/bloodtests' },
        { name: 'NICU / ICU WITH VENTILATOR', href: '/emergency' },
        { name: 'ENDOSCOPY', href: '/emergency' },
        { name: 'AMBULANCE SERVICES', href: '/emergency' },
        { name: 'PARKING SERVICES', href: '/emergency' },
        { name: 'MORTUARY', href: '/emergency' },
        { name: 'ULTRASOUND SCANNING', href: '/emergency' },
        { name: 'HEALTH CARD', href: '/emergency' },
        { name: 'HEALTH PACKAGES', href: '/emergency' },
        { name: 'HEALTH INSURANCES', href: '/emergency' },
        { name: "ALVA'S FITNESS ZONE", href: '/emergency' },
        { name: 'HOME VISIT', href: '/emergency' },
        { name: 'ATM SERVICES', href: '/emergency' },
        { name: 'CAFETERIA', href: '/emergency' },
      ],
    },
    {
      name: 'Our Units',
      submenu: [
        { name: 'AARC', href: '/aasare' },
        { name: 'Alvas Punar Janma', href: '/punarjanma' },
      ],
    },
    { name: 'Doctors', href: '/doctor' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10">
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <button className="text-[17px] font-medium text-gray-800 hover:text-blue-600 inline-flex items-center">
                    {item.name}
                    <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Submenu */}
                  <div className="absolute top-full left-0 mt-3 bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-xl py-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 z-50 min-w-[260px] max-h-[320px] overflow-y-auto border border-gray-200">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-5 py-2.5 text-[15px] font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md transition-all duration-200"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[17px] font-medium text-gray-800 hover:text-blue-600"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4 top-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col p-4 space-y-2">
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (item.name === 'About') setIsAboutOpen(!isAboutOpen);
                      if (item.name === 'Department') setIsDepartmentOpen(!isDepartmentOpen);
                      if (item.name === 'Our Units') setIsUnitsOpen(!isUnitsOpen);
                      if (item.name === 'Services') setIsServicesOpen(!isServicesOpen);
                    }}
                    className="w-full text-left text-base font-medium text-gray-800 hover:text-blue-600 py-2 flex items-center justify-between"
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        (item.name === 'About' && isAboutOpen) ||
                        (item.name === 'Department' && isDepartmentOpen) ||
                        (item.name === 'Our Units' && isUnitsOpen) ||
                        (item.name === 'Services' && isServicesOpen)
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </button>
                  {((item.name === 'About' && isAboutOpen) ||
                    (item.name === 'Department' && isDepartmentOpen) ||
                    (item.name === 'Our Units' && isUnitsOpen) ||
                    (item.name === 'Services' && isServicesOpen)) && (
                    <div className="ml-4 space-y-1 border-l border-gray-200 pl-4 py-1">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-[15px] font-medium text-gray-700 py-2 hover:bg-blue-600 hover:text-white rounded-md transition-all"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-gray-800 hover:text-blue-600 py-2"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
