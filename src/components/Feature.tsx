import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack
      borderWidth="1px"
      borderRadius="xl"
      padding={6}
      backgroundColor={useColorModeValue("blackAlpha.200", "whiteAlpha.100")}
      shadow={"lg"}
      _hover={{shadow: "md"}}
      backdropFilter="saturate(150%) blur(1px)"
    >
      <Stack direction="row" spacing={5} align={"center"}>
        <Flex
          w={12}
          h={12}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
          textColor={"#c55333"}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
      </Stack>
      <Text color={useColorModeValue("gray.600", "white")}>{text}</Text>
    </Stack>
  );
};

export default Feature;
