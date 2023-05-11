import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase";
import { useContext, useEffect } from "react";
import { UserInfoContext } from "../context/userInfoContext";

export const SignIn = () => {

  const {setUser } = useContext(UserInfoContext);

  const handleSignIn = async () => {

    try {
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider);
      const user = userCredentials.user;
      const userInfo = { email: user.email, img: user.photoURL, id: user.uid }
      setUser(userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null");
    if (userInfo) {
      setUser(userInfo);
    }
  }, [setUser])

  return (
    <div className="sign-in">
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
};
