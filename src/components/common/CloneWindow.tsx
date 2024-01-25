
import { copyText } from "@/util/copy";
import React, { useEffect, useRef, useState } from "react";
import { Copy } from "./symbols";

enum CloneMethod {
    SSH,
    HTTP
}

export type CloneWindowProps = {
    sshUrl: string;
    httpUrl: string;
    onExit: () => void;
};

export default function CloneWindow({ sshUrl, httpUrl, onExit }: CloneWindowProps): React.ReactNode {
    const [cloneMethod, setCloneMethod] = useState<CloneMethod>(CloneMethod.HTTP);
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

    return <div className="absolute w-60 -right-4 p-4 rounded-md bg-white z-[3] text-gray-700" ref={activeCloneWindow}>
        <h3>Clone</h3>
        <hr/>
        <div>
            {
                Object.keys(CloneMethod).filter(method => isNaN(parseInt(method))).map(method =>
                    <button
                        className={cloneMethod === CloneMethod[method] ? "w-12 after:block after:content-[''] after:bg-pink-400 after:px-1 after:w-full after:h-1" : "w-12"}
                        key={method}
                        onClick={() => setCloneMethod(CloneMethod[method])}>
                        {method}
                    </button>)
            }
        </div>
        <div className="w-full flex flex-row justify-between">
            <input ref={cloneUrlRef} className="w-40 border rounded-md" value={cloneMethod === CloneMethod.HTTP ? httpUrl : sshUrl} readOnly={true}/>
            <span onClick={() => cloneUrlRef.current !== null && copyText(cloneUrlRef.current.value) }>
                <Copy className="cursor-pointer fill-theme-faded duration-200 active:fill-theme-active"/>
            </span>
        </div>
    </div>;
}