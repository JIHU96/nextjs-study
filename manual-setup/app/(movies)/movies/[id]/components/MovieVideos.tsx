async function getMovieVideos(id: string) {
  const NOMAD_API = process.env.NOMAD_API;
  const now = new Date();
  console.log(`start fetching video: ${now}`);
  //console.log(`start fetching data: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${NOMAD_API}/${id}/videos`);
  const json = await response.json();

  return json;
}

export default async function MovieInfos({ id }: { id: string }) {
  const videos = await getMovieVideos(id);
  console.log("videos\n", videos[0].site);

  const site = videos[0].site;

  return <div>{site}</div>;
}
