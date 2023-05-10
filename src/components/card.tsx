import React, { useContext } from "react";
import { HandleSubmit } from "./CHAT/handleSubmit";
import { HandleChange } from "./CHAT/handleChange";
import { FolderCollectionContext } from "./context/folderCollectionContext";

export type CardProps = {
    collections: { message: string; response: string; id: string; }[]
    id: string,
}

export const Card = ({ collections, id }: CardProps) => {

    const { folder } = useContext(FolderCollectionContext);

    console.log("folder", folder);

    return (
        <div>
            <div id="chat-container" className="border-solid border-2 w-96 h-96 bg-backgroundColor text-textColor mt-3">
                {collections.map((collection) =>
                    <div key={collection.id}>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-end items-center border-2">
                                <p className="border-solid border-1 p-3">{collection.message}</p>
                            </div>
                            <div className="flex flex-col justify-start border-solid border-2">
                                <p className="border-solid border-1 p-3">{collection.response}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div >

            <div id="chat-message-container" className="flex justify-between">
                <HandleChange />
                <div className="flex justify-end">
                    <HandleSubmit id={id} />
                </div>
            </div>
        </div >
    )
}