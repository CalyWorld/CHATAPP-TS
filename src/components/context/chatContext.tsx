import { createContext } from "react"
import {uuid} from "uuidv4";

 export interface ChatMessageCollection{
    message: string
    id: string;
 }

 export interface ChatResponseCollection{
    message:string
    id: string;
 }

interface chatMessageContextType {
    chatMessage: ChatMessageCollection[],
    setChatMessage: React.Dispatch<React.SetStateAction<ChatMessageCollection[]>>
}

interface chatResponseContextType {
    chatResponse: ChatResponseCollection[],
    setChatResponse: React.Dispatch<React.SetStateAction<ChatResponseCollection[]>>
 }

export const defaultChatMessage = {
    message: "",
    id:uuid()
}
export const defaultChatResponse = {
    message: "",
    id:uuid()
}

export const ChatMessageContext = createContext<chatMessageContextType>({
    chatMessage: [defaultChatMessage],
    setChatMessage: () =>{}
});

export const ChatResponseContext = createContext<chatResponseContextType>({
    chatResponse: [defaultChatResponse],
    setChatResponse: ()=>{}
})