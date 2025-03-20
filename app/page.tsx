import Image from "next/image";

import styles from "@/styles/home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
