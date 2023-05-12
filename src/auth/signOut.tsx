import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOut } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { UserInfoContext } from "../context/userInfoContext"
import auth from "../firebase"
export const SignOut = () => {

    const { setUser } = useContext(UserInfoContext);

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            setUser({ email: "", img: "", id: "" });
            localStorage.removeItem("userInfo");
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