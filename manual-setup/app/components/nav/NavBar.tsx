"use client";

import styles from "./NavBar.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function NavBar() {
  // url값 반환
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div>
          <Link href={"/"}>Home</Link> {path === "/" && "🏠"}
        </div>
        <div>
          <Link href={"/test"}>test</Link> {path === "/test" && "😛"}
        </div>
        <div>
          <Link href={"/about-us"}>about-us</Link>{" "}
          {path === "/about-us" && "📇"}
        </div>
      </div>
    </nav>
  );
}
