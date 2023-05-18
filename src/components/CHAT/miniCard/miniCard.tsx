import React, { useContext } from "react";
import { ChatMessageCollection } from "../../../context/chatMessageContext"
import { LoadingContext } from "../../../context/loaderContext";
import "../miniCard/loading.css";
import { renderLoadingAnimation } from "./renderLoadingAnimation";

type MiniCardProps = {
    collection: ChatMessageCollection,
    currentId: string
}

export const MiniCard = ({ collection, currentId }: MiniCardProps) => {

    const { loading } = useContext(LoadingContext);

    let loadingAnimation = renderLoadingAnimation();

    return (
        <div key={collection.id}>
            <div className="flex flex-col gap-3">
                <div className="flex justify-end items-center border-2 border-b-borderBottom">
                    <p className="border-solid border-1 p-3">{collection.message}</p>
                </div>
                <div className="flex flex-col justify-start">
                    <div className="border-solid border-1 p-3">
                        {currentId === collection.id && !loading ? <div className="loading-animation">{loadingAnimation}</div> : <p>{collection.response}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}