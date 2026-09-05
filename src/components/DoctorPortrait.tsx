import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { MEDIA_KEYS, getStoredMedia } from '../utils/mediaStorage';
import defaultDoctorPhoto from '../assets/dra-katherine.png';

interface DoctorPortraitProps {
  className?: string;
  aspectRatio?: string;
}

const FALLBACK_CDN_PHOTO = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85';

export default function DoctorPortrait({
  className = '',
  aspectRatio = 'aspect-[4/4.8]',
}: DoctorPortraitProps) {
  const [mediaSrc, setMediaSrc] = useState<string>(defaultDoctorPhoto);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Check if user uploaded a custom media in localStorage
    const stored = getStoredMedia(MEDIA_KEYS.HERO_DOCTOR);
    if (stored) {
      setMediaSrc(stored);
    } else {
      setMediaSrc(defaultDoctorPhoto);
    }
  }, []);

  const handleImageError = () => {
    // If the local bundled photo fails, fallback to CDN
    if (mediaSrc !== FALLBACK_CDN_PHOTO) {
      setMediaSrc(FALLBACK_CDN_PHOTO);
    }
  };

  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-[160px_160px_40px_40px] overflow-hidden bg-gradient-to-b from-[#f8f4ee] via-[#efe5d7] to-[#e4d4c1] shadow-2xl border-4 border-white/90 group ${className}`}
    >
      {/* Background warm shimmer skeleton while loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf6f0] via-[#f2e9dc] to-[#e5d4be] animate-pulse" />
      )}

      {/* Real professional photograph of Dra. Katherine Cavalcante */}
      <img
        src={mediaSrc}
        alt="Dra. Katherine Cavalcante - Cirurgiã-Dentista Especialista"
        referrerPolicy="no-referrer"
        onLoad={() => setImageLoaded(true)}
        onError={handleImageError}
        className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Top collar badge */}
      <div className="absolute top-4 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#2a221b]/80 text-[#f7efe4] backdrop-blur-xs shadow-xs border border-white/15">
          Dra. Katherine Cavalcante • CRO-AL
        </span>
      </div>

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
