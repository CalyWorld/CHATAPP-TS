import { createContext } from "react"

export interface DefaultInput {
    message: string,
    id: string
}

interface inputContextType {
    input: DefaultInput,
    setInput: React.Dispatch<React.SetStateAction<DefaultInput>>
}

export const InputMessageContext = createContext<inputContextType>({
    input: { message: "", id: "" },
    setInput: () => { }
})