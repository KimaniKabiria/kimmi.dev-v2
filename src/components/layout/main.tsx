import Nav from "./nav";
import { Container } from "@chakra-ui/react";

export default function Main({ children }) {
  return (
    <Container maxW="full">
      <main className="">
        <Nav />
        <div className="">
          {children}
        </div>
      </main>
    </Container>
  );
}
