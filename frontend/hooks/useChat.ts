import { useState } from "react";
import { Message } from "@/types/chat";
import { streamChat } from "@/services/streamService";

export function useChat() {

    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async (message: string) => {

        if (!message.trim()) return;

        setLoading(true);

        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content: message,
        };

        const assistantMessage: Message = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "",
        };

        setMessages(prev => [
            ...prev,
            userMessage,
            assistantMessage,
        ]);

        try {

            await streamChat(
                message,

                (chunk) => {

                    setMessages(prev => {

                        const updated = [...prev];

                        updated[updated.length - 1] = {
                            ...updated[updated.length - 1],
                            content:
                                updated[updated.length - 1].content + chunk,
                        };

                        return updated;
                    });

                }

            );

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    return {
        messages,
        loading,
        sendMessage,
    };

}