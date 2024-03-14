import { useEffect, useRef, useState } from "react";

type AnimationWrapperProps = {
    show: boolean;
    children: React.ReactNode;
    onShowAnimation?: Keyframe[];
    onHideAnimation?: Keyframe[];
    options?: object;
    className?: string;
};

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
    show,
    children,
    onShowAnimation,
    onHideAnimation,
    options = { duration: 100, fill: "forwards" },
    className = ""
}) => {
    const childRef = useRef<HTMLSpanElement>(null);
    const [hidden, setHidden] = useState(!show);
    useEffect(() => {
        let anim: Animation;
        const controller = new AbortController();
        const el = () => {
            setHidden(true);
        };
        if (childRef.current === null) {
            return;
        }

        if (show) {
            if (onShowAnimation) {
                childRef.current.animate(onShowAnimation, options);
            }
            setHidden(false);
            controller.abort();
        } else if (!show) {
            if (onHideAnimation) {
                anim = childRef.current.animate(onHideAnimation, options);
                anim.addEventListener("finish", el, { signal: controller.signal });
            } else {
                setHidden(true);
            }
        }
        return () => anim?.removeEventListener("finish", el);
    }, [show]);
    console.log(show, hidden);
    return (
        <span className={ "absolute ".concat(className) } ref={childRef}>
            {!hidden && children}
        </span>
    );
};

export default AnimationWrapper;
