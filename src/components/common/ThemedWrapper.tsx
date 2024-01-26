export type ThemedWrapperProps = {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
} & JSX.IntrinsicAttributes;

export default function ThemedWrapper({
    children,
    className,
    ...props
}: ThemedWrapperProps) {
    return (
        <div
            className={`flex-column after-inset-0 group card relative box-border w-96 max-w-full rounded-lg bg-card-overlay p-4
        text-text-faded duration-100 ease-out before:absolute before:absolute before:-inset-1 before:z-[-1]
        before:rounded-md before:bg-thematic-gradient before:content-[''] after:absolute after:z-[-2] after:bg-thematic-gradient
        after:blur-lg
        after:content-[''] hover:text-text-active ${className === undefined ? "" : className}`}
            {...props}
        >
            {children}
        </div>
    );
}
