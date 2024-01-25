import Repository from "@/model/Repository";
import ThemedWrapper from "../common/ThemedWrapper";
import { useEffect, useState } from "react";
import { Git } from "../common/symbols";
import { CloneWindow } from "../common/CloneWindow";
import AnimationWrapper from "../common/AnimationWrapper";
import RepositoryCard from "./RepositoryCard";

export default function RepositorySection({ repos }: { repos: Repository[] }) {
    const [topThree, setTopThree] = useState<Repository[]>([]);

    useEffect(() => {
        setTopThree(repos.toSorted((a, b) => b.watchers - a.watchers).slice(0, 3));
    }, [repos]);
    return <section>
        <h1 className="mx-8 text-white text-2xl">Top 3 Repos</h1>
        <div className="flex flex-row">
            { topThree.map((repo, index) =>
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
    </section>;
}