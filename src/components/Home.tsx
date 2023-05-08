import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatHome } from "./CHAT/chatUi";
import { SideNavBar } from "./sideNavBar";
import { FolderCollectionContext } from "./context/folderCollectionContext";
import { Card } from "./card";

export const Home = () => {

    const {folder} = useContext(FolderCollectionContext);

    console.log(folder);


    return (
        <div>
            <h1 className="flex justify-center items-center border-solid border-2 ">ChatGPT 2.0 with openAPI</h1>
            <div className="flex justify-center gap-3">
                <Router>
                    <SideNavBar />
                    <Routes>
                        <Route path='/' element={<ChatHome/>}></Route>
                        {folder.map((collections) => collections.collection.map((collection) =>
                            <Route key={collection.id} path={`/${collection.message}/`} element={<Card message={collection.message} response={collection.response} id={collection.id} />}></Route>))}
                    </Routes>
                </Router>
            </div>
        </div>
    )
}