import styles from "./faq.module.css";

const SKIN = "#c68b63";
const SKIN_SHADE = "#b9805a";
const HAIR = "#1d1a1a";
const JACKET = "#1f2a44";
const TROUSERS = "#2b3b5c";
const RED = "#b91c1c";
const INK = "#17202b";
const markFont = { fontFamily: " Georgia, serif", fontStyle: "italic", fontWeight: 600 } as const;

// const markFont = { fontFamily: "var(--font-hero-editorial), Georgia, serif", fontStyle: "italic", fontWeight: 600 } as const;

/**
 * Original illustration: a student with her passport, pointing up at a big question mark.
 * The orbit is the same red arc and dot as the hero circle. Decorative only; all motion
 * is CSS and stops for visitors who prefer reduced motion.
 */
export default function FaqIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 420" aria-hidden="true" focusable="false" className={className}>
      <circle cx="200" cy="215" r="158" fill="#efe7d8" />
      <g className={styles.orbit}>
        <circle cx="200" cy="215" r="172" fill="none" stroke={INK} strokeOpacity=".12" />
        <path d="M38.4 156.2A172 172 0 0 1 258.8 53.4" fill="none" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="258.8" cy="53.4" r="6" fill={RED} />
      </g>

      <text x="98" y="128" fontSize="38" fill={INK} fillOpacity=".3" style={markFont} className={styles.floatA}>?</text>
      <text x="124" y="80" fontSize="26" fill={RED} fillOpacity=".6" style={markFont} className={styles.floatB}>?</text>
      <text x="332" y="270" fontSize="30" fill={INK} fillOpacity=".25" style={markFont} className={styles.floatC}>?</text>
      <text x="262" y="214" fontSize="180" fill={RED} style={markFont} className={styles.bigMark}>?</text>

      <ellipse cx="184" cy="392" rx="78" ry="8" fill={INK} fillOpacity=".1" />

      {/* Legs and shoes */}
      <path d="M161 288L160 384H177L182 296Z" fill={TROUSERS} />
      <path d="M183 296L188 384H205L205 288Z" fill={TROUSERS} />
      <rect x="153" y="381" width="27" height="10" rx="4.5" fill="#141414" />
      <rect x="186" y="381" width="27" height="10" rx="4.5" fill="#141414" />

      {/* Body, collar, bag */}
      <rect x="174" y="176" width="12" height="18" fill={SKIN_SHADE} />
      <path d="M157 196Q180 186 205 196L212 294Q182 302 150 294Z" fill={JACKET} />
      <path d="M171 191L180 210L189 191Z" fill="#f2e6d6" />
      <path d="M163 198L207 270" stroke="#8a5a3c" strokeWidth="3" />
      <rect x="197" y="260" width="24" height="22" rx="4" fill="#8a5a3c" />

      {/* Arm pointing at the question mark */}
      <g className={styles.pointArm}>
        <path d="M202 203Q222 198 229 186L243 156" fill="none" stroke={JACKET} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M245 150L251 137" stroke={SKIN} strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="245" cy="152" r="6.5" fill={SKIN} />
      </g>

      {/* Arm holding the passport (plain cover, no emblem) */}
      <path d="M160 202Q149 232 160 250L188 247" fill="none" stroke={JACKET} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="rotate(-8 184 242)">
        <rect x="170" y="221" width="30" height="40" rx="3" fill="#1b2a4a" stroke="#0f172a" />
        <circle cx="185" cy="237" r="5.5" fill="none" stroke="#d4a24c" strokeWidth="1.5" />
        <path d="M178 251H192" stroke="#d4a24c" strokeWidth="1.5" />
      </g>
      <circle cx="194" cy="247" r="6.5" fill={SKIN} />

      {/* Head */}
      <g className={styles.head}>
        <g className={styles.pony}>
          <path d="M163 148C146 150 138 172 145 194C148 182 153 171 163 160Z" fill={HAIR} />
        </g>
        <circle cx="163" cy="150" r="3.2" fill={RED} />
        <circle cx="181" cy="162" r="21" fill={SKIN} />
        <path d="M160 166C155 140 175 128 193 134C204 138 206 148 202 155C194 147 179 146 168 156C165 160 163 164 160 166Z" fill={HAIR} />
        <circle cx="171" cy="164" r="4" fill={SKIN_SHADE} />
        <circle cx="193" cy="160" r="2.1" fill={INK} />
        <path d="M189 154q4-3 8-1" fill="none" stroke={INK} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M190 172q4 3 8-1" fill="none" stroke={INK} strokeWidth="1.5" strokeLinecap="round" className="opacity-30" />
      </g>
    </svg>
  );
}