/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/u/**",
            },
        ],
    },
    basePath: "/maru-github-viewer",

    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
