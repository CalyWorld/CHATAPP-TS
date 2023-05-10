import React, { useContext } from "react";
import { HandleSubmit } from "./CHAT/handleSubmit";
import { HandleChange } from "./CHAT/handleChange";
import { FolderCollectionContext } from "./context/folderCollectionContext";
import { Footer } from "./footer";

export type CardProps = {
    collections: { message: string; response: string; id: string; }[]
    id: string,
}

export const Card = ({ collections, id }: CardProps) => {

    const { folder } = useContext(FolderCollectionContext);

    console.log("folder", folder);

    return (
        <div id="chat-container" className="w-screen h-screen bg-backgroundColor text-textColor flex flex-col justify-between">
            <div className="flex flex-col">
                {collections.map((collection) =>
                    <div key={collection.id}>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-end items-center border-2 border-b-borderBottom">
                                <p className="border-solid border-1 p-3">{collection.message}</p>
                            </div>
                            <div className="flex flex-col justify-start">
                                <p className="border-solid border-1 p-3">{collection.response}</p>
                            </div>
                        </div>
                    </div>
                )}</div>
            <div className="w-full flex flex-col items-center">
                <div id="chat-message-container" className="flex justify-center item-center w-96 mb-8 gap-5">
                    <HandleChange />
                    <HandleSubmit id={id} />
                </div>
                <Footer />
            </div>
        </div>
    )
}