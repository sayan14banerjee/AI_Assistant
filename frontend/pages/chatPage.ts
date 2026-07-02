"use client";

import * as React from "react";
import { sendMessage } from "@/services/chatService";

export default function Home() {
    const [message, setMessage] = React.useState("");
    const [response, setResponse] = React.useState("");

    const handleSend = async () => {
        const result = await sendMessage(message);
        setResponse(result);
    };

    return React.createElement(
        "div",
        { className: "p-10" },
        React.createElement("h1", { className: "text-3xl mb-4" }, "AI Assistant"),
        React.createElement("textarea", {
            className: "border p-2 w-full",
            rows: 4,
            value: message,
            onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value),
        }),
        React.createElement(
            "button",
            {
                className: "bg-black text-white px-4 py-2 mt-2",
                onClick: handleSend,
            },
            "Send"
        ),
        React.createElement("div", { className: "mt-6 border p-4" }, response)
    );
}
