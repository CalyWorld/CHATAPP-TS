import { createContext } from "react"

 export interface ChatMessageCollection{
    message: string;
    response:string;
    id: string;
 }

interface chatMessageContextType {
    chatMessage: ChatMessageCollection[],
    setChatMessage: React.Dispatch<React.SetStateAction<ChatMessageCollection[]>>
}

export const ChatMessageContext = createContext<chatMessageContextType>({
    chatMessage: [],
    setChatMessage: () =>{}
});
