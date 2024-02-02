"use client";

import styles from "./NavBar.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();

  console.log(path);

  return (
    <nav className={styles.nav}>
      <div className={styles.div}>
        <div>
          <Link href={"/"}>Home</Link> {path === "/" && "🏠"}
        </div>
        <div>
          <Link href={"/about-us"}>about-us</Link>{" "}
          {path === "/about-us" && "📇"}
        </div>
      </div>
    </nav>
  );
}
