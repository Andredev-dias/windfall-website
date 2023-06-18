import styles from "@/styles/components/firstSection.module.css";
import Image from "next/image";
import ex from "@/assets/images/apple-logo.webp";

function FirstSection() {
  return (
    <section className={styles["wrap-section"]}>
      <div className={styles["card"]}>
        <h1 style={{ fontSize: "2rem", color: "white", minHeight: "20px" }}>
          What is Lorem Ipsum?
        </h1>
        <p style={{ fontSize: "1.2rem", minHeight: "100px", color: "#9dc4e9" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been y of type and
        </p>
        <Image className={styles["img"]} src={ex} alt="imagem 1" />
      </div>
      <div className={styles["card"]}>
        <h1 style={{ fontSize: "2rem", color: "white", minHeight: "20px" }}>
          What is Lorem Ipsum?
        </h1>
        <p style={{ fontSize: "1.2rem", minHeight: "100px", color: "#9dc4e9" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
        <Image className={styles["img"]} src={ex} alt="imagem 2" />
      </div>
      <div className={styles["card"]}>
        <h1 style={{ fontSize: "2rem", color: "white", minHeight: "20px" }}>
          What is Lorem Ipsum?
        </h1>
        <p style={{ fontSize: "1.2rem", minHeight: "100px", color: "#9dc4e9" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem. It has survived not only
        </p>
        <Image className={styles["img"]} src={ex} alt="imagem 3" />
      </div>
    </section>
  );
}

export default FirstSection;
