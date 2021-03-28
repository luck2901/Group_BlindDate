import React, { useState } from "react";
import { dbService } from "../Fbase";

const ChatFactory = ({ userObject }) => {
    const [chat, setChat] = useState("");
    const onSubmit = async (event) => {
        if (chat === "") {
            return;
        }
        event.preventDefault();
        const chatObj = {
            chat: chat,
            creatorAt: Date.now(),
            creatorId: userObject.uid,
        }
        await dbService.collection("chats").add(chatObj);
        setChat("");
    }
    const onChange = (event) => {
        const { target: { value } } = event;
        setChat(value);
    }
    return(
        <form onSubmit={onSubmit} >
            <div>
                <input
                    value={chat}
                    onChange={onChange}
                    type="text"
                    placeholder="Lets make beautiful JBNU chat!" />
                <input type="submit" value="&rarr;" />
            </div>
        </form>
    )
}

export default ChatFactory;