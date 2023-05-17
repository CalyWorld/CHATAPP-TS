import { useContext, useState, useEffect } from "react"
import { SignIn } from "../auth/signIn"
import { UserInfoContext, userContextType } from "../context/userInfoContext"
import { Home } from "./HomePage";
import { SignUp } from "../auth/signUp";
import logo from "../assets/homePageLogo.jpg";
import Cookies from "js-cookie";
export const LoginPage = () => {

    const { user, setUser } = useContext<userContextType>(UserInfoContext);
    const [action, setAction] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const userInfoCookie = Cookies.get("userInfo");
        const userInfo = userInfoCookie ? JSON.parse(decodeURIComponent(userInfoCookie)) : null;
        setUser(userInfo);
        setLoading(false);
    }, [setUser]);


    if (loading) {
        return <div>Loading...</div>; // Render a loading indicator or placeholder
    }

    if (user) {
        return <Home />;
    }

    if (action) {
        return <div className="flex h-screen  justify-center items-center"><SignUp setAction={setAction} /></div>
    }

    return (
        <div className="flex flex-col justify-center text-textColor w-screen h-screen items-center gap-5">
            <div className="flex gap-5 flex-col">
                <div className="icon-container flex justify-center">
                    <img className="w-16" src={logo} alt="homepage-logo" />
                </div>
                <div className="title-container flex justify-center">
                    <h2>Welcome to CALGPT</h2>
                </div>
                <div className="text-container">
                    <h2>Login with your OpenAI account to continue</h2>
                </div>
            </div>
            <div className="button-container flex gap-20">
                <SignIn />
                <div className="sign-up-container bg-buttonBaground p-2">
                    <button onClick={() => { setAction(true) }}>Sign Up</button>
                </div>
            </div>
        </div>)
}