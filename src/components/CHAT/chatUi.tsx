import React, { useContext } from "react"
import { ChatMessageContext } from "../context/chatMessageContext"
import { HandleSubmit } from "./handleSubmit";
import { HandleChange } from "./handleChange";
import { FolderCollectionContext } from "../context/folderCollectionContext";


export const ChatHome = () => {

    const { chatMessage } = useContext(ChatMessageContext);

    const { folder } = useContext(FolderCollectionContext);

    // console.log("message", chatMessage);

    console.log("folder", folder);

    return (
        <div>
            <div id="chat-container" className="border-solid border-2 w-96 h-96 bg-backgroundColor text-textColor mt-3">
                {chatMessage.map((message) => (
                    <div key={message.id}>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-end items-center border-2">
                                <p className="border-solid border-1 p-3">{message.message}</p>
                            </div>
                            <div className="flex flex-col justify-start border-solid border-2">
                                <p className="border-solid border-1 p-3">{message.response}</p>
                            </div>
                        </div>
                    </div>))}
            </div>
            <div id="chat-message-container" className="flex justify-between">
                <HandleChange />
                <div className="flex justify-end">
                    <HandleSubmit />
                </div>
            </div>
        </div>
    )
}