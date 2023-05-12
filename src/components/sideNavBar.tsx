import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { FolderCollectionContext } from "../context/folderCollectionContext"
import { UserInfoContext } from "../context/userInfoContext";
import { HandleDelete } from "../Helper/handleDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { DropDown } from "./dropDown";

export const SideNavBar = () => {

    const { folder } = useContext(FolderCollectionContext);
    const { user } = useContext(UserInfoContext);
    const [openDropDown, setDropDown] = useState<boolean>(false);


    console.log(folder);

    return (
        <div className="w-96 flex flex-col justify-between text-textColor overflow-y-scroll">
            <div className="new-chat-container bg-navBackgroundColor">
                <Link to="/">
                    <div className="button-container flex flex-col p-5">
                        <button className="text-textColor flex border-solid border-2 p-2">
                            <p>+ New Chat</p>
                        </button>
                    </div>
                </Link>
                <div className="saved-chat-container p-2 flex flex-col justify-center gap-5">
                    {folder.map((collections) =>
                        <div key={collections.id}>
                            <Link to={`/${collections.message}`}>
                                <div className="main-container flex p-2 justify-around items-center">
                                    <div className="chat-name-container">
                                        <p>{collections.message}</p>
                                    </div>
                                    <div className="buttons-container flex gap-2">
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                        <HandleDelete id={collections.id} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                {openDropDown && <DropDown setDropDown={setDropDown} />}
                <button onClick={() => { setDropDown(true) }}>
                    <div className="user-container flex justify-center gap-2 p-2" key={user.id}>
                        <div>
                            <img className="w-7" src={`${user.img}`} alt="background-img" />
                        </div>
                        <div>{user.email}</div>
                    </div>
                </button>
            </div>
        </div>
    )
}
