"use client";

import { useRouter } from "next/navigation";
import { Fetcher } from "swr";
import { User, parseUser } from "@/model/User";
import { useEffect, useState } from "react";
import ExpandedProfileCard from "@/components/profile/ExpandedProfileCard";
import Repository from "@/model/Repository";
import Markdown from "react-markdown";
import { rawMarkdownToHtml } from "@/util/markdown";
import ReadMe from "@/components/profile/Readme";
import { getGithubRawEndpoint } from "@/util/environment";

export const fetcher: Fetcher<Repository, string> = (id) => fetch(id).then(res => res.json()).then(data => parseUser(data));

const test: User = {
    username: "marutsuki",
    avatarUrl: "https://avatars.githubusercontent.com/u/68990764?v=4",
    "url": "https://api.github.com/users/marutsuki",
    "html_url": "https://github.com/marutsuki",
    "followers_url": "https://api.github.com/users/marutsuki/followers",
    "following_url": "https://api.github.com/users/marutsuki/following{/other_user}",
    "gists_url": "https://api.github.com/users/marutsuki/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/marutsuki/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/marutsuki/subscriptions",
    "organizations_url": "https://api.github.com/users/marutsuki/orgs",
    "repos_url": "https://api.github.com/users/marutsuki/repos",
    "events_url": "https://api.github.com/users/marutsuki/events{/privacy}",
    "type": "User",
    "site_admin": false,
    "name": "Lucien Lu/ルシアン",
    "company": null,
    "blog": "",
    "location": "Australia",
    "hireable": null,
    bio: "22,\r\nDeveloper/Digital Artist/Musician",
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2020-07-30T08:29:15Z",
    "updated_at": "2023-12-09T09:31:35Z"
};

export default function Page({ params }: { params: { user: string} } ) {
    const router = useRouter();




    // TODO: Remove test code
    return <main className="p-12 max-w-max overflow-hidden grid grid-cols-2">
        <ExpandedProfileCard
            title={test.username}
            description={test.bio}
            imageUrl={test.avatarUrl}
        />
        <ReadMe
            readmeUrl={getGithubRawEndpoint().concat("/marutsuki/marutsuki/main/README.md")}
        />
    </main>;
}