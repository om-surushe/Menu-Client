import React from 'react';
import { Box, Image, AspectRatio } from '@chakra-ui/react';

function Card(props) {

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' color="black">
            <AspectRatio maxW='full' ratio={1}>
                <Image src={props.imageLink} alt={props.title} />
            </AspectRatio>
            <Box p='6'>
                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                    {props.title}
                </Box>
                <Box>
                    ₹{props.amount}
                </Box>
            </Box>
        </Box>
    )
}

export default Card;