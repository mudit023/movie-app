import Image from "next/image";
import Link from "next/link";

interface movieProps {
  title: string;
  // about: string;
  poster_path: string;
  rating: number;
  // release_date: string;
  id: string;
}

function Movie(props: movieProps) {
  const IMAGE_PATH: string = `https://image.tmdb.org/t/p/original${props.poster_path}`;
  return (
    <div className="px-4 py-3 md:hover:shadow-md">
      {/* <h1 className="text-xl font-semibold h-8 overflow-y-hidden">
        {props.title}
      </h1> */}
      <Link href={`${props.id}`}>
        <Image
          src={IMAGE_PATH}
          alt={props.title}
          width={800}
          height={800}
          priority
        />
      </Link>
      {/* <p>{props.about}</p> */}
      <h3
        className={`
          ${
            +props.rating.toFixed(1) >= 7 ? "bg-green-500" : "bg-red-500"
          } px-2 py-1 mt-2 w-12 text-center
        `}
      >{`${+props.rating.toFixed(1)}`}</h3>
      {/* <h3>{props.release_date}</h3> */}
    </div>
  );
}

export default Movie;
