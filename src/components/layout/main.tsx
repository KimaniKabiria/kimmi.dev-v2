import clsx from "clsx";
import Nav from "./nav";
import Footer from "./Footer";
import { Container, useColorModeValue } from "@chakra-ui/react";

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <Container maxW="full">
      <main
        className={clsx(
          "background-grid background-grid--fade-out border-divider-light z-[900]",
          "scrollbar-hide"
        )}
      >
        <Nav />
        <div className="px-4 sm:px-20 2xl:px-32">{children}</div>
        <Footer />
      </main>
    </Container>
  );
}
