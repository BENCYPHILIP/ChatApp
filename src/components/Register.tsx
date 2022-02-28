import { Avatar, Box, Flex, FormControl, Heading, InputGroup,Input,Stack, Button, FormLabel } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from "react-router-dom";
const Register=()=>{
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const registration=()=>
    {
        localStorage.setItem("name",name)
        localStorage.setItem("place",place)
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
    }
    return(
        <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Register Here</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl isRequired>
                <FormLabel htmlFor='name'>Name</FormLabel>
                  <InputGroup> 
                    <Input type="text" placeholder="Name" value={name}
            onChange={(event) => setName(event.target.value)}/>
                  </InputGroup>
                </FormControl>
                <FormControl  isRequired>
                <FormLabel htmlFor='place'>Place</FormLabel>
                  <InputGroup> 
                    <Input type="text" placeholder="Place" value={place}
            onChange={(event) => setPlace(event.target.value)}/>
                  </InputGroup>
                </FormControl>
                <FormControl  isRequired>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                  <InputGroup> 
                    <Input type="email" placeholder="Email address" value={email}
            onChange={(event) => setEmail(event.target.value)}/>
                  </InputGroup>
                </FormControl>
                <FormControl  isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                  <InputGroup> 
                    <Input type="text" placeholder="password" value={password}
            onChange={(event) => setPassword(event.target.value)}/>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  onClick={registration}  >
                  Register
                </Button>
              </Stack>
              <Box>
                Already an account?{" "}
                <Link to ={"/"}>
                    Login
                </Link>
                </Box>
            </form>
          </Box>
        </Stack>
       
      </Flex>
    )
}
export default Register;