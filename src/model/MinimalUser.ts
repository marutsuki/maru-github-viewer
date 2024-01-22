export interface MinimalUser {
    username: string;
    avatarUrl: string;
    bio: string | null;
}

export function parseMinimalUser(json: Record<string, string>): MinimalUser {
    if (json.login === undefined) {
        throw new Error("User could not be found :((");
    }
    return {
        username: json.login,
        avatarUrl: json.avatar_url,
        bio: json.bio === undefined || json.bio.length === 0 ? null : json.bio,
    };
}