"use client";

import StoreProvider from "@/components/StoreProvider";
import SearchBar from "@/components/SearchBar";
import "@/globals.css"
export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <StoreProvider>
            <SearchBar/>
            <main className="m-16 mockup-browser border border-base-300 shadow-lg">
                { children }
            </main>
        </StoreProvider>
    );
}