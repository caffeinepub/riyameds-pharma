interface RiyamedsLogoProps {
  height?: number;
  className?: string;
}

/**
 * RiyaMeds Pharma SVG Logo
 * Layout: Icon (R + leaves) on left, text stack on right
 * Colors: Dark Blue #243E63, Green #6CC04A, Light Green #8BC34A
 */
export default function RiyamedsLogo({
  height = 56,
  className = "",
}: RiyamedsLogoProps) {
  const scale = height / 56;
  const width = Math.round(260 * scale);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="RiyaMeds Pharma Private Limited"
    >
      <defs>
        {/* Gradient for top leaf */}
        <linearGradient id="leafGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#78D64B" />
          <stop offset="100%" stopColor="#4CAF50" />
        </linearGradient>
        {/* Gradient for bottom leaf */}
        <linearGradient id="leafGradBottom" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6CC04A" />
          <stop offset="100%" stopColor="#4CAF50" />
        </linearGradient>
      </defs>

      {/* ── Icon Symbol (left side, centered vertically in 56px) ── */}
      {/* The icon occupies roughly x:2–46, y:4–52 (44×48 px bounding box) */}

      {/* Bold R letter - dark blue */}
      {/* Vertical stem */}
      <rect x="8" y="10" width="7" height="36" rx="2" fill="#243E63" />

      {/* R bowl - top curved bump */}
      {/* Top horizontal bar */}
      <rect x="8" y="10" width="22" height="6.5" rx="3" fill="#243E63" />
      {/* Right side of bowl */}
      <rect x="25" y="10" width="5" height="18" rx="2" fill="#243E63" />
      {/* Bottom of bowl horizontal */}
      <rect x="8" y="22" width="22" height="6" rx="3" fill="#243E63" />

      {/* R leg - diagonal going bottom-right */}
      <path d="M 20 28 L 34 46 L 30 46 L 16 28 Z" fill="#243E63" />

      {/* Circular dot inside R (counter form / eye of R) */}
      <ellipse cx="20" cy="17.5" rx="4.5" ry="4" fill="#FFFFFF" />
      <ellipse cx="20" cy="17.5" rx="2.5" ry="2.2" fill="#243E63" />

      {/* ── Two leaves growing from top-left of R ── */}

      {/* Bottom leaf (larger, pointing upper-right) */}
      <path
        d="M 10 14 C 6 6, 16 2, 20 8 C 16 10, 12 12, 10 14 Z"
        fill="url(#leafGradBottom)"
      />
      {/* Leaf vein */}
      <path
        d="M 10 14 C 14 9, 17 5, 20 8"
        stroke="#3a9e38"
        strokeWidth="0.6"
        fill="none"
        opacity="0.6"
      />

      {/* Top leaf (smaller, pointing upper-left) */}
      <path
        d="M 8 12 C 2 8, 4 0, 10 4 C 9 7, 8 10, 8 12 Z"
        fill="url(#leafGradTop)"
      />
      {/* Leaf vein */}
      <path
        d="M 8 12 C 8 8, 9 4, 10 4"
        stroke="#5aba38"
        strokeWidth="0.6"
        fill="none"
        opacity="0.6"
      />

      {/* ── Brand Text (right side) ── */}

      {/* RIYAMEDS */}
      <text
        x="54"
        y="30"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="21"
        letterSpacing="2.5"
        fill="#6CC04A"
        dominantBaseline="middle"
        style={{ fontVariant: "normal" }}
      >
        RIYAMEDS
      </text>

      {/* PHARMA */}
      <text
        x="55"
        y="43"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="800"
        fontSize="13"
        letterSpacing="3.5"
        fill="#243E63"
        dominantBaseline="middle"
      >
        PHARMA
      </text>

      {/* PRIVATE LIMITED */}
      <text
        x="55"
        y="53"
        fontFamily="'Arial', sans-serif"
        fontWeight="600"
        fontSize="7.5"
        letterSpacing="3"
        fill="#8BC34A"
        dominantBaseline="middle"
      >
        PRIVATE LIMITED
      </text>
    </svg>
  );
}
