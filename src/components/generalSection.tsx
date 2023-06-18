import Image from "next/image";
import ex from "@/assets/images/apple-logo.webp";
import styles from "@/styles/components/general.module.css";
import Link from "next/link";

function GeneralSection() {
  return (
    <section className={styles["wrap-section"]}>
      <div className={styles["wrap-divs"]}>
        <div className={styles["wrap-info-btn"]}>
          <h1 className={styles["title"]}>Metodologia</h1>
          <p className={styles["p"]}>
            Tudo para oferecer a você uma experiência de imersão cultural
            instigante, te ajudando a pensar em inglês e tornando seu
            aprendizado muito mais fácil
          </p>
          <Link href="/about">
            <button className={styles["btn"]}>Saiba mais</button>
          </Link>
        </div>
        <div>
          <Image src={ex} alt="imagem" className={styles["imgGeneral"]} />
        </div>
      </div>
    </section>
  );
}

export default GeneralSection;
