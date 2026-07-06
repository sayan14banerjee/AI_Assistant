import { useState } from "react";

interface Props {
    onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {

    const [message, setMessage] = useState("");

    return (
        <div className="mt-4">

            <textarea
                rows={4}
                className="border p-2 w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button
                className="bg-black text-white px-4 py-2 mt-2"
                onClick={() => {
                    onSend(message);
                    setMessage("");
                }}
            >
                Send
            </button>

        </div>
    );
}