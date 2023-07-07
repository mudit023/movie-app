import Image from "next/image";
import Link from "next/link";
import { movieProps } from "../page";

function BestMovie(props: movieProps) {
  const IMAGE_PATH: string = `https://image.tmdb.org/t/p/original${props.poster_path}`;

  return (
    <div className="px-4 py-3 md:hover:shadow-md">
      <Link href={`${props.id}`}>
        <Image
          src={IMAGE_PATH}
          alt={props.title}
          width={800}
          height={800}
          priority
        />
      </Link>
      <h3
        className={`
          ${
            +props.vote_average.toFixed(1) >= 7 ? "bg-green-500" : "bg-red-500"
          } px-2 py-1 mt-2 w-12 text-center
        `}
      >{`${+props.vote_average.toFixed(1)}`}</h3>
    </div>
  );
}

export default BestMovie;
