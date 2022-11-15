import React from 'react'
import { Box, Text,VStack, Image, AspectRatio, Flex, Center, Heading } from '@chakra-ui/react';

const Hero = () => {
    return (
        <Flex direction="column" color='white' position="relative">
            <Box zIndex='2' w='full' height="full" color='white' >
                <AspectRatio maxW='full' ratio={2 / 1} >
                    <Image src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='naruto' objectFit='cover' />
                </AspectRatio>
            </Box>
            <Box zIndex="4" w='full' position="absolute" height="full" color='white' bg="blackAlpha.600">
                <Center width="full" height="full" >
                    <VStack>
                        <Heading>Welcome to VIT Canteen</Heading>
                        <Text align='center' fontSize="lg">
                            "A place where great ideas and bad decisions are born."
                        </Text>
                    </VStack>
                </Center>
            </Box>
        </Flex>
    )
}

export default Hero