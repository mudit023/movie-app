import { movieProps } from "../page";
import BestMovie from "./BestMovie";

export default async function Best() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main className="my-16 md:px-10 px-5 w-full">
      <h1 className="text-2xl font-semi-bold">Top Rated</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res?.results?.map((item: movieProps, idx: number) => {
          return (
            <BestMovie
              title={item?.title}
              poster_path={item?.poster_path}
              vote_average={item?.vote_average}
              key={idx}
              id={item?.id}
            />
          );
        })}
      </div>
    </main>
  );
}
