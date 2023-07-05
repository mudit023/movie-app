// import Image from 'next/image'

import Movie from "./Movie";

type movieResult = {
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  id: number;
};

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  // console.log(res.results);

  return (
    <main className="mt-16 md:px-10 px-5">
      <div className="grid gap-16 grid-cols-fluid">
        {res?.results?.map((item: movieResult, idx: number) => {
          return (
            <Movie
              title={item?.title}
              about={item?.overview}
              poster_path={item?.poster_path}
              rating={item?.vote_average}
              release_date={item?.release_date}
              key={idx}
              id={item?.id}
            />
          );
        })}
      </div>
    </main>
  );
}
