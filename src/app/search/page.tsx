"use client";

import { getGithubApiEndpoint, getGithubApiToken } from "@/util/environment";
import useSWR, { Fetcher } from "swr";
import { useSelector } from "react-redux";
import { selectUserSearch, updateUserSearch } from "@/client/user/userSearchSlice";
import { MinimalUser, parseMinimalUser } from "@/model/MinimalUser";
import { useRouter } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import Search from "@/components/search/Search";

const RESULTS_TO_SHOW = 8;

export const fetcher: Fetcher<MinimalUser[], string> = (id) => id.length === 0 ? Promise.resolve([]) : fetch(getGithubApiEndpoint().concat(`/search/users?per_page=${RESULTS_TO_SHOW}&q=${id} in:user`), {
    headers: {
        "Authorization": getGithubApiToken()
    }
}).then(res => res.json()).then(data => parseSearchResponse(data));

const parseSearchResponse = (res: { items: Array<Record<string, string>>}) => res.items.map(item => parseMinimalUser(item));

const testObject = [
    {
        "username": "sadadam786",
        "bio": "asdsadaasds adasdassda dadasdadads asdadsadsa",
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "sadadadaddas",
        "bio": "asdsadaasds adasdassda dadasdadads asdadsadsa",
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "sadada233245",
        "bio": null,
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "Sadadar",
        "bio": null,
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "sadadankon",
        "bio": null,
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "sadada725",
        "bio": null,
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "Sadada2008",
        "bio": null,
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "sadadasd456",
        "bio": null,
        "avatarUrl": "/identicon.png"
    }
];

const UserTypedSearch = Search<MinimalUser>;
export default function Page() {
    const router = useRouter();
    const usernameFilter = useSelector(selectUserSearch);

    // Using dummy data, revert back to useSWR later
    const { data, error } = { data: testObject, error: undefined };

    const redirectToProfile = (user: MinimalUser) => {
        router.push(`/profile/${user.username}`);
    };

    if (error !== undefined) {
        throw new Error("Failed to load users.");
    }

    return <main>
        <UserTypedSearch
            onInputUpdate={input => updateUserSearch(input)}
            data={data}
            resultComponentProvider={(user, key) =>
                <ProfileCard
                    key={"user:" + key}
                    title={user.username}
                    imageUrl={user.avatarUrl}
                    description={user.bio === null ? "This user has not written a bio :(" : user.bio}
                    onClick={() => redirectToProfile(user)}
                />
            }
        />
    </main>;
}