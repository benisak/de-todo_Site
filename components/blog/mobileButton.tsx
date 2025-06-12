"use client";

import React from 'react';

interface MobileButtonProps {
  isOverlayVisible: boolean;
}

const MobileButton: React.FC<MobileButtonProps> = ({ isOverlayVisible }) => {
  return (
    <a
      href="https://wa.me/33334567890"
      target="_blank"
      rel="noopener noreferrer"
      id="mobile-menu-button"
      className={`fixed bottom-4 left-4 right-4 z-40 sm:hidden ${isOverlayVisible ? 'pointer-events-none' : ''}`}
    >
      <div className="flex h-full w-full items-center justify-start gap-6">
        <div className="flex flex-1 items-center justify-center gap-2.5 rounded-lg bg-[#FCD704] p-4" style={{ height: 51 }}>
          <div className="text-base font-semibold text-[#1F1F1F]">
            Comprar ahora
          </div>
        </div>
      </div>
    </a>
  );
};

export default MobileButton;
