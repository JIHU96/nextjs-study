import "./styles/reset.css";
import "./styles/global.css";
import NavBar from "./components/nav/NavBar";
import { Metadata } from "next";
import { RecoilRoot } from "recoil";
import RecoilTest from "./components/recoil-test/RecoilTest";
import CustomProvider from "./components/provider/CustomProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Studying...",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
