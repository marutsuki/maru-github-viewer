import AnimationWrapper from "@/components/common/AnimationWrapper";
import CloneWindow from "@/components/common/CloneWindow";
import ThemedWrapper from "@/components/common/ThemedWrapper";
import { Git } from "@/components/common/symbols";
import { CloneMethod } from "@/model/Repository";
import { useState } from "react";

export type RepositoryCardProps = {
    name: string;
    description: string;
    htmlUrl: string;
    cloneUrls: Record<CloneMethod, string>;
} & JSX.IntrinsicAttributes;

export default function RepositoryCard({
    name,
    description,
    htmlUrl,
    cloneUrls,
    ...props
}: RepositoryCardProps) {
    const [active, setActive] = useState(false);

    const openHtmlUrlInNewTab = () => {
        window.open(htmlUrl, "_blank");
    };
    return (
        <ThemedWrapper className="mx-8 my-4 sm:w-60" {...props}>
            <div className="relative w-72 h-full sm:w-auto flex flex-col justify-between">
                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className="text-xl mb-2"> {name} </h2>
                        <div className="block h-[4.5rem]">
                            <p className="line-clamp-3">
                                {" "}
                                {description === null
                                    ? "No description..."
                                    : description}{" "}
                            </p>
                        </div>
                    </div>

                    <span onClick={() => setActive(true)}>
                        <Git className="cursor-pointer fill-theme-primary duration-200 hover:fill-theme-accent active:fill-white" />
                        <AnimationWrapper
                            show={active}
                            onShowAnimation={[
                                {
                                    opacity: "0%",
                                },
                                {
                                    opacity: "100%",
                                },
                            ]}
                            onHideAnimation={[
                                {
                                    opacity: "100%",
                                },
                                {
                                    opacity: "0%",
                                },
                            ]}
                        >
                            <CloneWindow
                                cloneUrls={cloneUrls}
                                onExit={() => setActive(false)}
                            />
                        </AnimationWrapper>
                    </span>
                </div>
                <div className="flex flex-col justify-between h-max">
                    <button
                        className="my-4 w-full rounded-md border duration-100
                    active:bg-theme-active active:text-black"
                        onClick={openHtmlUrlInNewTab}
                    >
                        To GitHub
                    </button>
                </div>
            </div>
        </ThemedWrapper>
    );
}
