import React, { useContext } from "react";
import { ChatMessageCollection } from "../../context/chatMessageContext"
import { LoadingContext } from "../../context/loaderContext";
type MiniCardProps = {
    collection: ChatMessageCollection,
}

export const MiniCard = ({ collection }: MiniCardProps) => {

    const { loading } = useContext(LoadingContext);

    // console.log("current-collection", collection);

    return (
        <div key={collection.id}>
            <div className="flex flex-col gap-3">
                <div className="flex justify-end items-center border-2 border-b-borderBottom">
                    <p className="border-solid border-1 p-3">{collection.message}</p>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="border-solid border-1 p-3">
                        {collection.response}
                    </p>
                </div>
            </div>
        </div>
    )
}