import React, { useContext, useState } from "react";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { UserInfoContext } from "../context/userInfoContext";
import auth from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type SignUpFormData = {
    email: string;
    password: string;
    confirmPassword: string;
};

interface SignUpProps {
    setAction: React.Dispatch<React.SetStateAction<boolean>>
}

export const SignUp = ({setAction}:SignUpProps) => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm<SignUpFormData>();
    const [signUpErrors, setSignUpError] = useState<string | null>(null);
    const { setUser } = useContext(UserInfoContext);
  

    const handleSignUp = async (data: SignUpFormData) => {

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth as Auth, data.email, data.password);
            const user = userCredentials.user;
            const userInfo = { email: user.email, img: user.photoURL, id: user.uid }
            setUser(userInfo);
            setSignUpError(null)
        } catch (error) {
            console.log(error);
        }

    }

    const password = watch("password");

    return (
        <div className="flex bg-formbackground p-5">
            <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col justify-between p-3 h-96">
                <div className="flex flex-col gap-5">
                    <div className="flex justify-end">
                        <button type="button" onClick={()=>{setAction(false)}}><FontAwesomeIcon icon={faXmark}/></button>
                    </div>
                    <label className="flex gap-5"> Email:
                        <input className="inputColor" type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Enter email" />
                    </label>
                    {errors.email?.type === "required" && <span>Email is required</span>}
                    {errors.email?.type === "pattern" && (<span>Email pattern is not being used</span>)}

                    <label className="flex gap-5">Password:
                        <input type="password"{...register("password", { required: true, minLength: 6 })} placeholder="Enter password" />
                    </label>
                    {errors.password?.type === "minLength" && (<span>Length of password too short</span>)}

                    <label className="flex gap-5">Confirm password:
                        <input
                            type="password"
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value) => value === password || "The passwords do not match",
                            })}
                        />
                    </label>
                    {errors.confirmPassword && <span className="text-red-500">Passwords do not match</span>}
                </div>
                {signUpErrors && <span className="error">{signUpErrors}</span>}
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}