import { useContext } from "react";
import { ChatMessageContext } from "../context/chatMessageContext";
import { InputMessageContext } from "../context/inputContext";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FolderCollectionContext } from "../context/folderCollectionContext";

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

    if (folder.length > 0) {
        const latestMessageObject = folder[folder.length - 1].id;
        id = latestMessageObject;
    }

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
            console.log(id);
            let newMessageId = uuidv4()
            // setFolder([...folder, { id: uuidv4(), collection: [{ message: input.message, response: data.choices[0].message.content, id: newMessageId }] }]);

            setFolder((folder)=> folder.map((collections)=> collections.id === id ?{...collections, id: newMessageId, collection:[...collections.collection, {message:input.message, response: data.choices[0].message.content, id: newMessageId }]}:collections));
            // setFolder((folder) => folder.map((collections) => collections.id === id ? { ...collections, id: newMessageId, collection: [...collections.collection, { message: input.message, response: data.choices[0].message.content, id: uuidv4() }] } : collections));

            // const newCollection = { message: input.message, response: data.choices[0].message.content, id: uuidv4() };
            // setChatMessage([...chatMessage, newCollection]);
            // console.log("current-id", id);

            // let collectionExists = false;
            // setFolder(folder.map((collections) => {
            //   if (collections.id === id) {
            //     collectionExists = true;
            //     return { ...collections, collection: [...collections.collection, newCollection] };
            //   } else {
            //     return collections;
            //   }
            // }));

            // if (!collectionExists) {
            //   setFolder([...folder, { id: uuidv4(), collection: [newCollection] }]);
            // }
            setInput({ message: "", id: uuidv4() });
            setChatMessage([]);

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