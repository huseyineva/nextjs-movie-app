import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { movies } from "@/utils/data";
import MovieContent from "@/components/MovieContent";

export async function getStaticPaths() {
  const paths = movies.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movie = movies.find((m) => m.id === Number(params.id));

  if (!movie) {
    return { notFound: true };
  }

  return {
    props: { movie },
  };
}

export default function MovieDetail({ movie }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="px-5 md:px-29 lg:px-80 py-8">
        <MovieContent movie={movie} />
      </div>
      <div className="py-8">
        <Footer />
      </div>
    </div>
  );
}
