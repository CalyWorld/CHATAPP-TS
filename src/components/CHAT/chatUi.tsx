import React, { useContext } from "react"
import { ChatMessageContext } from "../context/chatMessageContext"
import { v4 as uuidv4 } from "uuid";
import { InputMessageContext } from "../context/inputContext";
import { HandleSubmit } from "./handleSubmit";
export const ChatHome = () => {

    const { chatMessage } = useContext(ChatMessageContext);
    const { input, setInput } = useContext(InputMessageContext);


    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        let name = (e.target as HTMLInputElement).name;
        let value = (e.target as HTMLInputElement).value;
        setInput({ ...input, [name]: value, id: uuidv4() });
    }


    console.log("message", chatMessage);


    return (
        <div>
            <div id="chat-container" className="flex flex-cols justify-around border-solid border-2 border-red h-80 w-80 gap-3 bg-backgroundColor text-textColor">
                {chatMessage.map((message) => (<div key={message.id}>
                    <div className="flex justify-end">{message.message}</div>
                    <div className="flex justify-start">{message.response}</div>
                </div>))}
            </div>
            <div id="chat-message-container">
                <form className="flex justify-between">
                    <input type="text" name="message" className="w-full bg-backgrounInput text-textColor p-1" placeholder="Message..." value={input.message} onChange={(e) => { handleChange(e) }} />
                    <div className="flex justify-end"><HandleSubmit /></div>
                </form>
            </div>
        </div>
    )
}