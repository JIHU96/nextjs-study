type MovieProps = {
  params: { id: string };
  searchParams: {
    region: string;
    lang: string;
  };
};

export default function MovieDetail({
  params: { id },
  searchParams: { region, lang },
}: MovieProps) {
  /*   const id = params.id;
  const region = searchParams.region;
  const lang = searchParams.lang;
 */
  console.log("id: ", id);
  console.log("region: ", region);
  console.log("lang: ", lang);

  return (
    <>
      <h1>Movie {Number(id)} Info</h1>
      <div>region: {region}</div>
      <div>language: {lang}</div>
    </>
  );
}
