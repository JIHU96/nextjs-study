"use client";

import { RecoilRoot } from "recoil";
import RecoilTest from "../recoil-test/RecoilTest";
import NavBar from "../nav/NavBar";

interface Props {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
  return (
    <RecoilRoot>
      <div className="container">
        <RecoilTest />
        {children}
      </div>
    </RecoilRoot>
  );
}
