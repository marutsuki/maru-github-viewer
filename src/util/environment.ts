export function getGithubApiToken(): string {
    if (process.env.GITHUB_API_TOKEN === undefined) {
        throw new Error("Failed to get Github API token");
    }
    return process.env.GITHUB_API_TOKEN;
}

export function getGithubRawEndpoint(): string {
    return "https://raw.githubusercontent.com/";
}

export function getGithubApiEndpoint(): string {
    return "https://api.github.com";
}

export function getGithubApiRequestDefaultHeaders(): Record<string, string> {
    try {
        const apiToken = getGithubApiToken();
        return {
            Authorization: `Bearer ${apiToken}`,
            "X-GitHub-Api-Version": "2022-11-28",
        };
    } catch (e: unknown) {
        return {
            "X-GitHub-Api-Version": "2022-11-28",
        };
    }
}

export function getTwitterUrl(): string {
    return "https://twitter.com";
}
