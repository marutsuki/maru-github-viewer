import { UpArrow } from "@/components/common/symbols";
import "@/globals.css";
import Image from "next/image";

export default function Page({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="text-white h-full">
            <div className="m-4 flex flex-row justify-center animate-bounce">
                <h1 className="text-2xl text-center">Start searching</h1>
                <UpArrow className="m-1 ml-2 fill-white"/>
            </div>
        </main>
    );
}