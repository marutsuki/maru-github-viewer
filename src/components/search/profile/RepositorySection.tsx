import RepositoryCard from "@/components/search/profile/RepositoryCard";
import Repository, { parseRepository } from "@/model/Repository";
import { getUrlFetcher } from "@/util/client";
import { getGithubApiEndpoint } from "@/util/environment";
import { useMemo } from "react";
import { Fetcher } from "swr";
import useSWRImmutable from "swr/immutable";

export const fetcher: Fetcher<Repository[], string> = getUrlFetcher((res) =>
    res
        .json()
        .then((data) => data.map((item: unknown) => parseRepository(item))),
);

export default function RepositorySection({ user }: { user: string }) {
    const { data, error } = useSWRImmutable(
        getGithubApiEndpoint().concat(`/users/${user}/repos`),
        fetcher,
    );

    const sorted = useMemo(
        () =>
            data === undefined
                ? null
                : data.toSorted((a, b) => b.watchers - a.watchers),
        [data],
    );

    if (error !== undefined) {
        return <>Error</>;
    }
    if (sorted === null) {
        return <></>;
    }

    return (
        <section className="my-4">
            <h1 className="mx-8 text-2xl text-white sm:mx-0 py-2">Public Repositories</h1>
            <div
                className="relative
        before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[1] before:h-full
        before:w-20 before:rounded-xl before:bg-gradient-to-r before:from-theme-primary before:to-transparent before:opacity-40
        before:blur-sm before:content-['']
        sm:before:hidden
        after:pointer-events-none after:absolute after:right-0 after:top-0 after:h-full after:w-20
        after:rounded-xl after:bg-gradient-to-l after:from-theme-primary after:to-transparent after:opacity-40
        after:blur-sm after:content-['']
        sm:after:hidden"
            >
                <div
                    className="flex flex-row sm:flex-col overflow-x-auto rounded-xl
                    sm:overflow-x-hidden sm:overflow-y-auto sm:h-[50vh]
            border-theme-primary pb-4 shadow-inner
            scrollbar-thin
            scrollbar-thumb-theme-faded scrollbar-thumb-rounded-[5px]
            hover:scrollbar-thumb-theme-primary active:scrollbar-thumb-theme-active"
                >
                    {sorted.map((repo, index) => (
                        <RepositoryCard
                            key={`repo-${index}`}
                            name={repo.name}
                            description={
                                repo.description === null
                                    ? "No description..."
                                    : repo.description
                            }
                            htmlUrl={repo.htmlUrl}
                            cloneUrls={repo.cloneUrls}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
