export default function Footer() {
    return <footer className="footer relative bottom-0 px-10 py-4 bg-neutral text-neutral-content">
        <aside className="p-2">
            <p>Made with Next.js.<br/>By marutsuki</p>
        </aside>
        <nav>
            <header className="footer-title">Social</header>
            <div className="grid grid-flow-col gap-4">
                <a href="https://github.com/marutsuki"></a>
                <a href="https://www.linkedin.com/in/lucienlu7789"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
        </nav>
    </footer>;
}