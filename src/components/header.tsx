import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/header.module.css";
import logo from "@/assets/images/apple-logo.webp";

function Header() {
  return (
    <header>
      <nav className={styles["nav-flex"]}>
        <Image src={logo} alt="Logo" className={styles["logo-for-nav"]} />
        <ul className={styles["ul"]}>
          <li className={styles["li"]}>
            <Link href="/">Principal</Link>
          </li>
          <li className={styles["li"]}>
            <Link href="/about">Sobre</Link>
          </li>
          <li className={styles["li"]}>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
