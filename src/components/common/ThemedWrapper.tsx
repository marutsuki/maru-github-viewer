export type ThemedWrapperProps = {
    children?: React.ReactNode;
} & JSX.IntrinsicAttributes;

export default function ThemedWrapper({ children, ...props }: ThemedWrapperProps) {
    return <div className="group relative card w-96 max-w-full h-min m-8 rounded-lg p-4 flex-column box-border bg-card-overlay text-text-faded
    before:absolute before:-inset-1 before:content-[''] before:absolute before:rounded-md before:bg-thematic-gradient before:z-[-1]
    after:content-[''] after:absolute after:bg-thematic-gradient after:blur-lg after-inset-0 after:z-[-2]
    hover:text-text-active
    duration-100 ease-out" { ...props }>
        { children }
    </div>;
}