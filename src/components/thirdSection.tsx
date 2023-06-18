import styles from "@/styles/components/thirdSection.module.css";

function ThirdSection() {
  return (
    <section className={styles["wrap"]}>
      <h1 className={styles["title"]}>
        <strong className={styles["strong"]}>WindFall, </strong>
        sua escolha na hora de aprender idiomas!
      </h1>
      <button className={styles["btn"]}>Assine ja</button>
    </section>
  );
}

export default ThirdSection;
