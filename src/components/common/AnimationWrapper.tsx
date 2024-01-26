import { useEffect, useRef, useState } from "react";

type AnimationWrapperProps = {
    show: boolean;
    children: React.ReactNode;
    onShowAnimation?: Keyframe[];
    onHideAnimation?: Keyframe[];
    options?: object;
};

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
    show,
    children,
    onShowAnimation,
    onHideAnimation,
    options = { duration: 100, fill: "forwards" },
}) => {
    const childRef = useRef<HTMLSpanElement>(null);
    const [hidden, setHidden] = useState(!show);
    useEffect(() => {
        if (childRef.current === null) {
            return;
        }
        if (show) {
            if (onShowAnimation) {
                childRef.current.animate(onShowAnimation, options);
            }
            setHidden(false);
        } else if (!show) {
            if (onHideAnimation) {
                const anim = childRef.current.animate(onHideAnimation, options);
                anim.onfinish = () => {
                    setHidden(true);
                };
            } else {
                setHidden(true);
            }
        }
    }, [show]);
    return (
        <span className="absolute" ref={childRef}>
            {!hidden && children}
        </span>
    );
};

export default AnimationWrapper;
