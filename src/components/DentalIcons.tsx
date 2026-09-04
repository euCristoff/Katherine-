interface DentalIconProps {
  name: 'bracket' | 'aligner' | 'whitening' | 'botox' | 'lips' | 'face';
  className?: string;
}

export default function DentalIcon({ name, className = 'w-6 h-6 text-[#a4794e]' }: DentalIconProps) {
  switch (name) {
    case 'bracket':
      // Aparelho Autoligado bracket & archwire
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <rect x="12" y="12" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2.2" />
          <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="18" y1="12" x2="18" y2="36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="30" y1="12" x2="30" y2="36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="20" y="20" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );

    case 'aligner':
      // Aparelho Invisível dental tray
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M8 32C9 25 12 18 17 14C21 11 27 11 31 14C36 18 39 25 40 32"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M12 33C14 26 17 21 21 18C23 16 25 16 27 18C31 21 34 26 36 33"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Individual tooth scalloped segments */}
          <path
            d="M9 31C10 28 12 28 13 31M15 27C16 24 18 24 19 27M21 23C22 20 26 20 27 23M29 27C30 24 32 24 33 27M35 31C36 28 38 28 39 31"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'whitening':
      // Clareamento sparkle diamond
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M14 17L24 8L34 17L24 38L14 17Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M14 17H34" stroke="currentColor" strokeWidth="2" />
          <path d="M24 8V38" stroke="currentColor" strokeWidth="1.8" />
          <path d="M19 17L24 38L29 17" stroke="currentColor" strokeWidth="1.8" />
          {/* Sparkles */}
          <path d="M38 10L40 14L44 16L40 18L38 22L36 18L32 16L36 14L38 10Z" fill="currentColor" />
          <path d="M9 28L10 30L12 31L10 32L9 34L8 32L6 31L8 30L9 28Z" fill="currentColor" />
        </svg>
      );

    case 'botox':
      // Toxina Botulínica syringe
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M31 10L38 17M28 13L35 20M17 24L31 10L38 17L24 31M17 24L24 31M17 24L11 30M24 31L18 37M11 30L7 41L18 37M11 30L18 37"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="22" y1="19" x2="26" y2="23" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="18" y1="23" x2="22" y2="27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="33" y1="8" x2="40" y2="15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'lips':
      // Preenchimento Facial e Labial
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Upper Lip with cupid's bow */}
          <path
            d="M6 24C12 20 18 16 21 19C23 21 25 21 27 19C30 16 36 20 42 24C36 27 30 28 24 28C18 28 12 27 6 24Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Lower Lip fullness */}
          <path
            d="M6 24C12 30 17 35 24 35C31 35 36 30 42 24C34 27 28 28 24 28C20 28 14 27 6 24Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Center line separator */}
          <path
            d="M7 24C14 25 20 26 24 26C28 26 34 25 41 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'face':
      // Harmonização Orofacial profile
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Elegant facial profile outline */}
          <path
            d="M20 8C27 8 32 12 34 18C36 24 36 28 35 32C33 37 30 41 24 43M18 10C17 14 17 18 15 21C13 23 10 25 9 26C11 27 13 28 14 29C13 31 12 32 14 34C15 35 16 35 17 37C18 39 19 41 23 41"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="28" cy="18" r="2" fill="currentColor" />
          <path d="M22 28C24 30 26 30 28 29" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M24 12C28 14 30 17 30 21" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      );

    default:
      return null;
  }
}
