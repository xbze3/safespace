import "../../css/SeekingMessageSection.css";
import BackSeekingNav from "./BackSeekingNav";

function SeekingMessageSection() {
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
        name: "Dr. Maya Thompson",
        profile: "https://randomuser.me/api/portraits/women/53.jpg",
        role: "Cognitive Behavioral Therapy",
    };

    return (
        <>
            <BackSeekingNav />
            <div id="message-box-wrapper">
                <div id="chat-header">
                    <img
                        src={chattingWith.profile}
                        alt="Supporter's profile"
                        id="chat-header-img"
                    />
                    <div id="chat-header-info">
                        <h2>{chattingWith.name}</h2>
                        <p>{chattingWith.role}</p>
                    </div>
                </div>

                <section id="MessageSection">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={
                                msg.sender === "user"
                                    ? "SentMessage"
                                    : "ReceivedMessage"
                            }
                        >
                            <div
                                className={
                                    msg.sender === "user"
                                        ? "ChatPFPIMGDiv_none"
                                        : "ChatPFPIMGDiv"
                                }
                            ></div>
                            <div
                                className={
                                    msg.sender === "user"
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

export default SeekingMessageSection;
