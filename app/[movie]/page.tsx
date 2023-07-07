import Image from "next/image";

// export async function generateStaticParams() {
//   const data = await fetch(
//     `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${process.env.API_KEY}`
//   );
//   const res = await data.json();
//   return res.results.map((movie: { id: number }) => ({
//     movie: movie.id.toString(),
//   }));
// }

async function MovieDetail({ params }: any) {
  const movie_id = params.movie;
  const IMAGE_PATH: string = `https://image.tmdb.org/t/p/original`;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  const releaseDate = new Date(res.release_date);

  return (
    <div className="my-16 md:p-4 p-2 flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 min-h-[90vh] w-full">
      <div className="flex flex-col justify-center items-start max-w-[76vw] max-h-[85vh] sm:max-w-[30vw] sm:max-h-[70vh]">
        <Image
          src={IMAGE_PATH + res.poster_path}
          width={1000}
          height={1000}
          alt={res.title}
          priority
        />
        <h1 className="sm:text-2xl font-bold w-full sm:max-w-[400px] text-lg">
          {res.title}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-start gap-4 max-w-[76vw] sm:max-w-[65vw]">
        <div className="w-full text-xs flex items-center justify-between">
          <span
            className={`${
              releaseDate <= new Date() ? "bg-green-500" : "bg-red-500"
            } px-2 py-1`}
          >
            {releaseDate <= new Date() ? res.status : res.release_date}
          </span>
          <span
            className={`
          ${res.vote_average >= 7 ? "bg-green-500" : "bg-red-500"} px-2 py-1
        `}
          >
            {+res.vote_average.toFixed(1)}
          </span>
        </div>
        <p>{res.overview}</p>
        <div className="text-xs flex gap-2 flex-wrap">
          {res.genres.map((item: { name: string }, idx: number) => (
            <span className="bg-yellow-500 px-2 py-1" key={idx}>
              {item.name}
            </span>
          ))}
        </div>
        <h3 className="text-xs">{`${(res.runtime / 60).toFixed(1)}hrs`}</h3>
      </div>
    </div>
  );
}

export default MovieDetail;
