import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FolderCollectionContext } from "../context/folderCollectionContext";
import { UserInfoContext } from "../context/userInfoContext";
import { HandleDelete } from "../Helper/handleDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { DropDown } from "./dropDown";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

export const SideNavBar = () => {
  const { folder } = useContext(FolderCollectionContext);
  const { user } = useContext(UserInfoContext);
  const [openDropDown, setDropDown] = useState<boolean>(false);

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
        <div className="saved-chat-container p-5 flex flex-col justify-center gap-5">
          {folder.map((collections) => (
            <div key={collections.id} className="hover:bg-navChatBackground">
              <Link to={`/c/${collections.id}`}>
                <div className="main-container flex p-2 justify-around items-center">
                  <div className="chat-name-container flex items-center gap-2">
                    <FontAwesomeIcon icon={faMessage} />
                    <p>{collections.message}</p>
                  </div>
                  <div className="buttons-container flex gap-2">
                    {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                    <HandleDelete id={collections.id} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="profile-container relative flex justify-center items-center">
        {openDropDown && <DropDown setDropDown={setDropDown} />}
        <button
          onClick={() => {
            setDropDown(true);
          }}
        >
          <div
            className="user-container flex justify-center items-center gap-2 p-5"
            key={user?.id}
          >
            <div>
              {user?.img ? (
                <img
                  src={`${user?.img}`}
                  alt="background-img"
                  className="w-7"
                />
              ) : (
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="background-img"
                  className="w-7"
                />
              )}
            </div>
            <div className="flex gap-2">
              <p>{user?.email}</p>
              {openDropDown ? (
                <FontAwesomeIcon icon={faArrowUp} />
              ) : (
                <FontAwesomeIcon icon={faArrowDown} />
              )}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
