"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CodeBlock from "./CodeBlock";

interface Props {
    content: string;
}

export default function MarkdownRenderer({ content }: Props) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                code({ className, children }) {
                    const match = /language-(\w+)/.exec(className || "");

                    if (match) {
                        return (
                            <CodeBlock
                                language={match[1]}
                                code={String(children).replace(/\n$/, "")}
                            />
                        );
                    }

                    return (
                        <code
                            className="
        rounded-md
        bg-zinc-300
        px-1.5
        py-0.5
        text-zinc-900
        font-mono
        font-bold
    "
                        >
                            {children}
                        </code>
                    );
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
