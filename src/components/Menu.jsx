import React, { useEffect, useState } from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import Card from './Card';
import axios from 'axios';

const Menu = () => {
    const [backendData, setBackendData] = useState([{}])
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/canteen/menu").then((res) => setBackendData(res.data))
    },[])

    return (
        <Box width="full" height="max-content">
            <Box bg="white" w='full' textAlign="center" py="10" fontSize="4xl" fontWeight="extrabold" color='blackAlpha.800'>
                Menu
                <br></br>
                Today's Special
            </Box>
            <SimpleGrid columns={{ lg: 4, sm: 2, md: 3 }} spacing='40px' px="20">
                {
                    backendData.map(
                        (item) => {
                            return (
                                <Card title={item.title} amount={item.amount} imageLink={item.imageLink}></Card>
                            )
                        }
                    )
                }
            </SimpleGrid>
        </Box>
    )
}

export default Menu