import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/banner.module.css";
import banner from "@/assets/images/background.png";

function Banner() {
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

      const numeroTelefone = "5541********"; // Substitua pelo número de telefone correto

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
    <section className={styles["section-wrap"]}>
      <Image
        src={banner}
        alt="Banner de fundo"
        className={styles["image-styling"]}
      ></Image>
      <div className={styles["wrap-banner-info"]}>
        <div className={styles["wrap-info"]}>
          <h1 className={styles["title-banner"]}>Titulo marca</h1>
          <p className={styles["p-banner"]}>
            lorem ipsum texto lorem ipsum humano lorem ipsum
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles["wrap-form"]}
          target="_blank"
        >
          <h2>Contato</h2>
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
            <label className={styles["input-text"]} htmlFor="telefone">
              Assunto
            </label>
            <select
              value={assunto}
              onChange={handleAssuntoChange}
              className={styles["input-in"]}
              id="telefone"
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
      </div>
    </section>
  );
}

export default Banner;
