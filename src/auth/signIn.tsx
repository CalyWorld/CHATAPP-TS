import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase";
import { useContext } from "react";
import { UserInfoContext } from "../context/userInfoContext";
import Cookies from "js-cookie";
export const SignIn = () => {

  const { setUser } = useContext(UserInfoContext);

  const handleSignIn = async () => {

    try {
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider);
      const user = userCredentials.user;
      const userInfo = { email: user.email, img: user.photoURL, id: user.uid };
      Cookies.set("userInfo", JSON.stringify({
        email: userInfo.email,
        img: userInfo.img?.toString(),
        id: userInfo.id
      }), { expires: 29 });
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="sign-in bg-buttonBaground p-2">
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
};
