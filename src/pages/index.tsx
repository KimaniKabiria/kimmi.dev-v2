import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/layout/Main";

import Hero from "@/content/landing/Hero";
import MyFeatures from "@/content/landing/MyFeatures";
import Quote from "@/content/landing/Quote";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Main>

    <Hero />

    <MyFeatures />

    <Quote />
    
    </Main>
  );
}
