import { useContext} from "react"
import { FolderCollectionContext } from "../context/folderCollectionContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface HandleDeleteProps {
    id: string
}
export const HandleDelete = ({ id }: HandleDeleteProps) => {

    const { setFolder } = useContext(FolderCollectionContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setFolder((folder) => folder.filter((eachCollection) => eachCollection.id !== id));
        navigate("/");
    }

    return (
        <>
            <button onClick={() => { handleClick() }}><FontAwesomeIcon icon={faTrash} /></button>
        </>
    )
}