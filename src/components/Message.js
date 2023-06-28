const Message = ({ message }) => {

    return (
        <div className="message-container">
            <div className="message-profile-pic">
                <p>P</p>
            </div>
            <div className='message-content'>
                <div className='user-info'>
                    <p>{'Charlotte'}</p>
                    <p>{'SpiderWeb'}</p>
                </div>
                <p>{message.message}</p>
                <p>Date and Time</p>
                <div className='message-interactions'>
                    <p>l</p>
                    <p>ret</p>
                    <p>thum</p>
                </div>
                <hr></hr>
            </div>
        </div>
    );
}

export default Message;