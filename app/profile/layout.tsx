"use client";

import StoreProvider from "../components/StoreProvider";
import BrowserMockupWrapper from "./components/BrowserMockupWrapper";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="p-16">
            <StoreProvider>
                <BrowserMockupWrapper>
                    { children }
                </BrowserMockupWrapper>
            </StoreProvider>
        </main>
    );
}