"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { useSearchParams } from "next/navigation";
import CategoryLabel from "@/components/blog/category";
import SellCard from "./sellCard_template";
import MobileButton from "@/components/blog/mobileButton";

export default function TemplatePage() {
  const searchParams = useSearchParams();
  const [templateData, setTemplateData] = useState(null);
  const [hasQueryParamVerified, setHasQueryParamVerified] = useState(false);

  useEffect(() => {
    // Extract URL parameters
    const price = searchParams.get("price");
    const image = searchParams.get("image");
    const title = searchParams.get("title");
    const categoriesParam = searchParams.get("categories");
    
    // Parse categories (split by comma)
    const categories = categoriesParam ? categoriesParam.split(",").map(cat => ({
      title: cat.trim(),
      slug: { current: cat.trim().toLowerCase() }
    })) : [];

    // Check for verification query parameter
    const verification = searchParams.get("verification");
    if (verification === "dreamcode") {
      setHasQueryParamVerified(true);
    }

    // Hardcoded data for iPhone 16 example
    const hardcodedData = {
      title: title || "iPhone 16",
      price: price || "999", // This will be passed to SellCard
      image: image || "https://via.placeholder.com/400x400",
      categories: categories.length > 0 ? categories : [
        { title: "Electronics", slug: { current: "electronics" } },
        { title: "Smartphones", slug: { current: "smartphones" } }
      ],
      // Rest of your hardcoded data remains the same...
      body: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "El iPhone 16 redefine la experiencia móvil con su potente chip A18 Bionic y cámaras avanzadas. Diseñado para usuarios que buscan rendimiento excepcional y calidad premium."
            }
          ]
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Características principales:"
            }
          ]
        },
        {
          _type: "block",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Pantalla Super Retina XDR de 6.1 pulgadas"
            }
          ]
        },
        {
          _type: "block",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Chip A18 Bionic con GPU de 5 núcleos"
            }
          ]
        },
        {
          _type: "block",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Sistema de cámaras Pro con zoom óptico 3x"
            }
          ]
        },
        {
          _type: "block",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Batería de larga duración con carga rápida"
            }
          ]
        },
        {
          _type: "block",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Resistente al agua IP68"
            }
          ]
        }
      ],
      ingredients: [
        {
          _key: "1",
          ingredient: "128GB de almacenamiento interno",
          quantity: "1"
        },
        {
          _key: "2",
          ingredient: "Cable USB-C a Lightning",
          quantity: "1"
        },
        {
          _key: "3",
          ingredient: "Documentación y pegatinas Apple",
          quantity: "1"
        }
      ],
      mainImage: {
        alt: title || "iPhone 16"
      }
    };

    setTemplateData(hardcodedData);
  }, [searchParams]);

  // Show loading if no data yet
  if (!templateData) {
    return (
      <Container className="relative">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-lg">Cargando...</p>
        </div>
      </Container>
    );
  }

  // Simple PortableText renderer for hardcoded content
  const renderPortableText = (content) => {
    return content.map((block, index) => {
      if (block.listItem === "bullet") {
        return (
          <li key={index} className="ml-4">
            {block.children[0].text}
          </li>
        );
      }
      return (
        <p key={index} className="mb-4">
          {block.children[0].text}
        </p>
      );
    });
  };

  return (
    <>
      <Container className="relative">
        <div className="flex flex-col items-start gap-6 md:px-0 lg:w-[1199px] lg:flex-row lg:gap-[112px]">
          <div className="mx-auto w-full md:mx-0 md:w-auto lg:w-[616px]">
            <div className="flex w-full flex-col items-center px-0 md:items-start md:px-0">

              {/* Category */}
              <div className="flex w-full">
                <CategoryLabel categories={templateData.categories} />
              </div>

              {/* Title */}
              <h1 className="mt-2 font-nunito text-brand-primary w-full text-3xl font-bold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                {templateData.title}
              </h1>

              {/* Product Image */}
              <div className="mt-6 md:mt-11 w-full overflow-hidden lg:rounded-lg">
                <Image
                  src={templateData.image}
                  alt={templateData.mainImage?.alt || "Product Image"}
                  loading="eager"
                  width={400}
                  height={400}
                  unoptimized={true}
                  className="w-[328px] h-[328px] sm:w-[400px] sm:h-[400px] object-cover rounded-lg mx-auto"
                />
              </div>

              {/* SellCard for mobile - NOW PASSING PRICE */}
              <div className="block sm:hidden mt-8">
                <SellCard price={templateData.price} />
              </div>

              <article className="prose mb-3 mt-6 w-full break-words dark:prose-invert prose-a:text-blue-600 md:mt-11">
                <div>
                  {renderPortableText(templateData.body)}
                </div>
              </article>
            </div>

            {hasQueryParamVerified && (
              <div className="relative -mr-[calc(90vw-100%)] md:-ml-[calc(48vw-100%)] md:-mr-[calc(72vw-100%)] bg-transparent md:bg-[#F6F6F6] md:p-0">
                <div className="p-6 bg-gray-100 rounded-lg">
                  <p className="text-center">Banner Ad Space</p>
                </div>
              </div>
            )}

            <Link
              href="/archive"
              className="absolute left-1/2 inline-flex w-[calc(100%-32px)] -translate-x-1/2 transform items-center justify-center gap-[4px] rounded-[8px] border border-[#1F1F1F] bg-white px-4 py-[14px] text-sm font-medium text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white hover:border-[#1F1F1F] transition-colors duration-300 ease-in-out md:hidden"
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                Ver todos los productos
              </div>
            </Link>
          </div>

          {/* Second Column */}
          <div className="mt-8 flex w-full flex-col gap-8 lg:mt-0 lg:w-[383px]">

            {/* SellCard for desktop - NOW PASSING PRICE */}
            <div className="mt-2 hidden sm:block">
              <SellCard price={templateData.price} />
            </div>

            <MobileButton/>

            <div className="hidden w-full flex-col gap-6 rounded-lg bg-gray-100 p-6 lg:flex">
              <div className="flex flex-col gap-4">
                <h3 className="text-black text-xl md:text-2xl font-nunito font-bold">Explora. Sorpréndete. Compra.</h3>
                <p className="text-base font-normal leading-6 text-black">
                  Suscríbete y recibe las mejores recomendaciones de productos para ti.
                </p>
              </div>

              <div className="flex w-full gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-[51px] w-3/5 rounded-xl border border-[#7d7d7d] bg-white px-4 text-base text-[#7d7d7d] focus:outline-none"
                />
                <button
                  className="h-[51px] w-2/5 break-words rounded-md border border-[#1F1F1F] bg-[#F6F6F6] text-[16px] font-semibold text-[#1F1F1F] transition-colors duration-300 ease-in-out"
                >
                  Suscribirme
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="flex w-full flex-col items-start justify-center gap-6 bg-[#FFFCEC] px-4 py-6 lg:hidden">
        <div className="flex w-full flex-col items-start justify-center gap-4">
          <h3 className="text-black text-xl md:text-2xl font-nunito font-bold">Explora. Sorpréndete. Compra.</h3>
          <p className="break-words text-[16px] font-normal leading-[24px] text-black">
            Suscríbete y recibe las mejores recomendaciones de productos para ti.
          </p>
        </div>
        <div className="flex w-full flex-row items-center gap-2">
          <input
            type="email"
            placeholder="Email"
            className="h-[51px] w-3/5 rounded-xl border border-[#7d7d7d] bg-white px-4 text-base text-[#7d7d7d] focus:outline-none"
          />
          <button
            className="h-[51px] w-2/5 rounded-md border border-[#FCD704] bg-[#FCD704] text-base font-semibold text-[#1F1F1F] transition-colors duration-300 ease-in-out hover:border-[#FCD704] hover:text-white hover:opacity-90"
          >
            Suscribirme
          </button>
        </div>
      </div>

      {/* Archive Link - NEW SECTION AT THE END */}
      <div className="archive-link hidden md:flex w-full justify-center px-0 sm:px-[30px] sm:py-[50px] md:py-0 pb-[56px] md:pb-[32px] pt-[24px]">
          <Link
            href="/archive"
            className="bg-white border border-[#1F1F1F] hover:border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition-colors duration-300 ease-in-out relative inline-flex w-full max-w-[100%] items-center justify-center gap-1 rounded-md px-4 py-3 text-center text-sm font-medium focus:z-20 disabled:pointer-events-none disabled:opacity-40 md:w-auto"
            style={{
              borderRadius: "8px",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            <span>Ver todos los productos</span>
          </Link>
        </div>

    </>
  );
}
