import { createContext } from "react"

export interface UserInfoCollection {
    email?: string | null;
    img?: string | null;
    id: string;
}

export interface userContextType {
    user: UserInfoCollection | null,
    setUser: React.Dispatch<React.SetStateAction<UserInfoCollection | null>>
}

export const UserInfoContext = createContext<userContextType>({
    user: null,
    setUser: () => { }
})