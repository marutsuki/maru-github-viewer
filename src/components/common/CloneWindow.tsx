import { Copy } from "@/components/common/symbols";
import { copyText } from "@/util/copy";
import React, { useEffect, useRef, useState } from "react";

export type CloneWindowProps = {
    cloneUrls: Record<CloneMethod, string>;
    onExit: () => void;
};

export default function CloneWindow({
    cloneUrls,
    onExit,
}: CloneWindowProps): React.ReactNode {
    const [cloneMethod, setCloneMethod] = useState<CloneMethod>(
        CloneMethod.HTTP,
    );
    const cloneUrlRef = useRef<HTMLInputElement>(null);
    const activeCloneWindow = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const clickEL = (e: Event): void => {
            if (activeCloneWindow.current === null) {
                return;
            }
            if (!activeCloneWindow.current.contains(e.target as Node)) {
                onExit();
            }
        };
        window.addEventListener("click", clickEL);

        return () => {
            window.removeEventListener("click", clickEL);
        };
    }, []);

    return (
        <div
            className="absolute -right-4 z-[3] w-60 rounded-md bg-white p-4 text-gray-700"
            ref={activeCloneWindow}
        >
            <h3>Clone</h3>
            <hr />
            <div>
                {Object.keys(CloneMethod)
                    .filter((method) => isNaN(parseInt(method)))
                    .map((method) => (
                        <button
                            className={
                                cloneMethod ===
                                CloneMethod[method as keyof typeof CloneMethod]
                                    ? "w-12 after:block after:h-1 after:w-full after:bg-pink-400 after:px-1 after:content-['']"
                                    : "w-12"
                            }
                            key={method}
                            onClick={() =>
                                setCloneMethod(
                                    CloneMethod[
                                        method as keyof typeof CloneMethod
                                    ],
                                )
                            }
                        >
                            {method}
                        </button>
                    ))}
            </div>
            <div className="flex w-full flex-row justify-between">
                <input
                    ref={cloneUrlRef}
                    className="w-40 rounded-md border"
                    value={
                        cloneUrls[cloneMethod] === undefined
                            ? ""
                            : cloneUrls[cloneMethod]
                    }
                    readOnly={true}
                />
                <span
                    onClick={() =>
                        cloneUrlRef.current !== null &&
                        copyText(cloneUrlRef.current.value)
                    }
                >
                    <Copy className="cursor-pointer fill-theme-faded duration-200 active:fill-theme-active" />
                </span>
            </div>
        </div>
    );
}
