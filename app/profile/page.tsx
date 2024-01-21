"use client";

import { getGithubApiEndpoint, getGithubApiToken } from "@/src/util/environment";
import { Fetcher } from "swr";
import { useSelector } from "react-redux";
import { selectUserSearch } from "@/src/client/user/userSearchSlice";
import { MinimalUser, parseMinimalUser } from "./model/MinimalUser";
import { useRouter } from "next/navigation";
import ProfileCard from "@/app/components/ProfileCard";

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
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "Sadadar",
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "sadadankon",
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "sadada725",
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "Sadada2008",
        "avatarUrl": "/identicon.png"
    },
    {
        "username": "sadadasd456",
        "avatarUrl": "/identicon.png"
    }
];

export default function Page() {
    const router = useRouter();
    const usernameFilter = useSelector(selectUserSearch);

    // Using dummy data, revert back to useSWR later
    const { data, error } = { data: testObject, error: undefined };

    const redirectToProfile = (username: string) => {
        router.push(`/profile/${username}`);
    };

    if (error !== undefined) {
        throw new Error("Failed to load users.");
    }

    return <main>
        <div className="grid grid-cols-4 place-items-center">
            {
                (data === undefined ? [] : data).map(user =>
                    <ProfileCard
                        title={user.username}
                        imageUrl={user.avatarUrl}
                        description={user.bio === undefined ? "This user has not written a bio :(" : user.bio}
                        onClick={() => redirectToProfile(user.username)}
                    />
                )
            }
        </div>

    </main>;
}