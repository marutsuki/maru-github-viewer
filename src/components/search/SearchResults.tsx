import React from "react";

type SearchResultsProps<T> = {
    items: T[];
    resultComponentProvider: (user: T, key: number) => React.ReactNode;
};


export const SearchResults = <T,>({ items, resultComponentProvider }: SearchResultsProps<T>): React.ReactNode => {
    return <div className="grid grid-cols-4 place-items-center">
        {
            (items === undefined ? [] : items).map((item, key) =>
                resultComponentProvider(item, key)
            )
        }
    </div>;
};

export const SearchResultsLoading: React.FC<object> = () => {
    return <span className="loading loading-ring loading-lg"></span>;
};