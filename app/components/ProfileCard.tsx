import Image from "next/image";

interface ProfileCardProps {
    onClick?: () => void;
    title: string;
    imageUrl: string;
    description: string;
}
export default function ProfileCard(props: ProfileCardProps) {
    return <div className="group relative card w-56 h-72 m-8 rounded-lg cursor-pointer p-2
        bg-card-overlay
        before:left-[-0.5rem] before:top-[-0.5rem] before:w-[15rem] before:h-[19rem] before:content-[''] before:absolute before:rounded-md before:bg-card-gradient before:z-[-1]
        before:transition-transform before:ease-overshoot hover:before:rotate-90 before:duration-700 hover:before:scale-x-card-hover-x hover:before:scale-y-card-hover-y
        after:content-[''] after:absolute after:bg-card-gradient after:blur-lg after:-inset-0 after:right-0 after:z-[-2]"
    onClick={props.onClick !== undefined ? props.onClick : undefined}>
        <Image className="h-32 w-32 object-cover duration-100 ease-out" src={props.imageUrl} alt="Profile Image" width={300} height={300} />
        <div className="absolute top-36">
            <h2 className="card-title text-gray-100">{props.title}</h2>
            <p className="opacity-0 text-gray-200 duration-100 ease-out group-hover:opacity-100">{props.description}</p>
        </div>
    </div>;
}