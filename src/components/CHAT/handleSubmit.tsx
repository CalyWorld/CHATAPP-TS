import { useContext } from "react";
import { ChatMessageContext } from "../context/chatMessageContext";
import { InputMessageContext } from "../context/inputContext";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
export const HandleSubmit = () => {

    const API_URL = "https://api.openai.com/v1/chat/completions";
    const config = {
        API_KEY : `${process.env.REACT_APP_API_KEY}`
    }

    const { chatMessage, setChatMessage } = useContext(ChatMessageContext);
    const { input, setInput } = useContext(InputMessageContext);

    const fetchMessage = async () => {
        if (!input) {
            console.error("Please enter a prompt");
            return;
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: input.message }],
            }),
        };

        try {
            const response = await fetch(API_URL, options);
            const data = await response.json();
            setChatMessage([
                ...chatMessage,
                { message: input.message, response: data.choices[0].message.content, id: uuidv4() },
            ]);
            setInput({ message: "", id: "" });
        } catch (err) {
            console.error("Error making API request:", err);
        }
    }

    const sendMessage = () => {
        fetchMessage();
    }

    return (
        <div>
            <button className="text-textColor p-1" onClick={sendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    )
}