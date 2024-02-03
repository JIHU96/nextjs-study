"use client";

import styles from "./NavBar.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  // url값 반환
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.div}>
          <Link href={"/"}>Home</Link> {path === "/" && "🏠"}
        </div>
        <div className={styles.div}>
          <Link href={"/movies/1?region=seoul&lang=kr"}>movies</Link>{" "}
          {path === "/movies" && "🎬"}
        </div>
        <div className={styles.div}>
          <Link href={"/about-us"}>about-us</Link>{" "}
          {path === "/about-us" && "📇"}
        </div>
      </div>
    </nav>
  );
}
