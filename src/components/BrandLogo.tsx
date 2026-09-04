interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'white';
  className?: string;
}

export default function BrandLogo({ variant = 'header', className = '' }: BrandLogoProps) {
  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Stylized Tooth Emblem */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 52 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-11 md:w-11 md:h-12"
          aria-hidden="true"
        >
          {/* Organic golden tooth contour inspired by Dra. Katherine's identity */}
          <path
            d="M26 6C18 6 12 11 9 17C6 23 6 31 10 38C13 43 17 50 20 54C21 55 23 54 24 51C25 46 25 39 26 35C27 39 27 46 28 51C29 54 31 55 32 54C35 50 39 43 42 38C46 31 46 23 43 17C40 11 34 6 26 6Z"
            stroke={isWhite ? '#ffffff' : '#b58d5f'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isWhite ? 'rgba(255,255,255,0.06)' : 'rgba(181, 141, 95, 0.08)'}
          />
          {/* Internal aesthetic curve */}
          <path
            d="M17 21C20 18 24 17 26 21C28 17 32 18 35 21C37 25 37 32 35 37C33 42 29 46 26 49C23 46 19 42 17 37C15 32 15 25 17 21Z"
            stroke={isWhite ? 'rgba(255,255,255,0.7)' : '#cca87e'}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Sparkle dot accent */}
          <circle
            cx="26"
            cy="12"
            r="1.5"
            fill={isWhite ? '#ffffff' : '#a4794e'}
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`font-script text-2xl md:text-[28px] leading-tight font-normal ${
            isWhite ? 'text-[#f5e6d3]' : 'text-[#88603e]'
          }`}
          style={{ fontFamily: "'Alex Brush', cursive, sans-serif" }}
        >
          Dra. Katherine
        </span>
        <span
          className={`text-sm md:text-[15px] font-semibold tracking-[0.22em] uppercase -mt-1 font-serif-title ${
            isWhite ? 'text-white' : 'text-[#2b2724]'
          }`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          CAVALCANTE
        </span>
        <span
          className={`text-[9px] md:text-[10px] tracking-[0.32em] uppercase font-medium mt-0.5 ${
            isWhite ? 'text-[#e5d5c0]' : 'text-[#a4794e]'
          }`}
        >
          ODONTOLOGIA & ESTÉTICA
        </span>
      </div>
    </div>
  );
}
