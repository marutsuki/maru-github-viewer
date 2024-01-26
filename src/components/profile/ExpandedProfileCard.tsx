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
export default function ExpandedProfileCard({
    children,
    ...props
}: ExpandedProfileCardProps) {
    return (
        <ThemedWrapper>
            <div className="avatar opacity-40 duration-200 group-hover:opacity-100 ">
                <div className="mask mask-squircle w-24">
                    <Image
                        className="h-32 w-32 object-cover duration-100 ease-out"
                        src={props.imageUrl}
                        alt="Profile Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>

            <div className="flex-column relative py-4">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="card-title h-8">{props.title}</h1>
                    <div>
                        {props.titleAside !== undefined && props.titleAside}
                    </div>
                </div>

                <h2>
                    <b>{props.subtitle === undefined ? "" : props.subtitle}</b>
                </h2>
                <p className="line-clamp-3 duration-100 ease-out">
                    {props.description}
                </p>
            </div>
            <div>
                {props.extraInfo !== undefined &&
                    Object.entries(props.extraInfo).map(([key, value]) => (
                        <div>
                            {key}: {value}
                        </div>
                    ))}
            </div>

            {children}
        </ThemedWrapper>
    );
}
