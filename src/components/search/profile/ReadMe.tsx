"use client";

import LoadingScreen from "@/components/common/LoadingScreen";
import { getUrlFetcher } from "@/util/client";
import { rawMarkdownToHtml } from "@/util/markdown";
import { useMemo } from "react";
import { Fetcher } from "swr";
import useSWRImmutable from "swr/immutable";

export const fetcher: Fetcher<string, string> = getUrlFetcher(
    (res) => res.text(),
    false,
);

export default function ReadMe({ readmeUrl }: { readmeUrl: string }) {
    const { data, error } = useSWRImmutable(readmeUrl, fetcher);

    const setHtmlProps = useMemo(() => {
        let html: string;
        if (error !== undefined) {
            html = "<h1>This user does not have a profile README.md!</h1>";
        } else if (data === undefined) {
            return null;
        } else {
            html = data;
        }
        return {
            dangerouslySetInnerHTML: {
                __html: rawMarkdownToHtml(html),
            },
        };
    }, [data, error]);

    if (data === undefined && error === undefined) {
        return (
            <LoadingScreen/>
        );
    }

    return (
        <>
            <h2 className="text-2xl text-white hidden sm:block my-2">
                README.md
            </h2>
            <div
                className="relative h-full sm:min-h-72 rounded-md bg-thematic-gradient opacity-70
        transition duration-100 after:absolute
        after:-inset-0 after:right-0 after:z-[-2] after:bg-thematic-gradient after:blur-lg after:content-[''] hover:opacity-100"
            >
                <section
                    className="absolute inset-1 block overflow-y-auto break-words rounded-lg bg-black bg-opacity-70 p-6
            text-white
            scrollbar-thin scrollbar-thumb-theme-faded
            scrollbar-thumb-rounded-[5px] hover:scrollbar-thumb-theme-primary
            active:scrollbar-thumb-theme-active [&_h2]:py-2 [&_h2]:text-2xl
            [&_h3]:py-2
            [&_h3]:text-xl
            [&_img]:m-2
            [&_img]:inline-block
            [&_p]:text-sm"
                    {...(setHtmlProps !== null && setHtmlProps)}
                ></section>
            </div>
        </>
    );
}
