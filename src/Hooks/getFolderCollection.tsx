import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { db } from "../firebase";
import { FolderCollectionContext, FolderCollection } from "../context/folderCollectionContext";
import { useNavigate } from "react-router-dom";

export const useGetFolderCollection = () => {
  const { folder, setFolder } = useContext(FolderCollectionContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchFolderCollection = async () => {
  //     try {
  //       const folderCollectionRef = collection(db, "folderCollection");
  //       //arrange collection by descending order
  //       const orderedFolderCollectionQuery = query(folderCollectionRef, orderBy("timeStamp", "desc"));
  //       const querySnapshot = await getDocs(orderedFolderCollectionQuery);
  //       const folder: FolderCollection[] = querySnapshot.docs.map((doc) => {
  //         // Store the document ID in a separate variable
  //         const folderId = doc.id;

  //         // Create the FolderCollection object with the document ID included
  //         return {
  //           id: folderId,
  //           message: doc.data().message,
  //           currentId: doc.data().currentId,
  //           collection: doc.data().collection,
  //         } as FolderCollection;
  //       });

  //       setFolder(folder);
  //       console.log(folder);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  // }, [setFolder]); // Include setFolder in the dependency array

  // console.log(folder);
};
