export interface User {
    username: string;
    email: string;
    company: string;
}

export function parseUser(json: Record<string, string>): User | null {
    if (json.login === undefined) {
        return null;
    }
    return {
        username: json.login,
        email: json.email,
        company: json.company
    };
}