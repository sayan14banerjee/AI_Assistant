import { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    title: string;
    description: string;
    prompt: string;
    onClick: (prompt: string) => void;
}

export default function SuggestionCard({
    icon,
    title,
    description,
    prompt,
    onClick,
}: Props) {
    return (
        <button
            onClick={() => onClick(prompt)}
            className="
                w-full
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-5
                transition-all
                duration-200
                hover:bg-zinc-800
                hover:border-blue-500
                hover:scale-[1.02]
                text-left
            "
        >
            <div className="flex items-center gap-4">

                <div className="text-blue-500">
                    {icon}
                </div>

                <div>

                    <h3 className="text-white font-semibold">
                        {title}
                    </h3>

                    <p className="text-sm text-zinc-400 mt-1">
                        {description}
                    </p>

                </div>

            </div>
        </button>
    );
}