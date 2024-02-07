import styles from "./Home.module.css";
import Link from "next/link";

const NOMAD_API = process.env.NOMAD_API;

async function getMovies() {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${NOMAD_API}`);
  const json = await response.json();

  return json;
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className={styles.wrapper}>
      {movies.map((movie) => (
        <li className={styles.li} key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
