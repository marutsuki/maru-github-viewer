"use client";

import Search from "@/components/common/search/Search";
import ProfileCard from "@/components/search/GitHubSearchResult";
import MinimalUser, { parseMinimalUser } from "@/model/MinimalUser";
import { getGithubApiEndpoint } from "@/util/environment";
import { useRouter } from "next/navigation";
import { TimeoutId } from "node_modules/@reduxjs/toolkit/dist/query/core/buildMiddleware/types";
import { useRef, useState } from "react";
import useSWRImmutable from "swr/immutable";

const SEARCH_UPDATE_DELAY = 500;

const MINIMUM_SEARCH_LENGTH = 3;

const RESULTS_TO_SHOW = 8;

const fetcher = (userFilter: string) =>
    userFilter.length < MINIMUM_SEARCH_LENGTH
        ? []
        : fetch(
              getGithubApiEndpoint().concat(
                  `/search/users?q=${userFilter} in:user&per_page=${RESULTS_TO_SHOW}`,
              ),
          ).then((res) =>
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
    const timeoutRef = useRef<TimeoutId | null>(null);
    const { data, error } = useSWRImmutable(userSearch, fetcher);

    const onProfileClick = (user: MinimalUser) => {
        router.push(`/search/profile?user=${user.username}`);
    };

    const delayedSetUserSearch = (input: string) => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setUserSearch(input);
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }
        }, SEARCH_UPDATE_DELAY);
    };

    return (
        <UserTypedSearch
            onInputUpdate={(input) => delayedSetUserSearch(input)}
            data={
                userSearch.length === 0 ? [] : data === undefined ? null : data
            }
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
