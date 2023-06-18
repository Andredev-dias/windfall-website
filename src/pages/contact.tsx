import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/contact.module.css";

const inter = Inter({ subsets: ["latin"] });
export default function Contact() {
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
        <section className={styles["wrap-all"]}>
          <form action="" className={styles["wrap-form"]}>
            <div className={styles["wrap-title"]}>
              <h1 className={styles["title"]}>Contate-nos pelo Whatsapp</h1>
              <p className={styles["p"]}>
                Nesta parte nos informe seus dados para facilitar o contato
                adintando o assunto referente.
              </p>
            </div>
            <div className={styles["wrap-input"]}>
              <label className={styles["input-text"]} htmlFor="nome">
                Nome
              </label>
              <input
                className={styles["input-in"]}
                id="nome"
                type="text"
                placeholder="Digite seu nome..."
              />
            </div>
            <div className={styles["wrap-input"]}>
              <label className={styles["input-text"]} htmlFor="email">
                Email
              </label>
              <input
                className={styles["input-in"]}
                id="email"
                type="email"
                placeholder="Digite seu email..."
              />
            </div>

            <div className={styles["wrap-input"]}>
              <label className={styles["input-text"]} htmlFor="telefone">
                Assunto
              </label>
              <select className={styles["input-in"]} id="telefone">
                <option value="">Selecione um assunto...</option>
                <option value="Matricula">Matricula</option>
                <option value="FAQ">FAQ</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            <button className={styles["btn-send"]}>Enviar</button>
          </form>
        </section>
        <Footer />
      </main>
    </>
  );
}
