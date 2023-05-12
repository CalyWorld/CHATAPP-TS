import { useContext, useState } from "react"
import { FolderCollectionContext } from "../context/folderCollectionContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
interface HandleDeleteProps{
    id : string
}
export const HandleDelete = ({id}:HandleDeleteProps) =>{

    const {setFolder} = useContext(FolderCollectionContext);
    const [navigate, setNavigate] = useState<boolean>(false)
    
    const handleClick = () =>{
        setFolder((folder)=> folder.filter((eachCollection)=> eachCollection.id !== id));
        setNavigate(true);
    }

    return (
        <>
             <button onClick={()=>{handleClick()}}><FontAwesomeIcon icon={faTrash} /></button>
             {navigate && <Navigate to="/" replace={true}/>}
        </>
    )
}