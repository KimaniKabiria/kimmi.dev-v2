import Link from "next/link";
import { Box, Stack, Text, Tooltip, Icon } from "@chakra-ui/react";
import {
  SiChakraui,
  SiNextdotjs,
  SiVercel,
  SiTurborepo,
  SiTailwindcss,
  SiFigma,
  SiFacebook,
  SiInstagram,
  SiX,
  SiGithub,
} from "react-icons/si";
import { IconType } from "react-icons/lib";

interface ToolBoxItems {
  label?: string;
  icon?: IconType;
  href?: string | undefined;
}

const TOOLBOX_ITEMS: Array<ToolBoxItems> = [
  {
    label: "Figma",
    icon: SiFigma,
    href: "https://www.figma.com/",
  },
  {
    label: "Tailwind",
    icon: SiTailwindcss,
    href: "https://tailwindcss.com/",
  },
  {
    label: "Chakra UI",
    icon: SiChakraui,
    href: "https://chakra-ui.com/",
  },
  {
    label: "Next Js",
    icon: SiNextdotjs,
    href: "https://nextjs.org/",
  },
  {
    label: "Vercel",
    icon: SiVercel,
    href: "https://vercel.com/",
  },
  {
    label: "Turbo Repo",
    icon: SiTurborepo,
    href: "https://turbo.build/",
  },
];

export default function Footer() {
  return (
    <Box display="flex" width="full" p={{base: 10, md: 20}}>
      <Stack width="full">
        <Box
          display="flex"
          flexDirection="column"
          width="full"
          justifyContent="center"
        >
          <Text as="p" fontSize={{base: "lg", md: "md"}} textAlign="center">
            This website was handcrafted with plenty cups of ☕
          </Text>
          <Text as="p" fontSize={{base: "lg", md: "md"}} textAlign="center">
            by <span className="font-semibold">Kimani Kabiria</span> using:
          </Text>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center" gap={4} py="4">
          {TOOLBOX_ITEMS.map((ToolBoxItem) => (
            <>
              <Tooltip label={ToolBoxItem.label}>
                <Link href={ToolBoxItem.href!}>
                  <Icon as={ToolBoxItem.icon} w={6} h={6} />
                </Link>
              </Tooltip>
            </>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

