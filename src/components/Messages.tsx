 
import { Avatar, Box,Text, Flex, AvatarBadge, Circle, Icon, Link, Heading, InputGroup, InputLeftElement, InputRightElement, Input} from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons'
import { BsEmojiSmile, BsFilm, BsHouseDoor, BsThreeDotsVertical } from 'react-icons/bs';
import { RiSendPlaneLine, RiFilmLine } from "react-icons/ri";
import { MdInsertPhoto } from "react-icons/md";
import { VscAdd } from "react-icons/vsc";
import { HiOutlineDocumentRemove } from "react-icons/hi";
import { FiSmile } from "react-icons/fi";
const Messages =()=>{

    return (
      <Flex w="45%" p="3%" flexDir={'column'} overflow="auto" backgroundColor="#F7FAFC" >   
          <Box minW={'lg'} minH={'100%'} bg="white">
                <Box bg="gray.100" p={4} display="flex" >
                      <Avatar src="https://bit.ly/ryan-florence" >
                      <AvatarBadge boxSize='1em' bg='green.500' />
                      </Avatar>
                      <Box pl={2}>
                        <Text fontWeight={'semibold'} size="md">Ryan Florence</Text>
                        <Text size="md" color="blue.500">Active now</Text>
                      </Box>
                 <Box pl={60} >
                 <Flex >
                      
                      <Circle size="40px" bg="white" color="black" shadow='md' borderWidth='1px'>
                        <Icon as={AttachmentIcon} />
                      </Circle>
                  </Flex>
                 </Box>
                 
                  <Flex pl={'1em'}>
                      <Circle size="40px" bg="white" color="black" shadow='md' borderWidth='1px'>
                        <Icon as={BsThreeDotsVertical} />
                      </Circle>
                      
                   
                  </Flex>
                </Box>
                <Box>


                <Flex flexDirection={'column'} p={4} >
                                <Flex>
                                <Avatar src="https://bit.ly/ryan-florence" w={'10'} h={'10'} />
                                <Text fontSize="md" bg='#2A8BF2'color="white" p={3} ml={3} shadow='md'>
                                        Hello,How Are you
                                </Text>
                                </Flex>
                                <Flex>
                                <Text fontSize="md" bg='#2A8BF2'color="white" p={3} ml={51} mt={4} shadow='md'>
                                       where are you
                                </Text>
                                
                                
                                </Flex>
                                <Text fontSize="sm" ml={100}>
                                       4 days ago
                                </Text>
                                
                </Flex>
                </Box>
          

          <Box style={{ position: "absolute",width: "150px",height: "74px",left: "1145px",top: "290px"}}>
          <Text fontSize="md" bg='white'color="black" p={4} shadow='md'>
                                     Hi I am fine
                                </Text>
                                <Text fontSize="sm" ml={50} p={2}>
                                       4 days ago
                                </Text>
          </Box>


         

          <Box style={{  position: "absolute",width: "500px",height: "80px",left: "800px",top: "440px"}}>
         
            <Box>
            <Circle size="40px" bg="#2A8BF2" color="white">
                <Icon as={BsFilm} />
              </Circle>
              <Circle size="40px" bg="#2A8BF2" color="white">
                <Icon as={MdInsertPhoto} />
              </Circle>
              <Circle size="40px" bg="#2A8BF2" color="white">
                <Icon as={HiOutlineDocumentRemove} />
              </Circle>
              
              
            </Box>
          

          <InputGroup>
            <Circle size="40px" bg="#2A8BF2" color="white">
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={VscAdd} />}
              />
            </Circle>
            <Input type="" placeholder="Type a message here" size="lg" />
            <InputRightElement
              children={<Icon as={FiSmile} />}
              color="gray.500"
            />
           
          </InputGroup>
        </Box>
          </Box>
      </Flex>
    )
}
export default Messages; 