'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
  fallbackSvgType?: 'pear' | 'pomegranate' | 'tarkhun' | 'apple' | 'kiwi' | 'strawberry' | 'lime' | 'cola' | 'peach' | 'mango' | 'water';
  accentColor?: string;
  className?: string;
  priority?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  fallbackSvgType = 'pear',
  accentColor = '#ff334b',
  className = '',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  // High quality vector representation if PNG fails to load
  const renderFallbackSvg = () => {
    let liquidColor = '#39e75f';
    let labelTitle = 'ZIGI';
    let flavorName = 'LEMONADE';

    switch (fallbackSvgType) {
      case 'pear':
        liquidColor = '#f1c40f';
        flavorName = 'PEAR';
        break;
      case 'pomegranate':
        liquidColor = '#ff334b';
        flavorName = 'POMEGRANATE';
        break;
      case 'tarkhun':
        liquidColor = '#2ec4b6';
        flavorName = 'TARKHUN';
        break;
      case 'apple':
        liquidColor = '#76e11b';
        flavorName = 'GREEN APPLE';
        break;
      case 'lime':
        liquidColor = '#00f5d4';
        flavorName = 'MOJITO LIME';
        break;
      case 'strawberry':
        liquidColor = '#ff2a70';
        flavorName = 'MOJITO STRAWBERRY';
        break;
      case 'kiwi':
        liquidColor = '#84e612';
        flavorName = 'MOJITO KIWI';
        break;
      case 'cola':
        liquidColor = '#ff2632';
        flavorName = 'COLA CLASSIC';
        break;
      case 'peach':
        liquidColor = '#ff8811';
        flavorName = 'ICE TEA PEACH';
        break;
      case 'mango':
        liquidColor = '#ffc107';
        flavorName = 'TEA MANGO';
        break;
      case 'water':
        liquidColor = '#48cae4';
        flavorName = 'PURE WATER';
        break;
    }

    return (
      <svg
        viewBox="0 0 320 600"
        className={`w-full h-full drop-shadow-2xl ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`can-body-${fallbackSvgType}`} x1="0" y1="0" x2="320" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1a1a24" />
            <stop offset="35%" stopColor="#2d2d3a" />
            <stop offset="70%" stopColor="#12121a" />
            <stop offset="100%" stopColor="#08080c" />
          </linearGradient>
          <linearGradient id={`liquid-glow-${fallbackSvgType}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={liquidColor} stopOpacity="0.9" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id={`metal-rim-${fallbackSvgType}`} x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8e9aaf" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#4a5568" />
          </linearGradient>
          <filter id={`glow-filter-${fallbackSvgType}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="25" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Back Glow */}
        <ellipse cx="160" cy="300" rx="140" ry="240" fill={liquidColor} opacity="0.2" filter={`url(#glow-filter-${fallbackSvgType})`} />

        {/* Top Rim / Can Tab */}
        <rect x="100" y="25" width="120" height="20" rx="6" fill={`url(#metal-rim-${fallbackSvgType})`} />
        <ellipse cx="160" cy="25" rx="60" ry="10" fill="#cbd5e1" />
        <path d="M150 15 H170 V22 H150 Z" fill="#64748b" />

        {/* Main Can Silhouette */}
        <rect x="60" y="45" width="200" height="510" rx="35" fill={`url(#can-body-${fallbackSvgType})`} stroke={`url(#metal-rim-${fallbackSvgType})`} strokeWidth="3" />

        {/* Dynamic Flavor Accent Stripe */}
        <path d="M60 180 Q160 140 260 180 V420 Q160 460 60 420 Z" fill={`url(#liquid-glow-${fallbackSvgType})`} opacity="0.85" />

        {/* Branding Typography */}
        <g transform="translate(160, 260)">
          <text x="0" y="0" textAnchor="middle" fill="#ffffff" fontSize="48" fontWeight="900" letterSpacing="4" fontFamily="sans-serif" style={{ textTransform: 'uppercase' }}>
            {labelTitle}
          </text>
          <text x="0" y="38" textAnchor="middle" fill={liquidColor} fontSize="28" fontWeight="800" letterSpacing="6" fontFamily="sans-serif">
            ZAGI
          </text>
          <text x="0" y="75" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="700" letterSpacing="3" fontFamily="sans-serif" opacity="0.9">
            HORECA PREMIUM
          </text>
          <rect x="-60" y="90" width="120" height="2" fill={liquidColor} />
          <text x="0" y="112" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="600" letterSpacing="2" fontFamily="sans-serif">
            {flavorName}
          </text>
        </g>

        {/* Gloss Highlights */}
        <path d="M75 60 C 85 100, 85 500, 75 540" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" opacity="0.15" />
        <path d="M90 70 C 98 120, 98 480, 90 530" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.25" />

        {/* Bottom Rim */}
        <rect x="75" y="540" width="170" height="15" rx="5" fill={`url(#metal-rim-${fallbackSvgType})`} />
      </svg>
    );
  };

  if (hasError) {
    return renderFallbackSvg();
  }

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500"
        onError={() => setHasError(true)}
      />
    </div>
  );
};
