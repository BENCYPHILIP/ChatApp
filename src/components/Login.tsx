import { Alert, AlertIcon, Avatar, Box, Button, chakra, Flex, FormControl, FormHelperText, Heading, Input, InputGroup, InputLeftElement, InputRightElement,Stack } from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link, Navigate, useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const CFaUserAlt = chakra(FaUserAlt);
    const CFaLock = chakra(FaLock);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // function handleSubmit(event:any) {
    //     event.preventDefault();
        
    //     alert(`Email: ${email} & Password: ${password}`);
        
    // }
    const handleShowClick = () => setShowPassword(!showPassword);
    const signin=()=>{
        if("email" in localStorage && "password" in localStorage){
        //  alert('yes');
         navigate("/dashboard");
     } else {
        // alert('no');
        setIsLoggedIn(true)
     }
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
      <Heading color="teal.400">Please Login</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form >
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input type="email" placeholder="Username"  onChange={event => setEmail(event.currentTarget.value)}/>
              </InputGroup>
            </FormControl>
            <FormControl  isRequired>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"  onChange={event => setPassword(event.currentTarget.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link to={"/"}>forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
            onClick={signin}>
              Login
            </Button>
            {isLoggedIn ? (
          <Flex pt={10}>
            <Alert status="error">
              <AlertIcon />
            Invalid Data
            </Alert>
          </Flex>
        ) : ''}
          </Stack>
         
        </form>
      </Box>
    </Stack>
   
    <Box>
      New to us?{" "}
      <Link to ={"/register"}>
        Sign Up
      </Link>
    </Box>
  </Flex>
   )
}
export default Login;