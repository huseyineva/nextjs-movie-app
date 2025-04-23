import Link from "next/link";
import React from "react";

export default function MovieList({ movies, activeCategory }) {
  const title =
    activeCategory === "All" ? "Popular Films" : `${activeCategory} Films`;

  return (
    <div className="flex flex-col gap-8 font-bold text-4xl">
      <h1>{title}</h1>
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="h-80 shadow-[0_5px_10px_0_rgba(0,0,0,0.5)] rounded-lg overflow-hidden"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="h-full w-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out "
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
