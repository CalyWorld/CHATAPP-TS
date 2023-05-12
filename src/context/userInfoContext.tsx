import { createContext } from "react"

export interface UserInfoCollection {
    email: string | null;
    img: string | null;
    id: string;
}

export interface userContextType {
    user: UserInfoCollection,
    setUser: React.Dispatch<React.SetStateAction<UserInfoCollection>>
}

export const UserInfoContext = createContext<userContextType>({
    user: {
        email: "",
        img: "",
        id: ""
    },
    setUser: () => { }
})