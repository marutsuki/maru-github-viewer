import GitHubSearch from "./search/GitHubSearch";

export default function Header() {
    return (
        <header className="w-100% bg-neutral">
            <aside></aside>
            <GitHubSearch />
        </header>
    );
}
