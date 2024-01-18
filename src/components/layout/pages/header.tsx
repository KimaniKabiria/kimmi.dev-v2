import clsx from "clsx";
import { m } from "framer-motion";

import type { ReactNode } from "react";

const animation = {
    hide: { x: -32, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
    },
};

import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";

interface HeaderProps {
    title: string;
    description: string;
    caption?: string;
    headerImage?: ReactNode;
}

function Header({
    title,
    description,
    caption = "",
    headerImage = null,
}: HeaderProps) {
    return (
        <Box p={20}>
            <Stack>
                {caption && (
                    <Box>
                        <span className="mb-1 block text-lg font-extrabold capitalize leading-none md:mb-0 md:text-2xl">
                            {caption}
                        </span>
                    </Box>
                )}
                <Box>
                    <h1 className="text-[2.5rem] font-bold leading-tight md:text-7xl md:leading-snug">
                        {title}
                    </h1>
                </Box>
                <Box>
                    <Text fontSize={"xl"} color={""}>
                        {description}
                    </Text>
                </Box>
            </Stack>
        </Box>
    );
}

export default Header;
