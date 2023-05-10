import React, { useContext } from "react"
import { ChatMessageContext } from "../context/chatMessageContext"
import { HandleSubmit } from "./handleSubmit";
import { HandleChange } from "./handleChange";
import { FolderCollectionContext } from "../context/folderCollectionContext";
import { Footer } from "../footer";


export const ChatHome = () => {

    const { chatMessage } = useContext(ChatMessageContext);

    const { folder } = useContext(FolderCollectionContext);

    console.log("folder", folder);

    return (
        <div id="chat-container" className="bg-backgroundColor text-textColor w-screen flex flex-col justify-around items-center">
            <div className="rendered-chat-messages">
               <div className="chat-container-title">
               <h1 className="items-center border-solid border-2">ChatGPT 2.0 with openAPI</h1>
               </div>
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
            <div>
            <div id="chat-message-container" className="flex justify-center item-center w-96 mb-8 gap-5">
                <HandleChange />
                <HandleSubmit />
            </div>
            <Footer/>
            </div>
        </div>
    )
}