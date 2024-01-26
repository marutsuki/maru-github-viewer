import ThemedWrapper from "@/components/common/ThemedWrapper";
import Image from "next/image";

interface ProfileCardProps {
    onClick?: () => void;
    title: string;
    imageUrl: string;
    children?: React.ReactNode;
}

export default function GitHubSearchResult({ children, ...props }: ProfileCardProps) {
    return (
        <ThemedWrapper
            className="relative m-8 pointer-events-auto cursor-pointer duration-100 ease-out before:absolute before:z-[-1] before:-inset-1 before:rounded-md
        before:bg-thematic-gradient before:transition-transform before:duration-700 before:ease-overshoot before:content-[''] after:absolute
                 after:-inset-0 after:z-[-2] after:bg-thematic-gradient after:blur-lg after:content-[''] hover:before:rotate-90 !h-72 !w-56 hover:before:scale-x-card-hover-x
        hover:before:scale-y-card-hover-y active:bg-card-overlay-active
        lg:!h-56 lg:!w-40 sm:my-8 sm:mx-4"
            onClick={props.onClick !== undefined ? props.onClick : undefined}
        >
            <div className="avatar opacity-40 duration-200 group-hover:opacity-100 ">
                <div className="mask mask-squircle w-40 m-4">
                    <Image
                        className="object-cover duration-100 ease-out"
                        src={props.imageUrl}
                        alt="Profile Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>

            <div className="flex flex-row justify-center">
                <h2 className="h-8 text-xl lg:text-lg text-gray-100 opacity-40 group-hover:opacity-100 line-clamp-1">
                    {props.title}
                </h2>
            </div>

            {children}
        </ThemedWrapper>
    );
}
