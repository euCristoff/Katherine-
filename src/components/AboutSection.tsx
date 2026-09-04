import { Calendar, CheckCircle2, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import DoctorPortrait from './DoctorPortrait';
import { CLINIC_INFO, WHATSAPP_BASE_URL } from '../data/dentistData';

export default function AboutSection() {
  const credentials = [
    'Cirurgiã-Dentista com foco em Ortodontia e Estética Dental',
    'Especialista em Aparelhos Autoligados e Alinhadores Invisíveis',
    'Protocolos personalizados com planejamento digital do sorriso',
    'Abordagem minimamente invasiva com foco no conforto e na biossegurança',
  ];

  return (
    <section id="sobre-nos" className="py-20 md:py-28 bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait / Clinical Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px]">
              <DoctorPortrait showUploadBadge={false} aspectRatio="aspect-[4/4.9]" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-2 bg-[#a4794e] text-white p-4 rounded-2xl shadow-lg flex items-center gap-3 z-30">
              <Award className="w-7 h-7 text-[#f8ecdb]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[#f8ecdb]">Dra. Katherine Cavalcante</p>
                <p className="text-sm font-bold">CRO-AL Especialista</p>
              </div>
            </div>
          </div>

          {/* Bio and Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#a4794e]">
                Sobre a Especialista
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292420] leading-tight font-serif-title"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Cuidando de sorrisos com ciência, sensibilidade e tecnologia
              </h2>
            </div>

            <p className="text-[#4e453c] text-base sm:text-lg leading-relaxed">
              A <strong>Dra. Katherine Cavalcante</strong> atua com o compromisso de unir saúde bucal, alinhamento ortodôntico e estética do sorriso em um ambiente acolhedor e humanizado.
            </p>

            <p className="text-[#63584e] text-sm sm:text-base leading-relaxed">
              Cada paciente é recebido com uma escuta atenta e passa por uma avaliação criteriosa. Utilizando métodos modernos como os <strong>aparelhos autoligados</strong> e <strong>alinhadores transparentes</strong>, os tratamentos tornam-se muito mais rápidos, precisos e livres de desconfortos desnecessários.
            </p>

            {/* Credentials Checklist */}
            <div className="pt-2 space-y-3">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#a4794e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-[15px] text-[#3e3730] font-medium leading-snug">
                    {cred}
                  </span>
                </div>
              ))}
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#ede2d4]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f2e7db] text-[#8e653d] flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2b2520]">Atendimento Gentil</h4>
                  <p className="text-xs text-[#73685d]">Tranquilidade total em consulta</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f2e7db] text-[#8e653d] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2b2520]">Materiais Nobres</h4>
                  <p className="text-xs text-[#73685d]">Insumos com certificação ouro</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#a4794e] hover:bg-[#8f643b] active:scale-[0.98] transition-all shadow-md shadow-[#a4794e]/25"
                id="about-agendar-cta"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar minha primeira consulta</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
