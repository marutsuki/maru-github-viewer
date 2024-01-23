import Image from "next/image";

interface ProfileCardProps {
    onClick?: () => void;
    title: string;
    imageUrl: string;
    description: string;
    children?: React.ReactNode;
}
export default function ProfileCard({ children, ...props } : ProfileCardProps) {
    return <div className="group relative card w-56 h-72 m-8 rounded-lg cursor-pointer p-4 flex-column box-border bg-card-overlay
        before:left-[-0.5rem] before:top-[-0.5rem] before:w-[15rem] before:h-[19rem] before:content-[''] before:absolute before:rounded-md before:bg-thematic-gradient before:z-[-1]
        before:transition-transform before:ease-overshoot hover:before:rotate-90 before:duration-700 hover:before:scale-x-card-hover-x hover:before:scale-y-card-hover-y
        after:content-[''] after:absolute after:bg-thematic-gradient after:blur-lg after:-inset-0 after:right-0 after:z-[-2]
        active:bg-card-overlay-active hover:
        duration-100 ease-out"
    onClick={props.onClick !== undefined ? props.onClick : undefined}>
        <div className="avatar opacity-40 group-hover:opacity-100 duration-200 ">
            <div className="w-24 mask mask-squircle">
                <Image className="h-32 w-32 object-cover duration-100 ease-out" src={props.imageUrl} alt="Profile Image" width={300} height={300} />
            </div>
        </div>

        <div className="absolute top-36 flex-column">
            <h2 className="card-title opacity-40 group-hover:opacity-100 text-gray-100 h-8">{props.title}</h2>
            <p className="opacity-0 text-gray-200 duration-100 ease-out group-hover:opacity-100 line-clamp-3">{props.description}</p>
        </div>

        { children }

    </div>;
}