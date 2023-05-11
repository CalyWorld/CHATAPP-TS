import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatHome } from "./CHAT/chatHome";
import { SideNavBar } from "./sideNavBar";
import { FolderCollectionContext } from "../context/folderCollectionContext";
import { Card } from "./CHAT/card";

export const Home = () => {

    const { folder } = useContext(FolderCollectionContext);

    return (
        <div className="flex justify-center gap-3 h-screen">
            <Router>
                <SideNavBar />
                <Routes>
                    <Route path='/' element={<ChatHome />}></Route>
                    {folder.map((collections) =>
                        <Route
                            key={collections.id}
                            path={`/${collections.message}/`}
                            element={
                                <Card id={collections.id} collections={collections.collection.map((collection) => ({ ...collection, currentId: collections.id }))} />
                            }>
                        </Route>
                    )}
                </Routes>
            </Router>
        </div>
    )
}