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
        <main className="grid h-full grid-cols-2 place-items-center text-white sm:flex sm:flex-col">
            <div className="m-16 flex flex-col items-end">
                <div>
                    <h1 className="mb-4 text-3xl">
                        Search for any GitHub account
                    </h1>
                    <p>
                        Be presented with a tailored overview in an aesthetic
                        theme.
                        <br />
                        Analyze their account information, absorb in their
                        profile README.md, <br />
                        see their public repos, clone them directly here!
                    </p>
                </div>

                <Image
                    className="mt-4 w-full rounded-md"
                    src="/maru-github-viewer/preview.png"
                    alt="preview"
                    width={1858}
                    height={785}
                />
            </div>
            <div className="flex flex-col items-center sm:m-4">
                <button
                    className="group relative overflow-hidden rounded-lg p-1 text-4xl duration-200 hover:text-theme-accent"
                    onClick={redirectToSearchPage}
                >
                    <h1
                        className="rounded-lg bg-black/75 p-4 duration-200
                        before:absolute before:z-[-1]
                        before:h-[2000px] before:w-[2000px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-lg before:bg-thematic-gradient before:duration-200 before:content-[''] group-hover:before:rotate-180 active:bg-theme-active/75
                        active:text-white"
                    >
                        Dive into the application!
                    </h1>
                </button>
                <UpArrow className="sm:hidden m-4 h-8 w-8 animate-bounce fill-white" />
            </div>
        </main>
    );
}
