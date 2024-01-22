import React from "react";

type SearchPopupWrapperProps = {
    children: React.ReactNode | React.ReactNode[];
    className?: string
};

export const SearchPopupWrapper: React.FC<SearchPopupWrapperProps> = (({ children, className = "" }) => {
    return <main className={`mockup-browser border border-base-300 shadow-lg ${className}`}>
        { children }
    </main>;
});