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
import RepositorySection from "@/components/profile/RepositorySection";

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

const repos: Repository[] = [
    {
        name: "Repo1",
        htmlUrl: "http://github.com/repo1",
        cloneUrl: {
            http: "http://github.com/repo",
            ssh: "ssh://github.com/repo"
        },
        language: "Java",
        lastUpdated: 1203919,
        description: "some description some descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome description",
        watchers: 2,
    },
    {
        name: "Repo1",
        htmlUrl: "http://github.com/repo1",
        cloneUrl: {
            http: "http://github.com/repo",
            ssh: "ssh://github.com/repo"
        },
        language: "Java",
        lastUpdated: 1203919,
        description: "some description",
        watchers: 2,
    },
    {
        name: "Repo1",
        htmlUrl: "http://github.com/repo1",
        cloneUrl: {
            http: "http://github.com/repo",
            ssh: "ssh://github.com/repo"
        },
        language: "Java",
        lastUpdated: 1203919,
        description: "most popular",
        watchers: 3,
    },
    {
        name: "Repo1",
        htmlUrl: "http://github.com/repo1",
        cloneUrl: {
            http: "http://github.com/repo",
            ssh: "ssh://github.com/repo"
        },
        language: "Java",
        lastUpdated: 1203919,
        description: "some description",
        watchers: 1,
    }
];

export default function Page({ params }: { params: { user: string} } ) {
    const router = useRouter();

    // TODO: Remove test code
    return <main className="p-12 h-full overflow-hidden grid grid-areas-profile-layout grid-cols-profile-layout grid-rows-profile-layout [&_*]:mb-1">
        <section className="grid-in-left">
            <GitHubProfileCard { ...data }/></section>
        <section className="relative grid-in-right"> <ReadMe readmeUrl={getGithubRawEndpoint().concat("/marutsuki/marutsuki/main/README.md")}/></section>
        <section className="grid-in-bottom"><RepositorySection repos={repos}/></section>
    </main>;
}