import { Sparkles, ShieldCheck, Star } from 'lucide-react';
import ClinicalCaseCard from './ClinicalCaseCard';
import { TESTIMONIALS, WHATSAPP_BASE_URL } from '../data/dentistData';
import { MEDIA_KEYS } from '../utils/mediaStorage';

export default function ResultsGallery() {
  const clinicalCases = [
    {
      caseId: 'caso-1',
      storageKey: MEDIA_KEYS.CASE_1,
      fallbackFilename: 'Screenshot_20260903_163757_Instagram.jpg',
      caseNumber: 'Caso Clínico 01',
      title: 'Aparelho Autoligado & Alinhamento Completo',
      category: 'Ortodontia Integrada',
      tagline: 'Correção de Apinhamento Severo e Mordida Desalinhada',
      description:
        'Transformação do sorriso através da tecnologia de braquetes autoligados com fios termoativados, eliminando borrachinhas. Alinhamento dental veloz, expansão harmônica das arcadas e oclusão perfeita sem a necessidade de extrações dentárias.',
      watermark: 'Dra. Katherine Cavalcante • Odontologia Integrada & HOF',
      caseType: 'before-after-autoligado' as const,
    },
    {
      caseId: 'caso-2',
      storageKey: MEDIA_KEYS.CASE_2,
      fallbackFilename: 'Screenshot_20260903_163831_Instagram.jpg',
      caseNumber: 'Caso Clínico 02',
      title: 'Reabilitação Oral & Facetas Estéticas',
      category: 'Reabilitação Oral & Prótese',
      tagline: 'Restauração do Arco Superior com Alta Naturalidade',
      description:
        'Recuperação completa da estética do sorriso e função oclusal. Planejamento com resgate da dimensão vertical, anatomia dental harmoniosa, dentes claros e uniformes, respeitando as linhas de expressão e perfil facial.',
      watermark: 'Dra. Katherine Cavalcante • Odontologia Integrada',
      caseType: 'reabilitacao-homem' as const,
    },
    {
      caseId: 'caso-3',
      storageKey: MEDIA_KEYS.CASE_3,
      fallbackFilename: 'Screenshot_20260903_160406_Instagram.jpg',
      caseNumber: 'Caso Clínico 03',
      title: 'Transformações de Sorriso & Harmonização',
      category: 'Harmonização Orofacial & Estética',
      tagline: 'Sinergia Perfeita entre Odontologia e Estética Facial',
      description:
        'Casos de excelência clínica unindo alinhamento dental, clareamento e harmonização orofacial. Destaque para o sorriso masculino confiante e o sorriso feminino esculpido com proporção áurea e contornos labiais valorizados.',
      watermark: 'Dra. Katherine Cavalcante • HOF & Odontologia',
      caseType: 'sorrisos-duplos' as const,
    },
  ];

  return (
    <section id="resultados" className="py-20 md:py-28 bg-[#f5efe6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ebd9c6] text-[#7a532d] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Casos Clínicos Oficiais
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2a241f] leading-tight font-serif-title"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Casos Reais da Dra. Katherine Cavalcante
          </h2>

          <p className="text-base sm:text-lg text-[#615549] max-w-2xl mx-auto">
            Conheça os tratamentos documentados e compartilhados pela Dra. Katherine em sua rotina clínica em Maceió.
          </p>

          <div className="inline-flex items-center gap-2 pt-2 text-xs text-[#8c653d] font-semibold bg-[#f0e4d7] px-4 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#a4794e]" />
            <span>CRO/AL Especialista • Procedimentos em Odontologia & HOF</span>
          </div>
        </div>

        {/* 3 Real Clinical Cases Grid replacing all stock patient images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {clinicalCases.map((item) => (
            <ClinicalCaseCard
              key={item.caseId}
              caseId={item.caseId}
              storageKey={item.storageKey}
              fallbackFilename={item.fallbackFilename}
              caseNumber={item.caseNumber}
              title={item.title}
              category={item.category}
              tagline={item.tagline}
              description={item.description}
              watermark={item.watermark}
              caseType={item.caseType}
            />
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-10 p-4 rounded-2xl bg-white/70 border border-[#e8dbc9] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#736353] leading-relaxed">
            * Conforme as diretrizes do Conselho Regional de Odontologia (CRO), cada caso clínico possui características biológicas individuais e os resultados podem variar de acordo com o diagnóstico de cada paciente.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-20 pt-16 border-t border-[#e8dbc9]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#a4794e] font-semibold">
              Depoimentos de Pacientes
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#292420] mt-1 font-serif-title"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A experiência de quem transformou o sorriso
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-[#ebdccb] space-y-4"
              >
                <div className="flex items-center gap-1 text-[#d4a362]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#4d443b] italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm font-semibold text-[#2b2520]">{t.name}</p>
                  <p className="text-xs text-[#8a7b6e]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
