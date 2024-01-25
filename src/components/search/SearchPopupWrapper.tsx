import React from "react";

type SearchPopupWrapperProps = {
    children: React.ReactNode | React.ReactNode[];
    className?: string
};

export const SearchPopupWrapper: React.FC<SearchPopupWrapperProps> = (({ children, className = "" }) => {
    return <section className={`mockup-browser border border-base-300 shadow-lg bg-black/75 backdrop-blur-md ${className}`}>
        { children }
    </section>;
});