'use client';

import React, { useEffect, useState, useRef } from 'react';
import { gsap } from '@/lib/gsap';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counterObj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Smooth slide up curtain reveal transition
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: () => {
              setIsDone(true);
              if (onComplete) onComplete();
            },
          });
        }
      },
    });

    // Smooth counting up from 0 to 100 matching royalbev.com 2nd screenshot
    tl.to(counterObj, {
      val: 100,
      duration: 1.1,
      ease: 'power2.inOut',
      onUpdate: () => {
        const current = Math.round(counterObj.val);
        setProgress(current);
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#E9E7DC] text-[#B8223A] select-none pointer-events-auto overflow-hidden"
    >
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40 z-0" />

      {/* Giant Crimson Red Counter Number matching 2nd screenshot */}
      <div className="relative z-10 flex items-center justify-center font-display text-[32vw] sm:text-[24vw] md:text-[20rem] font-bold text-[#B8223A] leading-none tracking-tighter select-none drop-shadow-sm">
        {progress}
      </div>
    </div>
  );
};
