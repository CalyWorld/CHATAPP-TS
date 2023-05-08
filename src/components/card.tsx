import React, { useContext } from "react";
import { HandleSubmit } from "./CHAT/handleSubmit";
import { HandleChange } from "./CHAT/handleChange";
import { FolderCollectionContext } from "./context/folderCollectionContext";

export type CardProps = {
    message: string,
    response: string,
    id: string
}

export const Card = ({ message, response, id }: CardProps) => {

    const {folder} = useContext(FolderCollectionContext);

    if (folder.length > 0) {
        const latestMessageObject = folder[folder.length - 1].id;
        id = latestMessageObject;
    }
    console.log("outside-id", id);

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
                <HandleChange />
                <div className="flex justify-end">
                    <HandleSubmit id = {id} />
                </div>
            </div>
        </div>
    )
}