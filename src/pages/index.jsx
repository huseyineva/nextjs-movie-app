import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import "@/app/globals.css";
import CategoryButton from "@/components/CategoryButton";
import { useEffect, useState } from "react";
import { movies } from "@/utils/data";
import MovieList from "@/components/MovieList";
import Head from "@/app/head";

export default function Home() {
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setFiltered(movies);
    const uniqueCats = ["All", ...new Set(movies.map((m) => m.category))];
    setCategories(uniqueCats);
  }, []);

  const handleSelect = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setFiltered(movies);
    } else {
      setFiltered(movies.filter((m) => m.category === cat));
    }
  };

  return (
    <div className="flex flex-col gap-24">
      <Head />
      <Header />
      <div className="px-5 md:px-29 lg:px-80 py-8 flex flex-col gap-24">
        <Slider />
        <CategoryButton
          categories={categories}
          onSelect={handleSelect}
          activeCategory={activeCategory}
        />
        <MovieList movies={filtered} activeCategory={activeCategory} />
        <Footer />
      </div>
    </div>
  );
}
