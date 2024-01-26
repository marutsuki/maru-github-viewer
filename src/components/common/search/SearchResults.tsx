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
        <div className="grid grid-cols-4 place-items-center sm:flex sm:flex-col sm:overflow-y-auto sm:max-h-[75vh] sm:mt-12">
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
