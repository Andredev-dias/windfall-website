import styles from "@/styles/components/thirdSection.module.css";
import Link from "next/link";

function ThirdSection() {
  return (
    <section className={styles["wrap"]}>
      <h1 className={styles["title"]}>
        <strong className={styles["strong"]}>WindFall, </strong>
        sua escolha na hora de aprender idiomas!
      </h1>
      <Link href="/contact">
        <button className={styles["btn"]}>Assine ja</button>
      </Link>
    </section>
  );
}

export default ThirdSection;
