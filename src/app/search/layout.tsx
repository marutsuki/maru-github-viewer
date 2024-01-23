"use client";

import StoreProvider from "@/components/StoreProvider";
import SearchBar from "@/components/SearchBar";
import "@/globals.css";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <StoreProvider>
            { children }
        </StoreProvider>
    );
}