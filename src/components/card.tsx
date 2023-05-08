import React, { useContext } from "react";
import { HandleSubmit } from "./CHAT/handleSubmit";
import { InputMessageContext } from "./context/inputContext";

type CardProps = {
        message:string,
        response:string,
        id:string
}

export const Card = ({message, response, id}: CardProps) => {

    const {input} = useContext(InputMessageContext);

    return (
        <div id="chat-container" key={id} className="border-solid border-2 w-96 h-96 bg-backgroundColor text-textColor mt-3">
            <div className="flex flex-col gap-3">
                <div className="flex justify-end items-center border-2">
                    <p className="border-solid border-1 p-3">{message}</p>
                </div>
                <div className="flex flex-col justify-start border-solid border-2">
                    <p className="border-solid border-1 p-3">{response}</p>
                </div>
            </div>
            <div id="chat-message-container" className="flex justify-between">
                <input type="text" name="message" className="w-full bg-backgrounInput text-textColor p-1" placeholder="Message..." value={input.message}/>
                <div className="flex justify-end"><HandleSubmit /></div>
            </div>
        </div>
    )
}