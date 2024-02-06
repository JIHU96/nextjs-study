import styles from "./Home.module.css";

export const metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
