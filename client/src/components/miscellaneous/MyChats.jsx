import axios from "axios";
import { useEffect } from "react";
import { useChatState, useAuthState } from "../../context";
import { getSender } from "../../config/ChatLogics";

// ui
import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

import ChatLoading from "../ChatLoading";
import GroupChatModel from "./GroupChatModel";

const MyChats = ({ fetchAgain }) => {
  const { selectedChat, setSelectedChat, chats, setChats } = useChatState();
  const { user } = useAuthState();

  const fetchChats = async () => {
    const {
      data: {
        data: { chats },
      },
    } = await axios.get("/api/chat");

    setChats(chats);
  };

  useEffect(() => {
    fetchChats();
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="#253D5B"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "15px", md: "20px" }}
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        textColor="white"
      >
        <p>My Chats</p>
        <GroupChatModel>
          <Button
            bg="#5bcbcb"
            textColor="black"
            display="flex"
            fontSize={{ base: "15px", md: "10px", lg: "15px" }}
            rightIcon={<AddIcon />}
          >
            New Group Chat
          </Button>
        </GroupChatModel>
      </Box>

      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#ffffff"
        w="100%"
        h="100%"
        x
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY={scroll}>
            {chats?.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#5bcbcb" : "#E8E8E8"}
                color={selectedChat === chat ? "black" : "black"}
                px={3}
                py={3}
                borderRadius="lg"
                key={chat._id}
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(user, chat?.users)
                    : chat.chatName}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
