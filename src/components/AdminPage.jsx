import React, { useState } from 'react'
import {
    Box, VStack, Container, Center, Input, FormControl,
    FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button
} from '@chakra-ui/react'
import axios from 'axios'

const AdminPage = () => {

    const [image, setImage] = useState()
    const [imageLink, setImageLink] = useState("")
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {

            const data = new FormData()
            data.append("file", image)
            data.append("upload_preset", "menuapp")
            data.append("cloud_name", "dvgvxr1uh")

            

            axios.post("https://api.cloudinary.com/v1_1/dvgvxr1uh/image/upload", data).then(
                (res) => {
                    console.log(res)
                    setImageLink(res.data.url)
                    console.log(imageLink)
                    var item = {
                        "title": title,
                        "amount": amount,
                        "imageLink": res.data.url
                    }
                    axios.post("https://canteen-server.onrender.com/api/canteen/add", item).then(
                        (res) => console.log(res)
                    ).catch(
                        (err) => {
                            console.log(err.response.data)
                        }
                    )
                }
            ).catch(
                (err) => {
                    console.log(err.response.data)
                }
            )


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Center>
            <Container m="5" py="20" width="container.lg" shadow="2xl">
                <Box bg="white" w='full' textAlign="center" py="10" fontSize="4xl" fontWeight="extrabold" color='blackAlpha.800'>
                    Add new entries to Menu
                </Box>
                <form onSubmit={onSubmitHandler}>
                    <VStack spacing="30px">
                        <FormControl isRequired>
                            <FormLabel>Dish Name</FormLabel>
                            <Input placeholder='Dish Name' onChange={(e) => { setTitle(e.target.value) }} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Price</FormLabel>
                            <NumberInput min={0} max={10000000} onChange={(e) => { setAmount(e) }}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Dish Image</FormLabel>
                            <Input type="file" variant='unstyled' placeholder='Unstyled' accept='image/*' onChange={(e) => {
                                setImage(e.target.files[0]);
                            }} />
                        </FormControl>
                        <Button colorScheme='blue' type='submit'>Add</Button>
                    </VStack>
                </form>
            </Container>
        </Center>
    )
}

export default AdminPage