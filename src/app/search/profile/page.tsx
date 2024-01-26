"use client";

import GitHubProfileCard from "@/components/search/profile/GitHubProfileCard";
import ReadMe from "@/components/search/profile/ReadMe";
import RepositorySection from "@/components/search/profile/RepositorySection";
import { getGithubRawEndpoint } from "@/util/environment";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const params = useSearchParams();

    const user = params.get("user");

    if (user === null) {
        throw new Error("User param not found");
    }

    return (
        <main className="grid h-full grid-cols-profile-layout grid-rows-profile-layout overflow-hidden md:overflow-y-auto sm:flex sm:flex-col p-4 sm:p-4 grid-areas-profile-layout [&>*]:m-2 sm:[&>*]:my-10 overflow-y-auto
            scrollbar-thin
            scrollbar-thumb-theme-faded scrollbar-thumb-rounded-[5px]
            hover:scrollbar-thumb-theme-primary active:scrollbar-thumb-theme-active">
            <section className="grid-in-left grid place-items-center">
                <GitHubProfileCard user={user} />
            </section>
            <section className="relative grid-in-right">
                {" "}
                <ReadMe
                    readmeUrl={getGithubRawEndpoint().concat(
                        `/${user}/${user}/main/README.md`,
                    )}
                />
            </section>
            <section className="grid-in-bottom">
                <RepositorySection user={user} />
            </section>
        </main>
    );
}
