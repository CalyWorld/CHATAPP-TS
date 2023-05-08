import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatHome } from "./CHAT/chatUi";
import { SideNavBar } from "./sideNavBar";
import { FolderCollectionContext } from "./context/folderCollectionContext";
import { Card } from "./card";
export const Home = () => {

    const {folder} = useContext(FolderCollectionContext);
    return (
        <div className="flex gap-3">
            <Router>
                <SideNavBar />
                <Routes>
                    <Route path='/' element={<ChatHome />}></Route>
                     {folder.map((collection)=> 
                        <Route key={collection.id} path={`/${collection.message}/`} element={<Card message={collection.message} response={collection.response} id={collection.id} />}></Route>
                     )}
                </Routes>
            </Router>
        </div>
    )
}