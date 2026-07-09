import ChatMessage from "@/components/ChatMessage";
import { Message } from "@/types/chat";

interface Props {
    messages: Message[];
}

export default function ChatWindow({
    messages,
}: Props) {

    return (
        <div
            className="
                flex-1
                overflow-y-auto
                px-6
                py-8
            "
        >

            <div className="max-w-5xl mx-auto">

                {messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        message={message}
                    />
                ))}

            </div>

        </div>
    );
}