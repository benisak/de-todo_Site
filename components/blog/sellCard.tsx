"use client";

import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const SellCard: React.FC = () => {
  const renderStars = () => {
    const rating = 5;
    const stars: JSX.Element[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#FFB700]" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#FFB700]" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-[#FFB700]" />);
      }
    }
    return stars;
  };

  return (
    <div className="w-full max-w-md mx-auto border border-gray-200 rounded-lg p-5 shadow-sm bg-white">
      <div className="text-sm text-blue-700 font-medium mb-1">+50 vendidos</div>

      <div className="flex items-center text-yellow-500 gap-1 mb-1">
        {renderStars()}
        <span className="text-black font-semibold text-sm ml-1">5.0</span>
      </div>

      <div className="text-3xl font-extrabold text-black">$5,000,000</div>
      <div className="text-sm text-gray-600 mt-1 mb-2">
        o en 3 cuotas de $1,799,00 0% interés
      </div>

      <div className="text-sm text-black mb-1">
        Recíbelo en: <span className="font-semibold">5 días hábiles</span>
      </div>
      <div className="text-sm text-black mb-1">Garantía de producto: 12 meses</div>
      <div className="text-sm text-red-600 font-semibold mb-4">Últimas: 10 unidades</div>

      <a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:block w-full text-center font-bold py-3 rounded-md border transition-colors duration-300 bg-[#FCD704] text-[#1F1F1F] border-[#FCD704] hover:bg-white hover:text-[#FCD704]"
      >
        Comprar ahora
      </a>

      <div className="text-xs text-gray-600 mt-2 bg-yellow-50 p-2 rounded-md border border-yellow-300">
        Para realizar tu compra de manera segura da clic en comprar ahora y todo el proceso de compra lo harás con nuestro asesor por WhatsApp
      </div>
    </div>
  );
};

export default SellCard;
