const Message = ({ post }) => {

    return (
        <div className="message-container">
            <div className="message-profile-pic">
                <p>P</p>
            </div>
            <div className='message-content'>
                <div className='user-info'>
                    <p>{post.Nickname}</p>
                    <p>{post.User}</p>
                </div>
                <p>{post.Message}</p>
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