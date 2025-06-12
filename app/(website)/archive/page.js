import { Suspense } from "react";
import Archive from "./archive";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default async function ArchivePage({ searchParams }) {
  return (
    <div className="relative px-4 md:px-[160px] mb-8 mt-6">
      <h1 className="font-nunito text-center text-Black-500 text-2xl md:text-4xl font-black">
        Productos
      </h1>
      <div className="text-center">
        <p className="mt-2 text-lg">
          Mira nuestros productos más recientes 
        </p>
      </div>
      {searchParams ? (
        <Archive searchParams={searchParams} />
      ) : (
        <Loading />
      )}
    </div>
  );
}
