import {
    Sparkles,
    Globe,
    Code2,
    FileText,
    Brain,
} from "lucide-react";

import SuggestionCard from "./SuggestionCard";

interface Props {
    onPromptClick: (prompt: string) => void;
}

export default function EmptyState({
    onPromptClick,
}: Props) {

    return (
        <div className="flex h-full flex-col items-center justify-center">

            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20">

                <Sparkles
                    size={38}
                    className="text-blue-500"
                />

            </div>

            <h1 className="text-5xl font-bold text-white">
                NEXORA
            </h1>

            <p className="mt-3 text-lg text-zinc-400">
                Think. Search. Build.
            </p>

            <p className="mt-8 mb-8 text-zinc-500">
                What can I help you with today?
            </p>

            <div className="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">

                <SuggestionCard
                    icon={<Globe size={20} />}
                    title="Search the Web"
                    description="Find real-time information."
                    prompt="Search the web for "
                    onClick={onPromptClick}
                />

                <SuggestionCard
                    icon={<Code2 size={20} />}
                    title="Generate Code"
                    description="Write or debug code."
                    prompt="Write a Python function that "
                    onClick={onPromptClick}
                />

                <SuggestionCard
                    icon={<FileText size={20} />}
                    title="Summarize"
                    description="Summarize long documents."
                    prompt="Summarize the following document:\n"
                    onClick={onPromptClick}
                />

                <SuggestionCard
                    icon={<Brain size={20} />}
                    title="Explain"
                    description="Understand complex topics."
                    prompt="Explain "
                    onClick={onPromptClick}
                />

            </div>

        </div>
    );
}