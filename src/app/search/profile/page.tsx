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
        throw new Error("User not found :(");
    }

    return (
        <main className="grid h-full grid-cols-profile-layout grid-rows-profile-layout overflow-hidden p-12 grid-areas-profile-layout [&>*]:m-2">
            <section className="grid-in-left">
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
