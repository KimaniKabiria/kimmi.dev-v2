import clsx from "clsx";
import Nav from "./Nav";
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
      </main>
    </Container>
  );
}
