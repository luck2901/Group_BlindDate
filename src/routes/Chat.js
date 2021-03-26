import React, { useEffect, useState } from "react";
import {chatDb} from "../Fbase";

const Chat = () => {
    const [item, setItem] = useState("");
    useEffect(() => {
        const tmp = chatDb.ref('user/chat').on('value', (snapshot) => {
            const data = snapshot.val();
            setItem(data);
        })
    })
    return (
        <span>{item}</span>
    );
}

export default Chat;