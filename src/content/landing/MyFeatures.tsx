import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { BsStars, BsCodeSquare, BsViewList } from "react-icons/bs";

import Feature from "@/components/Feature";

export default function MyFeatures() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={BsStars} w={10} h={10} />}
          title={"Clean & Intuitive"}
          text={
            "Keep the UI clean with a modern touch without compromising UX."
          }
        />
        <Feature
          icon={<Icon as={BsViewList} w={10} h={10} />}
          title={"Detail Oriented"}
          text={
            "Awareness to ease of access, UI consistency, and improved UX."
          }
        />
        <Feature
          icon={<Icon as={BsCodeSquare} w={10} h={10} />}
          title={"Pretty & Optimized"}
          text={
            "Writing clean code is a top priority while keeping it as optimized as possible."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
