import { createContext } from "react"

 export interface ChatMessageCollection{
    message: string
 }

interface chatMessageContextType {
    chatMessage: ChatMessageCollection,
    setChatMessage: React.Dispatch<React.SetStateAction<ChatMessageCollection>>
}

export const defaultChatMessage = {
    message: ""
}

export const ChatMessageContext = createContext<chatMessageContextType>({
    chatMessage: defaultChatMessage,
    setChatMessage: () =>{}
})