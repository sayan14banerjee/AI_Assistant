"use client";

import Header from "@/components/Header";
import ChatInput from "@/components/ChatInput";
import ChatWindow from "@/components/ChatWindow";
import { useChat } from "@/hooks/useChat";

export default function Home() {

    const {
        messages,
        loading,
        sendMessage
    } = useChat();

    return (

        <div className="h-screen bg-zinc-950 flex flex-col">

            <Header />

            <main className="flex-1 overflow-hidden">

                <ChatWindow
                    messages={messages}
                />

            </main>

            <ChatInput
                onSend={sendMessage}
                loading={loading}
            />

        </div>

    );

}