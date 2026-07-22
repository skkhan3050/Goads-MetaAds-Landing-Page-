import React from 'react';

interface GoAdsLiveLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

export const GoAdsLiveLogo: React.FC<GoAdsLiveLogoProps> = ({
  size = 'md',
  variant = 'dark',
  className = ''
}) => {
  // Increased height classes so the logo renders large, bold, and crystal clear in header
  const heightClass = size === 'sm' ? 'h-10' : size === 'lg' ? 'h-16' : 'h-13';
  const textColor = variant === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        className={`${heightClass} w-auto filter drop-shadow-[0_2px_10px_rgba(245,171,43,0.4)] overflow-visible`}
        viewBox="0 0 250 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Rich Warm Gold Gradient matching user logo asset */}
          <linearGradient id="brandLogoGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F7CE46" />
            <stop offset="50%" stopColor="#F5AB2B" />
            <stop offset="100%" stopColor="#F5880B" />
          </linearGradient>

          {/* Crisp Shadow for Live text */}
          <filter id="liveTextGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="1.5" stdDeviation="0.8" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* 1. Yellow Click Rays (radiating around pointer tip) */}
        <g stroke="#F7CE46" strokeWidth="3" strokeLinecap="round">
          <line x1="126" y1="2" x2="128" y2="9" />
          <line x1="138" y1="7" x2="133" y2="13" />
          <line x1="146" y1="18" x2="139" y2="22" />
          <line x1="112" y1="5" x2="117" y2="11" />
          <line x1="101" y1="14" x2="108" y2="18" />
          <line x1="94" y1="26" x2="102" y2="28" />
        </g>

        {/* 2. "Go" Text (Large, Bold, High Visibility) */}
        <text
          x="2"
          y="50"
          fill={textColor}
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="56"
          letterSpacing="-1.5"
        >
          Go
        </text>

        {/* 3. Golden Pointer Cursor Arrow ("A" in GoAds) */}
        <g>
          {/* Cursor Pointer Body */}
          <path
            d="M 124 12 
               L 126 56 
               L 110 50 
               L 100 76 
               C 99 78 96 79 94 77 
               L 87 72 
               C 85 70 85 68 87 66 
               L 98 42 L 82 36 Z"
            fill="url(#brandLogoGold)"
            stroke="#FFE78D"
            strokeWidth="0.8"
          />

          {/* White Circular Dot inside Handle Connection */}
          <circle cx="100" cy="60" r="4.2" fill="#FFFFFF" stroke="#D98A08" strokeWidth="0.8" />
        </g>

        {/* 4. "ds" Text (Large, Bold, High Visibility) */}
        <text
          x="132"
          y="50"
          fill={textColor}
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="56"
          letterSpacing="-1.5"
        >
          ds
        </text>

        {/* 5. "Live" Text below cursor */}
        <g filter="url(#liveTextGlow)">
          {/* "L" to the left of handle */}
          <text
            x="64"
            y="84"
            fill="url(#brandLogoGold)"
            fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="34"
            transform="rotate(-5 64 84)"
          >
            L
          </text>

          {/* "ve" to the right of handle */}
          <text
            x="110"
            y="82"
            fill="url(#brandLogoGold)"
            fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="-0.5"
          >
            ve
          </text>
        </g>
      </svg>
    </div>
  );
};
