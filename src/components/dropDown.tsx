import { SignOut } from "../auth/signOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faGear, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { FolderCollectionContext } from "../context/folderCollectionContext";

interface DropDownProps {
    setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropDown = ({ setDropDown }: DropDownProps) => {

    const { setFolder } = useContext(FolderCollectionContext);

    const handleDeleteAllChats = () =>{
        setFolder([]);
        setDropDown(false);
    }

    return (
        <div id="dropdown" className="absolute p-1 bottom-12 left-3 h-64 w-60 flex justify-start items-center bg-dropdownBackground text-dropdownText rounded-lg shadow w-44 dark:bg-gray-700" >
            <ul className="flex flex-col gap-3 w-full">
                <li className="back-button flex justify-end">
                    <button onClick={() => { setDropDown(false) }}><FontAwesomeIcon icon={faXmark} size="lg" /></button>
                </li>
                <li className="flex justify-start p-2 w-full hover:bg-dropdownTextBackground">
                    <div className="flex items-center gap-3">
                        <p>Helpn & FAQ</p>
                    </div>
                </li>
                <li className="flex justify-start p-2 bg w-full hover:bg-dropdownTextBackground" >
                    <div className="flex items-center gap-3"><FontAwesomeIcon icon={faGear} />
                        <p>Settings</p></div>
                </li>
                <li className="flex justify-start p-2 w-full hover:bg-dropdownTextBackground">
                    <div className="flex items-center gap-3" onClick={() => {handleDeleteAllChats()}}>
                        <FontAwesomeIcon icon={faTrash} />
                        <p>Clear conversations</p>
                    </div>
                </li>
                <li className="flex justify-start p-2 hover:bg-dropdownTextBackground w-full">
                    <SignOut />
                </li>
            </ul>
        </div>
    )
}