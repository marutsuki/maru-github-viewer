import React from "react";

type SearchPopupWrapperProps = {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
};

export const SearchPopupWrapper: React.FC<SearchPopupWrapperProps> = ({
    children,
    className = "",
}) => {
    return (
        <section
            className={`p-8 pt-16 sm:p-2 mockup-browser border border-base-300 bg-black/75 shadow-lg backdrop-blur-md sm:w-64 grid place-items-center min-h-36 ${className}`}
        >
            {children}
        </section>
    );
};
