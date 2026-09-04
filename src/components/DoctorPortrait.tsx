import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { MEDIA_KEYS, getStoredMedia } from '../utils/mediaStorage';

interface DoctorPortraitProps {
  className?: string;
  aspectRatio?: string;
}

export default function DoctorPortrait({
  className = '',
  aspectRatio = 'aspect-[4/4.8]',
}: DoctorPortraitProps) {
  const [mediaSrc, setMediaSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadMedia = () => {
      const stored = getStoredMedia(MEDIA_KEYS.HERO_DOCTOR);
      if (stored) {
        setMediaSrc(stored);
      } else {
        // Check if asset exists in public folder
        const img = new Image();
        img.src = '/assets/dra-katherine.png';
        img.onload = () => setMediaSrc('/assets/dra-katherine.png');
        img.onerror = () => {
          const img2 = new Image();
          img2.src = '/dra-katherine.png';
          img2.onload = () => setMediaSrc('/dra-katherine.png');
        };
      }
    };

    loadMedia();
    window.addEventListener('katherine-media-updated', loadMedia);
    return () => window.removeEventListener('katherine-media-updated', loadMedia);
  }, []);

  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-[160px_160px_40px_40px] overflow-hidden bg-gradient-to-b from-[#f8f4ee] via-[#efe5d7] to-[#e4d4c1] shadow-2xl border-4 border-white/90 group ${className}`}
    >

      {mediaSrc ? (
        <img
          src={mediaSrc}
          alt="Dra. Katherine Cavalcante - Cirurgiã-Dentista"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        /* High-craft visual rendering of Dra. Katherine Cavalcante */
        <div className="w-full h-full relative flex flex-col items-center justify-end overflow-hidden bg-gradient-to-b from-[#faf6f0] via-[#f2e9dc] to-[#e5d4be]">
          {/* Subtle warm halo aura */}
          <div className="absolute top-12 w-64 h-64 rounded-full bg-gradient-to-b from-[#eedbc2]/80 to-[#e4cdad]/40 blur-xl -z-0" />

          {/* Rendered SVG Portrait of Dra. Katherine Cavalcante matching the user's photo */}
          <svg
            viewBox="0 0 400 480"
            className="w-full h-full object-contain relative z-10 select-none pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#221b16" />
                <stop offset="60%" stopColor="#2c221c" />
                <stop offset="100%" stopColor="#1a1410" />
              </linearGradient>
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fde0cc" />
                <stop offset="60%" stopColor="#f7cdb2" />
                <stop offset="100%" stopColor="#ecb898" />
              </linearGradient>
              <linearGradient id="coatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="80%" stopColor="#f9f8f6" />
                <stop offset="100%" stopColor="#edeae4" />
              </linearGradient>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Back Hair Waves */}
            <path
              d="M 120 180 C 90 220 75 300 85 380 C 105 400 135 410 160 410 C 140 350 145 280 155 240 Z"
              fill="url(#hairGrad)"
            />
            <path
              d="M 280 180 C 310 220 325 300 315 380 C 295 400 265 410 240 410 C 260 350 255 280 245 240 Z"
              fill="url(#hairGrad)"
            />

            {/* Shoulders & White Coat (Jaleco de Gola Alta) */}
            {/* Inner Black Top */}
            <path d="M 175 250 L 225 250 L 220 290 L 180 290 Z" fill="#1e1a17" />

            {/* Coat Body */}
            <path
              d="M 110 330 C 120 290 140 270 170 265 L 180 340 L 220 340 L 230 265 C 260 270 280 290 290 330 L 330 480 L 70 480 Z"
              fill="url(#coatGrad)"
              stroke="#e2dad0"
              strokeWidth="1.5"
            />

            {/* Structured Pleated Shoulders (manga princesa estruturada) */}
            <path
              d="M 110 330 C 95 300 115 275 140 270 C 130 295 125 315 110 330 Z"
              fill="#ffffff"
              stroke="#dfd6cb"
              strokeWidth="1"
            />
            <path
              d="M 290 330 C 305 300 285 275 260 270 C 270 295 275 315 290 330 Z"
              fill="#ffffff"
              stroke="#dfd6cb"
              strokeWidth="1"
            />

            {/* High Mandarin Collar (Gola Padre Alta com Botões) */}
            <path
              d="M 168 250 C 168 238 180 232 200 232 C 220 232 232 238 232 250 L 230 275 C 220 278 180 278 170 275 Z"
              fill="#ffffff"
              stroke="#e2dad0"
              strokeWidth="1.5"
            />

            {/* Vertical Button Placket with 3 circular buttons */}
            <line x1="200" y1="275" x2="200" y2="480" stroke="#ded5c8" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="200" cy="300" r="5" fill="#fdfbf8" stroke="#d5c8b7" strokeWidth="2" />
            <circle cx="200" cy="340" r="5" fill="#fdfbf8" stroke="#d5c8b7" strokeWidth="2" />
            <circle cx="200" cy="380" r="5" fill="#fdfbf8" stroke="#d5c8b7" strokeWidth="2" />

            {/* Neck */}
            <path d="M 180 200 L 180 245 C 190 250 210 250 220 245 L 220 200 Z" fill="url(#skinGrad)" />

            {/* Face Oval */}
            <ellipse cx="200" cy="170" rx="42" ry="52" fill="url(#skinGrad)" />

            {/* Radiant Smile & Teeth */}
            <path
              d="M 185 194 Q 200 208 215 194 Q 200 215 185 194 Z"
              fill="#b95d5d"
            />
            {/* White Teeth Arc */}
            <path
              d="M 188 196 Q 200 203 212 196 Q 200 197 188 196 Z"
              fill="#ffffff"
            />

            {/* Nose */}
            <path d="M 199 168 Q 200 180 203 182 Q 199 184 196 182" stroke="#d89f81" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Eyes & Warm Expression */}
            <ellipse cx="184" cy="158" rx="6" ry="3.5" fill="#2d221c" />
            <ellipse cx="216" cy="158" rx="6" ry="3.5" fill="#2d221c" />
            <circle cx="185" cy="157" r="1.2" fill="#ffffff" />
            <circle cx="217" cy="157" r="1.2" fill="#ffffff" />
            {/* Eyelids / Eyeliner */}
            <path d="M 176 156 Q 184 152 192 156" stroke="#221711" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 208 156 Q 216 152 224 156" stroke="#221711" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Eyebrows */}
            <path d="M 175 147 Q 184 142 193 147" stroke="#33241b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 207 147 Q 216 142 225 147" stroke="#33241b" strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Cheeks Glow */}
            <circle cx="178" cy="180" r="10" fill="#f49c8e" opacity="0.25" filter="url(#softGlow)" />
            <circle cx="222" cy="180" r="10" fill="#f49c8e" opacity="0.25" filter="url(#softGlow)" />

            {/* Long Voluminous Dark Hair Covering Top & Sides */}
            <path
              d="M 152 170 C 145 120 170 105 200 105 C 230 105 255 120 248 170 C 255 180 262 205 258 240 C 250 265 240 280 235 320 C 228 290 235 240 232 210 C 220 140 180 140 168 210 C 165 240 172 290 165 320 C 160 280 150 265 142 240 C 138 205 145 180 152 170 Z"
              fill="url(#hairGrad)"
            />
            {/* Soft hair highlight strand */}
            <path
              d="M 175 120 Q 200 112 220 120"
              stroke="#523e32"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Subtitle tag overlay */}
          <div className="absolute top-4 left-4 right-4 text-center z-20 pointer-events-none">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#2a221b]/80 text-[#f7efe4] backdrop-blur-xs shadow-xs">
              Dra. Katherine Cavalcante • CRO-AL
            </span>
          </div>
        </div>
      )}

      {/* Gentle bottom shadow vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2a241f]/45 via-transparent to-transparent pointer-events-none" />

      {/* Official Doctor Badge Overlay */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-[#ebdcca]/80 flex items-center justify-between z-20">
        <div>
          <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#a4794e] font-bold">
            Cirurgiã-Dentista
          </p>
          <p
            className="text-sm sm:text-base font-bold text-[#2a241f] font-serif-title leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Dra. Katherine Cavalcante
          </p>
          <p className="text-[11px] text-[#6e6358]">Ortodontia & Estética Dental</p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f4ece1] text-[#88603e] border border-[#dfd0be]">
            <Check className="w-3 h-3 text-[#a4794e]" />
            CRO-AL
          </span>
          <span className="text-[10px] text-[#52824b] font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52824b] animate-pulse" />
            Atendendo
          </span>
        </div>
      </div>
    </div>
  );
}
