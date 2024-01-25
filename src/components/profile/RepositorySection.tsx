import Repository, { parseRepository } from "@/model/Repository";
import { useMemo } from "react";
import RepositoryCard from "./RepositoryCard";
import useSWR, { Fetcher } from "swr";
import { getGithubApiEndpoint } from "@/util/environment";


export const fetcher: Fetcher<Repository[], string> = (url) => fetch(url).then(res => res.json()).then(data => data.map(item => parseRepository(item)));

export default function RepositorySection({ user }: { user: string }) {
    const { data, error } = useSWR(getGithubApiEndpoint().concat(`/users/${user}/repos`), fetcher);

    console.log(data);
    const sorted = useMemo(() => data === undefined ? null : data.toSorted((a, b) => b.watchers - a.watchers),
        [data]);

    if (error !== undefined) {
        return <>Error</>;
    }
    if (sorted === null) {
        return <></>;
    }

    return <section className="my-4">
        <h1 className="mx-8 text-white text-2xl">Public Repositories</h1>
        <div className="relative
        before:content-[''] before:h-full before:w-20 before:absolute before:top-0 before:left-0
        before:bg-gradient-to-r before:from-theme-primary before:to-transparent before:opacity-40 before:z-[1] before:pointer-events-none
        before:rounded-xl before:blur-sm
        after:content-[''] after:h-full after:w-20 after:absolute after:top-0 after:right-0
        after:bg-gradient-to-l after:from-theme-primary after:to-transparent after:opacity-40 after:pointer-events-none
        after:rounded-xl after:blur-sm">
            <div className="flex flex-row overflow-x-auto pb-4
            rounded-xl shadow-inner border-theme-primary
            scrollbar-thin
            scrollbar-thumb-theme-faded scrollbar-thumb-rounded-[5px]
            hover:scrollbar-thumb-theme-primary active:scrollbar-thumb-theme-active">
                { sorted.map((repo, index) =>
                    <RepositoryCard
                        key={`repo-${index}`}
                        name={repo.name}
                        description={repo.description === null ? "No description..." : repo.description}
                        htmlUrl={repo.htmlUrl}
                        httpUrl={repo.cloneUrl.http}
                        sshUrl={repo.cloneUrl.ssh}
                    />)
                }
            </div>
        </div>

    </section>;
}