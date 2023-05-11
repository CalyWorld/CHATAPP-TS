import React, { useContext } from "react"
import { HandleSubmit } from "../../Helper/handleSubmit";
import { HandleChange } from "../../Helper/handleChange";
import { FolderCollectionContext } from "../../context/folderCollectionContext";
import { Footer } from "../footer";


export const ChatHome = () => {

    const { folder } = useContext(FolderCollectionContext);

    console.log("folder", folder);

    return (
        <div id="chat-container" className="bg-backgroundColor text-textColor w-screen flex flex-col justify-around items-center gap-80">
            <div className="rendered-chat-messages">
               <div className="chat-container-title">
               <h1 className="items-center border-solid border-2">ChatGPT 2.0 with openAPI</h1>
               </div>
            </div>
            <div>
            <div id="chat-message-container" className="flex justify-center item-center w-96 mb-8">
                <HandleChange />
                <HandleSubmit />
            </div>
            <Footer/>
            </div>
        </div>
    )
}