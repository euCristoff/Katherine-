import { Check, MessageCircle, Sparkles } from 'lucide-react';
import DentalIcon from './DentalIcons';
import { SERVICES_DATA, WHATSAPP_BASE_URL } from '../data/dentistData';

interface ServicesSectionProps {
  onBookService?: (serviceName: string) => void;
}

export default function ServicesSection({ onBookService }: ServicesSectionProps) {
  const getWhatsAppLinkForService = (serviceName: string) => {
    const encoded = encodeURIComponent(
      `Olá, Dra. Katherine Cavalcante! Gostaria de agendar uma consulta para saber mais sobre: ${serviceName}.`
    );
    return `https://api.whatsapp.com/send?phone=5582988191366&text=${encoded}&utm_source=website&utm_medium=service_card`;
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#faf8f5] relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#f0e4d4]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#ebd9c5]/35 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header modeled directly after 2nd image */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2e7db] text-[#8e653d] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Tratamentos de Excelência
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#2a2521] leading-tight font-serif-title"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Você está pronta(o) para ter um sorriso perfeito e aumentar sua autoestima?
          </h2>

          <p className="text-base sm:text-lg text-[#665a4e] font-normal max-w-2xl mx-auto pt-1">
            Conheça os serviços de odontologia e estética orofacial
          </p>
          <div className="w-20 h-[2px] bg-[#dec7a8] mx-auto mt-4 rounded-full" />
        </div>

        {/* List of Service Cards with editorial layout & stacked image frames */}
        <div className="space-y-16 md:space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white/80 backdrop-blur-xs rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-md shadow-[#4a3b2c]/5 border border-[#ede3d6] transition-all hover:shadow-lg hover:border-[#dfcebc]"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text & Bullets Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Badge modeled directly from Pinterest layout */}
                    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#b58d5f] text-white shadow-xs max-w-full">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-white">
                        <DentalIcon name={service.iconName} className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold tracking-wide truncate">
                        {service.badge}
                      </span>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[#4b433b] text-base sm:text-[17px] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bullet Points with bronze check/bullet icons */}
                    <ul className="space-y-3 pt-1">
                      {service.bulletPoints.map((point, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#423a33] leading-snug">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f4ebd9] text-[#a4794e] flex items-center justify-center mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Service CTA */}
                    <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <a
                        href={getWhatsAppLinkForService(service.shortTitle)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#a4794e] hover:bg-[#8f643b] active:scale-[0.98] transition-all shadow-sm shadow-[#a4794e]/20"
                        id={`service-cta-${service.id}`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Agendar {service.shortTitle}</span>
                      </a>
                      <span className="text-xs text-[#7d7165]">
                        Atendimento com a Dra. Katherine
                      </span>
                    </div>
                  </div>

                  {/* Overlapping Images Column (modeled after the stacked photo layout in image 2) */}
                  <div
                    className={`lg:col-span-5 relative flex items-center justify-center ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative w-full max-w-[420px] aspect-[4/3.8] flex items-center justify-center">
                      {/* Main Image Frame */}
                      <div className="relative w-[85%] h-[80%] rounded-2xl overflow-hidden shadow-lg border-2 border-white/90 bg-[#f2eae0]">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2a241f]/30 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Secondary Overlapping Image Frame (signature stacked photo effect from 2nd image) */}
                      {service.secondaryImage && (
                        <div className="absolute -bottom-4 -right-2 sm:-right-4 w-[60%] h-[55%] rounded-xl overflow-hidden shadow-xl border-4 border-white bg-[#f8f5ef]">
                          <img
                            src={service.secondaryImage}
                            alt={`${service.shortTitle} detalhe`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      )}

                      {/* Doctor Credential Tag */}
                      <div className="absolute -top-3 -left-2 sm:-left-3 bg-white/95 backdrop-blur-sm border border-[#dec7a8] px-3.5 py-1.5 rounded-lg shadow-sm">
                        <p className="text-[11px] font-semibold text-[#88603e] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#a4794e]" />
                          Dra. Katherine Cavalcante
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
