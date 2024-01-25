"use client";

import MinimalUser, { parseMinimalUser } from "@/model/MinimalUser";
import Search from "./Search";
import ProfileCard from "../ProfileCard";
import { getUrlFetcher } from "@/util/client";
import useSWRImmutable from "swr/immutable";
import { getGithubApiEndpoint } from "@/util/environment";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MINIMUM_SEARCH_LENGTH = 3;

const RESULTS_TO_SHOW = 8;

const fetcher = getUrlFetcher(res => res.json().then(data => data.items.map((item: unknown) => parseMinimalUser(item))));
const UserTypedSearch = Search<MinimalUser>;

export default function GitHubSearch() {
    const router = useRouter();
    const [userSearch, setUserSearch] = useState("");

    // Using dummy data, revert back to useSWR later
    const { data, error } = useSWRImmutable(userSearch.length < MINIMUM_SEARCH_LENGTH ? "" : getGithubApiEndpoint().concat(`/search/users?q=${userSearch} in:user&per_page=${RESULTS_TO_SHOW}`), fetcher);

    const onProfileClick = (user: MinimalUser) => {
        router.push(`/search/${user.username}`);
    };

    return <UserTypedSearch
        onInputUpdate={ input => setUserSearch(input) }
        data= {data === undefined ? null : data }
        isError={ error !== undefined }
        onClick={ (user) => onProfileClick(user) }
        resultComponentProvider={(user, key) =>
            <ProfileCard
                key={"user:" + key}
                title={user.username}
                imageUrl={user.avatarUrl}
                description={user.bio === null ? "This user has not written a bio :(" : user.bio}
            />
        }
    />;
}