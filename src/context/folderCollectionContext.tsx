import { createContext } from "react";

export interface FolderCollection {
    id: string,
    message: string,
    currentId:string,
    collection: {
        message: string,
        response: string,
        id: string,
    }[],
}

interface folderCollectionContextType {
    folder: FolderCollection[],
    setFolder: React.Dispatch<React.SetStateAction<FolderCollection[]>>
}

export const FolderCollectionContext = createContext<folderCollectionContextType>({
    folder: [],
    setFolder: () => { }
});