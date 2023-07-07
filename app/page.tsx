import Movie from "./Movie";

export type movieProps = {
  title: string;
  poster_path: string;
  vote_average: number;
  id: string;
};

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main className="my-16 md:px-10 px-5">
      <h1 className="text-2xl font-semi-bold">Trending</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res?.results?.map((item: movieProps, idx: number) => {
          return (
            <Movie
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
