import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/banner.module.css";
import banner from "@/assets/images/background.png";

function Banner() {
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
        <form action="" className={styles["wrap-form"]}>
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
      </div>
    </section>
  );
}

export default Banner;
