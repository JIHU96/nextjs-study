import { Suspense } from "react";
import MovieInfos from "./components/MovieInfos";
import MovieVideos from "./components/MovieVideos";

type MovieProps = {
  params: { id: string };
  searchParams: {
    region: string;
    lang: string;
  };
};

export default async function MovieDetail({
  params: { id },
  searchParams: { region, lang },
}: MovieProps) {
  return (
    <div className="wrapper">
      <h1>Movie {Number(id)} Info</h1>

      <h4>{"Title"}</h4>
      <Suspense fallback={<div>is Loading...</div>}>
        <MovieInfos id={id} />
      </Suspense>

      <h2>---------------------------------------------</h2>

      <h4>{"Movie"}</h4>
      <Suspense fallback={<div>is Loading...</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
