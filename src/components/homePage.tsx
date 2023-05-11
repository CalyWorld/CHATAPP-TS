import { useContext } from "react"
import { SignIn } from "../auth/signIn"
import { UserInfoContext } from "../context/userInfoContext"
import { Home } from "./Home";

export const HomePage = () => {

    const { user } = useContext(UserInfoContext);
    return (
        <>
            {user.email !== "" ? <Home /> :
                <div className="flex justify-center w-screen h-screen items-center text-textColor gap-20">
                    <SignIn />
                    <div>Sign Out</div>
                </div>
            }
        </>
    )
}