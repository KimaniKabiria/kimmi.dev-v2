import Nav from "./Nav";
import { Container, useColorModeValue } from "@chakra-ui/react";

export default function Main({ children }) {
  return (
    <Container maxW="full" bg={useColorModeValue("#fcf6f3", "gray.800")}>
      <main className="">
        <Nav />
        <div className="background-grid background-grid--fade-out">
          {children}
        </div>
      </main>
    </Container>
  );
}
