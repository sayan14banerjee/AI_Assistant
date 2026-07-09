import { useState } from "react";
import { Message } from "@/types/chat";
import { streamChat } from "@/services/streamService";

export function useChat() {

    // Current text inside the input
    const [message, setMessage] = useState("");

    // Entire conversation
    const [messages, setMessages] = useState<Message[]>([]);

    // AI generating response
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {

        if (!message.trim() || loading) return;

        // Save prompt before clearing input
        const prompt = message;

        // Clear input immediately
        setMessage("");

        setLoading(true);

        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content: prompt,
        };

        const assistantMessage: Message = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "",
            streaming: true,
        };

        // Add user + empty assistant
        setMessages(prev => [
            ...prev,
            userMessage,
            assistantMessage,
        ]);

        try {

            await streamChat(
                prompt,
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

            setMessages(prev => {

                const updated = [...prev];

                updated[updated.length - 1] = {
                    ...updated[updated.length - 1],
                    streaming: false,
                };

                return updated;

            });

            setLoading(false);

        }

    };

    return {

        message,
        setMessage,

        messages,

        loading,

        sendMessage,

    };

}