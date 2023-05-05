import Nav from "./Nav";
import { Container, useColorModeValue } from "@chakra-ui/react";

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <Container maxW="full" bg={useColorModeValue("#fcf6f3", "gray.800")}>
      <main className="">
        <Nav />
        <div className="">
          {children}
        </div>
      </main>
    </Container>
  );
}