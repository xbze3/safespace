import "../../css/SeekingMessageSection.css";
import BackGivingNav from "./BackGivingNav";

function GivingMessageSection() {
    const messages = [
        {
            id: 1,
            content: "Hello. Good day miss",
            sender: "user",
        },
        {
            id: 2,
            content: "Hi there, how can I help you today?",
            sender: "supporter",
        },
        {
            id: 3,
            content: "I'm feeling overwhelmed with school.",
            sender: "user",
        },
        {
            id: 4,
            content:
                "Thanks for sharing. Would you like to talk through what's causing the pressure?",
            sender: "supporter",
        },
    ];

    const chattingWith = {
        name: "Demo Client",
        profile: "https://randomuser.me/api/portraits/men/54.jpg",
    };

    return (
        <>
            <BackGivingNav />
            <div id="message-box-wrapper">
                <div id="chat-header">
                    <img
                        src={chattingWith.profile}
                        alt="Supporter's profile"
                        id="chat-header-img"
                    />
                    <div id="chat-header-info">
                        <h2>{chattingWith.name}</h2>
                    </div>
                </div>

                <section id="MessageSection">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={
                                msg.sender === "supporter"
                                    ? "SentMessage"
                                    : "ReceivedMessage"
                            }
                        >
                            <div
                                className={
                                    msg.sender === "supporter"
                                        ? "ChatPFPIMGDiv_none"
                                        : "ChatPFPIMGDiv"
                                }
                            ></div>
                            <div
                                className={
                                    msg.sender === "supporter"
                                        ? "SMessage"
                                        : "RMessage"
                                }
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </section>

                <div id="message-input-bar">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        id="message-input"
                    />
                    <button id="send-button">Send</button>
                </div>
            </div>
        </>
    );
}

export default GivingMessageSection;
