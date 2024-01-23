import { useEffect, useRef, useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchPopupWrapper } from "./SearchPopupWrapper";
import { assertIsNode } from "@/util/type-utils";
import { SearchResults, SearchResultsLoading } from "./SearchResults";
import AnimationWrapper from "../common/AnimationWrapper";

type SearchProps<T> = {
    onInputUpdate: (input: string) => void;
    data: T[];
    resultComponentProvider: (user: T, key: number) => React.ReactNode;
};

export default function Search<T>({ onInputUpdate, data, resultComponentProvider }: SearchProps<T>): React.ReactNode {
    const searchRef = useRef<HTMLDivElement>(null);
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        const addClickOutsideEventListener = (e: MouseEvent) => {
            assertIsNode(e.target);
            if (searchRef.current !== null && searchRef.current !== e.target && !searchRef.current.contains(e.target)) {
                setFocused(false);
            }
        };
        addEventListener("click", addClickOutsideEventListener);
        return () => removeEventListener("click", addClickOutsideEventListener);
    }, []);

    return <>
        { focused && <div className="absolute w-[100vw] h-[100vh] bg-black bg-opacity-50 z-[-3]"/> }
        <div className="relative">

            <SearchBar ref={searchRef} onInputUpdate={onInputUpdate} onFocus={() => {
                setFocused(true);
            }}>
                <AnimationWrapper show={focused}
                    onShowAnimation={[
                        {
                            opacity: "0%",
                        }, {
                            opacity: "100%"
                        }
                    ]}
                    onHideAnimation={[
                        {
                            opacity: "100%",
                        }, {
                            opacity: "0%"
                        }
                    ]}>
                    <SearchPopupWrapper className="-top-2.5 pt-12 absolute w-[75vw] -translate-x-1/2">
                        {
                            data === undefined ? <SearchResultsLoading/> : <SearchResults items={data} resultComponentProvider={resultComponentProvider}/>
                        }
                    </SearchPopupWrapper>
                </AnimationWrapper>
            </SearchBar>
        </div>
    </>;
}