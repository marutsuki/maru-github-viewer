"use client";

import ReadMe from "@/components/profile/ReadMe";
import { getGithubRawEndpoint } from "@/util/environment";
import GitHubProfileCard from "@/components/profile/GitHubProfileCard";
import RepositorySection from "@/components/profile/RepositorySection";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const params = useSearchParams();

    const user = params.get("user");

    if (user === null) {
        throw new Error("User not found :(");
    }

    return <main className="p-12 h-full overflow-hidden grid grid-areas-profile-layout grid-cols-profile-layout grid-rows-profile-layout [&>*]:m-2">
        <section className="grid-in-left">
            <GitHubProfileCard user={ user } /></section>
        <section className="relative grid-in-right"> <ReadMe readmeUrl={getGithubRawEndpoint().concat(`/${user}/${user}/main/README.md`)}/></section>
        <section className="grid-in-bottom"><RepositorySection user={ user }/></section>
    </main>;
}