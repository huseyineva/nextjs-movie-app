import { movies } from "@/utils/data";
import MovieContent from "./MovieContent";

export default function Slider() {
  const movie = movies[7];
  return <MovieContent movie={movie} />;
}
