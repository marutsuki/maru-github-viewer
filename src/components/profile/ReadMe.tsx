"use client";

import { rawMarkdownToHtml } from "@/util/markdown";
import useSWR, { Fetcher } from "swr";

export const fetcher: Fetcher<string, string> = (url) => fetch(url).then(res => res.text());

export default function ReadMe({ readmeUrl }: { readmeUrl: string }) {
    const { data, error } = useSWR(readmeUrl, fetcher);

    if (error !== undefined) {
        console.error(error);
        return <section>
            This user does not have a profile README.md!
        </section>;
    }

    if (data === undefined) {
        return <section>
            <span className="loading loading-ring loading-lg"></span>
        </section>;
    }
    return <div className="relative h-full bg-thematic-gradient rounded-md opacity-70
        hover:opacity-100 transition duration-100
        after:content-[''] after:absolute after:bg-thematic-gradient after:blur-lg after:-inset-0 after:right-0 after:z-[-2]">
        <section
            className="absolute p-6 block break-words text-white bg-black bg-opacity-70 inset-1 rounded-lg
            scrollbar-thin
            scrollbar-thumb-theme-faded scrollbar-thumb-rounded-[5px]
            hover:scrollbar-thumb-theme-primary active:scrollbar-thumb-theme-active
            [&_img]:inline-block [&_img]:m-2 overflow-y-auto
            [&_h2]:text-2xl
            [&_h2]:py-2
            [&_h3]:text-xl
            [&_h3]:py-2
            [&_p]:text-sm"
            dangerouslySetInnerHTML={{ __html: rawMarkdownToHtml(data) }}
        >
        </section>

    </div>;
}