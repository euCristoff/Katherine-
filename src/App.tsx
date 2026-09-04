/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Aparelho Autoligado');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#2c2825] font-sans antialiased selection:bg-[#cbb292]/30 selection:text-[#5a432d]">
      {/* Top Fixed Header with Brand Logo and Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* Exact Hero Section as requested from Image 1 */}
        <Hero onSelectService={(id) => setSelectedService(id)} />

        {/* Detailed Services Section modeled after Image 2 */}
        <ServicesSection onBookService={(serviceName) => handleOpenBooking(serviceName)} />

        {/* About Dra. Katherine Cavalcante Section */}
        <AboutSection />

        {/* Clinic Location & Google Maps Section with user provided link */}
        <LocationSection />
      </main>

      {/* Website Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill with direct user provided link */}
      <FloatingWhatsApp />

      {/* Interactive Quick Scheduling Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}

