"use client";

import StoreProvider from "../components/StoreProvider";
import SearchBar from "./components/BrowserMockupWrapper";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="p-16">
            <StoreProvider>


                <SearchBar/>
                { children }
            </StoreProvider>
        </main>
    );
}