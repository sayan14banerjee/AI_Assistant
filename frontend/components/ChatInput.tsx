"use client";

import { useState } from "react";
import { SendHorizontal } from "lucide-react";

interface Props {
    onSend: (message: string) => void;
    loading: boolean;
}

export default function ChatInput({
    onSend,
    loading,
}: Props) {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!message.trim() || loading) return;

        onSend(message);

        setMessage("");
    };

    return (
        <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-5">

            <div className="max-w-5xl mx-auto">

                <div
                    className="
                        flex
                        items-end
                        rounded-3xl
                        border
                        border-zinc-700
                        bg-zinc-900
                        px-4
                        py-3
                        shadow-lg
                        transition-all
                        duration-300
                        focus-within:border-blue-500
                        focus-within:shadow-blue-500/30
                    "
                >

                    <textarea
                        rows={1}
                        placeholder="Ask NEXORA anything..."
                        disabled={loading}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="
                            flex-1
                            resize-none
                            bg-transparent
                            outline-none
                            text-white
                            placeholder:text-zinc-500
                            max-h-40
                            overflow-y-auto
                        "
                    />

                    <button
                        disabled={loading}
                        onClick={handleSend}
                        className="
                            ml-3
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-600
                            text-white
                            transition
                            hover:bg-blue-700
                            disabled:bg-zinc-700
                            disabled:cursor-not-allowed
                        "
                    >
                        <SendHorizontal size={18} />
                    </button>

                </div>

                <p className="mt-2 text-center text-xs text-zinc-500">
                    Powered by <span className="font-semibold">NEXORA AI</span>
                </p>

            </div>

        </footer>
    );
}