import { Message } from "@/types/chat";

interface Props {
    message: Message;
}

export default function ChatMessage({ message }: Props) {
    return (
        <div
            className={`my-3 p-3 rounded-lg text-white ${
                message.role === "user"
                    ? "bg-blue-600"
                    : "bg-gray-700"
            }`}
        >
            {message.content}
        </div>
    );
}