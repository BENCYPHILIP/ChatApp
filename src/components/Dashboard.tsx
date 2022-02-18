import {Flex} from '@chakra-ui/react';
import Sidemenu from './Sidemenu';
import Chatsection from "./Chatsection";
import Messages from "./Messages";

const Dashboard=()=>{
    return (
        <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
          <Sidemenu/>
          <Chatsection/>
          <Messages/>
        </Flex>
    )
}
export default Dashboard;


















