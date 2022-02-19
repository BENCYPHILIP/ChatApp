import { Button, Icon,InputGroup, InputLeftElement, Box, Menu, MenuButton, MenuList, MenuItem, Input} from '@chakra-ui/react'
import {Flex, Heading} from '@chakra-ui/react';
import { BsChevronDown, BsPlus, BsSearch } from "react-icons/bs";
import Chatlist from './Chatlist';
import person from '../person';
import { useState } from 'react';
const Chatssection = () => {
 
    const [personsdetails,setpersonsdetails]=useState(person)
    return (   
        <Flex w="40%" p="3%" flexDir={'column'} overflow="auto" minH={'100vh'} backgroundColor="#EDF2F7">
        <Box>
            <Heading fontSize="3xl">
              Chats
            </Heading>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                rounded="md"
                borderWidth="1px"
                _hover={{ bg: "gray.100" }}
                _expanded={{ bg: "red.200" }}
                _focus={{ outline: 0, boxShadow: "outline" }}
              >
                Recent Chats <Icon as={BsChevronDown} />
              </MenuButton>
              <MenuList>
                <MenuItem>Find Chat</MenuItem>
                <MenuItem>New Chat</MenuItem>
              </MenuList>
            </Menu>
            <Button leftIcon={<BsPlus/>}  mb={9} ml={100} style={{width: "200px",height: "40.57px"}} colorScheme='blue' variant='solid'>
                            Create New Chat
            </Button>
        </Box>  
        <Box>
        <InputGroup style={{ background: "white"}}>
          <InputLeftElement pointerEvents="none" children={<Icon as={BsSearch} />}/>
          <Input type="text" placeholder="Search" />
          <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                rounded="md"
                borderWidth="1px"
                bg={"white"}
                _hover={{ bg: "white" }}
                _expanded={{ bg: "red.200" }}
                _focus={{ outline: 0, boxShadow: "outline" }}
              >
                Message
              </MenuButton>
              <MenuList>
                <MenuItem>Find Chat</MenuItem>
                <MenuItem>New Chat</MenuItem>
              </MenuList>
            </Menu>
        </InputGroup>
        </Box>
      <Flex>
      <Box>
          {
          personsdetails.map((details) => (
           <Chatlist
             name={details.name}
              time={details.time}
              message={details.message}
              photo={details.photourl}></Chatlist>  
          ))
          }
        </Box>
      </Flex>   
</Flex>  
    )

}
export default Chatssection;
