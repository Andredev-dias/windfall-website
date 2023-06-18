import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/contact.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");

  const handleNomeChange = (event: any) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleAssuntoChange = (event: any) => {
    setAssunto(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (nome && email) {
      let mensagem = `Nome: ${nome} - `;
      mensagem += `Email: ${email} - `;

      if (assunto) {
        mensagem += `Assunto: ${assunto} `;
      }

      const numeroTelefone = "554199999999"; // Substitua pelo número de telefone correto

      window.open(
        `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(
          mensagem
        )}`,
        "_blank"
      );
    } else {
      alert("Por favor, preencha todos os campos do formulário.");
    }
  };

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
          <form
            onSubmit={handleSubmit}
            className={styles["wrap-form"]}
            target="_blank"
          >
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
                value={nome}
                onChange={handleNomeChange}
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
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className={styles["wrap-input"]}>
              <label className={styles["input-text"]} htmlFor="assunto">
                Assunto
              </label>
              <select
                className={styles["input-in"]}
                id="assunto"
                value={assunto}
                onChange={handleAssuntoChange}
              >
                <option value="">Selecione um assunto...</option>
                <option value="Matricula">Matricula</option>
                <option value="FAQ">FAQ</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            <button type="submit" className={styles["btn-send"]}>
              Enviar
            </button>
          </form>
        </section>
        <Footer />
      </main>
    </>
  );
}
