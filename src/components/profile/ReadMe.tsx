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
    return <section
        className="max-h-[36rem] block break-words text-white
        [&_img]:inline-block [&_img]:m-2 overflow-y-auto
        [&_h2]:text-2xl
        [&_h2]:py-2
        [&_h3]:text-xl
        [&_h3]:py-2
        [&_p]:text-sm"
        dangerouslySetInnerHTML={{ __html: rawMarkdownToHtml(data) }}
    />;
}