"use client"
import React from 'react';
import { Phone, Mail, ChevronRight, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import mercedesSclass from './assets/images/mercedes-s-class.jpg';
import mercedesEclass from './assets/images/mercedes-e-class.jpg';
import mercedesVclass from './assets/images/mercedes-v-class.jpg';
import airportTransfers from './assets/images/airport-transfers.webp';
import businessTravel from './assets/images/business-travel.webp';
import privateJet from './assets/images/private-jet.jpg';
import banner from './assets/images/banner.jpg'
// Types

type Vehicle = {
  name: string;
  description: string;
  seats: number;
  features: string[];
  bestFor: string[];
  imageUrl: string | StaticImageData;
};

type Service = {
  title: string;
  description: string[];
  imageUrl: string | StaticImageData;
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="bg-gray-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span className="text-sm">+44 7956 379100</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span className="text-sm">shilpan@[placeholder].com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Rococo Chauffeurs</h1>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="md:flex md:space-x-6">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#fleet" className="hover:text-gray-300">Our Fleet</a></li>
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#testimonials" className="hover:text-gray-300">Testimonials</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Hero Section
const Hero = () => (
  <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <Image
      src={banner}
      alt="Luxury car"
      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="relative container mx-auto px-4 h-full flex items-center">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Rococo Chauffeurs</h2>
        <p className="text-xl mb-8">Experience luxury and elegance with our premier chauffeur services.</p>
        <a 
          href="#services" 
          className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  </section>
);

// Fleet Section
const Fleet = () => {
  const vehicles: Vehicle[] = [
    {
      name: "Mercedes S-Class",
      description: "The epitome of luxury and sophistication. Perfect for business executives and special occasions.",
      seats: 4,
      features: ["Leather seats", "Climate control", "Wi-Fi", "Privacy glass"],
      bestFor: ["VIP transfers", "Weddings", "Corporate events"],
      imageUrl: mercedesSclass
    },
    {
      name: "Mercedes E-Class",
      description: "A blend of style and comfort. Ideal for business travel and airport transfers.",
      seats: 4,
      features: ["Comfortable seating", "Advanced navigation", "Wi-Fi"],
      bestFor: ["Business travel", "Airport transfers", "City tours"],
      imageUrl: mercedesEclass
    },
    {
      name: "Mercedes V-Class",
      description: "The ultimate solution for group travel. Spacious and comfortable for up to 7 passengers.",
      seats: 7,
      features: ["Spacious interior", "Reclining seats", "Wi-Fi", "Entertainment system"],
      bestFor: ["Group travel", "Family trips", "Executive transport"],
      imageUrl: mercedesVclass
    }
  ];

  return (
    <section id="fleet" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Luxury Fleet</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={vehicle.imageUrl}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{vehicle.name}</h3>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Features:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {vehicle.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Best For:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {vehicle.bestFor.map((use, i) => (
                        <li key={i}>{use}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services: Service[] = [
    {
      title: "Business Travel",
      description: [
        "Arrive in style and comfort to your business meetings and conferences.",
        "Our professional chauffeurs ensure punctuality and reliability."
      ],
      imageUrl: businessTravel
    },
    {
      title: "Airport Transfers",
      description: [
        "Efficient and luxurious transfers to and from airports.",
        "We monitor flight schedules to ensure timely arrivals."
      ],
      imageUrl: airportTransfers
    },
    {
      title: "Private Jet Services",
      description: [
        "Seamless transitions between air and ground travel.",
        "Coordination with private jet schedules.",
        "Bespoke services for specific needs."
      ],
      imageUrl: privateJet
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                {service.description.map((desc, i) => (
                  <p key={i} className="text-gray-600 mb-2">{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      text: "Exceptional service and attention to detail. The chauffeur was professional and punctual.",
      author: "[Name]",
      role: "[Role]"
    },
    {
      text: "The most reliable luxury transport service I've ever used. Highly recommended!",
      author: "[Name]",
      role: "[Role]"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="mb-4">{testimonial.text}</blockquote>
              <cite className="block font-semibold">{testimonial.author}</cite>
              <span className="text-gray-400">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Rococo Chauffeurs</h3>
          <p className="text-gray-400">Luxury chauffeur services for discerning clients.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>+44 7956 379100</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>shilpan@[placeholder].com</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#fleet" className="hover:text-gray-300">Our Fleet</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; 2024 Rococo Chauffeurs. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Fleet />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;