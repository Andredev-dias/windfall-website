import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/about.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThirdSection from "@/components/thirdSection";
import Image from "next/image";
import ex from "@/assets/images/background.png";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>WindFall</title>
        <meta name="description" content="Web Site Windfall" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <section className={styles["wrap-section"]}>
          <div className={styles["card"]}>
            <Image src={ex} alt="Imagem abouot 1" className={styles["img"]} />
            <div className={styles["card-wrap-words"]}>
              <h1 className={styles["title"]}>Algum titulo</h1>
              <p className={styles["p"]}>
                Sobre o titulo referente, paragrafro explicativo exemplo. sobre
                o titulo referente, paragrafro explicativo exemplo. sobre o
                titulo referente, paragrafro explicativo exemplo.
              </p>
            </div>
          </div>

          <div className={styles["card-reverse"]}>
            <Image src={ex} alt="Imagem abouot 1" className={styles["img"]} />
            <div className={styles["card-wrap-words"]}>
              <h1 className={styles["title"]}>Algum titulo</h1>
              <p className={styles["p"]}>
                Sobre o titulo referente, paragrafro explicativo exemplo. sobre
                o titulo referente, paragrafro explicativo exemplo. sobre o
                titulo referente, paragrafro explicativo exemplo.
              </p>
            </div>
          </div>

          <div className={styles["card"]}>
            <Image src={ex} alt="Imagem abouot 1" className={styles["img"]} />
            <div className={styles["card-wrap-words"]}>
              <h1 className={styles["title"]}>Algum titulo</h1>
              <p className={styles["p"]}>
                Sobre o titulo referente, paragrafro explicativo exemplo. sobre
                o titulo referente, paragrafro explicativo exemplo. sobre o
                titulo referente, paragrafro explicativo exemplo.
              </p>
            </div>
          </div>

          <div className={styles["card-reverse"]}>
            <Image src={ex} alt="Imagem abouot 1" className={styles["img"]} />
            <div className={styles["card-wrap-words"]}>
              <h1 className={styles["title"]}>Algum titulo</h1>
              <p className={styles["p"]}>
                Sobre o titulo referente, paragrafro explicativo exemplo. sobre
                o titulo referente, paragrafro explicativo exemplo. sobre o
                titulo referente, paragrafro explicativo exemplo.
              </p>
            </div>
          </div>
        </section>
        <ThirdSection />

        <Footer />
      </main>
    </>
  );
}
