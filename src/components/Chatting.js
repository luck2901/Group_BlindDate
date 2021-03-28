import React, { useState } from "react"
import { dbService } from "../Fbase";

const Chatting = ({ chatObject, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newChat, setNewChat] = useState(chatObject.chat);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this Chat?");
        if (ok) {
            await dbService.doc(`chats.${chatObject.id}`).delete();
        }
    }
}