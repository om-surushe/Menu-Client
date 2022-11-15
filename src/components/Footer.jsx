import React from 'react'
import { Box, Text, Link } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box w='full' mt="20" py="10" textAlign="center" bg="black" color='white'>
            <Text>
                Designed by{' '}
                <Link color='teal.500' href='http://omsurushe.bio.link/'>
                    Om Surushe
                </Link>
            </Text>
        </Box>
    )
}

export default Footer