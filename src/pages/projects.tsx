import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/layout/main";

import Header from "@/components/layout/pages/header";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
    return (
        <Main>
            <Header title="Projects" description="Showcase of my work" />
        </Main>
    );
}
