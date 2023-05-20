import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { FolderCollection } from "../context/folderCollectionContext";

export const fetchFolderCollection = async (setFolder: React.Dispatch<React.SetStateAction<FolderCollection[]>>) => {
  try {
    const folderCollectionRef = collection(db, "folderCollection");
    //arrange collection by descending order
    const orderedFolderCollectionQuery = query(folderCollectionRef, orderBy("timeStamp", "desc"));
    const querySnapshot = await getDocs(orderedFolderCollectionQuery);
    const folder: FolderCollection[] = querySnapshot.docs.map((doc) => {

      // Store the document ID in a separate variable
      const folderId = doc.id;

      // Create the FolderCollection object with the document ID included
      return {
        id: folderId,
        message: doc.data().message,
        currentId: doc.data().currentId,
        collection: doc.data().collection,
      } as FolderCollection;
    });
    setFolder(folder);

  } catch (error) {
    console.log(error);
  }
};
