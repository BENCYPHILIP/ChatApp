import { Button, InputGroup, InputLeftElement} from '@chakra-ui/react'
import {Flex, Heading} from '@chakra-ui/react';
import { BsPlus, BsSearch } from "react-icons/bs";

const Chatssection = () => {
  
    return (
      
        <Flex w="40%" p="3%" flexDir={'column'} overflow="auto" minH={'100vh'} backgroundColor="#EDF2F7">
        <Flex >
                       <Flex >
                       <Heading fontSize="2xl" letterSpacing="tight">
                           Chats
                       </Heading>

                       </Flex>
                       <Flex ml={210} mt={2}>
                       <Button leftIcon={<BsPlus/>}  style={{width: "200px",height: "40.57px"}} colorScheme='blue' variant='solid'>
                       Create New Chat
                       </Button>

                       </Flex>  

        </Flex>

        <Flex alignContent={'center'} p={5}>
          {/* <InputGroup bgColor={"#fff"} mb={'6'} border="none" borderColor={"#fff"}  mr={2}> */}
            {/* <InputLeftElement pointerEvents={"none"}  children={<BsSearch color="gray"/>}/> */}
            {/* <input type="text" placeholder="search" /> */}
           
          {/* </InputGroup> */}

        </Flex>
                   </Flex>  



       

    )

}
export default Chatssection;
