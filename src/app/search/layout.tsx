import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StoreProvider from "@/components/StoreProvider";
import "@/globals.css";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Maru GitHub Viewer",
    description: "View GitHub accounts with an aesthetic theme!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="corporate">
            <body
                className={exo.className.concat(
                    " grid animate-fadein grid-rows-main-layout",
                )}
            >
                <StoreProvider>
                    <Header />
                    {children}
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
