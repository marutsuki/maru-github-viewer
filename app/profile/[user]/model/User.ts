export interface User {
    username: string;
    email: string;
    company: string;
    avatarUrl: string;
}

export function parseUser(json: Record<string, string>): User {
    if (json.login === undefined) {
        throw new Error("User could not be found :((");
    }
    return {
        username: json.login,
        email: json.email,
        company: json.company,
        avatarUrl: json.avatar_url
    };
}