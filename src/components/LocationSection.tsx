import { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, ExternalLink, Calendar } from 'lucide-react';
import { CLINIC_INFO, WHATSAPP_BASE_URL, MAPS_LOCATION_URL } from '../data/dentistData';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const fullAddress = `${CLINIC_INFO.address.street}, ${CLINIC_INFO.address.neighborhood}, ${CLINIC_INFO.address.city} - ${CLINIC_INFO.address.state}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-[#f6f1ea] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ebd9c6] text-[#7a532d] text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Fácil Acesso & Conforto
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292420] leading-tight font-serif-title"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Venha conhecer nossa clínica
          </h2>

          <p className="text-base sm:text-lg text-[#615549] max-w-2xl mx-auto">
            Consultório moderno, climatizado e estruturado para proporcionar máxima comodidade, privacidade e segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Clinic Information Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#e8dbc9] space-y-6">
              {/* Address Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f4ebd9] text-[#a4794e] flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-base font-bold text-[#2a241f]">Endereço da Clínica</h4>
                  <p className="text-sm text-[#5a4f44] leading-relaxed">
                    {CLINIC_INFO.address.street}
                  </p>
                  <p className="text-sm font-semibold text-[#88603e]">
                    {CLINIC_INFO.address.neighborhood}, {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}
                  </p>

                  <button
                    onClick={copyAddress}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs text-[#a4794e] hover:text-[#7f5a34] font-medium mt-2 pt-1 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600">Endereço copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar endereço completo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#f2e7db]">
                <div className="w-12 h-12 rounded-2xl bg-[#f4ebd9] text-[#a4794e] flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-base font-bold text-[#2a241f]">Horários de Atendimento</h4>
                  <p className="text-sm text-[#5a4f44]">{CLINIC_INFO.hours.weekdays}</p>
                  <p className="text-sm text-[#5a4f44]">{CLINIC_INFO.hours.saturday}</p>
                  <p className="text-xs text-[#8a7a6b]">{CLINIC_INFO.hours.sunday}</p>
                </div>
              </div>

              {/* Direct Phone / WhatsApp */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#f2e7db]">
                <div className="w-12 h-12 rounded-2xl bg-[#f4ebd9] text-[#a4794e] flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-base font-bold text-[#2a241f]">Telefone & WhatsApp</h4>
                  <p className="text-base font-bold text-[#88603e]">
                    {CLINIC_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#73685d]">
                    Atendimento ágil para agendamentos e esclarecimento de dúvidas.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Link for Location */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-[#a4794e] hover:bg-[#8f643b] shadow-md shadow-[#a4794e]/25 transition-all text-center"
                id="maps-direct-button"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-[#6f4f34] bg-white hover:bg-[#f7f2ea] border border-[#dccbb7] shadow-xs transition-all text-center"
                id="location-whatsapp-button"
              >
                <Calendar className="w-4 h-4 text-[#a4794e]" />
                <span>Agendar Horário</span>
              </a>
            </div>
          </div>

          {/* Map Visual Card / Interactive Embed */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e8dbc9] h-full flex flex-col">
              <div className="relative flex-1 min-h-[360px] md:min-h-[420px] bg-[#ece2d4]">
                {/* Visual Map Representation */}
                <iframe
                  title="Localização Dra. Katherine Cavalcante"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2045501869814!2d-35.7118671!3d-9.6454848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145a557876a47%3A0x8dd0bce427a1496a!2sHarmony%20Trade%20Center!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  className="w-full h-full border-0 min-h-[380px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Direct Float Pin Card linking to user's exact share.google link */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#dec7a8]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#a4794e] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2a241f]">Dra. Katherine Cavalcante</p>
                      <p className="text-[11px] text-[#73685d]">Odontologia & Harmonização</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#554a40] line-clamp-2">
                    {CLINIC_INFO.address.street}, {CLINIC_INFO.address.neighborhood}, Maceió - AL
                  </p>
                  <a
                    href={MAPS_LOCATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg text-xs font-semibold text-white bg-[#a4794e] hover:bg-[#8f643b] transition-colors"
                  >
                    <span>Ver no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Bottom bar inside card */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#f0e4d7] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6e6155]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Estacionamento no local e acessibilidade completa</span>
                </div>
                <span className="text-[#a4794e] font-semibold">Maceió - Alagoas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
