import { Ref, forwardRef, useState } from "react";
import { DoubleDash } from "./common/symbols";

type SearchBarProps = {
    className?: string;
    onInputUpdate: (input: string) => void;
    onFocus?: () => void;
    onUnfocus?: () => void;
    children: React.ReactNode;
};

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(({ className = "", children, onInputUpdate = () => {}, onFocus = () => {}}, ref) => {
    const [input, setInput] = useState("");

    return <div ref={ref} className={`relative w-full h-20 p-6 bg-neutral flex justify-center ${className}`}>
        <div className="h-8 w-80 relative">
            <DoubleDash className="absolute right-full -bottom-4"/>
            <div className="h-full w-full absolute p-2 bg-thematic-gradient blur-md"></div>
            <input className="h-full w-full absolute p-2 text-white bg-black bg-opacity-70 rounded-lg border border-white"
                placeholder="Search a GitHub user..."
                value={input}
                onChange={e => {
                    onInputUpdate(e.target.value);
                    setInput(e.target.value);
                }
                }
                onFocus={onFocus}/>

        </div>
        { children }
    </div>;
});