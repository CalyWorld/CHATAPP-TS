import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useContext, useEffect } from "react";
import { FolderCollection, FolderCollectionContext } from "../context/folderCollectionContext";


export const useGetFolderCollection = () => {
  const { folder, setFolder } = useContext(FolderCollectionContext);

  console.log(folder);
  useEffect(() => {
    const fetchFolderCollection = async () => {
      try {
        const getFolderCollection = collection(db, "folderCollection");
        const querySnapshot = await getDocs(getFolderCollection);
        const folder: Array <FolderCollection> = [];
        querySnapshot.forEach((doc)=> folder.push(doc.data() as FolderCollection));
        setFolder(folder);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {fetchFolderCollection()};
  }, []);
};
