import { useContext} from "react"
import { FolderCollectionContext } from "../context/folderCollectionContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { collection, deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase";

interface HandleDeleteProps {
    id: string
}
export const HandleDelete = ({ id }: HandleDeleteProps) => {

    const { setFolder } = useContext(FolderCollectionContext);

    const handleClick = async () => {
        try{
            await deleteDoc(doc(collection(db, "folderCollection"), id));
            setFolder((folder) => folder.filter((eachCollection) => eachCollection.id !== id));

        }catch(error){
            console.log(error);
        }
        // setFolder((folder) => folder.filter((eachCollection) => eachCollection.id !== id));
    }

    return (
        <>
            <button onClick={() => { handleClick() }}><FontAwesomeIcon icon={faTrash} /></button>
        </>
    )
}