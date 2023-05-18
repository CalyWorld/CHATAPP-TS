import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOut } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { UserInfoContext } from "../context/userInfoContext"
import auth from "../firebase";
import Cookies from "js-cookie";
export const SignOut = () => {

    const { setUser } = useContext(UserInfoContext);
    const handleSignOut = async () => {
        try {
            await auth.signOut();
            Cookies.remove("userInfo");
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button className="flex items-center gap-3" onClick={() => { handleSignOut() }}>
                <FontAwesomeIcon icon={faSignOut} />
                <p>Log Out</p>
            </button>
        </div>
    )
}   