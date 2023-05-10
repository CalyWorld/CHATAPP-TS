import { useContext} from "react";
import { ChatMessageCollection, ChatMessageContext } from "../context/chatMessageContext";
import { InputMessageContext } from "../context/inputContext";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FolderCollectionContext } from "../context/folderCollectionContext";
import {DefaultInput} from "../context/inputContext";
type HandleSubmitProps = {
    id?: string
}

export const HandleSubmit = ({ id }: HandleSubmitProps) => {

    const API_URL = "https://api.openai.com/v1/chat/completions";
    const config = {
        API_KEY: `${process.env.REACT_APP_API_KEY}`
    }

    const { chatMessage, setChatMessage } = useContext(ChatMessageContext);
    const { input, setInput } = useContext(InputMessageContext);
    const { folder, setFolder } = useContext(FolderCollectionContext)

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
            const newCollection = { message: input.message, response: data.choices[0].message.content, id: uuidv4() };
            setChatMessage([...chatMessage, newCollection]);
            addNewChat(newCollection, input)
            setInput({ message: "", id: uuidv4() });
            setChatMessage([]);

        } catch (err) {
            console.error("Error making API request:", err);
        }
    }

    const sendMessage = () => {
        fetchMessage();
    }

    const addNewChat  = (newCollection:ChatMessageCollection, input:DefaultInput) =>{
        const index = folder.findIndex((item)=> item.id === id);
        if(index === -1){
            //if the collection is not in the array, create a new one
            setFolder((folder)=> [...folder, {id: uuidv4(), message: input.message, collection: [newCollection]}]);
        }else{
            //if it is, move the collection to collection array that matches with the id
            setFolder((folder)=> folder.map((collections)=> collections.id === id ? {...collections, collection:[...collections.collection, newCollection]}:collections));
        }
    }

    return (
        <div>
            <button className="text-textColor p-1" onClick={sendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    )
}