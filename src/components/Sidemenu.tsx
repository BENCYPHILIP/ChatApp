import {  Avatar, Icon, Link } from '@chakra-ui/react'
import {BsBell, BsCalendar, BsFillChatLeftTextFill, BsGear, BsHouseDoor, BsPerson, BsPower} from 'react-icons/bs'
import {Flex, Heading} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Sidemenu=()=>{
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/");
      }
    return (

        
            <Flex w="15%" flexDir={'column'} alignItems={'center'} backgroundColor="white" color="black">
                    <Flex flexDir={'column'} justify="space-between" h="100vh">
                        <Flex flexDirection={'column'} as="nav">

                        <Flex flexDir={'column'} alignItems="center" mb={10} mt={5}>
                            <Flex>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov'/>
                            </Flex>
                            <Flex>
                            <Heading mt={5} mb={5} fontSize="1xl" alignSelf={'center'} letterSpacing="tight">
                                Henry Jabbawockiez
                            </Heading>
                            </Flex>  
                        </Flex>                   
                            <Flex flexDirection={'column'} align="flex-start" justifyContent={'center'}>
                                <Flex className="sidemenu" style={{marginBottom: "1.5em"}}>
                                    <Link>
                                        <Icon as={BsHouseDoor} fontSize="1xl">
                                        
                                            Home
                                        </Icon>
                                    </Link>
                                    <Link>
                                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                                        HOME
                                    </Heading>
                                    </Link>
                                </Flex>

                                <Flex className="sidemenu" style={{marginBottom: "1.5em"}}>
                                    <Link>
                                        <Icon as={BsFillChatLeftTextFill} fontSize="1xl">
                                        
                                            CHAT
                                        </Icon>
                                    </Link>
                                    <Link>
                                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                                        CHAT
                                    </Heading>
                                    </Link>
                                </Flex>


                                <Flex className="sidemenu" style={{marginBottom: "1.5em"}}>
                                    <Link>
                                        <Icon as={BsPerson} fontSize="1xl">
                                        
                                            Contact
                                        </Icon>
                                    </Link>
                                    <Link>
                                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                                        CONTACT
                                    </Heading>
                                    </Link>
                                </Flex>


                                <Flex className="sidemenu" style={{marginBottom: "1.5em"}}>
                                    <Link>
                                        <Icon as={BsBell} fontSize="1xl">
                                        
                                            Notifications
                                        </Icon>
                                    </Link>
                                    <Link>
                                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                                    NOTIFICATIONS
                                    </Heading>
                                    </Link>
                                </Flex>

                                <Flex className="sidemenu" style={{marginBottom: "1.5em"}}>
                                    <Link>
                                        <Icon as={BsCalendar} fontSize="1xl">
                                        
                                            Calender
                                        </Icon>
                                    </Link>
                                    <Link>
                                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                                    CALENDER
                                    </Heading>
                                    </Link>
                                </Flex>

                                <Flex className="sidemenu">
                                    <Link>
                                        <Icon as={BsGear} fontSize="1xl">
                                        
                                            Settings
                                        </Icon>
                                    </Link>
                                    <Link>
                                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                                    SETTINGS
                                    </Heading>
                                    </Link>
                                </Flex>

                                
                            </Flex>
                        </Flex>
                        <Flex onClick={logout}>
                        <Link>
                                        <Icon as={BsPower} fontSize="1xl">
                                        
                                            LOGOUT
                                        </Icon>
                                    </Link>
                                    <Link>
                                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                                    LOGOUT
                                    </Heading>
                                    </Link>
                        </Flex>
                    </Flex>
            </Flex>
            
           
        
    )
}
export default Sidemenu;

















