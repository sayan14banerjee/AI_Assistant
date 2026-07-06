import ChatMessage from "@/components/ChatMessage";
import { Message } from "@/types/chat";

interface Props {
    messages: Message[];
}

export default function ChatWindow({ messages }: Props) {
    return (
        <div className="border rounded-lg p-4 h-[500px] overflow-y-auto">

            {messages.map((message) => (
                <ChatMessage
                    key={message.id}
                    message={message}
                />
            ))}

        </div>
    );
}