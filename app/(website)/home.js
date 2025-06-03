import Link from "next/link";
import PostList from "@/components/postlist";
import Featured from "@/components/featured";
import HeroSection from "@/components/HeroSection";
import Subscription from "@/components/Subscription";
import CategoryList from "@/components/categorylist";
import {
  getCategorizedPostCategories,
  getCategorizedPostCategoriesLabels,
  getFeaturedRecipes,
  getNonFeaturedRecipes
} from "@/lib/sanity/client";

export default async function HomeLifeStyle({}) {
  const featuredPost = await getFeaturedRecipes(18); // Fetching featured posts
  const posts = await getNonFeaturedRecipes(12); // Fetching non-featured posts
  const categoriesForList = await getCategorizedPostCategories(7); // Fetching categories

  return (
    <>
      
        {/* Hero Section */}
        <div className="w-full mt-[18px] md:mt-[24px]">
          <HeroSection />
        </div>
        
        {/* Category List Section for Mobile*/}
        <div className="block md:hidden w-full md:pt-8">
          <CategoryList topAndOtherCategories={categoriesForList} />
        </div>

        {/* Main Content Section */}
        
      <div className="bg-[#F1F1F1] flex w-full flex-col gap-[1px] lg:gap-[55px] px-4 md:px-[160px]">

        {/* Category List Section for Desktop*/}
        <div className="hidden md:block md:pt-8">
          <CategoryList topAndOtherCategories={categoriesForList} />
        </div>

        {/* Favorite Recipes Section */}
        <div className="pb-6">
          {featuredPost.length >= 6 && (
            <>
              <div className="mt-0 w-full">
              <h2 className="text-[#1F1F1F] text-2xl font-bold font-nunito md:text-3xl md:font-medium">
                <strong>Productos recomendados</strong>
              </h2>

              </div>

              <div className="mb-10 mt-[32px] grid w-full gap-[32px] md:grid-cols-3">
                {featuredPost.slice(0, 6).map((post) => (
                  <PostList
                    key={post._id}
                    post={post}
                    aspect="landscape"
                    pathPrefix="blog"
                    fontWeight="normal"
                    preloadImage={true}
                    className="w-full"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Full-width Subscription Section */}
      <div className="w-full bg-gray-100 mb-8">
        <Subscription />
      </div>

      {/* Other Posts Section */}
      <div className="flex w-full flex-col gap-[1px] lg:gap-[55px] px-4 md:px-[120px]">
        {/* Other 12 Posts Section */}
        <div className="pb-0 pt-6">
          {featuredPost.length > 6 && (
            <div className="mb-2 mt-0 grid w-full gap-[32px] md:grid-cols-3">
              {featuredPost.slice(6, 18).map((post) => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  pathPrefix="blog"
                  fontWeight="normal"
                  preloadImage={true}
                  className="w-full"
                />
              ))}
            </div>
          )}
        </div>

        {/* Archive Link */}
        <div className="archive-link flex w-full justify-center px-0 sm:px-[30px] sm:py-[50px] md:py-0 pb-[56px] md:pb-[32px] pt-[24px]">
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
      </div>
    </>
  );
}
