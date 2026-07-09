"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

interface Props {
    language: string;
    code: string;
}

export default function CodeBlock({
    language,
    code,
}: Props) {

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {

        await navigator.clipboard.writeText(code);

        setCopied(true);

        setTimeout(() => {

            setCopied(false);

        }, 2000);

    };

    return (

        <div className="my-6 overflow-hidden rounded-2xl border border-zinc-700">

            <div className="flex items-center justify-between bg-zinc-900 px-4 py-2">

                <span className="text-sm font-medium capitalize text-zinc-300">

                    {language}

                </span>

                <button

                    onClick={handleCopy}

                    className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        px-3
                        py-1
                        text-sm
                        text-zinc-300
                        transition
                        hover:bg-zinc-800
                    "

                >

                    {

                        copied ?

                            <>

                                <Check size={16} />

                                Copied

                            </>

                            :

                            <>

                                <Copy size={16} />

                                Copy

                            </>

                    }

                </button>

            </div>

            <SyntaxHighlighter
                language={language}
                style={oneDark}
                PreTag="div"
                wrapLongLines
                customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    background: "#18181B",
                    padding: "20px",
                }}
                codeTagProps={{
                    style: {
                        background: "transparent",
                    },
                }}
            >
                {code}
            </SyntaxHighlighter>

        </div>

    );

}