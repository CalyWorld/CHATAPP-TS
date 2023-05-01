import { useContext } from "react";
import { ChatMessageContext } from "../context/chatMessageContext";
import { InputMessageContext } from "../context/inputContext";
import { v4 as uuidv4 } from "uuid"
export const HandleSubmit = () => {

    const API_URL = "https://api.openai.com/v1/chat/completions ";
    const API_KEY = process.env.REACT_APP_API_KEY

    const { chatMessage, setChatMessage } = useContext(ChatMessageContext);
    const { input, setInput } = useContext(InputMessageContext);


    const fetchMessage = async () => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: input.message }],
                }),
            });
            const data = await response.json();
            let responseMessage: string = data.choices[0].message.content;
            // setChatMessage([...chatMessage, {message:input.message}])
            setChatMessage([...chatMessage, {message:input.message, response: responseMessage, id: uuidv4()}])
        } catch (err) {
            console.log("errors, check API KEY OR API LINK");
        }
    }

    const useHandleSendMessage = () => {
        fetchMessage();
        setInput({ message: "", id: "" });
    }

    return (
        <div>
            <button onClick={useHandleSendMessage}>send</button>
        </div>
    )
}