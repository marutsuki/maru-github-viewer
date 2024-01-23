import type { Config } from "tailwindcss";
import TailwindScrollbarPlugin from "tailwind-scrollbar";
const THEMATIC_GRADIENT = "linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% )";
const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./stories/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "thematic-gradient": THEMATIC_GRADIENT,
            },
            colors: {
                "card-overlay": "rgba(0, 0, 0, 0.80)",
                "card-overlay-active": "rgba(255, 255, 255, 0.20)",
                "theme-primary": "rgb(140, 154, 255)",
                "theme-faded": "rgb(110, 110, 235)",
                "theme-accent": "rgb(200, 200, 255)",
                "theme-active": "rgb(225, 186, 255)",
                "text-faded": "rgba(255, 255, 255, 0.4)",
                "text-active": "rgb(200, 200, 200)"
            },
            transitionTimingFunction: {

                "overshoot": "cubic-bezier(0.175, 0.885, 0.32, 1.333);"
            },
            scale: {
                "card-hover-x": "1.2666",
                "card-hover-y": "0.7895"
            },
            borderColor: {
                "thematic-gradient": THEMATIC_GRADIENT,
            }
        },
    },
    plugins: [require("daisyui"), TailwindScrollbarPlugin({ nocompatible: true })],
    daisyui: {
        themes: ["light", "corporate", "dracula"]
    }
};
export default config;
