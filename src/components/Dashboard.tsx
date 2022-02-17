import * as React from "react";
import {Flex,} from '@chakra-ui/react';
import Sidemenu from './Sidemenu';
import Chatsection from "./Chatsection";
import Messages from "./Messages";

export default class Dashboard extends React.Component <{}> {
  render() {
    return (
        <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
          <Sidemenu/>
          <Chatsection/>
          <Messages/>
        </Flex>
    )}
}


















