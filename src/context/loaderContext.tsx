import { createContext } from "react"

interface loadingContextType {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoadingContext = createContext<loadingContextType>({
    loading: false,
    setLoading: () =>{}
});