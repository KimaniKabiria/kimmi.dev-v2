import clsx from "clsx";
import { Box, Stack, Text, chakra, useColorModeValue } from "@chakra-ui/react";

import { QuoteIcon } from "@/components/Icons";

function Quote() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignContent={"cente"}
      py={20}
      maxW={"full"}
    >
      <Box w={40} h={28} p={6} color={"blackAlpha.300"}>
        <QuoteIcon />
      </Box>

      <Stack direction={"column"} w="50%" spacing={{ base: 1, sm: -1 }}>
        <Text
          fontWeight="medium"
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "3xl", md: "4xl" }}
        >
          I Would love to
        </Text>
        <Stack direction={"row"} alignItems={"center"}>
          <Box backgroundColor={"blackAlpha.400"} w={12} h={2} />
          <Text
            fontWeight="medium"
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            <chakra.span
              bg={useColorModeValue(
                "linear-gradient(transparent 50%, rgba(35, 7, 77, 0.10) 50%)",
                "linear-gradient(transparent 50%, rgba(197, 83, 51, 0.10) 50%)"
              )}
              color={useColorModeValue("blackAlpha.700", "#c55333")}
              fontWeight={"semibold"}
            >
              Change the world
            </chakra.span>
          </Text>
          <Box backgroundColor={"blackAlpha.400"} w={12} h={2} />
        </Stack>
        <Text
          fontWeight="medium"
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "3xl", md: "4xl" }}
        >
          but they wont share the &nbsp;
          <chakra.span
            bg={useColorModeValue(
              "linear-gradient(transparent 50%, rgba(35, 7, 77, 0.10) 50%)",
              "linear-gradient(transparent 50%, rgba(197, 83, 51, 0.10) 50%)"
            )}
            color={useColorModeValue("blackAlpha.700", "#c55333")}
            fontWeight={"semibold"}
          >
            source code
          </chakra.span>
        </Text>
        <Text
          fontWeight="medium"
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "3xl", md: "5xl" }}
        ></Text>
      </Stack>
    </Box>
  );
}

export default Quote;
