import { Text,Flex,Box,Avatar} from '@chakra-ui/react'

const Chatlist = (props:any) => {
    return(
        <Flex height="170px" width="100%" align="flex-start" pt={3} flexDir={'column'} >
            <Box overflow="auto" bg="white" shadow='md' borderWidth='1px' >
                <Flex justifyContent="space-between" p={3.5} >
                    <Box w={80}>
                        <Avatar src={props.photo} />
                            <Text fontWeight={'semibold'} size="md" mt={2}>{props.name}</Text>
                    </Box>
                            <Text fontWeight={'semibold'} size="md" >{props.time}</Text>
                </Flex>
                <Text fontWeight={'semibold'} size="md" p={2}>{props.message}</Text>
            </Box>
      </Flex>
    )
}
export default Chatlist;