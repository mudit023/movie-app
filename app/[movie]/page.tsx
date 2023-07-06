import Image from "next/image";

async function MovieDetail({ params }: any) {
  const movie_id = params.movie;
  const IMAGE_PATH: string = `https://image.tmdb.org/t/p/original`;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  const releaseDate = new Date(res.release_date);

  return (
    <div className="my-16 md:p-4 p-2 flex justify-start items-center gap-10 min-h-[90vh]">
      <div className="flex flex-col justify-center items-start">
        <Image
          src={IMAGE_PATH + res.poster_path}
          width={1000}
          height={1000}
          alt={res.title}
          priority
          className="max-w-[30vw] max-h-[75vh]"
        />
        <h1 className="text-2xl font-bold max-w-[400px]">{res.title}</h1>
      </div>
      <div className="max-w-[48vw] flex flex-col justify-center items-start gap-4">
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
        <div className="text-xs flex gap-2">
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
