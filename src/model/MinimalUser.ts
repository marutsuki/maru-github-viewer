export default interface MinimalUser {
    username: string;
    avatarUrl: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseMinimalUser(json: any): MinimalUser {
    if (json.login === undefined) {
        throw new Error("User could not be found :((");
    }
    return {
        username: json.login,
        avatarUrl: json.avatar_url,
    };
}
