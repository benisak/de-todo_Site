"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Define the Ingredient interface
interface Ingredient {
  title: string;
  productImageUrl: string;
  starsRating: number;
  countRatings: number;
  price: number;
  url: string;
  discount?: number; // Optional
}

interface IngredientListProps {
  ingredients: Ingredient[];
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const scrollPositionRef = useRef<number>(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Helper to render stars
  const renderStars = (rating: number) => {
    const stars: JSX.Element[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star-icon text-[#FF9900]" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="star-icon text-[#FF9900]" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-icon text-[#FF9900]" />);
      }
    }
    return stars;
  };

  return (
    <div className="mx-auto max-w-3xl p-0 ">
      <h2 className="mb-1 hidden text-xl font-bold text-black sm:block">
        Ingredients
      </h2>
      <p className="mb-3 ads_disclosure text-xs hidden md:block">
        [Ad] As an Amazon Associate I earn from qualifying purchases*
      </p>

      {/* Desktop Wishlist Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        className="bg-[#FCD704] border border-[#FCD704] text-[#1F1F1F] mt-4 hidden flex-[1_0_0] items-center justify-center gap-2 rounded-lg p-4 text-base font-semibold hover:bg-white hover:text-[#FCD704] hover:border-[#FCD704]
                        transition-colors duration-300 ease-in-out sm:flex">
        Compar ahora
      </a>






      {/* Mobile Menu Button - WhatsApp Chat Link */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        id="mobile-menu-button"
        className={`fixed bottom-4 left-4 right-4 z-40 sm:hidden ${isOverlayVisible ? 'pointer-events-none' : ''}`}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 24,
            display: "inline-flex"
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              height: 51,
              padding: 16,
              background: "#FCD704",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "flex"
            }}
          >
            <div
              style={{
                color: "#1F1F1F",
                fontSize: 16,
                fontWeight: "600",
                wordWrap: "break-word"
              }}
            >
              Comprar ahora
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default IngredientList;
