import { Calendar, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { CLINIC_INFO, SERVICES_DATA, WHATSAPP_BASE_URL, MAPS_LOCATION_URL } from '../data/dentistData';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#241e1a] text-[#ded3c5] pt-16 pb-12 border-t border-[#3a3028]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#3d332a]">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="white" />
            <p className="text-xs sm:text-sm text-[#b8ab9a] leading-relaxed pt-2 max-w-sm">
              Odontologia integrada e estética dental com tecnologia de ponta, precisão e atendimento acolhedor para transformar seu sorriso.
            </p>

            <div className="pt-2">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#a4794e] hover:bg-[#8e653d] transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta</span>
              </a>
            </div>
          </div>

          {/* Column 2: Procedimentos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Procedimentos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#baa998]">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#a4794e]">›</span>
                    <span>{service.shortTitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navegação Rápida */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Menu
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#baa998]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#sobre-nos" className="hover:text-white transition-colors">Sobre a Dra.</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contato & Localização */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Atendimento
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#baa998]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#a4794e] flex-shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address.street}, {CLINIC_INFO.address.neighborhood}, {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}
                </span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#a4794e] flex-shrink-0" />
                <a href={WHATSAPP_BASE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </p>

              <div className="pt-2">
                <a
                  href={MAPS_LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#dec7a8] hover:text-white underline"
                >
                  <span>Abrir localização no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c7f71]">
          <p>© {new Date().getFullYear()} Dra. Katherine Cavalcante. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Odontologia & Harmonização Orofacial com</span>
            <Heart className="w-3.5 h-3.5 text-[#a4794e] fill-current" />
            <span>Maceió - AL</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
