"use client";

import { useEffect, useState } from "react";

/**
 * Signature element: a speedometer-style scroll gauge, echoing the needle
 * in the AutoPresta 360 mark. The needle climbs from 0 to ~220 km/h as the
 * visitor reads down the page — "speed" stands in for progress.
 */
export default function ScrollGauge() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const pct = scrollable > 0 ? h.scrollTop / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // needle sweeps from -110deg to +110deg
  const angle = -110 + progress * 220;
  const speed = Math.round(progress * 220);

  return (
    <div
      className="relative h-11 w-11 shrink-0"
      role="img"
      aria-label={`Progression de lecture : ${Math.round(progress * 100)}%`}
    >
      <svg viewBox="0 0 44 44" className="h-11 w-11">
        <circle
          cx="22"
          cy="22"
          r="19"
          fill="#0f172a"
          stroke="#22314a"
          strokeWidth="2"
        />
        <circle
          cx="22"
          cy="22"
          r="19"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${progress * 119.4} 119.4`}
          transform="rotate(-90 22 22)"
          className="transition-[stroke-dasharray] duration-150 ease-out"
        />
        <g
          transform={`rotate(${angle} 22 22)`}
          className="transition-transform duration-150 ease-out"
        >
          <line x1="22" y1="22" x2="22" y2="10" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
        </g>
        <circle cx="22" cy="22" r="2.1" fill="#38bdf8" />
      </svg>
      <span className="pointer-events-none absolute inset-0 flex items-end justify-center pb-[3px] font-mono text-[6px] tracking-wide text-mute">
        {speed}
      </span>
    </div>
  );
}
