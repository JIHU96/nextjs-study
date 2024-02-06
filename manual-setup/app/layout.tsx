import "./styles/reset.css";
import NavBar from "./components/NavBar";
import { Metadata } from "next";

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
        <div className="container">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
