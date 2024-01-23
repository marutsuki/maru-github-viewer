import Image from "next/image";

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
    return <div className="group relative card w-96 max-w-full h-min m-8 rounded-lg p-4 flex-column box-border bg-card-overlay text-text-faded
        before:absolute before:-inset-1 before:content-[''] before:absolute before:rounded-md before:bg-thematic-gradient before:z-[-1]
        after:content-[''] after:absolute after:bg-thematic-gradient after:blur-lg after-inset-0 after:z-[-2]
        hover:text-text-active
        duration-100 ease-out"
    onClick={props.onClick !== undefined ? props.onClick : undefined}>
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
    </div>;
}