import React from "react";
import ChannelButton from "../ChannelButton";
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {

  return (
  
    <Container>

    <Category>

    <span>Canais de texto</span>
    <AddCategoryIcon />
    </Category>

    <ChannelButton channelName="chat-livre" />
    <ChannelButton channelName="Runas Aphelios" />
    <ChannelButton channelName="Runas Gnar" />
    <ChannelButton channelName="Runas Jinx" />
    <ChannelButton channelName="Runas Lucian" />
    <ChannelButton channelName="Runas Zed" />

    </Container>

 
  );
  
};

export default ChannelList;