export function getGithubApiSecret(): string {
    if (process.env.GITHUB_APP_TOKEN === undefined) {
        throw new Error("Failed to get Github API token");
    }
    return process.env.GITHUB_APP_TOKEN;
}

export function getGithubApiEndpoint(): string {
    return "https://api.github.com";
}

export function getGithubApiRequestDefaultHeaders(): Record<string, string> {
    return {
        "X-GitHub-Api-Version": "2022-11-28"
    };
}