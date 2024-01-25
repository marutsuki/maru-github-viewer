import { User } from "@/model/User";
import { Company, Twitter } from "../common/symbols";
import { getTwitterUrl } from "@/util/environment";
import ExpandedProfileCard from "./ExpandedProfileCard";

export type GitHubProfileCardProps = User;
export default function GitHubProfileCard(props: GitHubProfileCardProps) {

    const openGitHubInNewTab = () => {
        window.open(props.url, "_blank");
    };

    const openTwitterInNewTab = () => {
        window.open(getTwitterUrl().concat(`/${props.twitter}`), "_blank");
    };

    return <ExpandedProfileCard
        title={props.username}
        subtitle={props.name}
        description={props.bio}
        imageUrl={props.avatarUrl}
        titleAside={<>
            { props.twitter !== undefined && <span onClick={openTwitterInNewTab}>
                <Twitter className="cursor-pointer fill-white hover:fill-twitter active:fill-theme-active transition duration-200"/>
            </span>}
        </>}
    >
        { props.company !== undefined && <p><Company className="mr-2 fill-text-active inline-block"/> <span>{ props.company }</span> </p>}
        { props.location !== undefined && <p>{ props.location }</p>}
        <hr className="my-2"/>
        <p>Followers: {String(props.followers)}</p>
        <p>Following: {String(props.following)}</p>
        <p>Account Age: {props.ageInMonths % 12 === 0 ? `${Math.floor(props.ageInMonths / 12)} Years` : `${Math.floor(props.ageInMonths / 12)} Years and ${props.ageInMonths % 12} Months`}</p>
        <button className="m-2 border rounded-md duration-100
        active:bg-theme-active active:text-black" onClick={openGitHubInNewTab}>To GitHub</button>
    </ExpandedProfileCard>;
}