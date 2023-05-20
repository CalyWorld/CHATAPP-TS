import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { ChatHome } from "./CHAT/chatHome";
import { SideNavBar } from "./sideNavBar";
import { Card } from "./CHAT/card";
import { FolderCollectionContext } from "../context/folderCollectionContext";

export const Home = () => {
    const { folder } = useContext(FolderCollectionContext);
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