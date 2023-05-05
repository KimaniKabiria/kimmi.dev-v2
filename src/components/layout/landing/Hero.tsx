import * as React from "react";
import {
  Container,
  chakra,
  Stack,
  Text,
  Button,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Lottie from "react-lottie";
import clsx from 'clsx';

import { FaGithub, FaFileAlt } from "react-icons/fa";
import Dev from "../../../assets/lotties/94388-african-developer.json";
import Call from "../../../assets/lotties/icons/call.json";

const Hero = () => {
  const devOptions = {
    loop: true,
    autoplay: true,
    animationData: Dev,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const callOptions = {
    loop: true,
    autoplay: true,
    animationData: Call,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={clsx('background-grid background-grid--fade-out border-divider-light z-[900]')}>
      <Container
        maxW={"full"}
        overflow={"hidden"}
        py={{ base: 8, md: 24 }}
        px={{ base: 4, md: 12 }}
      >
        <Stack
          direction={{ base: "column-reverse", lg: "row" }}
          spacing={6}
          alignItems={"center"}
        >
          <Stack
            direction="column"
            spacing={6}
            alignItems="flex-start"
            py={{ base: 12, md: 0 }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"full"}
              alignItems={{ base: "center", md: "flex-start" }}
              justifyItems={{ base: "center", md: "flex-start" }}
            >
              <Text
                fontWeight="medium"
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Hi there 👋,
              </Text>
              <chakra.h1
                fontSize={{ base: "3xl", sm: "6xl" }}
                fontWeight="bold"
                textAlign={{ base: "center", md: "left" }}
                minW="full"
              >
                I am{" "}
                <chakra.span
                  color="#c55333"
                  bg={useColorModeValue(
                    "linear-gradient(transparent 50%, rgba(35, 7, 77, 0.10) 50%)",
                    "linear-gradient(transparent 50%, rgba(197, 83, 51, 0.10) 50%)"
                  )}
                >
                  Alvin Kimani
                </chakra.span>
              </chakra.h1>
            </Box>
            <Text
              fontSize="xl"
              color={useColorModeValue("gray.700", "white")}
              textAlign={{ base: "center", md: "left" }}
            >
              A{" "}
              <chakra.span
                bg="linear-gradient(transparent 50%, rgba(197, 83, 51, 0.20) 50%)"
                color={useColorModeValue("#23074d", "white")}
                fontWeight={"semibold"}
              >
                Front-End Web & Mobile Developer | UI / UX Designer
              </chakra.span>{" "}
              , who loves intuitive, clean and modern UI design.
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              w={{ base: "100%", sm: "auto" }}
              spacing={5}
            >
              <Button
                colorScheme="orange"
                variant="solid"
                rounded="md"
                size="lg"
                height="3.5rem"
                fontSize="1.2rem"
              >
                <div className="flex w-8 h-8 mr-4">
                  <Lottie options={callOptions} />
                </div>
                Get in Touch
              </Button>
              <Button
                leftIcon={<FaFileAlt />}
                colorScheme="orangne"
                variant="outline"
                rounded="md"
                size="md"
                height="3.5rem"
                fontSize="1.2rem"
              >
                Resume
              </Button>
            </Stack>
          </Stack>
          <Box minW={{ base: "100%", sm: "80%", md: "50%" }}>
            <Lottie options={devOptions} />
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;
