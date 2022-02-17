import * as React from "react";
import { Button} from '@chakra-ui/react'
import {Flex, Heading} from '@chakra-ui/react';
import { BsPlus } from "react-icons/bs";

export default class Chatsection extends React.Component <{}> {
  render() {
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
                   </Flex>  
       

    )}
}

