import './App.css';
import { ChatHome } from './components/CHAT/chatUi';
import { ChatMessageContext } from './components/context/apiContext';
import { useState } from 'react';
import { ChatMessageCollection, defaultChatMessage } from './components/context/apiContext';
import { useApiKey } from './components/apiKey';
function App() {

  const [chatMessage, setChatMessage] = useState<ChatMessageCollection>(defaultChatMessage);

  const API_URL = "https://api.openai.com/v1/chat/completions ";
  const API_KEY = "sk - q1OKIn4bCzJ1f9Pmtyt9T3BlbkFJ1eNj6ydFEA6apmZQzsiy";

  useApiKey(API_URL, API_KEY);

  console.log(chatMessage);
  return (
    <div className="App">
      <ChatMessageContext.Provider value={{chatMessage, setChatMessage}}>
      <ChatHome/>
      </ChatMessageContext.Provider>
    </div>
  );
}

export default App;
