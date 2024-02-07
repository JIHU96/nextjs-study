"use client";

import { useRecoilValue } from "recoil";
import { movie } from "../../../recoil-states/states";

export default function RecoilTest() {
  const title = useRecoilValue(movie.title);

  return <div>1 {title}</div>;
}
