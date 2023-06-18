import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/home.module.css";
import Link from "next/link";
import Header from "@/components/header";
import Banner from "@/components/banner";
import FirstSection from "@/components/firstSection";
import SecondSection from "@/components/secondSection";
import ThirdSection from "@/components/thirdSection";
import Footer from "@/components/footer";
import GeneralSection from "@/components/generalSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <Banner />
        <FirstSection />
        <SecondSection />
        <GeneralSection />
        <ThirdSection />
        <Footer />
      </main>
    </>
  );
}
