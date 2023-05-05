import clsx from "clsx";
import { Box, Stack, Text, chakra, useColorModeValue } from "@chakra-ui/react";

import { BsQuote } from "react-icons/bs";
import { CgQuote } from "react-icons/cg";

function Quote() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignContent={"cente"}
      p={20}
    >
      <Stack direction={"column"} spacing={-1}>
        <Stack direction={"row"} spacing={{ base: 1, sm: 3 }}>
          <Text
            fontWeight="medium"
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "5xl", md: "6xl" }}
            color={"#c55333"}
          >
            &ldquo;
          </Text>
          <Text
            fontWeight="medium"
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "3xl", md: "6xl" }}
          >
            I Would love to &nbsp;
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
            ,
          </Text>
        </Stack>
        <Text
          fontWeight="medium"
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "3xl", md: "6xl" }}
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
      </Stack>
    </Box>
  );
}

export default Quote;
