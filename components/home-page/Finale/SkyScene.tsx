"use client";
import Image from "next/image";
import styles from "./finale.module.css";

/** Side view of a passenger plane in the site's colours (no airline branding). */
export function PlaneArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-20 -20 270 100" aria-hidden="true" className={className}>
      <path d="M10 28L-12-14H16L44 18Z" fill="#b91c1c" />
      <path d="M5 34L-18 46H22L38 36Z" fill="#d9cbb5" />
      <path
        d="M0 30Q10 10 60 12L200 14Q232 16 244 30Q232 44 200 46L60 48Q10 50 0 30Z"
        fill="#fbf7ee"
        stroke="#17202b"
        strokeWidth="1.6"
      />
      <rect x="40" y="27" width="182" height="5" fill="#b91c1c" />
      <g fill="#1b2a4a">
        {[78, 92, 106, 120, 134, 148, 162, 176, 190].map((x) => (
          <circle key={x} cx={x} cy="21" r="3.2" />
        ))}
      </g>
      <path d="M216 19Q234 23 240 30H214Z" fill="#1b2a4a" />
      <path
        d="M112 38L78 76H106L156 40Z"
        fill="#e6d8c2"
        stroke="#17202b"
        strokeWidth="1.2"
      />
      <ellipse
        cx="116"
        cy="54"
        rx="14"
        ry="6.5"
        fill="#9aa3ad"
        stroke="#17202b"
      />
    </svg>
  );
}

/**
 * Sky behind the boarding pass: gradient, sun, three cloud layers (moved at different
 * speeds for depth), the plane and its dotted trail. All data-* hooks are driven by
 * useFinaleAnimation.
 */
export default function SkyScene() {
  return (
    <div
      aria-hidden="true"
      className={`${styles.sky} pointer-events-none absolute inset-0 overflow-hidden`}
    >
      <div className="absolute top-[15%] right-[12%] size-[min(38vw,320px)] rounded-full bg-[#ee9f6c]/45 " />

      <div data-finale-clouds="back" className="absolute inset-0">
        <div className="absolute left-[8%] top-[16%] w-[min(56vw,520px)] aspect-[1120/520] ">
          <Image
            src="/images/claud/1.png"
            alt=""
            priority={false}
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute left-[84%] top-[30%] opacity-90 w-[min(56vw,520px)] aspect-[1120/520] ">
          <Image
            src="/images/claud/2.png"
            alt=""
            priority={false}
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute left-[62%] top-[10%] opacity-90 w-[min(56vw,520px)] aspect-[1120/520] ">
          <Image
            src="/images/claud/3.png"
            alt=""
            priority={false}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Trail: a dotted line revealed by a mask that grows with the plane */}
      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        className="absolute inset-0 opacity-60 -left-30 size-full motion-reduce:hidden"
      >
        <defs>
          <mask
            id="finale-trail-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1000"
            height="600"
          >
            <path
              data-finale-trail
              d="M-60 340Q500 60 1080 140"
              fill="none"
              stroke="#fff"
              strokeWidth="40"
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset="1"
            />
          </mask>
        </defs>
        <path
          d="M-60 340Q500 60 1080 140"
          fill="none"
          stroke="#fffaf0"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="0.1 14"
          vectorEffect="non-scaling-stroke"
          mask="url(#finale-trail-mask)"
        />
      </svg>

      <div
        data-finale-plane
        className="absolute -left-30 top-0 w-[clamp(150px,22vw,300px)] opacity-0 will-change-transform motion-reduce:hidden"
      >
        <PlaneArt className="w-full drop-shadow-[0_18px_18px_rgb(120_60_20/0.18)]" />
      </div>

      <div data-finale-clouds="mid" className="absolute inset-0">
        <div className="absolute left-[70%] top-[52%] w-[min(30vw,260px)] opacity-80aspect-[1120/550] ">
          <Image
            src="/images/claud/4.png"
            alt=""
            priority={false}
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute left-[-4%] top-[58%] w-[min(34vw,300px)] opacity-70 aspect-[1120/520]  ">
          <Image
            src="/images/claud/5.png"
            alt=""
            priority={false}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div data-finale-clouds="front" className="absolute inset-0">
        <div className="absolute  bottom-[-9%] left-[78%] w-[min(56vw,520px)] aspect-[1120/620] ">
          <Image
            src="/images/claud/6.png"
            alt=""
            priority={false}
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute  bottom-[-12%] left-[34%] w-[min(70vw,640px)] aspect-[1120/620] ">
          <Image
            src="/images/claud/7.png"
            alt=""
            priority={false}
            fill
            className="object-contain"
          />
        </div>
        <div className="w-[min(60vw,560px)] absolute bottom-[-8%] left-[-10%]  aspect-[1120/620] ">
          <Image
            src="/images/claud/8.png"
            alt=""
            priority={false}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
