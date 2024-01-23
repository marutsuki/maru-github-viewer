"use client";

import { useRouter } from "next/navigation";
import { Fetcher } from "swr";
import { User, getAgeInMonths, parseUser } from "@/model/User";
import { useEffect, useState } from "react";
import ExpandedProfileCard from "@/components/profile/ExpandedProfileCard";
import Repository from "@/model/Repository";
import Markdown from "react-markdown";
import { rawMarkdownToHtml } from "@/util/markdown";
import ReadMe from "@/components/profile/Readme";
import { getGithubRawEndpoint, getTwitterUrl } from "@/util/environment";
import { Company, Twitter } from "@/components/common/symbols";
import GitHubProfileCard from "@/components/profile/GitHubProfileCard";

export const fetcher: Fetcher<Repository, string> = (id) => fetch(id).then(res => res.json()).then(data => parseUser(data));

const data: User = {
    username: "marutsuki",
    avatarUrl: "https://avatars.githubusercontent.com/u/68990764?v=4",
    url: "https://github.com/marutsuki",
    reposUrl: "https://api.github.com/users/marutsuki/repos",
    name: "Lucien Lu/ルシアン",
    company: "My company",
    "blog": "",
    location: "Australia",
    bio: "22,\r\nDeveloper/Digital Artist/Musician",
    twitter: "marutsuki_",
    publicRepoCount: 11,
    followers: 1,
    following: 0,
    ageInMonths: getAgeInMonths(new Date(Date.parse("2020-07-30T08:29:15Z")))
};

export default function Page({ params }: { params: { user: string} } ) {
    const router = useRouter();

    // TODO: Remove test code
    return <main className="p-12 h-full overflow-hidden grid grid-cols-2 grid-rows-[2fr_1fr] [&_*]:mb-1">
        <GitHubProfileCard { ...data }/>
        <ReadMe readmeUrl={getGithubRawEndpoint().concat("/marutsuki/marutsuki/main/README.md")}/>
    </main>;
}