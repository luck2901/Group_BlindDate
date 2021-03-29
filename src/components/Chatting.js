import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"
import { dbService } from "../Fbase";
import {faTrash, faPencilAlt} from "@fortawesome/free-solid-svg-icons"

const Chatting = ({ chatObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newChat, setNewChat] = useState(chatObj.chat);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this Chat?");
        if (ok) {
            await dbService.doc(`chats/${chatObj.id}`).delete();
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.doc(`chats/${chatObj.id}`).update({
            chat: newChat,
        });
        setEditing(false);
    }
    const onChange = (e) => {
        const { targetL: { value } } = e;
        setNewChat(value);
    }
    return (
        <div>
            {
                editing ? (
                    <>
                        <form onSubmit={onSubmit} >
                            <input onChange={onChange} type="text" placeholder="Edit" value={newChat} required autoFocus />
                            <input type = "submit" value ="Update Chat" />
                        </form>
                        <button onClick={toggleEditing} > Cancel</button>
                    </>
                ) :
                    <>
                        <h4>{chatObj.chat}</h4>
                        {isOwner && (
                            <div>
                                <span onClick={onDeleteClick}><FontAwesomeIcon icon={faTrash} /></span>
                                <span onClick={toggleEditing}><FontAwesomeIcon icon={faPencilAlt} /></span>
                            </div>
                        )}
                    </>
            }
        </div>
    )
}

export default Chatting;