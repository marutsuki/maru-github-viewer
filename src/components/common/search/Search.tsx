import AnimationWrapper from "@/components/common/AnimationWrapper";
import { SearchBar } from "@/components/common/search/SearchBar";
import { SearchPopupWrapper } from "@/components/common/search/SearchPopupWrapper";
import { SearchResults, SearchResultsLoading } from "@/components/common/search/SearchResults";
import { assertIsNode } from "@/util/type-utils";
import { useEffect, useRef, useState } from "react";

type SearchProps<T> = {
    onInputUpdate: (input: string) => void;
    isError?: boolean;
    data: T[] | null;
    onClick: (item: T) => void;
    shouldCloseOnClick?: boolean;
    resultComponentProvider: (user: T, key: number) => React.ReactNode;
};

export default function Search<T>({
    onInputUpdate,
    isError = false,
    data,
    onClick,
    shouldCloseOnClick = true,
    resultComponentProvider,
}: SearchProps<T>): React.ReactNode {
    const searchRef = useRef<HTMLDivElement>(null);
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        const addClickOutsideEventListener = (e: MouseEvent) => {
            assertIsNode(e.target);
            if (
                searchRef.current !== null &&
                searchRef.current !== e.target &&
                !searchRef.current.contains(e.target)
            ) {
                setFocused(false);
            }
        };
        addEventListener("click", addClickOutsideEventListener);
        return () => removeEventListener("click", addClickOutsideEventListener);
    }, []);

    return (
        <>
            {focused && (
                <div className="absolute z-[-1] h-[100vh] w-[100vw] bg-black bg-opacity-50" />
            )}
            <div className="relative">
                <SearchBar
                    ref={searchRef}
                    onInputUpdate={onInputUpdate}
                    onFocus={() => {
                        setFocused(true);
                    }}
                >
                    <AnimationWrapper
                        show={focused}
                        onShowAnimation={[
                            {
                                opacity: "0%",
                            },
                            {
                                opacity: "100%",
                            },
                        ]}
                        onHideAnimation={[
                            {
                                opacity: "100%",
                            },
                            {
                                opacity: "0%",
                            },
                        ]}
                    >
                        <SearchPopupWrapper className="pointer-events-none absolute -top-2.5 z-[-1] w-[75vw] -translate-x-1/2 overflow-hidden pt-12">
                            {isError ? (
                                <h1>An unexpected error occurred!</h1>
                            ) : data === null ? (
                                <SearchResultsLoading />
                            ) : (
                                <SearchResults
                                    items={data}
                                    onClick={(item) => {
                                        onClick(item);
                                        if (shouldCloseOnClick) {
                                            setFocused(false);
                                        }
                                    }}
                                    resultComponentProvider={
                                        resultComponentProvider
                                    }
                                />
                            )}
                        </SearchPopupWrapper>
                    </AnimationWrapper>
                </SearchBar>
            </div>
        </>
    );
}
