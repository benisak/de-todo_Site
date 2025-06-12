//sell card component for desktop and mobile versions
"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

const SellCard: React.FC = () => {
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} className="text-[#FFB700] w-4 h-4" />
    ));
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden sm:inline-flex w-96 p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#B6B6B6] flex-col justify-center items-center gap-4 bg-white">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="p-2 bg-[#C6DFF5] rounded-lg inline-flex justify-center items-center gap-2.5">
              <div className="text-black text-sm font-medium ">+50 vendidos</div>
            </div>

            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-gray-600 text-xs font-normal ">Calificación</div>
              <div className="inline-flex justify-start items-center gap-2">
                <div className="flex justify-start items-center gap-1">
                  {renderStars()}
                </div>
                <div className="w-11 inline-flex flex-col justify-start items-start">
                  <div className="text-gray-600 text-base font-semibold ">5.0</div>
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="text-black text-4xl font-bold font-nunito">$5,000,000</div>
              <div className="text-black text-base font-semibold ">
                o en 3 cuotas de $1,799,000 0% interés
              </div>
            </div>
          </div>

          <div className="self-stretch pr-3.5 py-2 rounded-lg flex flex-col justify-start items-start gap-2">
            <div className="text-black text-lg font-medium  leading-relaxed">
              Recíbelo en: 5 días hábiles
            </div>
            <div className="text-black text-base font-normal  leading-normal">
              Garantía de producto: 12 meses
            </div>
            <div className="text-black text-base font-normal  leading-normal">
              Últimas: 10 unidades
            </div>
          </div>
        </div>

        {/* Comprar ahora */}
        <div className="self-stretch inline-flex justify-start items-center gap-6 mt-2">
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-4 bg-yellow-400 rounded-lg flex justify-center items-center gap-2.5 hover:bg-yellow-300 transition"
          >
            <span className="text-black text-base font-semibold ">Comprar ahora</span>
          </a>
        </div>

        {/* Note */}
        <div className="self-stretch p-4 bg-[#FFFCEC] rounded-lg inline-flex justify-center items-start gap-4 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" className="shrink-0">
            <path d="M10.5013 13.3327V9.99935M10.5013 6.66602H10.5096M18.8346 9.99935C18.8346 14.6017 15.1037 18.3327 10.5013 18.3327C5.89893 18.3327 2.16797 14.6017 2.16797 9.99935C2.16797 5.39698 5.89893 1.66602 10.5013 1.66602C15.1037 1.66602 18.8346 5.39698 18.8346 9.99935Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="flex-1 text-black text-sm font-medium  leading-tight">
            Para realizar tu compra de manera segura da clic en comprar ahora y todo el proceso de compra lo harás con nuestro asesor por WhatsApp.
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="inline-flex sm:hidden w-full p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#B6B6B6] flex-col justify-center items-center gap-4 bg-white">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="p-2 bg-[#C6DFF5] rounded-lg inline-flex justify-center items-center gap-2.5">
              <div className="text-black text-sm font-medium ">+50 vendidos</div>
            </div>

            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-gray-600 text-xs font-normal ">Calificación</div>
              <div className="inline-flex justify-start items-center gap-2">
                <div className="flex justify-start items-center gap-1">
                  {renderStars()}
                </div>
                <div className="w-11 inline-flex flex-col justify-start items-start">
                  <div className="text-gray-600 text-base font-semibold ">5.0</div>
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="text-black text-4xl font-bold font-nunito">$5,000,000</div>
              <div className="text-black text-base font-semibold ">
                o en 3 cuotas de $1,799,000 0% interés
              </div>
            </div>
          </div>

          <div className="self-stretch pr-3.5 py-2 rounded-lg flex flex-col justify-start items-start gap-2">
            <div className="text-black text-lg font-medium  leading-relaxed">
              Recíbelo en: 5 días hábiles
            </div>
            <div className="text-black text-base font-normal  leading-normal">
              Garantía de producto: 12 meses
            </div>
            <div className="text-black text-base font-normal  leading-normal">
              Últimas: 10 unidades
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="self-stretch p-4 bg-[#FFFCEC] rounded-lg inline-flex justify-center items-start gap-4 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" className="shrink-0">
            <path d="M10.5013 13.3327V9.99935M10.5013 6.66602H10.5096M18.8346 9.99935C18.8346 14.6017 15.1037 18.3327 10.5013 18.3327C5.89893 18.3327 2.16797 14.6017 2.16797 9.99935C2.16797 5.39698 5.89893 1.66602 10.5013 1.66602C15.1037 1.66602 18.8346 5.39698 18.8346 9.99935Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="flex-1 text-black text-sm font-medium  leading-tight">
            Para realizar tu compra de manera segura da clic en comprar ahora y todo el proceso de compra lo harás con nuestro asesor por WhatsApp.
          </div>
        </div>
      </div>
    </>
  );
};

export default SellCard;
