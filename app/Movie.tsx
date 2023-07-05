import Image from "next/image";
import Link from "next/link";

interface movieProps {
  title: string;
  about: string;
  poster_path: string;
  rating: number;
  release_date: string;
  id: number;
}

function Movie(props: movieProps) {
  const IMAGE_PATH: string = `https://image.tmdb.org/t/p/original${props.poster_path}`;
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <Link href={"/abc"}>
          <Image src={IMAGE_PATH} alt={props.title} width={400} height={400} />
        </Link>
        <div>
          <p>{props.about}</p>
          <div>
            <h3>{props.rating}</h3>
            <h3>{props.release_date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
