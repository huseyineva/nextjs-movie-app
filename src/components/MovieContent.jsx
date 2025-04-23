import React from "react";
import Link from "next/link";

export default function MovieContent({ movie }) {
  if (!movie) {
    return <p>Film bulunamadı.</p>;
  }
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-bold text-xl lg:text-7xl leading-18 max-w-xl">
        {movie.title}
      </h2>
      <p className="text-xl lg:text-2xl">{movie.description}</p>
      <Link
        href={`/movie/${movie.id}`}
        className="bg-white lg:w-xs w-auto cursor-pointer px-10 py-4 text-black font-bold text-xl flex justify-center aligns-center rounded-full"
      >
        Play
      </Link>
      <img
        src={movie.image}
        alt={movie.title}
        className="absolute top-0 left-0 right-0 w-full h-full object-cover -z-2 max-h-screen object-top"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-1 bg-custom-gradient"></div>
    </div>
  );
}
