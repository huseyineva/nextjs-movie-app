import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { movies } from "@/utils/data";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import MovieContent from "@/components/MovieContent";

export default function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;

  console.log("ID from URL:", id);

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return notFound();

  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="px-5 md:px-29 lg:px-80 py-8">
        <MovieContent />
      </div>
      <div className="py-8">
        <Footer />
      </div>
    </div>
  );
}
