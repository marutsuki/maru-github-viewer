import { useState } from "react";
import AnimationWrapper from "../common/AnimationWrapper";
import ThemedWrapper from "../common/ThemedWrapper";
import { Git } from "../common/symbols";
import CloneWindow from "../common/CloneWindow";

export type RepositoryCardProps = {
    name: string;
    description: string;
    htmlUrl: string;
    httpUrl: string;
    sshUrl: string;
} & JSX.IntrinsicAttributes;

export default function RepositoryCard({ name, description, htmlUrl, httpUrl, sshUrl, ...props }: RepositoryCardProps) {
    const [active, setActive] = useState(false);

    const openHtmlUrlInNewTab = () => {
        window.open(htmlUrl, "_blank");
    };
    return <ThemedWrapper className="mx-8 my-4"{...props} >
        <div className="relative w-72">
            <div className="flex flex-row justify-between">

                <h2 className="text-xl"> { name } </h2>

                <span onClick={() => setActive(true)}>
                    <Git className="fill-theme-primary cursor-pointer hover:fill-theme-accent active:fill-white duration-200"/>
                    <AnimationWrapper show={active}
                        onShowAnimation={[
                            {
                                opacity: "0%",
                            }, {
                                opacity: "100%"
                            }
                        ]}
                        onHideAnimation={[
                            {
                                opacity: "100%",
                            }, {
                                opacity: "0%"
                            }
                        ]}>
                        <CloneWindow
                            httpUrl={httpUrl}
                            sshUrl={sshUrl}
                            onExit={() => setActive(false)}
                        />
                    </AnimationWrapper></span>

            </div>
            <div className="block h-[4.5rem]">
                <p className="line-clamp-3"> { description === null ? "No description..." : description } </p>
            </div>
            <button className="my-4 border rounded-md duration-100 w-full
                active:bg-theme-active active:text-black" onClick={openHtmlUrlInNewTab}>To GitHub</button>
        </div>
    </ThemedWrapper>;
}