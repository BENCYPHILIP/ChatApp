 
import { Avatar, Box,Text, Flex, AvatarBadge, Circle, Icon} from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons'
import { BsThreeDotsVertical } from 'react-icons/bs';

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
          </Box>
      </Flex>
    )
}
export default Messages; 