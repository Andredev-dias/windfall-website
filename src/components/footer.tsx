import Image from "next/image";

import styles from "@/styles/components/footer.module.css";

import linkedin from "@/assets/icons/linkedin.svg";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import Link from "next/link";

import ex from "@/assets/images/apple-logo.webp";

function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["sections-container"]}>
        <div className={styles["logo-container"]}>
          <Link href="/">
            <Image src={ex} alt="Logo Alexandria" className={styles["logo"]} />
          </Link>
        </div>
        <div className={styles["footer-section"]}>
          <h1>Sobre</h1>
          <Link className={styles["footer-link"]} href="/about">
            Quem somos
          </Link>
        </div>
        <div className={styles["footer-section"]}>
          <h1>Servicos</h1>
          <Link className={styles["footer-link"]} href="/">
            servico 1
          </Link>
          <Link className={styles["footer-link"]} href="/">
            servico 2
          </Link>
          <Link className={styles["footer-link"]} href="/">
            servico 3
          </Link>
        </div>
        <div className={styles["footer-section"]}>
          <h1>Contato</h1>
          <p className={styles["footer-link"]}>(41) 99999-9999</p>
          <p className={styles["footer-link"]}>comercial@windfall.com</p>
          <Link className={styles["footer-link"]} href="/privacy">
            Política de privacidade
          </Link>
          <Link className={styles["footer-link"]} href="" target="_blank">
            Contato Jurídico
          </Link>
        </div>
        <div className={styles["footer-section"]}>
          <h1>Redes sociais</h1>
          <div className={styles["social-medias"]}>
            <Link href="https://www.facebook.com/" target="_blank">
              <Image src={facebook} alt="Facebook" />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <Image src={linkedin} alt="Linkedin" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Image src={instagram} alt="Instagram" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
