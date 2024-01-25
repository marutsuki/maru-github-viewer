import { User, parseUser } from "@/model/User";
import { Company, Twitter } from "@/components/common/symbols";
import { getGithubApiEndpoint, getTwitterUrl } from "@/util/environment";
import ExpandedProfileCard from "./ExpandedProfileCard";
import useSWR, { Fetcher } from "swr";

export const fetcher: Fetcher<User, string> = (url) => fetch(url).then(res => res.json()).then(data => parseUser(data));

export type GitHubProfileCarddata = {
    user: string;
};

export default function GitHubProfileCard({ user }: GitHubProfileCarddata) {
    const { data, error } = useSWR(getGithubApiEndpoint().concat(`/users/${user}`), fetcher);

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

    return <ExpandedProfileCard
        title={data.username}
        subtitle={data.name}
        description={data.bio}
        imageUrl={data.avatarUrl}
        titleAside={<>
            { data.twitter !== undefined && <span onClick={openTwitterInNewTab}>
                <Twitter className="cursor-pointer fill-white hover:fill-twitter active:fill-theme-active transition duration-200"/>
            </span>}
        </>}
    >
        { data.company !== null && <p><Company className="mr-2 fill-text-active inline-block"/> <span>{ data.company }</span> </p>}
        { data.location !== null && <p>{ data.location }</p>}
        <hr className="my-2"/>
        <p>Followers: {String(data.followers)}</p>
        <p>Following: {String(data.following)}</p>
        <p>Account Age: {data.ageInMonths % 12 === 0 ? `${Math.floor(data.ageInMonths / 12)} Years` : `${Math.floor(data.ageInMonths / 12)} Years and ${data.ageInMonths % 12} Months`}</p>
        <button className="m-2 border rounded-md duration-100
        active:bg-theme-active active:text-black" onClick={openGitHubInNewTab}>To GitHub</button>
    </ExpandedProfileCard>;
}