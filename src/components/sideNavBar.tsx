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
                {folder.map((collections) => 
                    <div key={collections.id} className="flex flex-cols justify-center">
                      <Link to={`/${collections.message}/`}>{collections.message}</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
