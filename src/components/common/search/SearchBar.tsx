import { DoubleDash } from "@/components/common/symbols";
import { forwardRef, useState } from "react";

type SearchBarProps = {
    className?: string;
    onInputUpdate: (input: string) => void;
    onFocus?: () => void;
    onUnfocus?: () => void;
    children?: React.ReactNode;
};

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
    (
        {
            className = "",
            children,
            onInputUpdate = () => {},
            onFocus = () => {},
        },
        ref,
    ) => {
        const [input, setInput] = useState("");

        return (
            <div
                ref={ref}
                className={`relative z-[100] flex w-full justify-center bg-neutral p-4 ${className}`}
            >
                <div className="relative h-8 w-80">
                    <DoubleDash className="absolute -bottom-4 right-full" />
                    <div className="absolute h-full w-full bg-thematic-gradient p-2 blur-md"></div>
                    <input
                        className="absolute h-full w-full rounded-lg border border-white bg-black bg-opacity-70 p-2 text-white"
                        placeholder="Search a GitHub user..."
                        value={input}
                        onChange={(e) => {
                            onInputUpdate(e.target.value);
                            setInput(e.target.value);
                        }}
                        onFocus={onFocus}
                    />
                </div>
                {children}
            </div>
        );
    },
);
