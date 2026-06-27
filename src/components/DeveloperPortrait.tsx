import React from "react";

export default function DeveloperPortrait() {
  return (
    <div className="w-full h-full relative select-none" id="developer-portrait-container">
      {/* Halftone pop art poster effect SVG */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full object-cover rounded-md border-[4px] border-black shadow-[4px_4px_0px_#000]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Halftone Dot Pattern */}
          <pattern
            id="magenta-dots"
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="4" cy="4" r="2.2" fill="#FF3DCB" />
          </pattern>
          
          {/* Finer Halftone Pattern for face shading */}
          <pattern
            id="face-dots"
            x="0"
            y="0"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="1.5" fill="#FF3DCB" />
          </pattern>

          {/* Gritty Noise / Distressed Filter */}
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              result="noise"
            />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.07 0" />
            <feComposite operator="in" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* 1. SOLID VIBRANT NEON GREEN BACKGROUND */}
        <rect width="100%" height="100%" fill="#22C55E" />

        {/* Diagonal distressed lines representing scanlines or texture */}
        <line x1="0" y1="100" x2="500" y2="200" stroke="#15803d" strokeWidth="2" strokeDasharray="5,15" opacity="0.4" />
        <line x1="0" y1="250" x2="500" y2="350" stroke="#15803d" strokeWidth="2" strokeDasharray="5,15" opacity="0.4" />
        <line x1="0" y1="400" x2="500" y2="500" stroke="#15803d" strokeWidth="2" strokeDasharray="5,15" opacity="0.4" />

        {/* 2. MAGENTA/PINK COLLAGE PAPER CUTOUT HALO (Background Shadow of Silhouette) */}
        {/* Silhouette offset slightly to the left/bottom to create the paper-cutout border effect */}
        <g transform="translate(4, 4)">
          {/* Magenta background for body/shoulders */}
          <path
            d="M 100,500 C 100,400 130,300 210,290 C 180,280 160,250 150,210 C 120,200 100,160 110,110 C 120,60 170,40 220,40 C 270,40 330,50 360,100 C 390,130 380,190 350,210 C 340,240 320,270 290,290 C 370,300 400,400 400,500 Z"
            fill="#FF3DCB"
          />
        </g>
        
        {/* White outline highlights for distressed print style */}
        <g transform="translate(-2, -2)">
          <path
            d="M 98,500 C 98,398 128,298 208,288 C 178,278 158,248 148,208 C 118,198 98,158 108,108 C 118,58 168,38 218,38 C 268,38 328,48 358,98 C 388,128 378,188 348,208 C 338,238 318,268 288,288 C 368,298 398,398 398,500 Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            opacity="0.8"
          />
        </g>

        {/* 3. MAIN PORTRAIT BODY - LAYERED COLLAGE */}
        
        {/* Hair - Voluminous, curly black hair */}
        <path
          d="M 120,200 
             C 90,180 80,120 110,80 
             C 120,50 160,30 210,30 
             C 270,30 330,40 360,80 
             C 390,110 400,170 370,210 
             C 350,240 340,260 320,260 
             C 330,220 340,180 320,150
             C 300,120 280,110 250,110
             C 220,110 190,120 170,150
             C 150,180 150,220 160,260
             C 140,260 130,230 120,200 Z"
          fill="#111111"
          stroke="#000000"
          strokeWidth="3"
        />

        {/* Subtle curls texture on hair (black circles/arcs) */}
        <circle cx="120" cy="90" r="25" fill="#111111" />
        <circle cx="160" cy="50" r="30" fill="#111111" />
        <circle cx="210" cy="40" r="30" fill="#111111" />
        <circle cx="270" cy="40" r="30" fill="#111111" />
        <circle cx="330" cy="60" r="30" fill="#111111" />
        <circle cx="370" cy="110" r="28" fill="#111111" />
        <circle cx="380" cy="160" r="25" fill="#111111" />
        <circle cx="105" cy="140" r="25" fill="#111111" />

        {/* Face Base Layer - Soft pinkish skin representing screen print light area */}
        <path
          d="M 160,190 
             C 150,250 170,310 250,310 
             C 330,310 350,250 340,190 
             C 330,130 310,120 250,120 
             C 190,120 170,130 160,190 Z"
          fill="#FCE7F3"
          stroke="#000000"
          strokeWidth="3"
        />

        {/* Ears */}
        <path d="M 155,180 C 145,180 145,210 155,215 Z" fill="#FCE7F3" stroke="#000000" strokeWidth="2" />
        <path d="M 345,180 C 355,180 355,210 345,215 Z" fill="#FCE7F3" stroke="#000000" strokeWidth="2" />

        {/* Face Halftone Shading - Applied to right side of face to represent halftone shadow */}
        <path
          d="M 250,120 
             C 300,120 340,150 340,190 
             C 340,240 320,310 250,310 
             C 260,260 270,180 250,120 Z"
          fill="url(#face-dots)"
        />

        {/* Eyebrows - Thick, neat black eyebrows */}
        <path d="M 180,165 C 190,160 210,162 215,168" stroke="#000000" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M 320,165 C 310,160 290,162 285,168" stroke="#000000" strokeWidth="5" strokeLinecap="round" fill="none" />

        {/* Eyes */}
        {/* Left Eye */}
        <ellipse cx="198" cy="178" rx="10" ry="6" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        <circle cx="198" cy="178" r="4.5" fill="#111111" />
        <circle cx="196" cy="176" r="1.5" fill="#FFFFFF" /> {/* Reflection */}
        
        {/* Right Eye */}
        <ellipse cx="302" cy="178" rx="10" ry="6" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        <circle cx="302" cy="178" r="4.5" fill="#111111" />
        <circle cx="300" cy="176" r="1.5" fill="#FFFFFF" /> {/* Reflection */}

        {/* Nose - Pop-art block shadow style */}
        <path d="M 245,178 L 255,178 L 258,225 L 240,225 Z" fill="#FF3DCB" opacity="0.3" />
        <path d="M 250,178 L 250,225 C 250,230 240,232 238,228" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Mustache - Iconic thick, dark, nicely trimmed neubrutalist style mustache */}
        <path
          d="M 215,242 
             C 225,236 240,238 250,244 
             C 260,238 275,236 285,242 
             C 295,248 290,256 275,254 
             C 260,252 253,256 250,258 
             C 247,256 240,252 225,254 
             C 210,256 205,248 215,242 Z"
          fill="#111111"
          stroke="#000000"
          strokeWidth="2.5"
        />

        {/* Mouth/Lips below mustache */}
        <path d="M 235,268 C 242,272 258,272 265,268" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* Chin crease and beard stubble (subtle dots style) */}
        <path d="M 243,288 C 246,290 254,290 257,288" stroke="#000000" strokeWidth="2" fill="none" />
        
        {/* Neck */}
        <path d="M 210,295 L 210,340 L 290,340 L 290,295 Z" fill="#FCE7F3" stroke="#000000" strokeWidth="3" />
        <path d="M 250,295 L 290,295 L 290,340 L 250,340 Z" fill="url(#face-dots)" />

        {/* 4. CLOTHING (White Shirt and Dark Suit) */}
        
        {/* Crisp White Shirt Collar */}
        <path d="M 210,340 L 250,400 L 290,340 L 320,380 L 250,440 L 180,380 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
        
        {/* Inner shadow/pink highlight of the open neck shirt */}
        <path d="M 210,340 L 250,400 L 290,340 Z" fill="#FCE7F3" stroke="#000000" strokeWidth="2.5" />
        <path d="M 250,340 L 290,340 L 250,400 Z" fill="url(#face-dots)" />

        {/* Black Suit / Blazer Jacket */}
        {/* Left shoulder */}
        <path
          d="M 180,380 
             C 120,390 90,430 80,500 
             L 250,500 
             L 250,400 
             Z"
          fill="#111111"
          stroke="#000000"
          strokeWidth="3.5"
        />
        {/* Right shoulder */}
        <path
          d="M 320,380 
             C 380,390 410,430 420,500 
             L 250,500 
             L 250,400 
             Z"
          fill="#111111"
          stroke="#000000"
          strokeWidth="3.5"
        />

        {/* Magenta Halftone Pattern Shading Overlay on Suit Jacket (Pop-art Style) */}
        {/* Overlaying only on the right half of the suit for dynamic lighting */}
        <path
          d="M 250,400 
             L 320,380 
             C 380,390 410,430 420,500 
             L 250,500 
             Z"
          fill="url(#magenta-dots)"
          opacity="0.95"
          style={{ mixBlendMode: "screen" }}
        />

        {/* Suit Lapels */}
        {/* Left Lapel */}
        <path d="M 180,380 L 215,445 L 210,500 L 160,500 Z" fill="#1E1E1E" stroke="#000000" strokeWidth="3" />
        {/* Right Lapel */}
        <path d="M 320,380 L 285,445 L 290,500 L 340,500 Z" fill="#1E1E1E" stroke="#000000" strokeWidth="3" />
        {/* Right lapel magenta dot pattern overlay */}
        <path d="M 320,380 L 285,445 L 290,500 L 340,500 Z" fill="url(#magenta-dots)" opacity="0.6" />

        {/* 5. OVERLAY VINTAGE POSTER PAPER FOLDS */}
        {/* Light fold lines across the entire poster */}
        <path d="M 0,250 L 500,250" stroke="#000000" strokeWidth="1.5" opacity="0.15" />
        <path d="M 250,0 L 250,500" stroke="#000000" strokeWidth="1.5" opacity="0.15" />
        
        {/* Fold crease highlights */}
        <path d="M 0,249 L 500,249" stroke="#FFFFFF" strokeWidth="1" opacity="0.1" />
        <path d="M 249,0 L 249,500" stroke="#FFFFFF" strokeWidth="1" opacity="0.1" />

        {/* Vintage Vignette border */}
        <rect width="100%" height="100%" fill="none" stroke="#000000" strokeWidth="12" />

        {/* Grit/Texture Layer */}
        <rect width="100%" height="100%" fill="none" filter="url(#noise)" />
      </svg>
    </div>
  );
}
