import { Company, Twitter } from "@/components/common/symbols";
import ExpandedProfileCard from "@/components/search/profile/ExpandedProfileCard";
import User, { parseUser } from "@/model/User";
import { getUrlFetcher } from "@/util/client";
import { getGithubApiEndpoint, getTwitterUrl } from "@/util/environment";
import { Fetcher } from "swr";
import useSWRImmutable from "swr/immutable";

export const fetcher: Fetcher<User, string> = getUrlFetcher((res) =>
    res.json().then((data) => parseUser(data)),
);

export type GitHubProfileCarddata = {
    user: string;
};

export default function GitHubProfileCard({ user }: GitHubProfileCarddata) {
    const { data, error } = useSWRImmutable(
        getGithubApiEndpoint().concat(`/users/${user}`),
        fetcher,
    );

    if (error !== undefined) {
        return <></>;
    }

    if (data === undefined) {
        return <></>;
    }

    const openGitHubInNewTab = () => {
        window.open(data.url, "_blank");
    };

    const openTwitterInNewTab = () => {
        window.open(getTwitterUrl().concat(`/${data.twitter}`), "_blank");
    };

    return (
        <ExpandedProfileCard
            title={data.username}
            subtitle={data.name === null ? "" : data.name}
            description={data.bio}
            imageUrl={data.avatarUrl}
            titleAside={
                <>
                    {data.twitter !== undefined && (
                        <span onClick={openTwitterInNewTab}>
                            <Twitter className="cursor-pointer fill-white transition duration-200 hover:fill-twitter active:fill-theme-active" />
                        </span>
                    )}
                </>
            }
        >
            {data.company !== null && (
                <p>
                    <Company className="mr-2 inline-block fill-text-active" />{" "}
                    <span>{data.company}</span>{" "}
                </p>
            )}
            {data.location !== null && <p>{data.location}</p>}
            <hr className="my-2" />
            <p>Followers: {String(data.followers)}</p>
            <p>Following: {String(data.following)}</p>
            <p>
                Account Age:{" "}
                {data.ageInMonths % 12 === 0
                    ? `${Math.floor(data.ageInMonths / 12)} Years`
                    : `${Math.floor(data.ageInMonths / 12)} Years and ${data.ageInMonths % 12} Months`}
            </p>
            <button
                className="m-2 rounded-md border duration-100
        active:bg-theme-active active:text-black"
                onClick={openGitHubInNewTab}
            >
                To GitHub
            </button>
        </ExpandedProfileCard>
    );
}
