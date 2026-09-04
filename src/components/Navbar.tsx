import { useState, useEffect } from 'react';
import { Calendar, Menu, X, Phone, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { WHATSAPP_BASE_URL, CLINIC_INFO } from '../data/dentistData';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre nós', href: '#sobre-nos' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#ebdcca]/60 py-3'
          : 'bg-[#faf8f5]/90 backdrop-blur-xs py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b58d5f]/40 rounded-lg p-1">
            <BrandLogo variant="header" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-[#4a423b] hover:text-[#a4794e] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a4794e] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide text-white bg-[#a4794e] hover:bg-[#8f643b] active:scale-[0.98] transition-all duration-200 shadow-sm shadow-[#a4794e]/20"
              id="nav-agendar-cta"
            >
              <Calendar className="w-4 h-4 text-white/90" />
              <span>Agende sua consulta</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-lg text-[#5a4e44] hover:text-[#a4794e] hover:bg-[#ebdcca]/30 focus:outline-none"
              aria-label="Abrir menu de navegação"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-[#ebdcca] shadow-lg animate-in slide-in-from-top duration-200 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#4a423b] hover:text-[#a4794e] py-2 border-b border-gray-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#a4794e]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#a4794e] hover:bg-[#8f643b] shadow-sm text-center"
              id="mobile-agendar-cta"
            >
              <Calendar className="w-4 h-4" />
              <span>Agende sua consulta</span>
            </a>

            <div className="flex items-center justify-between text-xs text-[#73685d] pt-2 px-1">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#a4794e]" />
                {CLINIC_INFO.phoneDisplay}
              </span>
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#a4794e]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#a4794e]" />
                Maceió - AL
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
