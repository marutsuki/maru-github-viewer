import Footer from "@/components/Footer";
import "@/globals.css";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Maru GitHub Viewer",
    description: "View GitHub accounts with an aesthetic theme!",
    icons: "/favicon.ico"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="corporate">
            <body
                className={exo.className.concat(" grid grid-rows-home-layout")}
            >
                {children}
                <Footer />
            </body>
        </html>
    );
}
