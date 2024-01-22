export interface MinimalUser {
    username: string;
    avatarUrl: string;
    bio: string;
}

export function parseMinimalUser(json: Record<string, string>): MinimalUser {
    if (json.login === undefined) {
        throw new Error("User could not be found :((");
    }
    return {
        username: json.login,
        avatarUrl: json.avatar_url,
        bio: json.bio,
    };
}