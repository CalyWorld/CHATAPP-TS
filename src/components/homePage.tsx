import { useContext, useState } from "react"
import { SignIn } from "../auth/signIn"
import { UserInfoContext } from "../context/userInfoContext"
import { Home } from "./Home";
import { SignUp } from "../auth/signUp";

export const HomePage = () => {

    const { user } = useContext(UserInfoContext);
    const [action, setAction] = useState<boolean>(false);

    // console.log("user", user);

    if(action){
        return <div className="flex h-screen justify-center items-center"><SignUp setAction={setAction}/></div>
    }

    return (
        <div>
            {user.email !== "" ? <Home /> :
                <div className="flex justify-center w-screen h-screen items-center text-textColor gap-20">
                    <SignIn/>
                    <button onClick={()=>{setAction(true)}}>Sign Up</button>
                </div>
                }
        </div>
    )
}