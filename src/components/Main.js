import { useState } from 'react';
import Message from "./Message";
import Strike from "./Strike";

const Main = () => {
    const [messagesArray, setMessagesArray] = useState([]);

    const addMessage = (message) => {
        setMessagesArray((prevArray) => [message, ...prevArray]);
    }

    return (
        <div className="main">
            <Strike messagesArray={messagesArray} addMessage={addMessage} />
            {messagesArray.map((message, index) => {
                return <Message message={message} key={index} />
            })}
        </div>
    );
}

export default Main