import React, { useContext,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ChatHome } from "./CHAT/chatHome";
import { SideNavBar } from "./sideNavBar";
import { Card } from "./CHAT/card";
import { FolderCollection, FolderCollectionContext } from "../context/folderCollectionContext";
import { db } from "../firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";


export const Home = () => {
    const { folder, setFolder } = useContext(FolderCollectionContext);

   
  useEffect(() => {
    const fetchFolderCollection = async () => {
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
        console.log(folder);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFolderCollection();
  }, [setFolder]); // Include setFolder in the dependency array


    return (
        <Router>
            <div className="flex justify-center gap-3 h-screen">
                <SideNavBar />
                <Routes>
                    {folder.map((collections) => (
                        <Route key={collections.id} path={`/c/${collections.id}`} element={<Card id={collections.id} collections={collections.collection} />}></Route>
                    ))}
                    <Route path="/" element={<ChatHome />}></Route>
                    {/*this takes me back to the root path when a route is deleted*/}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    )
}