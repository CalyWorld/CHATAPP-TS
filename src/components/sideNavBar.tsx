import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { FolderCollectionContext } from "./context/folderCollectionContext"
export const SideNavBar = () => {

    const { folder } = useContext(FolderCollectionContext);
    return (
        <div className="w-56 flex flex-col">
            <div>
                <Link to="/">
                    <div className="button-container flex flex-col justify-center">
                        <button>+ New Chat</button>
                    </div>
                </Link>
            </div>
            <div className="saved-chat-container">
                {folder.map((collection) =>
                        <div key={collection.id} className="flex flex-cols justify-center">
                           <Link to={`/${collection.message}/`}><h2>{collection.message}</h2></Link>
                        </div>
                )}
            </div>
        </div>
    )
}