import { Message } from "@/types/chat";
import { Bot, User } from "lucide-react";

interface Props {
    message: Message;
}

export default function ChatMessage({ message }: Props) {

    const isUser = message.role === "user";

    return (
        <div
            className={`flex flex-col mb-6 ${
                isUser ? "items-end" : "items-start"
            }`}
        >
            {/* Sender */}

            <div
                className={`text-sm mb-2 font-medium ${
                    isUser
                        ? "text-blue-400"
                        : "text-gray-400"
                }`}
            >
                {isUser ? <User /> : <Bot />} {isUser ? " You" : " Assistant"}
            </div>

            {/* Bubble */}

            <div
                className={`
                    max-w-[75%]
                    px-4
                    py-3
                    rounded-2xl
                    whitespace-pre-wrap
                    break-words
                    shadow-md
                    ${
                        isUser
                            ? "bg-gray-800 text-white"
                            : "bg-black-800 text-gray-100"
                    }
                `}
            >
                {message.content}
            </div>
        </div>
    );
}