"use client";

import { GitHubLogo, LinkedIn } from "@/components/common/symbols";

export default function Footer() {
    const openInNewTab = (url: string) => {
        window.open(url, "_blank");
    };
    return (
        <footer className="footer relative bottom-0 bg-neutral px-10 py-4 text-neutral-content">
            <aside className="p-2">
                <p>
                    Made with Next.js.
                    <br />
                    By marutsuki
                </p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <span
                        onClick={() =>
                            openInNewTab("https://github.com/marutsuki")
                        }
                    >
                        <GitHubLogo className="cursor-pointer fill-white" />
                    </span>
                    <span
                        onClick={() =>
                            openInNewTab(
                                "https://www.linkedin.com/in/lucienlu7789",
                            )
                        }
                    >
                        <LinkedIn className="cursor-pointer fill-white" />
                    </span>
                </div>
            </nav>
        </footer>
    );
}
