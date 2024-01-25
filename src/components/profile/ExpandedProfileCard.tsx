import Image from "next/image";
import ThemedWrapper from "../common/ThemedWrapper";

interface ExpandedProfileCardProps {
    onClick?: () => void;
    title: string;
    subtitle?: string;
    titleAside?: React.ReactNode;
    imageUrl: string;
    description: string;
    children?: React.ReactNode;
    extraInfo?: Record<string, string>;
}
export default function ExpandedProfileCard({ children, ...props }: ExpandedProfileCardProps) {
    return <ThemedWrapper>
        <div className="avatar opacity-40 group-hover:opacity-100 duration-200 ">
            <div className="w-24 mask mask-squircle">
                <Image className="h-32 w-32 object-cover duration-100 ease-out" src={props.imageUrl} alt="Profile Image" width={300} height={300} />
            </div>
        </div>

        <div className="relative py-4 flex-column">
            <div className="flex flex-row justify-between items-center">
                <h1 className="card-title h-8">{props.title}</h1>
                <div>
                    { props.titleAside !== undefined && props.titleAside }
                </div>
            </div>

            <h2><b>{props.subtitle === undefined ? "" : props.subtitle }</b></h2>
            <p className="duration-100 ease-out line-clamp-3">{props.description}</p>
        </div>
        <div>
            { props.extraInfo  !== undefined && Object.entries(props.extraInfo).map(([key, value]) => <div>{key}: {value}</div>) }
        </div>

        { children }
    </ThemedWrapper>;
}