import React, { useEffect, useState } from "react";
import { dbService } from "../Fbase";
import Chatting from "../components/Chatting";
import ChatFactory from "../components/ChatFactory";

const Chat = ({userObject}) => {
    const [chats, setChats] = useState([]);
    useEffect(() => {
        dbService.collection("chats").onSnapshot((snapshot) => {
            const chatArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setChats(chatArray);
        })
    }, [])
    return (
        <div>
            <ChatFactory userObject={userObject} />
            <div>
                {chats.map((chat) => 
                (<Chatting key={chat.id} chatObj={chat} isOwner={chat.creatorId === userObject.uid} />
                ))}
            </div>
        </div>
    );
}

export default Chat;