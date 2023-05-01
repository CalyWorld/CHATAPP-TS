import './App.css';
import { ChatHome } from './components/CHAT/chatUi';
import { useState } from 'react';
import { DefaultInput } from './components/context/inputContext';
import { ChatMessageCollection, ChatMessageContext } from './components/context/chatMessageContext';
import { InputMessageContext } from './components/context/inputContext';

function App() {

  const [chatMessage, setChatMessage] = useState<ChatMessageCollection[]>([]);
  const [input, setInput] = useState<DefaultInput>({ message: "", id: "" });


  return (
    <div className="flex items-center justify-center h-screen">
      <InputMessageContext.Provider value={{input, setInput}}>
      <ChatMessageContext.Provider value={{ chatMessage, setChatMessage }}>
          <ChatHome />
      </ChatMessageContext.Provider>
      </InputMessageContext.Provider>
    </div>
  );
}

export default App;
