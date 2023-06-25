import Message from "./Message";
import Strike from "./Strike";

const Main = () => {
    const posts = [
        {
            User: 'Charlotte',
            Nickname: 'sportgirl',
            Message: 'This here is a message alright'
        },

        {
            User: 'Alice',
            Nickname: 'faespirit',
            Message: 'This here is a better (German) message'
        }
    ];

    return (
        <div className="main">
            <Strike />
            {posts.map((post, index) => {
                return <Message post={post} key={index} />
            })}
        </div>
    );
}

export default Main