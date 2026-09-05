import { useState, useEffect, type MouseEvent, type TouchEvent } from 'react';
import { Sparkles, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { getStoredMedia } from '../utils/mediaStorage';
import { WHATSAPP_BASE_URL } from '../data/dentistData';

interface ClinicalCaseCardProps {
  key?: string;
  caseId: string;
  storageKey: string;
  fallbackFilename: string;
  caseNumber: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  watermark: string;
  caseType: 'before-after-autoligado' | 'reabilitacao-homem' | 'sorrisos-duplos';
}

export default function ClinicalCaseCard({
  caseId,
  storageKey,
  fallbackFilename,
  caseNumber,
  title,
  category,
  tagline,
  description,
  watermark,
  caseType,
}: ClinicalCaseCardProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [sliderPos, setSliderPos] = useState(50);

  useEffect(() => {
    const loadMedia = () => {
      const stored = getStoredMedia(storageKey);
      if (stored) {
        setImageSrc(stored);
      } else {
        const img = new Image();
        img.src = `/assets/${fallbackFilename}`;
        img.onload = () => setImageSrc(`/assets/${fallbackFilename}`);
        img.onerror = () => {
          const img2 = new Image();
          img2.src = `/${fallbackFilename}`;
          img2.onload = () => setImageSrc(`/${fallbackFilename}`);
        };
      }
    };

    loadMedia();
    window.addEventListener('katherine-media-updated', loadMedia);
    return () => window.removeEventListener('katherine-media-updated', loadMedia);
  }, [storageKey, fallbackFilename]);

  const handleSliderMove = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offset / rect.width) * 100));
    setSliderPos(percentage);
  };

  const whatsappLink = `${WHATSAPP_BASE_URL}&text=${encodeURIComponent(
    `Olá Dra. Katherine! Vi o ${caseNumber} (${title}) no seu site e gostaria de agendar uma avaliação para um tratamento similar.`
  )}`;

  return (
    <div
      id={caseId}
      className="bg-white rounded-3xl overflow-hidden shadow-md shadow-[#4a3b2c]/5 border border-[#ebe0d3] hover:shadow-xl transition-all duration-300 flex flex-col group"
    >
      {/* Case Header Card Bar */}
      <div className="p-5 sm:p-6 pb-4 border-b border-[#f3eae0] flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#a4794e]">
              {caseNumber}
            </span>
            <span className="text-xs text-[#9c8e80]">•</span>
            <span className="text-xs font-semibold text-[#736558]">{category}</span>
          </div>
          <h3
            className="text-lg sm:text-xl font-bold text-[#2a241f] font-serif-title mt-0.5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Media Visual Area */}
      <div className="relative aspect-[16/11] sm:aspect-[16/10] bg-[#1d1916] overflow-hidden select-none">
        {imageSrc ? (
          /* User Provided Screenshot File */
          <div className="w-full h-full relative">
            <img
              src={imageSrc}
              alt={`${title} - Dra Katherine Cavalcante`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Watermark overlay confirming doctor authenticity */}
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#ebdccb] shadow-md pointer-events-none text-right">
              <p className="text-[10px] font-bold text-[#7a532d] uppercase tracking-wider">{watermark}</p>
              <p className="text-[9px] text-[#5e5246]">CRO-AL Especialista</p>
            </div>
          </div>
        ) : caseType === 'before-after-autoligado' ? (
          /* Case 1: Before / After Slider for the Redhead Patient with Self-Ligating Braces */
          <div
            className="w-full h-full relative cursor-ew-resize overflow-hidden"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* AFTER: Aligned, bright smile */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#28221d] via-[#1e1916] to-[#151210] flex flex-col items-center justify-center p-6 text-center">
              {/* Artistic representation of Case 1: After */}
              <div className="w-36 h-36 rounded-full border-2 border-[#a4794e]/60 p-1.5 mb-3 bg-[#3a3028]/40 shadow-inner">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#f2cfb8] to-[#deb39a] overflow-hidden relative flex flex-col items-center justify-center">
                  {/* Red hair & beard styling */}
                  <div className="absolute top-0 w-full h-10 bg-[#a64b2a]" />
                  <div className="w-24 h-12 rounded-b-full bg-[#a64b2a] absolute bottom-2" />
                  {/* Perfect aligned teeth smile */}
                  <div className="w-16 h-7 rounded-b-full bg-[#ffffff] border border-[#d9c4b0] shadow-sm flex items-center justify-center">
                    <div className="w-14 h-4 flex justify-between px-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-1.5 h-3 bg-white border-r border-[#e8ded5] rounded-xs" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#e8c69f] tracking-wide uppercase">
                Depois • Sorriso Perfeitamente Alinhado
              </span>
              <p className="text-[11px] text-[#b8a695] mt-1 max-w-xs">
                Aparelho Autoligado: oclusão corrigida sem extrações
              </p>
            </div>

            {/* BEFORE: Crooked / crowded teeth (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#1e1916] via-[#241e1a] to-[#171412] flex flex-col items-center justify-center p-6 text-center border-r border-white/60"
              style={{ width: `${sliderPos}%` }}
            >
              <div
                className="w-full h-full absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                style={{ width: '100%' }}
              >
                <div className="w-36 h-36 rounded-full border-2 border-white/30 p-1.5 mb-3 bg-[#2b241e]/50">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ebd1bc] to-[#d6aa92] overflow-hidden relative flex flex-col items-center justify-center">
                    <div className="absolute top-0 w-full h-10 bg-[#a64b2a]" />
                    <div className="w-24 h-12 rounded-b-full bg-[#a64b2a] absolute bottom-2" />
                    {/* Misaligned smile */}
                    <div className="w-16 h-7 rounded-b-full bg-[#e8e0d5] border border-[#8e7a68] flex items-center justify-center">
                      <div className="w-14 h-4 flex justify-between px-1">
                        <div className="w-1.5 h-2.5 bg-white -rotate-12 mt-1" />
                        <div className="w-1.5 h-3.5 bg-white rotate-6" />
                        <div className="w-1.5 h-3 bg-white -rotate-6" />
                        <div className="w-1.5 h-2.5 bg-white rotate-12 mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#c9b7a7] tracking-wide uppercase">
                  Antes • Apinhamento e Desvio Oclusal
                </span>
                <p className="text-[11px] text-[#8e7d70] mt-1 max-w-xs">
                  Desalinhamento dental severo na arcada anterior
                </p>
              </div>
            </div>

            {/* Slider Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)] pointer-events-none z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center text-[#7a532d] font-bold text-xs border border-[#dec7a8]">
                ⇄
              </div>
            </div>

            {/* Tags */}
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[10px] font-bold z-10 pointer-events-none">
              Antes
            </div>
            <div className="absolute top-3 right-3 bg-[#a4794e]/90 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[10px] font-bold z-10 pointer-events-none">
              Depois
            </div>
          </div>
        ) : caseType === 'reabilitacao-homem' ? (
          /* Case 2: Adult Male Full Arch Rehabilitation */
          <div className="w-full h-full relative bg-gradient-to-br from-[#26201b] via-[#1d1815] to-[#120f0d] flex flex-col items-center justify-center p-6 text-center">
            <div className="w-36 h-36 rounded-full border-2 border-[#a4794e]/70 p-1.5 mb-3 bg-[#382e25]/50 shadow-inner">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#f2d3be] to-[#dfb499] overflow-hidden relative flex flex-col items-center justify-center">
                {/* Short salt and pepper dark hair */}
                <div className="absolute top-0 w-full h-8 bg-[#332b26]" />
                {/* Broad masculine smile with brilliant upper teeth */}
                <div className="w-20 h-9 rounded-b-full bg-[#ffffff] border-2 border-[#dec9b4] shadow-md flex items-center justify-center">
                  <div className="w-18 h-5 flex justify-between px-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-1.5 h-4 bg-white border-r border-[#ebdcd0] rounded-xs" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <span className="text-xs font-bold text-[#ebd0b5] tracking-wider uppercase">
              Reabilitação Oral & Facetas Estéticas
            </span>
            <p className="text-[11px] text-[#b8a695] mt-1 max-w-sm">
              Arco superior totalmente reabilitado com dentes alinhados, claros e anatomia anatômica natural.
            </p>
          </div>
        ) : (
          /* Case 3: Dual Smiles (Young male smile + Glamorous female smile) */
          <div className="w-full h-full relative bg-gradient-to-br from-[#241e1a] via-[#1c1714] to-[#110e0c] grid grid-cols-2 divide-x divide-white/10 items-center p-4">
            {/* Smile 1 (Male) */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="w-24 h-24 rounded-full border border-[#a4794e]/60 p-1 mb-2 bg-[#332a22]">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#f3d4bf] to-[#ddb196] overflow-hidden relative flex flex-col items-center justify-center">
                  <div className="absolute top-0 w-full h-6 bg-[#251e19]" />
                  <div className="w-14 h-6 rounded-b-full bg-white border border-[#dfd2c4] flex items-center justify-center">
                    <div className="w-12 h-3.5 flex justify-between px-0.5">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-1 h-3 bg-white border-r border-[#e8ded5]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#e5c7a9]">Sorriso Masculino</span>
              <span className="text-[10px] text-[#9c8b7c]">Alinhamento & Clareamento</span>
            </div>

            {/* Smile 2 (Female with red lipstick) */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="w-24 h-24 rounded-full border border-[#a4794e]/60 p-1 mb-2 bg-[#332a22]">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#f9ddcc] to-[#e4baa1] overflow-hidden relative flex flex-col items-center justify-center">
                  <div className="absolute top-0 w-full h-7 bg-[#201814]" />
                  {/* Red lipstick smile */}
                  <div className="w-14 h-7 rounded-b-full bg-[#c92a2a] p-0.5 shadow-xs flex items-center justify-center">
                    <div className="w-12 h-4 rounded-b-md bg-white flex justify-between px-0.5">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-1.5 h-3.5 bg-white border-r border-[#edd8d8]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#e5c7a9]">Sorriso Feminino</span>
              <span className="text-[10px] text-[#9c8b7c]">Harmonização Labial & Facetas</span>
            </div>
          </div>
        )}

        {/* Oficial Doctor Stamp Bottom Overlay */}
        <div className="absolute bottom-3 left-3 bg-[#221c17]/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-[#eedcc9] border border-white/10 pointer-events-none flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 text-[#cfa97e]" />
          <span>{watermark}</span>
        </div>
      </div>

      {/* Case Details & Narrative */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-[#a4794e] uppercase tracking-wider">
            {tagline}
          </p>
          <p className="text-sm text-[#544a40] leading-relaxed">
            {description}
          </p>
        </div>

        {/* WhatsApp Call to Action Button */}
        <div className="pt-2 border-t border-[#f4ece3] flex items-center justify-between gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#a4794e] hover:bg-[#8e653d] active:scale-[0.98] transition-all shadow-xs group/btn"
          >
            <MessageCircle className="w-3.5 h-3.5 text-white" />
            <span>Consultar sobre este caso</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
          </a>

          <span className="text-[11px] text-[#8c7e71] font-medium hidden sm:inline">
            Dra. Katherine Cavalcante
          </span>
        </div>
      </div>
    </div>
  );
}
