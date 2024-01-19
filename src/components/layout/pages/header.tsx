import clsx from 'clsx';
import { motion, isValidMotionProp } from 'framer-motion';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, chakra, shouldForwardProp } from "@chakra-ui/react";

import type { ReactNode } from 'react';

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const animation = {
    hide: { x: -32, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
    },
};

interface HeaderProps {
    title: string;
    description: string;
    caption?: string;
    headerImage?: ReactNode;
}

function Header({
    title,
    description,
    caption = '',
    headerImage = null,
}: HeaderProps) {
    return (
        <Box p={20}>
            <Stack>
                {caption && (
                    <ChakraBox
                        initial={animation.hide}
                        animate={animation.show}
                        transition={{ delay: 0 } as Transition<string & {}>}
                    >
                        <span
                            className='mb-1 block text-lg font-extrabold capitalize leading-none md:mb-0 md:text-2xl'
                        >
                            {caption}
                        </span>
                    </ChakraBox>
                )}
                <ChakraBox
                    initial={animation.hide}
                    animate={animation.show}
                    transition={{ delay: 0.1 } as Transition<string & {}>}
                >
                    <h1
                        className='text-[2.5rem] font-bold leading-tight md:text-7xl md:leading-snug'
                    >
                        {title}
                    </h1>
                </ChakraBox>
                <ChakraBox
                    initial={animation.hide}
                    animate={animation.show}
                    transition={{ delay: 0.2 } as Transition<string & {}>}
                >
                <Text fontSize={"xl"} color={""} >
                    {description}
                </Text>
                </ChakraBox>
            </Stack>
        </Box>
    );
}

export default Header;