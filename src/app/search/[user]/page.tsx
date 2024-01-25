"use client";

import ReadMe from "@/components/profile/ReadMe";
import { getGithubRawEndpoint } from "@/util/environment";
import GitHubProfileCard from "@/components/profile/GitHubProfileCard";
import RepositorySection from "@/components/profile/RepositorySection";

export default function Page({ params }: { params: { user: string} } ) {
    // TODO: Remove test code
    return <main className="p-12 h-full overflow-hidden grid grid-areas-profile-layout grid-cols-profile-layout grid-rows-profile-layout [&>*]:m-2">
        <section className="grid-in-left">
            <GitHubProfileCard user={ params.user } /></section>
        <section className="relative grid-in-right"> <ReadMe readmeUrl={getGithubRawEndpoint().concat("/marutsuki/marutsuki/main/README.md")}/></section>
        <section className="grid-in-bottom"><RepositorySection user={ params.user }/></section>
    </main>;
}