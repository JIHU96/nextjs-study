async function getMovieData(id: string) {
  const NOMAD_API = process.env.NOMAD_API;
  const now = new Date();
  console.log(`start fetching data: ${now}`);
  //console.log(`start fetching data: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  throw new Error("에러 발생!");
  /* const response = await fetch(`${NOMAD_API}/${id}`);
  
  return response.json();; */
}

export default async function MovieInfos({ id }: { id: string }) {
  const info = await getMovieData(id);

  return (
    <div>
      <div>{JSON.stringify(info)}</div>
    </div>
  );
}
