// Placeholder sneaker illustration used by product cards.
// Replace the <svg><use/></svg> in ProductCard with real product photos (next/image) when ready.
export default function SneakerDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <pattern id="mesh" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="#bfb9b1" />
          <circle cx="6" cy="6" r="1.1" fill="#bfb9b1" />
        </pattern>
        <symbol id="sneaker" viewBox="0 0 900 400">
          <ellipse cx="450" cy="372" rx="360" ry="16" fill="#000" opacity=".5" />
          <path d="M90 300 Q80 230 130 200 L230 170 Q290 120 340 110 L420 140 Q520 190 640 215 Q780 235 820 290 L825 320 Q820 345 790 345 L120 345 Q90 340 90 300Z" fill="#ece8e3" />
          <path d="M90 300 Q80 230 130 200 L230 170 Q290 120 340 110 L420 140 Q520 190 640 215 Q780 235 820 290 L825 320 Q820 345 790 345 L120 345 Q90 340 90 300Z" fill="url(#mesh)" opacity=".55" />
          <path d="M340 110 L420 140 Q520 190 640 215 L610 250 Q500 230 400 190 L310 150Z" fill="#d33820" />
          <path d="M130 200 L230 170 L250 215 L130 240Z" fill="#181818" />
          <path d="M420 238 Q560 300 760 290 L800 320 L640 335 Q500 330 410 270Z" fill="#d33820" opacity=".9" />
          <g stroke="#181818" strokeWidth="5" strokeLinecap="round">
            <line x1="340" y1="150" x2="388" y2="168" />
            <line x1="372" y1="136" x2="420" y2="156" />
            <line x1="404" y1="124" x2="452" y2="144" />
            <line x1="436" y1="150" x2="480" y2="170" />
          </g>
          <path d="M85 340 L830 340 L828 372 Q820 385 790 385 L125 385 Q92 382 85 340Z" fill="#f7f4f0" />
          <path d="M95 372 L820 372 L818 380 Q810 385 790 385 L125 385 Q100 383 95 372Z" fill="#181818" />
        </symbol>
      </defs>
    </svg>
  );
}