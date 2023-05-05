import * as React from "react";
import {
  Container,
  chakra,
  Stack,
  Text,
  Button,
  Box,
  useColorModeValue,
  Divider,
  Center,
} from "@chakra-ui/react";
import Lottie from "react-lottie";
import clsx from "clsx";

import { FaGithub, FaFileAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFlutter,
  SiVisualstudiocode,
  SiFigma,
} from "react-icons/si";
import Dev from "../../assets/lotties/94388-african-developer.json";
import Call from "../../assets/lotties/icons/call.json";

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
    <div>
      <Container maxW={"full"} overflow={"hidden"} py={{ base: 8, md: 28 }}>
        <Stack
          direction={{ base: "column-reverse", lg: "row" }}
          spacing={6}
          alignItems={"center"}
        >
          <Box
            display="flex"
            flexDirection="column"
            w="100%"
            h="100%"
            alignItems={{ base: "center", sm: "start" }}
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
                alignItems={"center"}
              >
                <Button
                  backgroundColor={useColorModeValue(
                    "#C55333",
                    "whiteAlpha.100"
                  )}
                  color={useColorModeValue("white", "#C55333")}
                  variant="solid"
                  rounded="md"
                  size="md"
                  py={2}
                  display="flex"
                >
                    <Lottie options={callOptions} />
                {" "}Get in Touch
                </Button>
                <Button
                  leftIcon={<FaFileAlt />}
                  colorScheme="orangne"
                  variant="outline"
                  rounded="md"
                  size="sm"
                >
                  Resume
                </Button>
              </Stack>
            </Stack>
            <Stack
              direction={"column"}
              w={{ base: "100%", sm: "auto" }}
              spacing={5}
              alignItems={{ base: "center", sm: "start" }}
              marginTop={{ base: 12, sm: 48}}
            >
              <Text
                fontSize="sm"
                color={useColorModeValue("gray.700", "white")}
                textAlign={{ base: "center", md: "left" }}
              >
                current favorite tech stack/tools:
              </Text>
              <Stack direction="row" spacing={5}>
                <SiNextdotjs className="w-6 h-6" />
                <SiReact className="w-6 h-6" />
                <SiTailwindcss className="w-6 h-6" />
                <SiFlutter className="w-6 h-6" />
                <Center height="30px">
                  <Divider
                    orientation="vertical"
                    variant="dashed"
                    colorScheme="purple"
                    className="w-4"
                  />
                </Center>
                <SiVisualstudiocode className="w-6 h-6" />
                <SiFigma className="w-6 h-6" />
              </Stack>
            </Stack>
          </Box>
          <Box minW={{ base: "100%", sm: "80%", md: "50%" }}>
            <Lottie options={devOptions} />
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;
