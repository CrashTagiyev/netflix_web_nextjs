import { Suspense } from "react";
import HomeMainSection from "./_components/HomeMainSection";
import { trendingMovies } from "./_fetchs/fetchMovies";
import { cookies } from "next/headers";

async function Home() {
  const movies = await trendingMovies();
  const locale = (await cookies()).get("locale");
  return (
    <div className="max-w-[1440px] mx-auto">
      <HomeMainSection locale={locale.value} topMovie={movies.content[0]} />
    </div>
  );
}

export default Home;
