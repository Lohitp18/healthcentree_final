import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Shield, Users, Award, Clock, MapPin, Phone, Star, CheckCircle, TrendingUp, Stethoscope, Brain, Eye, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import img1 from "../images/40 YEARS_20250806_093912_0000.png";
import about from "../images/about.png"
import chairman from "../images/chairman.webp"

const Section = ({ id, className = '', children }: { 
  id: string; 
  className?: string; 
  children: React.ReactNode; 
}) => (
  <section id={id} className={`py-16 lg:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img1,
      title: "World-Class Healthcare Facility",
      subtitle: "State-of-the-art medical infrastructure with international standards",
      cta: "Explore Our Facilities"
    },
    {
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
      title: "Cutting-Edge Medical Technology",
      subtitle: "Latest diagnostic and treatment equipment for precise medical care",
      cta: "View Our Technology"
    },
    {
      image: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
      title: "Expert Medical Professionals",
      subtitle: "Internationally trained specialists dedicated to your health",
      cta: "Meet Our Doctors"
    },
    {
      image: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
      title: "24/7 Emergency Care",
      subtitle: "Round-the-clock emergency services with rapid response teams",
      cta: "Emergency Services"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
  <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden font-serif">
  {/* Slides */}
  <div className="relative h-full">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl lg:text-2xl text-black mb-8 leading-relaxed">
                {slide.subtitle}
              </p>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {slide.cta}
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Navigation Arrows */}
  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black p-3 rounded-full transition-all duration-200 z-10"
    aria-label="Previous slide"
  >
    <ChevronLeft size={24} />
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black p-3 rounded-full transition-all duration-200 z-10"
    aria-label="Next slide"
  >
    <ChevronRight size={24} />
  </button>

  {/* Dots Indicator */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-3 h-3 rounded-full transition-all duration-200 ${
          index === currentSlide
            ? "bg-black scale-125"
            : "bg-black/50 hover:bg-black/75"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>

  {/* Trust Indicators */}
  <div className="absolute bottom-20 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hidden lg:block font-serif">
    <div className="grid grid-cols-3 gap-6 text-center">
      <div>
        <div className="text-2xl font-bold text-black mb-1">35+</div>
        <div className="text-xs text-gray-800">Years Experience</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-black mb-1">50K+</div>
        <div className="text-xs text-gray-800">Patients Treated</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-black mb-1">24/7</div>
        <div className="text-xs text-gray-800">Emergency Care</div>
      </div>
    </div>
  </div>
</section>

  );
};

const Hero = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Award className="text-blue-600" size={24} />
          <span className="text-blue-600 font-semibold">World-Class Healthcare</span>
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Advanced Medical Care You Can 
          <span className="text-blue-600"> Trust</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Experience exceptional healthcare with our internationally trained specialists, 
          cutting-edge technology, and patient-centered approach to healing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#appointment"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule Consultation
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
          >
            View Our Services
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">50K+</div>
            <div className="text-sm text-gray-600">Patients Treated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Emergency Care</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" className="bg-white">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-12 h-1 bg-blue-600"></div>
          <span className="text-blue-600 font-semibold uppercase tracking-wide">About Us</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Leading Healthcare Excellence for Over 
          <span className="text-blue-600"> 35 Years</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Alva's Health Centre stands as a beacon of medical excellence, combining 
          advanced technology with compassionate care. Our internationally trained 
          medical team delivers world-class treatment across multiple specialties.
        </p>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <Award className="text-blue-600 mt-1" size={20} />
            <div>
              <div className="font-semibold text-gray-900">International Standards</div>
              <div className="text-sm text-gray-600">JCI & ISO Certified</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="text-blue-600 mt-1" size={20} />
            <div>
              <div className="font-semibold text-gray-900">Expert Team</div>
              <div className="text-sm text-gray-600">200+ Specialists</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <TrendingUp className="text-blue-600 mt-1" size={20} />
            <div>
              <div className="font-semibold text-gray-900">Success Rate</div>
              <div className="text-sm text-gray-600">98% Patient Satisfaction</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="text-blue-600 mt-1" size={20} />
            <div>
              <div className="font-semibold text-gray-900">24/7 Care</div>
              <div className="text-sm text-gray-600">Round-the-clock Support</div>
            </div>
          </div>
        </div>
        
        <a
          href="/about"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
        >
          Learn More About Us
        </a>
      </div>
      
      <div className="relative">
        <img
          src={about}
          alt="Medical Team"
          className="rounded-2xl shadow-xl"
        />
        <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">35+</div>
            <div className="text-sm">Years of Excellence</div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const Messages = () => (
  <Section id="messages" className="bg-gray-50">
    <div className="text-center mb-12">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <div className="w-12 h-1 bg-blue-600"></div>
        <span className="text-blue-600 font-semibold uppercase tracking-wide">Leadership Vision</span>
        <div className="w-12 h-1 bg-blue-600"></div>
      </div>
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
        A Message from Our <span className="text-blue-600">Director</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our commitment to patient well-being and medical innovation drives everything we do.
      </p>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
          src={chairman}
          alt="Dr. Alva, Hospital Director"
          className="rounded-2xl shadow-xl w-full"
        />
        <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">Dr.Mohan Alva</div>
            <div className="text-sm">Hospital Director</div>
          </div>
        </div>
      </div>
      <div>
        <blockquote className="text-2xl lg:text-3xl font-serif italic text-gray-800 leading-relaxed mb-8 relative pl-12">
          <MessageSquare className="absolute left-0 top-0 text-blue-400" size={48} />
          "At Alva's Health Centre, we believe in a holistic approach to healthcare, where advanced medical science meets genuine human compassion. Our mission is to not only treat illnesses but to foster a community of wellness, ensuring every patient receives personalized, world-class care. We are constantly striving for excellence, investing in the latest technology and nurturing a team of dedicated professionals who share our vision for a healthier future."
        </blockquote>
        <p className="text-lg text-gray-700 mb-8">
          — Dr. Alva, Director, Alva's Health Centre
        </p>
        <a
          href="/messages"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
        >
          Read More Messages
        </a>
      </div>
    </div>
  </Section>
);

const QuickLinks = () => (
  <Section className="bg-gray-50">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
      <p className="text-gray-600">Easy access to our most popular services and information</p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <a href="/doctor" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
        <Users className="mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" size={48} />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Doctors</h3>
        <p className="text-gray-600 text-sm">Meet our expert medical team</p>
      </a>
      
      <a href="/services" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
        <Heart className="mx-auto mb-4 text-red-500 group-hover:scale-110 transition-transform" size={48} />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Services</h3>
        <p className="text-gray-600 text-sm">Comprehensive medical care</p>
      </a>
      
      <a href="/appointment" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
        <Clock className="mx-auto mb-4 text-green-500 group-hover:scale-110 transition-transform" size={48} />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Book Appointment</h3>
        <p className="text-gray-600 text-sm">Schedule your consultation</p>
      </a>
      
      <a href="/emergency" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
        <Shield className="mx-auto mb-4 text-red-600 group-hover:scale-110 transition-transform" size={48} />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Care</h3>
        <p className="text-gray-600 text-sm">24/7 emergency services</p>
      </a>
    </div>
  </Section>
);


const App = () => {
  return (
    <>
      <ImageSlider />
      <Hero />
      <About />
      <Messages />
      <QuickLinks />
    </>
  );
};

export default App;
