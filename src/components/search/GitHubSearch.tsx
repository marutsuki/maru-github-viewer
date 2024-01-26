"use client";

import Search from "@/components/common/search/Search";
import ProfileCard from "@/components/search/ProfileCard";
import MinimalUser, { parseMinimalUser } from "@/model/MinimalUser";
import { getUrlFetcher } from "@/util/client";
import { getGithubApiEndpoint } from "@/util/environment";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useSWRImmutable from "swr/immutable";

const MINIMUM_SEARCH_LENGTH = 3;

const RESULTS_TO_SHOW = 8;

const fetcher = getUrlFetcher((res) =>
    res
        .json()
        .then((data) =>
            data.items.map((item: unknown) => parseMinimalUser(item)),
        ),
);
const UserTypedSearch = Search<MinimalUser>;

export default function GitHubSearch() {
    const router = useRouter();
    const [userSearch, setUserSearch] = useState("");

    // Using dummy data, revert back to useSWR later
    const { data, error } = useSWRImmutable(
        userSearch.length < MINIMUM_SEARCH_LENGTH
            ? ""
            : getGithubApiEndpoint().concat(
                  `/search/users?q=${userSearch} in:user&per_page=${RESULTS_TO_SHOW}`,
              ),
        fetcher,
    );

    const onProfileClick = (user: MinimalUser) => {
        router.push(`/search/profile?user=${user.username}`);
    };

    return (
        <UserTypedSearch
            onInputUpdate={(input) => setUserSearch(input)}
            data={data === undefined ? null : data}
            isError={error !== undefined}
            onClick={(user) => onProfileClick(user)}
            resultComponentProvider={(user, key) => (
                <ProfileCard
                    key={"user:" + key}
                    title={user.username}
                    imageUrl={user.avatarUrl}
                    description={
                        user.bio === null
                            ? "This user has not written a bio :("
                            : user.bio
                    }
                />
            )}
        />
    );
}
