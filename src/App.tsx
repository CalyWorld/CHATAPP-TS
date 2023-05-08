import './App.css';
import { useState } from 'react';
import { DefaultInput } from './components/context/inputContext';
import { ChatMessageCollection, ChatMessageContext } from './components/context/chatMessageContext';
import { InputMessageContext } from './components/context/inputContext';
import { Home } from './components/Home';
import { FolderCollection, FolderCollectionContext } from './components/context/folderCollectionContext';

function App() {

  const [chatMessage, setChatMessage] = useState<ChatMessageCollection[]>([]);
  const [input, setInput] = useState<DefaultInput>({ message: "", id: "" });
  const [folder, setFolder] = useState<FolderCollection[]>([]);

  return (
    <div className="flex items-center justify-center h-screen">
        <InputMessageContext.Provider value={{ input, setInput }}>
          <ChatMessageContext.Provider value={{ chatMessage, setChatMessage }}>
            <FolderCollectionContext.Provider value={{folder, setFolder}}>
            <Home/>
            </FolderCollectionContext.Provider>
          </ChatMessageContext.Provider>
        </InputMessageContext.Provider>
    </div>
  );
}

export default App;
