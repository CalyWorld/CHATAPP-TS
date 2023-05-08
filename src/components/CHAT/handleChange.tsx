import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { InputMessageContext } from "../context/inputContext";

export const HandleChange = () => {

    const { input, setInput } = useContext(InputMessageContext);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        let name = (e.target as HTMLInputElement).name;
        let value = (e.target as HTMLInputElement).value;
        setInput({ ...input, [name]: value, id: uuidv4() });
    }


    return (
        <div>
            <input type="text" name="message" className="w-full bg-backgrounInput text-textColor p-1" placeholder="Message..." value={input.message} onChange={(e) => { handleChange(e) }} />
        </div>
    )

}