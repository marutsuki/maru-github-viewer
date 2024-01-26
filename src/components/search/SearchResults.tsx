import React from "react";

type SearchResultsProps<T> = {
    items: T[];
    onClick: (item: T) => void;
    resultComponentProvider: (user: T, key: number) => React.ReactNode;
};

export const SearchResults = <T,>({
    items,
    onClick,
    resultComponentProvider,
}: SearchResultsProps<T>): React.ReactNode => {
    return (
        <div className="grid grid-cols-4 place-items-center">
            {(items === undefined ? [] : items).map((item, key) => (
                <div onClick={() => onClick(item)}>
                    {" "}
                    {resultComponentProvider(item, key)}
                </div>
            ))}
        </div>
    );
};

export const SearchResultsLoading: React.FC<object> = () => {
    return <span className="loading loading-ring loading-lg"></span>;
};
