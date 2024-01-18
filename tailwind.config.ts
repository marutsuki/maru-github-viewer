import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "card-gradient": "linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% )",
            },
            colors: {
                "card-overlay": "rgba(0, 0, 0, 0.80)"
            },
            transitionTimingFunction: {

                "overshoot": "cubic-bezier(0.175, 0.885, 0.32, 1.333);"
            },
            scale: {
                "card-hover-x": "1.2666",
                "card-hover-y": "0.7895"
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["dark", "corporate"]
    }
};
export default config;
