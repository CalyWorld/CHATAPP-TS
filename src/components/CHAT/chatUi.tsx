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
            <h1 className="text-textColor flex justify-center items-center border-solid border-2 ">Mini chatApp with openAPI</h1>
            <div id="chat-container" className="border-solid border-2 w-96 h-full bg-backgroundColor text-textColor mt-3">
                {chatMessage.map((message) => (<div key={message.id}>
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
                <input type="text" name="message" className="w-full bg-backgrounInput text-textColor p-1" placeholder="Message..." value={input.message} onChange={(e) => { handleChange(e) }} />
                <div className="flex justify-end"><HandleSubmit /></div>
            </div>
        </div>
    )
}