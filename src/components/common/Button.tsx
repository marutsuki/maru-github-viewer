export type ButtonProps = {
    text: string;
    onClick: () => void;
};
export default function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            className="group m-2 w-32 h-12 rounded-md relative bg-black/75 
    before:duration-200 before:ease-overshoot before:rounded-md before:absolute before:bg-thematic-gradient before:-inset-0.5 before:content-[''] before:bg-black/75 before:z-[-1]
    after:duration-200 after:absolute after:z-[-2] after:content-[''] after:inset-0 after:bg-thematic-gradient after:hover:blur-md
    hover:before:scale-x-[39.39%] hover:before:scale-y-[253.84%] hover:before:rotate-90"
            onClick={onClick}
        >
            <h2 className="text-md text-white duration-200 group-hover:text-theme-accent group-active:text-theme-active group-active:text-lg">
                {text}
            </h2>
        </button>
    );
}
