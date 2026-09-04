import { Calendar, ArrowRight } from 'lucide-react';
import DentalIcon from './DentalIcons';
import DoctorPortrait from './DoctorPortrait';
import { WHATSAPP_BASE_URL } from '../data/dentistData';

interface HeroProps {
  onSelectService?: (serviceId: string) => void;
}

export default function Hero({ onSelectService }: HeroProps) {
  const floatingServices: Array<{
    id: string;
    title: string[];
    icon: 'bracket' | 'aligner' | 'whitening' | 'botox' | 'lips' | 'face';
  }> = [
    {
      id: 'aparelho-autoligado',
      title: ['Aparelho', 'Autoligado'],
      icon: 'bracket',
    },
    {
      id: 'aparelho-invisivel',
      title: ['Aparelho', 'Invisível'],
      icon: 'aligner',
    },
    {
      id: 'clareamento',
      title: ['Clareamento'],
      icon: 'whitening',
    },
    {
      id: 'preenchimento-facial-labial',
      title: ['Preenchimento', 'Facial e Labial'],
      icon: 'lips',
    },
  ];

  const handleServiceClick = (id: string) => {
    if (onSelectService) {
      onSelectService(id);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const servicesSection = document.getElementById('servicos');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="inicio" className="relative pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#f7f3ec] to-[#f4ede3]">
      {/* Subtle organic dental arch background backdrop */}
      <div className="absolute top-0 right-0 w-[55%] h-[90%] -z-10 pointer-events-none hidden lg:block overflow-hidden">
        <div className="absolute -top-16 -right-16 w-[750px] h-[750px] rounded-full bg-gradient-to-br from-[#ebe1d3]/80 via-[#e3d3be]/50 to-transparent blur-2xl" />
        <div className="absolute top-20 right-32 w-[520px] h-[640px] rounded-[180px] bg-gradient-to-b from-[#eee5d8] to-[#e4d4be]/60 opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Copy & Primary CTA */}
          <div className="lg:col-span-6 xl:col-span-6 text-left space-y-6 lg:pr-4">
            {/* Top Eyebrow */}
            <div className="flex flex-col items-start space-y-2">
              <div className="w-12 h-[2px] bg-[#a4794e]" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.24em] text-[#7a6d60] uppercase">
                BEM-VINDA À CLÍNICA
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-[52px] font-bold text-[#2a2521] leading-[1.18] tracking-tight font-serif-title"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Realce seu sorriso com{' '}
              <span className="text-[#a4794e] relative inline-block">
                qualidade,
              </span>{' '}
              confiança e rapidez!
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-[19px] text-[#5e5449] leading-relaxed max-w-xl font-normal">
              Atendimento odontológico personalizado para transformar seu sorriso com segurança, tecnologia e excelência.
            </p>

            {/* CTA Button & Highlights */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#a4794e] hover:bg-[#8e653d] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#a4794e]/30 group cursor-pointer"
                id="hero-agendar-cta"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Agende sua consulta</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white/80" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-[#5a4e44] hover:text-[#a4794e] hover:bg-white/60 transition-colors"
              >
                <span>Conhecer tratamentos</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex items-center gap-6 text-xs text-[#73685d] border-t border-[#ebdcca]/80 max-w-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a4794e]" />
                <span className="font-medium">Ortodontia Digital</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a4794e]" />
                <span className="font-medium">Estética Dental</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a4794e]" />
                <span className="font-medium">Atendimento Humanizado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dra. Katherine Portrait Composition */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-[460px] lg:max-w-[500px]">
              <DoctorPortrait showUploadBadge={true} aspectRatio="aspect-[4/4.8]" />
            </div>
          </div>
        </div>

        {/* Floating 6-Item Service Navigation Bar */}
        <div className="mt-12 lg:mt-16 relative z-20">
          <div
            id="floating-services-bar"
            className="bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-[#4a3b2c]/8 border border-[#ebe0d3] p-4 sm:p-5 md:p-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-[#f0e6da] gap-y-4 sm:gap-y-0">
              {floatingServices.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  type="button"
                  className={`group flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-xl hover:bg-[#faf7f2] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#a4794e]/30 ${
                    index > 0 ? 'sm:border-l sm:border-[#f0e6da]' : ''
                  }`}
                  id={`hero-pill-${service.id}`}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#a4794e] group-hover:text-[#88603e] group-hover:scale-110 transition-transform duration-200 mb-2.5">
                    <DentalIcon name={service.icon} className="w-9 h-9" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-medium text-[#3b342e] group-hover:text-[#a4794e] transition-colors leading-snug">
                    {service.title.map((line, lineIndex) => (
                      <span key={lineIndex} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
