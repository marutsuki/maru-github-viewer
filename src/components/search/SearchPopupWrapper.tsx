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
            className={`mockup-browser border border-base-300 bg-black/75 shadow-lg backdrop-blur-md ${className}`}
        >
            {children}
        </section>
    );
};
