import React from "react";
import { HandleSubmit } from "../../Helper/handleSubmit";
import { HandleChange } from "../../Helper/handleChange";
import { Footer } from "../footer";
import { MiniCard } from "./miniCard";

export type CardProps = {
    collections: { message: string; response: string; id: string}[]
    id: string,
}

export const Card = ({ collections, id }: CardProps) => {

    const currentId = collections[collections.length-1].id;

    return (
        <div id="chat-container" className="w-screen h-screen bg-backgroundColor text-textColor flex flex-col justify-between overflow-y-scroll">
            <div className="flex flex-col">
                {collections.map((collection) =>
                    <MiniCard key={collection.id} collection={collection} currentId={currentId}/>
                )}
            </div>
            <div className="w-full flex flex-col items-center mb-20 gap-10">
                <div id="chat-message-container" className="flex justify-center gap-3 item-center w-96">
                    <HandleChange />
                    <HandleSubmit id={id} />
                </div>
                <Footer />
            </div>
        </div>
    )
}