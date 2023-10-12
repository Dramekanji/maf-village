import Image from "next/image";
import Hero from "@/components/Hero";

import { Inter } from "next/font/google";
import Head from "next/head";
import Rooms from "./Rooms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maf Village</title>
        <meta name="description" content="Generated by kanjī."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        heading="MAF VILLAGE"
        message="Adoptez les traditions sereines au coeur de Maferinya."
      />
      <Rooms />
    </div>
  );
}
