import { useContext } from "react";
import { db } from "../firebase";
import { ChatMessageCollection } from "../context/chatMessageContext";
import { InputMessageContext } from "../context/inputContext";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { DefaultInput } from "../context/inputContext";
import { LoadingContext } from "../context/loaderContext";
import { useNavigate } from "react-router-dom";
import "../components/CHAT/miniCard/loading.css";
import { renderLoadingAnimation } from "../components/CHAT/miniCard/renderLoadingAnimation";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { useGetFolderCollection } from "../Hooks/getFolderCollection";
type HandleSubmitProps = {
    id?: string
}

export const HandleSubmit = ({ id }: HandleSubmitProps) => {

    const API_URL = "https://api.openai.com/v1/chat/completions";
    const config = {
        API_KEY: `${process.env.REACT_APP_API_KEY}`
    }

    const { input, setInput } = useContext(InputMessageContext);
    const { loading, setLoading } = useContext(LoadingContext);
    const navigate = useNavigate();
    const loadingAnimation = renderLoadingAnimation();

    //  if (!input) {
    //         console.error("Please enter a prompt");
    //         return;
    //     }

    const fetchMessage = async (): Promise<void> => {

        setLoading(false);
        let inputCollection = { message: input.message, response: "", id: uuidv4() };
        setInput({ message: "", id: uuidv4() });

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
            const responseList = data.choices[0].message.content;
            inputCollection.response = responseList
            await addNewChat(inputCollection, input);
            setLoading(true);

        } catch (err) {
            console.error("Error making API request:", err);
        }
    }

    const addNewChat = async (inputCollection: ChatMessageCollection, input: DefaultInput): Promise<void> => {
        try {
            const newFolderDocRef = collection(db, "folderCollection");
            const newFolder = { id: "", message: input.message, currentId: "", collection: [inputCollection] };

            //if id doesn't exist, create a new doc
            if (!id) {
                await addDoc(newFolderDocRef, newFolder);
            } else {

                //get the docRef for that specific id
                //get the doc from the docRef
                // if it exists, get the data for the doc
                //get the collection property in doc
                //update the collection object array property
                //update the doc using set
                const folderDocRef = doc(collection(db, "folderCollection"), id);
                const docSnapshot = await getDoc(folderDocRef);
                if (docSnapshot.exists()) {
                    const existingData = docSnapshot.data();
                    const existingCollection = existingData.collection;
                    const updatedCollection = [...existingCollection, inputCollection];
                    await setDoc(folderDocRef, { ...existingData, collection: updatedCollection });
                }
            }
            //navigate to the created input 
            navigate(`/${newFolder.message}`);
        } catch (error) {
            console.log(error);
        }
        // useGetFolderCollection();
    };
    //gets the collection after user clicks handleSubmit
    useGetFolderCollection();

    return (
        <div>
            {!loading ? <div className="loading-animation">{loadingAnimation}</div> : <button className="text-textColor p-1" onClick={fetchMessage}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>}
        </div>
    )
}