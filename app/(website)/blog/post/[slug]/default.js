"use client"; 

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { BannerAd } from "@/components/blog/banner"; // Named import
import CategoryLabel from "@/components/blog/category";
import SellCard from "@/components/blog/sellCard";
import MobileButton from "@/components/blog/mobileButton";
import BannerRelatedRecipes from "@/components/bannerRelatedRecipes";

export default function Post(props) {
  const { loading, post, relatedRecipes } = props;

  // Redirect to 404 if post or slug is missing
  if (!loading && (!post || !post.slug)) {
    notFound();
  }

  // State to track if verification query parameter is valid
  const [hasQueryParamVerified, setHasQueryParamVerified] = useState(false);

  // Check for verification query parameter on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const verification = params.get("verification");
      if (verification === "dreamcode") {
        setHasQueryParamVerified(true); // Set state to true if verification matches
      }
    }
  }, []); // Run only once on mount

  const imageProps = post?.mainImage ? urlForImage(post?.mainImage) : null;

  return (
    <>
      <Container className="relative">
        {/* Main container for mobile and desktop */}
        <div className="flex flex-col items-start gap-6 md:px-0 lg:w-[1199px] lg:flex-row lg:gap-[112px]">
          {/* First Column */}
          <div className="mx-auto w-full md:mx-0 md:w-auto lg:w-[616px]">
            {/* Mobile-specific width */}
            <div className="flex w-full flex-col items-center px-0 md:items-start md:px-0">

              
              {/* Category */}
             <div className="flex w-full">
                <CategoryLabel categories={post.categories} />
              </div>

              {/* Title */}
              <h1 className="mt-2 font-nunito text-brand-primary w-full text-3xl font-bold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                {post.title}
              </h1>

              {/* Recipe Image */}
              <div className="mt-6 md:mt-11 w-full overflow-hidden lg:rounded-lg">
                {imageProps && (
                  <Image
                    src={imageProps.src}
                    alt={post.mainImage?.alt || "Thumbnail"}
                    loading="eager"
                    width={400}
                    height={400}
                    className="w-[328px] h-[328px] sm:w-[400px] sm:h-[400px] object-cover rounded-lg mx-auto"
                  />
                )}
              </div>



              {/* SellCard for mobile*/}
              <div className="block sm:hidden mt-8">
                <SellCard ingredients={post.ingredients} />
              </div>

              {/* Recipe body */}
              <article className="prose mb-3 mt-6 w-full break-words dark:prose-invert prose-a:text-blue-600 md:mt-11">
                {post.body && <PortableText value={post.body} />}
              </article>
            </div>

            {/* Banner Ad (Respawns if verification is true) */}
            {hasQueryParamVerified && (
              <div className="relative -mr-[calc(90vw-100%)] md:-ml-[calc(48vw-100%)] md:-mr-[calc(72vw-100%)] bg-transparent md:bg-[#F6F6F6] md:p-0">
                <BannerAd ingredients={post.ingredients} />
              </div>
            )}


            {/* Related Recipes */}
            <div className="relative -mr-[calc(90vw-100%)] md:-ml-[calc(48vw-100%)] md:-mr-[calc(72vw-100%)] md:bg-[#F6F6F6] md:p-6 md:rounded-[16px]">
              <BannerRelatedRecipes relatedRecipes={relatedRecipes} />
            </div>

            {/* Mobile   Version */}
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
                Ver tdos los productos
              </div>
            </Link>

                  </div>

          {/* Second  Column */}
          <div className="mt-8 flex w-full flex-col gap-8 lg:mt-0 lg:w-[383px]">

            {/* SellCard for desktop*/}
            <div className="mt-2 hidden sm:block">
              <SellCard ingredients={post.ingredients} />
            </div>

            {/* Comprar ahora mobile buttom */}
            <MobileButton/>

            {/* Subscription Component (Desktop Only) */}
            <div className="hidden w-full flex-col gap-6 rounded-lg bg-gray-100 p-6 lg:flex">
            {/* Heading Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-black text-xl md:text-2xl font-nunito font-bold">Explora. Sorpréndete. Compra.</h3>
              <p className="text-base font-normal leading-6 text-black">
                Suscríbete y recibe las mejores recomendaciones de productos para ti.
              </p>
            </div>

            {/* Input and Button Section */}
            <div className="flex w-full gap-2">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Email"
               
                className="h-[51px] w-3/5 rounded-xl border border-[#7d7d7d] bg-white px-4 text-base text-[#7d7d7d] focus:outline-none"
              />
              {/* Suscribirme Button */}
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

      {/* Mobile-specific Subscription Component (Full Width) */}
      <div className="flex w-full flex-col items-start justify-center gap-6 bg-[#FFFCEC] px-4 py-6 lg:hidden">
        <div className="flex w-full flex-col items-start justify-center gap-4">
          <h3 className="text-black text-xl md:text-2xl font-nunito font-bold">Explora. Sorpréndete. Compra.</h3>
          <p className="break-words text-[16px] font-normal leading-[24px] text-black">
            Suscríbete y recibe las mejores recomendaciones de productos para ti.
          </p>
        </div>
        {/* The container for the input and button */}
        <div className="flex w-full flex-row items-center gap-2">
          <input
            type="email"
            placeholder="Email"
            // Changed from flex-[219] to a proportional width (e.g., 60%)
            className="h-[51px] w-3/5 rounded-xl border border-[#7d7d7d] bg-white px-4 text-base text-[#7d7d7d] focus:outline-none"
          />
          <button
            // Changed from flex-[101px] to a wider proportional width (e.g., 40%)
            className="h-[51px] w-2/5 rounded-md border border-[#FCD704] bg-[#FCD704] text-base font-semibold text-[#1F1F1F] transition-colors duration-300 ease-in-out hover:border-[#FCD704] hover:text-white hover:opacity-90"
          >
            Suscribirme
          </button>
        </div>
      </div>

    </>
  );
}
