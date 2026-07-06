
"use client";

import ChatInput from "@/components/ChatInput";
import ChatWindow from "@/components/ChatWindow";
import { useChat } from "@/hooks/useChat";

export default function Home() {

    const {
        messages,
        loading,
        sendMessage,
    } = useChat();

    return (
        <div className="max-w-4xl mx-auto p-8">

            <h1 className="text-3xl font-bold mb-6">
                AI Assistant
            </h1>

            <ChatWindow
                messages={messages}
            />

            <ChatInput
                onSend={sendMessage}
            />

            {loading && (
                <p className="mt-3 text-gray-500">
                    AI is thinking...
                </p>
            )}

        </div>
    );

}