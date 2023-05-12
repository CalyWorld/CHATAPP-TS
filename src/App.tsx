import './App.css';
import { useState } from 'react';
import { DefaultInput } from './context/inputContext';
import { ChatMessageCollection, ChatMessageContext } from './context/chatMessageContext';
import { InputMessageContext } from './context/inputContext';
import { FolderCollection, FolderCollectionContext } from './context/folderCollectionContext';
import { LoadingContext } from './context/loaderContext';
import { LoginPage } from './components/loginPage';
import { UserInfoCollection, UserInfoContext } from './context/userInfoContext';

function App() {

  const [chatMessage, setChatMessage] = useState<ChatMessageCollection[]>([]);
  const [input, setInput] = useState<DefaultInput>({ message: "", id: "" });
  const [folder, setFolder] = useState<FolderCollection[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserInfoCollection>({email:"", img:"", id:""})

  console.log(user);

  return (
    <div>
      <UserInfoContext.Provider value={{user, setUser}}>
        <InputMessageContext.Provider value={{ input, setInput }}>
          <ChatMessageContext.Provider value={{ chatMessage, setChatMessage }}>
            <LoadingContext.Provider value={{loading, setLoading}}>
            <FolderCollectionContext.Provider value={{folder, setFolder}}>
              <LoginPage/>
            </FolderCollectionContext.Provider>
            </LoadingContext.Provider>
          </ChatMessageContext.Provider>
        </InputMessageContext.Provider>
        </UserInfoContext.Provider>
    </div>
  );
}

export default App;
