import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase";
import { useContext } from "react";
import { UserInfoContext } from "../context/userInfoContext";

export const SignIn = () => {
  const {setUser} = useContext(UserInfoContext);
  // const History = useHis
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const userInfo = {email: result.user.email, img:result.user.photoURL, id:result.user.uid}
        setUser(userInfo);

      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="sign-in">
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
};
