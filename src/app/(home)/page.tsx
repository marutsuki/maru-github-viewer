"use client";

import { UpArrow } from "@/components/common/symbols";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const redirectToSearchPage = () => {
        router.push("/search");
    };

    return (
        <main className="h-full grid grid-cols-2 place-items-center text-white">
            <div className="m-16 flex flex-col items-end">
                <div>
                    <h1 className="text-3xl mb-4">Search for any GitHub account</h1>
                    <p>Be presented with a tailored overview in an aesthetic theme.<br/>Analyze their account information, absorb in their profile README.md, <br/>see their public repos, clone them directly here!</p>
                </div>

                <Image className="mt-4 rounded-md w-full" src="/preview.png" alt="preview" width={1858} height={785}/>
            </div>
            <div className="flex flex-col items-center">
                <button
                    className="group relative p-1 text-4xl rounded-lg overflow-hidden hover:text-theme-accent duration-200"
                    onClick={redirectToSearchPage}
                >
                    <h1 className="bg-black/75 rounded-lg p-4 duration-200
                        active:bg-theme-active/75 active:text-white
                        before:content-[''] before:absolute before:w-screen before:h-screen before:-translate-x-1/2 before:-translate-y-1/2 before:z-[-1] before:bg-thematic-gradient before:rounded-lg before:duration-200
                        group-hover:before:rotate-180"
                    >
                        Dive into the application!
                    </h1>
                </button>
                <UpArrow className="m-4 fill-white animate-bounce w-8 h-8"/>
            </div>
        </main>
    );
}
