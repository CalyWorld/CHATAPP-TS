import { useContext, useEffect } from "react";
import { ChatMessageContext } from "./context/apiContext";

export const useApiKey = (API_URL:string, API_KEY:string) => {

    const {setChatMessage} = useContext(ChatMessageContext);

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch (API_URL,{
                    body: JSON.stringify({"model": "text-davinci-003", "prompt": "hello", "temperature": 0, "max_tokens": 7}),
                    method: "POST",
                    headers:{
                        "content-type": "application/json",
                        Authorization : `Bearer ${API_KEY}`,
                        "User-Agent": "chatbot-app"
                    },
                });
                const data = await response.json();
                console.log(data.choices[0].message.content);
                // setChatMessage(data.choices[0].content)
            } catch (err) {
                console.log("errors, can't fetch");
            }
        }
        return () => { fetchMessage() }

    })
}