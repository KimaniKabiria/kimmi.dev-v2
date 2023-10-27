import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { GiThink } from "react-icons/gi";
import {
  FaProjectDiagram,
  FaLaptopCode,
  FaTools,
  FaGithub,
} from "react-icons/fa";
import { MdContacts, MdTimeline } from "react-icons/md";

import Image from "next/image";
// import { Image } from '@chakra-ui/react'

import Logo from "../../assets/images/logo.png";
import LogoWhite from "../../assets/images/logo_white.png";
import { IconType } from "react-icons/lib";


interface NavItem {
  label: string;
  icon: IconType;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}


const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Projects",
    icon: FaProjectDiagram,
    href: "#",
  },
  {
    label: "Work",
    icon: FaLaptopCode,
    children: [
      {
        label: "Skills & Tools",
        icon: FaTools,
        subLabel:
          "A look at all the programming languages, libraries, and tools I've worked with.",
        href: "#",
      },
      {
        label: "Experience",
        icon: MdTimeline,
        subLabel:
          "All about my freelance, self-employed, and professional work experience.",
        href: "#",
      },
    ],
  },
  {
    label: "My Thoughts",
    icon: GiThink,
    href: "https://themorningbeans.com",
  },
  {
    label: "Contact",
    icon: MdContacts,
    href: "#",
  },
];

export default function Nav() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position={"sticky"} top={"0"} zIndex={"sticky"} paddingTop={2}>
      <Flex
        bg={useColorModeValue(
          "rgba(252, 246, 243, 0.75)",
          "rgba(23, 25, 35, 0.75)"
        )}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        borderRadius={"xl"}
        shadow={"lg"}
        backdropFilter="saturate(150%) blur(3px)"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          {colorMode === "light" && (
            <Flex>
              <Image src={Logo} alt="Logo" width={200} />
            </Flex>
          )}
          {colorMode === "dark" && (
            <Flex>
              <Image src={LogoWhite} alt="Logo" width={200} />
            </Flex>
          )}

          <Flex display={{ base: "none", md: "flex" }} ml={10} my={"auto"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Flex display={{ base: "none", md: "flex" }} ml={10} my={"auto"}>
            <Button backgroundColor="transparent">
              <FaGithub />
            </Button>
          </Flex>
          <Button onClick={toggleColorMode} bg={"transparent"}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("#23074d", "gray.200");
  const linkHoverColor = useColorModeValue("#c55333", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Icon as={navItem.icon} w={4} h={4} color={"#c55333"} />
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                px={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, icon }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#fcf6f3", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Box
            display={"inline-flex"}
            gap={"8px"}
            alignContent={"center"}
            justifyItems={"center"}
          >
            <Icon as={icon} w={4} h={4} color={"#c55333"} />
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "#c55333" }}
              fontWeight={500}
            >
              {label}
            </Text>
          </Box>
          <Text fontSize={"2xs"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#c55333"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, icon }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Box
          display={"inline-flex"}
          gap={"8px"}
          alignContent={"center"}
          justifyItems={"center"}
          justifyContent={"center"}
        >
          <Icon as={icon} w={4} h={4} color={"#c55333"} />
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
        </Box>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                <Box
                  display={"flex"}
                  gap={"8px"}
                  alignContent={"center"}
                  justifyItems={"center"}
                  justifyContent={"center"}
                >
                  <Icon as={child.icon} w={4} h={4} color={"#c55333"} />
                  {child.label}
                </Box>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};