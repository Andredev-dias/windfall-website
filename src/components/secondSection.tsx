import styles from "@/styles/components/secondSection.module.css";
import Image from "next/image";

import imgex from "@/assets/images/background.png";

function SecondSection() {
  return (
    <section className={styles["wrap-section"]}>
      <div className={styles["title-div"]}>
        <h1 style={{ fontSize: "2.8rem", color: "#003f60", minHeight: "20px" }}>
          Servicos
        </h1>
        <h5
          style={{
            fontSize: "1.2rem",
            minHeight: "100px",
            color: "#097ab2",
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          A escola de ingles tem como intuito interagir e converter, e ensinar
          com bastante grandeza.Epcot is a theme park at Walt Disney World
          Resort featuring exciting attractions.
        </h5>
      </div>
      <div className={styles["cards-div"]}>
        <div className={styles["wrap-det-img"]}>
          <details className={styles["dt"]}>
            <summary
              style={{
                fontSize: "1.6rem",
                color: "#003f60",
                marginBottom: "10px",
              }}
            >
              Epcot Center
            </summary>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#003f60",
                padding: "30px",
                borderRadius: "10px",
                background: "#9dc4e9",
                marginBottom: "10px",
              }}
            >
              Epcot is a theme park at Walt Disney World Resort featuring
              exciting attractions, international pavilions, award-winning
              fireworks and seasonal special events.
            </p>
          </details>
          <Image
            src={imgex}
            alt="image service 1"
            className={styles["img-sizing"]}
          />
        </div>
        <div className={styles["wrap-det-img"]}>
          <details className={styles["dt"]}>
            <summary
              style={{
                fontSize: "1.6rem",
                color: "#003f60",
                marginBottom: "10px",
              }}
            >
              Epcot Center
            </summary>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#003f60",
                padding: "30px",
                borderRadius: "10px",
                background: "#9dc4e9",
                marginBottom: "10px",
              }}
            >
              Epcot is a theme park at Walt Disney World Resort featuring
              exciting attractions, international pavilions, award-winning
              fireworks and seasonal special events.
            </p>
          </details>
          <Image
            src={imgex}
            alt="image service 1"
            className={styles["img-sizing"]}
          />
        </div>
        <div className={styles["wrap-det-img"]}>
          <details className={styles["dt"]}>
            <summary
              style={{
                fontSize: "1.6rem",
                color: "#003f60",
                marginBottom: "10px",
              }}
            >
              Epcot Center
            </summary>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#003f60",
                padding: "30px",
                borderRadius: "10px",
                background: "#9dc4e9",
                marginBottom: "10px",
              }}
            >
              Epcot is a theme park at Walt Disney World Resort featuring
              exciting attractions, international pavilions, award-winning
              fireworks and seasonal special events.
            </p>
          </details>
          <Image
            src={imgex}
            alt="image service 1"
            className={styles["img-sizing"]}
          />
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
